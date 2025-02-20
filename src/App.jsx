import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Dashboard from './pages/panel/dashboard/Dashboard';
import Friends from './pages/panel/friends/Friends';
import Settings from './pages/panel/settings/Settings';
import Profile from './pages/panel/profile/Profile';
import Message from './pages/panel/message/Message';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './component/ProtectedRoute';
import ThemeToggle from './component/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') == 'dark' ? true : null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDarkMode(savedTheme === 'dark');
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="/sign-up" element={<Auth />} />
          <Route path="/forgot-pass" element={<Auth />} />
          <Route path="/dashboard"  element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/friends"  element={<ProtectedRoute><Friends /></ProtectedRoute>} />
          <Route path="/settings"  element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/profile"  element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/message"  element={<ProtectedRoute><Message /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
