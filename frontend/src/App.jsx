import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './hooks/useAuth';
import { ProgressProvider } from './hooks/useProgress';

import { ProtectedRoute } from './components/Layout/ProtectedRoute';
import MainLayout from './components/Layout/MainLayout';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import Dashboard from './pages/Dashboard';
import LevelMap from './pages/LevelMap';
import Profile from './pages/Profile';
import Lesson from './pages/Lesson';
import Resources from './pages/Resources';
import CommunityResources from './pages/CommunityResources';
import AdminDashboard from './pages/AdminDashboard';
import GrammarGuide from './pages/GrammarGuide';
import ParagraphGuide from './pages/ParagraphGuide';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Toaster position="top-right" toastOptions={{
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151',
          },
          success: { iconTheme: { primary: '#10b981', secondary: '#1f2937' } }
        }} />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Legal Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Protected App Routes */}
            <Route element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="map" element={<LevelMap />} />
              <Route path="lesson/:id" element={<Lesson />} />
              <Route path="profile" element={<Profile />} />
              <Route path="gramatica" element={<GrammarGuide />} />
              <Route path="parrafos" element={<ParagraphGuide />} />
              <Route path="recursos" element={<Resources />} />
              <Route path="recursos-comunidad" element={<CommunityResources />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
