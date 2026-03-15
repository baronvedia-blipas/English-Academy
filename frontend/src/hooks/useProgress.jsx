import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '../lib/supabase';

const ProgressContext = createContext({});

export const ProgressProvider = ({ children }) => {
    const { user, profile } = useAuth();
    const [completedLessons, setCompletedLessons] = useState([]);
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);

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
        }
    }, [profile]);

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

    return (
        <ProgressContext.Provider value={{
            completedLessons,
            score,
            streak,
            markLessonCompleted,
            isLessonCompleted,
            calculateCategoryProgress
        }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => {
    return useContext(ProgressContext);
};
