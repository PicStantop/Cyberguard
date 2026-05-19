import React, { useEffect, useState } from 'react'
import Amara from './characters/Amara'
import MrObi from './characters/MrObi'
import { scenarios } from '../data/scenarios'

function getRank(score, total) {
  const pct = (score / total) * 100
  if (pct === 100) return { trophy: '🏆', title: 'Cyber Champion!', color: '#FAC775', msg: "Perfect score! You're a true digital safety expert. Your classmates are lucky to have you — share what you learned!" }
  if (pct >= 80)  return { trophy: '🥇', title: 'Cyber Expert!',    color: '#1D9E75', msg: "Outstanding! You have excellent cybersecurity awareness. Review the ones you missed and you'll be unstoppable." }
  if (pct >= 60)  return { trophy: '🥈', title: 'Cyber Defender!',  color: '#534AB7', msg: "Great effort! You know the basics. Revisit the tips from each scenario you missed — they could protect you and your family." }
  if (pct >= 40)  return { trophy: '🥉', title: 'Cyber Learner!',   color: '#BA7517', msg: "Good start! Cybersecurity takes practice. Play again, read Mr. Obi's tips carefully, and you'll improve fast." }
  return           { trophy: '📚', title: 'Keep Learning!',          color: '#E24B4A', msg: "Don't give up! Every cybersecurity expert started from scratch. Read the tips, play again, and you'll level up!" }
}

export default function ResultsScreen({ answers, onReplay }) {
  const [visible, setVisible] = useState(false)
  const total = scenarios.length
  const score = answers.filter(a => a.correct).length
  const rank = getRank(score, total)
  const pct = Math.round((score / total) * 100)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg, #0f172a 0%, #1a0a3d 50%, #0f172a 100%)',
      padding: '32px 16px',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.5s ease',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(29,158,117,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,158,117,0.05) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div style={{ maxWidth: 460, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{
            fontSize: 56, marginBottom: 8,
            animation: 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
          }}>
            {rank.trophy}
          </div>
          <div style={{ fontSize: 26, fontWeight: 900, color: rank.color, marginBottom: 4, letterSpacing: -0.5 }}>
            {rank.title}
          </div>
          <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>
            CyberGuard Academy · Cybersecurity Module
          </div>
        </div>

        {/* Score circle card */}
        <div style={{
          background: 'rgba(30,41,59,0.8)',
          border: '1px solid rgba(148,163,184,0.15)',
          borderRadius: 20, padding: '24px 20px',
          textAlign: 'center', marginBottom: 16,
          backdropFilter: 'blur(12px)',
          animation: 'fadeUp 0.5s ease 0.1s both',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
            {/* Score big */}
            <div>
              <div style={{ fontSize: 52, fontWeight: 900, color: rank.color, lineHeight: 1 }}>
                {score}<span style={{ fontSize: 24, color: '#475569' }}>/{total}</span>
              </div>
              <div style={{ fontSize: 12, color: '#64748b', fontWeight: 700, marginTop: 4 }}>Questions Correct</div>
            </div>
            {/* Percentage */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: `conic-gradient(${rank.color} ${pct * 3.6}deg, rgba(148,163,184,0.15) 0deg)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: '#1e293b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, fontWeight: 900, color: '#f1f5f9',
              }}>
                {pct}%
              </div>
            </div>
          </div>

          {/* Characters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 14 }}>
            <Amara size={70} expression={score >= total / 2 ? 'happy' : 'worried'} />
            <MrObi size={76} expression={score >= total / 2 ? 'happy' : 'neutral'} />
          </div>

          <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7, maxWidth: 340, margin: '0 auto' }}>
            {rank.msg}
          </p>
        </div>

        {/* Topic breakdown */}
        <div style={{
          background: 'rgba(30,41,59,0.8)',
          border: '1px solid rgba(148,163,184,0.15)',
          borderRadius: 20, padding: '18px 16px',
          marginBottom: 16, backdropFilter: 'blur(12px)',
          animation: 'fadeUp 0.5s ease 0.2s both',
        }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 12 }}>
            Topic Breakdown
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {answers.map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: a.correct ? 'rgba(10,46,34,0.6)' : 'rgba(46,10,10,0.5)',
                border: `1px solid ${a.correct ? 'rgba(29,158,117,0.3)' : 'rgba(226,75,74,0.3)'}`,
                borderRadius: 10, padding: '10px 12px',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: a.correct ? '#1D9E75' : '#E24B4A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 900, color: '#fff',
                }}>
                  {a.correct ? '✓' : '✗'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#e2e8f0' }}>
                    {scenarios[i].topic}
                  </div>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 800,
                  color: a.correct ? '#6EE7C7' : '#FCA5A5',
                }}>
                  {a.correct ? 'Correct' : 'Incorrect'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badge earned */}
        <div style={{
          background: 'rgba(83,74,183,0.15)',
          border: '1px solid rgba(83,74,183,0.3)',
          borderRadius: 16, padding: '16px',
          textAlign: 'center', marginBottom: 20,
          animation: 'fadeUp 0.5s ease 0.3s both',
        }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>
            {pct >= 80 ? '🎖️' : pct >= 60 ? '📛' : '📚'}
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#a5b4fc', marginBottom: 3 }}>
            {pct >= 80 ? 'Cyber Safety Badge Earned!' : pct >= 60 ? 'Cyber Learner Badge Earned!' : 'Keep Practicing!'}
          </div>
          <div style={{ fontSize: 12, color: '#6366f1', fontWeight: 600 }}>
            {pct >= 60 ? 'Show this to your Digital Technology teacher 🏅' : 'Score 60% or more to earn your badge'}
          </div>
        </div>

        {/* Replay button */}
        <button
          onClick={onReplay}
          style={{
            width: '100%', padding: '15px',
            background: 'linear-gradient(135deg, #1D9E75, #0F6E56)',
            border: 'none', borderRadius: 14, fontSize: 16,
            fontWeight: 800, color: '#fff', fontFamily: 'inherit',
            boxShadow: '0 6px 24px rgba(29,158,117,0.4)',
            animation: 'fadeUp 0.5s ease 0.4s both',
          }}
        >
          🔄 Play Again
        </button>
      </div>
    </div>
  )
}
