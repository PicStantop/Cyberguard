import React from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import AuthScreen from './components/AuthScreen'
import TeacherDashboard from './components/TeacherDashboard'
import StudentGame from './components/StudentGame'

function AppRoutes() {
  const { user, profile, loading } = useAuth()

  if (loading) {
    return (
      <div style={{
        minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0f172a', flexDirection: 'column', gap: 16,
      }}>
        <div style={{ fontSize: 40 }}>🛡️</div>
        <div style={{ fontSize: 14, color: '#64748b', fontWeight: 700, fontFamily: 'Nunito, sans-serif' }}>
          Loading CyberGuard Academy…
        </div>
      </div>
    )
  }

  if (!user) return <AuthScreen />
  if (profile?.role === 'teacher') return <TeacherDashboard />
  return <StudentGame />
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
