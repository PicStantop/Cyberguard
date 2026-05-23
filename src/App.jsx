import React, { useEffect, useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import AuthScreen from './components/AuthScreen'
import TeacherDashboard from './components/TeacherDashboard'
import StudentGame from './components/StudentGame'
import { supabase } from './lib/supabase'

function AppRoutes() {
  const { user, profile, loading, signOut, fetchProfile } = useAuth()
  const [timedOut, setTimedOut] = useState(false)
  const [retrying, setRetrying] = useState(false)

  // If profile hasn't loaded in 5 seconds, show helpful options
  useEffect(() => {
    if (!user || profile) { setTimedOut(false); return }
    const t = setTimeout(() => setTimedOut(true), 5000)
    return () => clearTimeout(t)
  }, [user, profile])

  async function handleRetry() {
    setRetrying(true)
    setTimedOut(false)
    await fetchProfile(user.id)
    setRetrying(false)
    // If profile STILL null after retry, it likely doesn't exist — create it
  }

  async function handleForceCreate() {
    // This handles the case where signUp succeeded in auth but the profile INSERT failed
    // (most commonly caused by email confirmation being enabled)
    setRetrying(true)
    try {
      const { data: existing } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', user.id)
        .single()

      if (!existing) {
        // Profile row missing — create it with what we have
        const meta = user.user_metadata || {}
        await supabase.from('profiles').insert({
          id:        user.id,
          full_name: meta.full_name || 'Student',
          username:  meta.username  || user.email?.split('@')[0] || 'student',
          role:      'student',
        })
      }
      await fetchProfile(user.id)
    } catch (err) {
      console.error('Force create failed:', err)
    } finally {
      setRetrying(false)
    }
  }

  if (loading) return <Spinner message="Loading CyberGuard Academy…" />

  if (!user) return <AuthScreen />

  if (!profile) {
    if (timedOut) {
      return (
        <div style={{
          minHeight: '100dvh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#0f172a',
          flexDirection: 'column', gap: 16, padding: '0 24px',
          fontFamily: 'Nunito, sans-serif',
        }}>
          <div style={{ fontSize: 36 }}>⚠️</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#f1f5f9', textAlign: 'center' }}>
            Profile not loading
          </div>
          <div style={{ fontSize: 13, color: '#64748b', textAlign: 'center', lineHeight: 1.7, maxWidth: 320 }}>
            This usually means <strong style={{ color: '#fcd34d' }}>email confirmation is ON</strong> in Supabase.
            Go to:<br />
            <span style={{ color: '#a5b4fc' }}>Authentication → Providers → Email → turn off "Confirm email"</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 300, marginTop: 8 }}>
            <button onClick={retrying ? null : handleRetry} style={{
              padding: '12px', borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg,#1D9E75,#0F6E56)',
              color: '#fff', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: retrying ? 'not-allowed' : 'pointer',
              opacity: retrying ? 0.6 : 1,
            }}>
              {retrying ? 'Trying…' : '🔄 Retry Loading Profile'}
            </button>

            <button onClick={retrying ? null : handleForceCreate} style={{
              padding: '12px', borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg,#534AB7,#3C3489)',
              color: '#fff', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: retrying ? 'not-allowed' : 'pointer',
              opacity: retrying ? 0.6 : 1,
            }}>
              {retrying ? 'Trying…' : '✅ Fix & Continue'}
            </button>

            <button onClick={signOut} style={{
              padding: '12px', borderRadius: 12,
              background: 'transparent',
              border: '1px solid rgba(226,75,74,0.4)',
              color: '#FCA5A5', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: 'pointer',
            }}>
              Sign Out & Try Again
            </button>
          </div>
        </div>
      )
    }
    return <Spinner message="Loading your profile…" sub="This should take just a moment." />
  }

  if (profile.role === 'teacher') return <TeacherDashboard />
  return <StudentGame />
}

function Spinner({ message, sub }) {
  return (
    <div style={{
      minHeight: '100dvh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#0f172a',
      flexDirection: 'column', gap: 12, fontFamily: 'Nunito, sans-serif',
    }}>
      <div style={{ fontSize: 40 }}>🛡️</div>
      <div style={{ fontSize: 14, color: '#94a3b8', fontWeight: 700 }}>{message}</div>
      {sub && <div style={{ fontSize: 12, color: '#475569', fontWeight: 600 }}>{sub}</div>}
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
