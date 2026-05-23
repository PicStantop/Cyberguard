import React from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import AuthScreen from './components/AuthScreen'
import TeacherDashboard from './components/TeacherDashboard'
import StudentGame from './components/StudentGame'

function AppRoutes() {
  const { user, profile, loading } = useAuth()

  // Still loading session or profile
  if (loading) {
    return (
      <div style={{
        minHeight: '100dvh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#0f172a',
        flexDirection: 'column', gap: 16,
      }}>
        <div style={{ fontSize: 40 }}>🛡️</div>
        <div style={{ fontSize: 14, color: '#64748b', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}>
          Loading CyberGuard Academy…
        </div>
      </div>
    )
  }

  // Not logged in
  if (!user) return <AuthScreen />

  // Logged in but profile hasn't loaded yet — show spinner rather than wrong screen
  if (!profile) {
    return (
      <div style={{
        minHeight: '100dvh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', background: '#0f172a',
        flexDirection: 'column', gap: 16,
      }}>
        <div style={{ fontSize: 40 }}>🛡️</div>
        <div style={{ fontSize: 14, color: '#64748b', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}>
          Loading your profile…
        </div>
        <div style={{ fontSize: 12, color: '#475569', fontFamily: 'Nunito, sans-serif' }}>
          If this takes too long, try refreshing the page.
        </div>
      </div>
    )
  }

  // Route by role
  if (profile.role === 'teacher') return <TeacherDashboard />
  return <StudentGame />
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
