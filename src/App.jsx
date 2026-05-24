import React, { useEffect, useState } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import AuthScreen from './components/AuthScreen'
import TeacherDashboard from './components/TeacherDashboard'
import StudentGame from './components/StudentGame'
import { supabase } from './lib/supabase'

function AppRoutes() {
  const { user, profile, loading, profileError, signOut, fetchProfile } = useAuth()
  const [timedOut, setTimedOut] = useState(false)
  const [retrying, setRetrying] = useState(false)

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
  }

  async function handleForceCreate() {
    setRetrying(true)
    try {
      const meta = user.user_metadata || {}
      await supabase.from('profiles').upsert({
        id:        user.id,
        full_name: meta.full_name || 'Student',
        username:  meta.username  || user.email?.split('@')[0] || 'student',
        role:      'student',
      })
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
    // Show real error immediately if we have one, otherwise wait for timeout
    const showProblem = timedOut || profileError

    if (showProblem) {
      return (
        <div style={{
          minHeight: '100dvh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#0f172a',
          flexDirection: 'column', gap: 16, padding: '0 24px',
          fontFamily: 'Nunito, sans-serif',
        }}>
          <div style={{ fontSize: 36 }}>⚠️</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#f1f5f9', textAlign: 'center' }}>
            Could not load your profile
          </div>

          {/* Show the real error message */}
          {profileError && (
            <div style={{
              background: 'rgba(46,10,10,0.8)',
              border: '1px solid rgba(226,75,74,0.3)',
              borderRadius: 10, padding: '10px 16px',
              maxWidth: 360, width: '100%',
            }}>
              <div style={{ fontSize: 11, color: '#f87171', fontWeight: 800, marginBottom: 4 }}>
                Error details:
              </div>
              <div style={{ fontSize: 12, color: '#fca5a5', fontFamily: 'monospace', lineHeight: 1.6 }}>
                {profileError}
              </div>
            </div>
          )}

          <div style={{ fontSize: 13, color: '#64748b', textAlign: 'center', lineHeight: 1.7, maxWidth: 320 }}>
            Most common cause: <strong style={{ color: '#fcd34d' }}>email confirmation is ON</strong> in Supabase.<br/>
            <span style={{ color: '#a5b4fc' }}>
              Authentication → Providers → Email → turn off "Confirm email" → Save
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 300 }}>
            <button onClick={retrying ? null : handleRetry} style={{
              padding: 12, borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg,#1D9E75,#0F6E56)',
              color: '#fff', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: retrying ? 'not-allowed' : 'pointer',
              opacity: retrying ? 0.6 : 1,
            }}>
              {retrying ? 'Please wait…' : '🔄 Retry'}
            </button>

            <button onClick={retrying ? null : handleForceCreate} style={{
              padding: 12, borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg,#534AB7,#3C3489)',
              color: '#fff', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: retrying ? 'not-allowed' : 'pointer',
              opacity: retrying ? 0.6 : 1,
            }}>
              {retrying ? 'Please wait…' : '✅ Fix & Continue'}
            </button>

            <button onClick={signOut} style={{
              padding: 12, borderRadius: 12,
              background: 'transparent',
              border: '1px solid rgba(226,75,74,0.4)',
              color: '#FCA5A5', fontSize: 14, fontWeight: 800,
              fontFamily: 'inherit', cursor: 'pointer',
            }}>
              Sign Out
            </button>
          </div>
        </div>
      )
    }

    return <Spinner message="Loading your profile…" sub="Just a moment…" />
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
