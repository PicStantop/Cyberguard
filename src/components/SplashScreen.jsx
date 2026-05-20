import React, { useState, useEffect } from 'react'
import Amara from './characters/Amara'
import MrObi from './characters/MrObi'

export default function SplashScreen({ onStart, profile }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 20px',
      background: 'linear-gradient(160deg, #0f172a 0%, #1a0a3d 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(29,158,117,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div style={{ position:'absolute', top:'10%', left:'5%', width:180, height:180, borderRadius:'50%', background:'radial-gradient(circle, rgba(83,74,183,0.25) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'15%', right:'5%', width:220, height:220, borderRadius:'50%', background:'radial-gradient(circle, rgba(29,158,117,0.2) 0%, transparent 70%)', pointerEvents:'none' }} />

      {/* Shield icon */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.6s ease',
        marginBottom: 8,
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: 20,
          background: 'linear-gradient(135deg, #1D9E75, #0F6E56)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 36, boxShadow: '0 8px 32px rgba(29,158,117,0.4)',
          animation: 'pulse-glow 2s ease infinite',
        }}>🛡️</div>
      </div>

      {/* Title */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease 0.1s',
        textAlign: 'center',
        marginBottom: 4,
      }}>
        <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.5, color: '#fff', lineHeight: 1.1 }}>
          CyberGuard
        </div>
        <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: -0.5, color: '#1D9E75', lineHeight: 1.1 }}>
          Academy
        </div>
        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 8, fontWeight: 600 }}>
          Digital Technology · SS1 · Cybersecurity
        </div>
        {profile && (
          <div style={{ marginTop: 8, fontSize: 13, color: '#1D9E75', fontWeight: 800 }}>
            Welcome back, {profile.full_name.split(' ')[0]}! 👋
          </div>
        )}
      </div>

      {/* Characters */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        gap: 8, margin: '18px 0 12px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s ease 0.2s',
      }}>
        <div style={{ animation: 'bounce 2.5s ease infinite', animationDelay: '0.3s' }}>
          <Amara size={110} expression="happy" />
        </div>
        <div style={{ animation: 'bounce 2.5s ease infinite', animationDelay: '0s' }}>
          <MrObi size={120} expression="happy" />
        </div>
      </div>

      {/* Intro card */}
      <div style={{
        background: 'rgba(30,41,59,0.8)',
        border: '1px solid rgba(148,163,184,0.15)',
        borderRadius: 18, padding: '16px 20px',
        maxWidth: 380, width: '100%',
        backdropFilter: 'blur(12px)',
        marginBottom: 20,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease 0.35s',
      }}>
        <p style={{ fontSize: 13.5, lineHeight: 1.7, color: '#cbd5e1', textAlign: 'center' }}>
          Join <strong style={{ color: '#fff' }}>Amara</strong> and <strong style={{ color: '#fff' }}>Mr. Obi</strong> as they guide you through <strong style={{ color: '#1D9E75' }}>6 real-life scenarios</strong> about staying safe online. Make the right choices and earn your Cyber Badge! 🏅
        </p>

        <div style={{ display: 'flex', gap: 8, marginTop: 14, justifyContent: 'center' }}>
          {[
            { icon: '🎯', label: '6 Scenarios' },
            { icon: '📱', label: 'Mobile Ready' },
            { icon: '🏆', label: 'Earn Badges' },
          ].map(item => (
            <div key={item.label} style={{
              flex: 1, background: 'rgba(15,23,42,0.6)', borderRadius: 10,
              padding: '8px 4px', textAlign: 'center',
              border: '1px solid rgba(148,163,184,0.1)',
            }}>
              <div style={{ fontSize: 18 }}>{item.icon}</div>
              <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 3, fontWeight: 700 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Start button */}
      <button
        onClick={onStart}
        style={{
          background: 'linear-gradient(135deg, #1D9E75, #0F6E56)',
          color: '#fff', border: 'none', borderRadius: 16,
          padding: '16px 48px', fontSize: 17, fontWeight: 800,
          letterSpacing: 0.3, width: '100%', maxWidth: 380,
          boxShadow: '0 8px 24px rgba(29,158,117,0.4)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.45s, transform 0.1s',
        }}
      >
        Start Game 🚀
      </button>

      <div style={{ fontSize: 11, color: '#475569', marginTop: 14, textAlign: 'center', opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.55s' }}>
        Created for SS1 Digital Technology students
      </div>
    </div>
  )
}
