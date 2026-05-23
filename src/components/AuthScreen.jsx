import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Amara from './characters/Amara'
import MrObi from './characters/MrObi'

const INPUT_STYLE = {
  width: '100%',
  background: 'rgba(30,41,59,0.8)',
  border: '1.5px solid rgba(148,163,184,0.2)',
  borderRadius: 12,
  padding: '13px 14px',
  fontSize: 15,
  color: '#f1f5f9',
  fontFamily: 'Nunito, sans-serif',
  outline: 'none',
}

const LABEL_STYLE = {
  fontSize: 12,
  fontWeight: 700,
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: 0.6,
  marginBottom: 6,
  display: 'block',
}

export default function AuthScreen() {
  const [tab, setTab]         = useState('login')   // 'login' | 'register' | 'teacher'
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const { signIn, signUp, signInTeacher } = useAuth()

  // Login fields
  const [loginUser, setLoginUser] = useState('')
  const [loginPw, setLoginPw]     = useState('')

  // Register fields
  const [regName, setRegName] = useState('')
  const [regUser, setRegUser] = useState('')
  const [regPw, setRegPw]     = useState('')
  const [regPw2, setRegPw2]   = useState('')

  // Teacher fields
  const [tEmail, setTEmail] = useState('')
  const [tPw, setTPw]       = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    if (!loginUser || !loginPw) return setError('Please fill in all fields.')
    setLoading(true)
    try {
      await signIn({ username: loginUser, password: loginPw })
    } catch (err) {
      setError('Wrong username or password. Try again.')
    } finally { setLoading(false) }
  }

  async function handleRegister(e) {
    e.preventDefault()
    setError('')
    if (!regName || !regUser || !regPw) return setError('Please fill in all fields.')
    if (regPw !== regPw2) return setError('Passwords do not match.')
    if (regPw.length < 6) return setError('Password must be at least 6 characters.')
    if (regUser.trim().length < 3) return setError('Username must be at least 3 characters.')
    setLoading(true)
    try {
      await signUp({ fullName: regName, username: regUser, password: regPw })
    } catch (err) {
      setError(
        err.message?.includes('already registered')
          ? 'That username is already taken. Please choose another.'
          : err.message || 'Registration failed. Try again.'
      )
    } finally { setLoading(false) }
  }

  async function handleTeacherLogin(e) {
    e.preventDefault()
    setError('')
    if (!tEmail || !tPw) return setError('Please fill in all fields.')
    setLoading(true)
    try {
      await signInTeacher({ email: tEmail, password: tPw })
    } catch (err) {
      setError('Wrong email or password.')
    } finally { setLoading(false) }
  }

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg,#0f172a 0%,#1a0a3d 50%,#0f172a 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '24px 16px 40px',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(29,158,117,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(29,158,117,0.06) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div style={{ width: '100%', maxWidth: 420, position: 'relative' }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{
            width: 60, height: 60, borderRadius: 18, margin: '0 auto 10px',
            background: 'linear-gradient(135deg,#1D9E75,#0F6E56)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, boxShadow: '0 8px 24px rgba(29,158,117,0.4)',
          }}>🛡️</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: -0.5 }}>
            CyberGuard <span style={{ color: '#1D9E75' }}>Academy</span>
          </div>
          <div style={{ fontSize: 12, color: '#64748b', marginTop: 4, fontWeight: 600 }}>
            SS1 Digital Technology · Cybersecurity
          </div>
        </div>

        {/* Characters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ animation: 'bounce 2.5s ease infinite', animationDelay: '0.3s' }}>
            <Amara size={70} expression="happy" />
          </div>
          <div style={{ animation: 'bounce 2.5s ease infinite' }}>
            <MrObi size={76} expression="happy" />
          </div>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', gap: 4,
          background: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(148,163,184,0.1)',
          borderRadius: 14, padding: 4, marginBottom: 20,
        }}>
          {[
            { key: 'login',    label: '🔑 Login' },
            { key: 'register', label: '📝 Register' },
            { key: 'teacher',  label: '👨‍🏫 Teacher' },
          ].map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); setError('') }} style={{
              flex: 1, padding: '9px 4px', borderRadius: 10, border: 'none',
              background: tab === t.key ? 'linear-gradient(135deg,#1D9E75,#0F6E56)' : 'transparent',
              color: tab === t.key ? '#fff' : '#64748b',
              fontSize: 12, fontWeight: 800, fontFamily: 'Nunito, sans-serif',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(22,32,50,0.95)',
          border: '1px solid rgba(148,163,184,0.12)',
          borderRadius: 20, padding: '24px 20px',
          backdropFilter: 'blur(12px)',
        }}>
          {error && (
            <div style={{
              background: 'rgba(46,10,10,0.9)', border: '1px solid rgba(226,75,74,0.4)',
              borderRadius: 10, padding: '10px 14px', marginBottom: 16,
              fontSize: 13, color: '#FCA5A5', fontWeight: 600,
            }}>⚠ {error}</div>
          )}

          {/* ── Student Login ── */}
          {tab === 'login' && (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={LABEL_STYLE}>Username</label>
                <input
                  value={loginUser}
                  onChange={e => setLoginUser(e.target.value)}
                  placeholder="e.g. amara01"
                  style={INPUT_STYLE}
                  autoCapitalize="none"
                  autoCorrect="off"
                />
              </div>
              <div>
                <label style={LABEL_STYLE}>Password</label>
                <input
                  type="password"
                  value={loginPw}
                  onChange={e => setLoginPw(e.target.value)}
                  placeholder="Your password"
                  style={INPUT_STYLE}
                />
              </div>
              <SubmitButton loading={loading} label="Log In 🚀" />
              <p style={{ textAlign: 'center', fontSize: 12, color: '#64748b', marginTop: 4 }}>
                No account?{' '}
                <button type="button" onClick={() => setTab('register')} style={{
                  background: 'none', border: 'none', color: '#1D9E75',
                  fontWeight: 700, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit',
                }}>Register here</button>
              </p>
            </form>
          )}

          {/* ── Register ── */}
          {tab === 'register' && (
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={LABEL_STYLE}>Full Name</label>
                <input
                  value={regName}
                  onChange={e => setRegName(e.target.value)}
                  placeholder="e.g. Amara Okafor"
                  style={INPUT_STYLE}
                />
              </div>
              <div>
                <label style={LABEL_STYLE}>Username</label>
                <input
                  value={regUser}
                  onChange={e => setRegUser(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                  placeholder="e.g. amara01  (letters & numbers only)"
                  style={INPUT_STYLE}
                  autoCapitalize="none"
                  autoCorrect="off"
                />
                <div style={{ fontSize: 11, color: '#475569', marginTop: 5, fontWeight: 600 }}>
                  Only letters, numbers, and underscores. No spaces.
                </div>
              </div>
              <div>
                <label style={LABEL_STYLE}>Password</label>
                <input
                  type="password"
                  value={regPw}
                  onChange={e => setRegPw(e.target.value)}
                  placeholder="Min. 6 characters"
                  style={INPUT_STYLE}
                />
              </div>
              <div>
                <label style={LABEL_STYLE}>Confirm Password</label>
                <input
                  type="password"
                  value={regPw2}
                  onChange={e => setRegPw2(e.target.value)}
                  placeholder="Repeat your password"
                  style={INPUT_STYLE}
                />
              </div>
              <SubmitButton loading={loading} label="Create Account ✅" />
              <p style={{ textAlign: 'center', fontSize: 12, color: '#64748b', marginTop: 4 }}>
                Already registered?{' '}
                <button type="button" onClick={() => setTab('login')} style={{
                  background: 'none', border: 'none', color: '#1D9E75',
                  fontWeight: 700, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit',
                }}>Log in here</button>
              </p>
            </form>
          )}

          {/* ── Teacher Login ── */}
          {tab === 'teacher' && (
            <form onSubmit={handleTeacherLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{
                background: 'rgba(83,74,183,0.12)',
                border: '1px solid rgba(83,74,183,0.2)',
                borderRadius: 10, padding: '10px 14px', marginBottom: 4,
              }}>
                <div style={{ fontSize: 12, color: '#a5b4fc', fontWeight: 700, marginBottom: 3 }}>
                  👨‍🏫 Teacher Portal
                </div>
                <div style={{ fontSize: 11.5, color: '#6366f1' }}>
                  Use the email and password you created via the Supabase setup.
                </div>
              </div>
              <div>
                <label style={LABEL_STYLE}>Email Address</label>
                <input
                  type="email"
                  value={tEmail}
                  onChange={e => setTEmail(e.target.value)}
                  placeholder="teacher@school.edu.ng"
                  style={INPUT_STYLE}
                />
              </div>
              <div>
                <label style={LABEL_STYLE}>Password</label>
                <input
                  type="password"
                  value={tPw}
                  onChange={e => setTPw(e.target.value)}
                  placeholder="Your password"
                  style={INPUT_STYLE}
                />
              </div>
              <SubmitButton loading={loading} label="Access Dashboard 📊" color="#534AB7" />
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function SubmitButton({ loading, label, color = '#1D9E75' }) {
  const darker = color === '#534AB7' ? '#3C3489' : '#0F6E56'
  return (
    <button type="submit" disabled={loading} style={{
      width: '100%', padding: '14px',
      background: loading ? 'rgba(148,163,184,0.2)' : `linear-gradient(135deg,${color},${darker})`,
      border: 'none', borderRadius: 12, fontSize: 15,
      fontWeight: 800, color: loading ? '#64748b' : '#fff',
      fontFamily: 'Nunito, sans-serif', cursor: loading ? 'not-allowed' : 'pointer',
      marginTop: 4,
      boxShadow: loading ? 'none' : `0 6px 20px ${color}55`,
      transition: 'all 0.2s',
    }}>
      {loading ? 'Please wait…' : label}
    </button>
  )
}
