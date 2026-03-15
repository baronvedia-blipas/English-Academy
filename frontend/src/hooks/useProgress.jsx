/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '../lib/supabase';
import { lessonsData } from '../content/lessons';

const ProgressContext = createContext({});

export const ProgressProvider = ({ children }) => {
    const { user, profile } = useAuth();
    const [completedLessons, setCompletedLessons] = useState([]);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [lastDailyChallengeDate, setLastDailyChallengeDate] = useState(null);
    const [weeklyActivity, setWeeklyActivity] = useState([]);

    const generateWeeklyData = (activityMap) => {
        const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        const result = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            const dayName = days[d.getDay()];
            result.push({
                name: dayName,
                xp: activityMap[dateStr] || 0
            });
        }
        return result;
    };

    // Sync state with the fetched profile
    useEffect(() => {
        if (profile) {
            setCompletedLessons(profile.completed_lessons || []);
            setScore(profile.total_score || 0);
            setStreak(profile.streak_days || 0);
        } else {
            // Reset if user logs out
            setCompletedLessons([]);
            setScore(0);
            setStreak(0);
            setLastDailyChallengeDate(null);
        }
    }, [profile]);

    // Load local daily challenge & weekly activity
    useEffect(() => {
        if (user) {
            const savedDate = localStorage.getItem(`daily_challenge_${user.id}`);
            if (savedDate) setLastDailyChallengeDate(savedDate);

            // Weekly Activity Tracking
            const savedActivity = localStorage.getItem(`weekly_activity_v2_${user.id}`);
            let activityMap = {};
            if (savedActivity) {
                activityMap = JSON.parse(savedActivity);
            } else {
                // Mock past data
                const mockMap = {};
                for (let i = 6; i >= 1; i--) {
                    const d = new Date();
                    d.setDate(d.getDate() - i);
                    mockMap[d.toISOString().split('T')[0]] = Math.floor(Math.random() * 50) + 10;
                }
                localStorage.setItem(`weekly_activity_v2_${user.id}`, JSON.stringify(mockMap));
                activityMap = mockMap;
            }
            setWeeklyActivity(generateWeeklyData(activityMap));
        }
    }, [user]);

    const recordDailyActivity = (points) => {
        if (!user) return;
        const today = new Date().toISOString().split('T')[0];
        const savedActivity = localStorage.getItem(`weekly_activity_v2_${user.id}`);
        const activityMap = savedActivity ? JSON.parse(savedActivity) : {};
        
        activityMap[today] = (activityMap[today] || 0) + points;
        localStorage.setItem(`weekly_activity_v2_${user.id}`, JSON.stringify(activityMap));
        setWeeklyActivity(generateWeeklyData(activityMap));
    };

    const markDailyChallengeCompleted = async () => {
        const today = new Date().toISOString().split('T')[0];
        setLastDailyChallengeDate(today);
        if (user) {
            localStorage.setItem(`daily_challenge_${user.id}`, today);
            
            // Add 50 bonus points
            const nextScore = score + 50;
            setScore(nextScore);
            recordDailyActivity(50);
            try {
                await supabase.from('profiles').update({ total_score: nextScore }).eq('id', user.id);
            } catch (err) {
                console.error("Error saving daily score", err);
            }
        }
    };

    const generateDailyChallenge = () => {
        if (!completedLessons || completedLessons.length === 0) return [];
        
        let availableExercises = [];
        Object.values(lessonsData).forEach(group => {
            group.lessons.forEach(lesson => {
                if (completedLessons.includes(lesson.id) && lesson.exercises) {
                    availableExercises = [...availableExercises, ...lesson.exercises];
                }
            });
        });

        if (availableExercises.length === 0) return [];
        // Shuffle and pick 5
        const shuffled = availableExercises.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5);
    };

    const markLessonCompleted = async (lessonId, earnedScore) => {
        if (!user || !profile || completedLessons.includes(lessonId)) return;

        const nextLessons = [...completedLessons, lessonId];
        const nextScore = score + earnedScore;
        // Basic streak logic: if they complete a lesson, ensure they have at least 1 streak day. 
        // More complex daily login checking would go here.
        const nextStreak = streak === 0 ? 1 : streak;

        // Optimistic UI Update
        setCompletedLessons(nextLessons);
        setScore(nextScore);
        setStreak(nextStreak);
        recordDailyActivity(earnedScore);

        // Update Supabase
        try {
            const { error } = await supabase
                .from('profiles')
                .update({
                    completed_lessons: nextLessons,
                    total_score: nextScore,
                    streak_days: nextStreak
                })
                .eq('id', user.id);

            if (error) throw error;
        } catch (error) {
            console.error('Error updating progress in Supabase:', error);
            // In a real app we might revert the optimistic update here on failure
        }
    };

    const isLessonCompleted = (lessonId) => {
        if (profile?.role === 'admin') return true; // Admins see everything as completed for unlocking purposes
        return completedLessons.includes(lessonId);
    };

    // Calculate progress for a specific level (category)
    const calculateCategoryProgress = (lessonsData, categoryId) => {
        const categoryData = Object.values(lessonsData).find(l => l.id === categoryId);
        if (!categoryData || !categoryData.lessons || categoryData.lessons.length === 0) return 0;
        if (profile?.role === 'admin') return 100; // Admin sees 100%

        let completedCount = 0;
        for (const lesson of categoryData.lessons) {
            if (completedLessons.includes(lesson.id)) {
                completedCount++;
            }
        }
        return Math.round((completedCount / categoryData.lessons.length) * 100);
    };

    // Determine the next lesson the user should take
    const getNextLesson = () => {
        for (const group of Object.values(lessonsData)) {
            for (const lesson of group.lessons) {
                if (!completedLessons.includes(lesson.id)) {
                    return { ...lesson, groupTitle: group.title };
                }
            }
        }
        return null; // All lessons completed!
    };

    return (
        <ProgressContext.Provider value={{
            completedLessons,
            score,
            streak,
            markLessonCompleted,
            isLessonCompleted,
            calculateCategoryProgress,
            getNextLesson,
            lastDailyChallengeDate,
            markDailyChallengeCompleted,
            generateDailyChallenge,
            weeklyActivity
        }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => {
    return useContext(ProgressContext);
};
