import React, { useEffect, useState } from 'react'
import Amara from './characters/Amara'
import MrObi from './characters/MrObi'

function getRank(score, total) {
  const pct = (score / total) * 100
  if (pct === 100) return { trophy: '🏆', title: 'Cyber Champion!',  color: '#FAC775', msg: "Perfect 10/10! You studied your notes thoroughly. You truly understand cybersecurity — not just common sense." }
  if (pct >= 80)  return { trophy: '🥇', title: 'Cyber Expert!',     color: '#1D9E75', msg: "Excellent! You know your notes well. Re-read the sections on the topics you missed to reach perfection." }
  if (pct >= 60)  return { trophy: '🥈', title: 'Cyber Defender!',   color: '#534AB7', msg: "Good effort! You know the basics. Go back to the specific note sections for the topics you got wrong." }
  if (pct >= 40)  return { trophy: '🥉', title: 'Cyber Learner!',    color: '#BA7517', msg: "Keep at it! These require specific note knowledge, not guessing. Read Mr. Obi's tips and try again." }
  return           { trophy: '📚', title: 'Study Mode!',              color: '#E24B4A', msg: "Don't give up! Open your Cybersecurity I & II notes, study the highlighted terms, and play again." }
}

export default function ResultsScreen({ answers, scenarios, onReplay }) {
  const [visible, setVisible] = useState(false)
  const [showDetail, setShowDetail] = useState(null)
  const total  = answers.length
  const score  = answers.filter(a => a.correct).length
  const rank   = getRank(score, total)
  const pct    = Math.round((score / total) * 100)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  // Group wrong answers by note section for study focus
  const wrongBySection = {}
  answers.forEach((a, i) => {
    if (!a.correct) {
      const sec = a.noteSection || 'Notes'
      if (!wrongBySection[sec]) wrongBySection[sec] = []
      wrongBySection[sec].push({ ...a, scenario: scenarios?.[i] })
    }
  })

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg,#0f172a 0%,#1a0a3d 50%,#0f172a 100%)',
      padding: '28px 16px 40px',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.5s ease',
      fontFamily: 'Nunito, sans-serif',
    }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(29,158,117,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(29,158,117,0.05) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div style={{ maxWidth: 460, margin: '0 auto', position: 'relative' }}>

        {/* Trophy */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 54, marginBottom: 8, animation: 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}>
            {rank.trophy}
          </div>
          <div style={{ fontSize: 24, fontWeight: 900, color: rank.color, letterSpacing: -0.5 }}>
            {rank.title}
          </div>
          <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600, marginTop: 4 }}>
            CyberGuard Academy · Cybersecurity Module
          </div>
        </div>

        {/* Score card */}
        <div style={{
          background: 'rgba(30,41,59,0.85)', border: '1px solid rgba(148,163,184,0.15)',
          borderRadius: 20, padding: '22px 18px', textAlign: 'center',
          marginBottom: 14, backdropFilter: 'blur(12px)',
          animation: 'fadeUp 0.5s ease 0.1s both',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 48, fontWeight: 900, color: rank.color, lineHeight: 1 }}>
                {score}<span style={{ fontSize: 22, color: '#475569' }}>/{total}</span>
              </div>
              <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginTop: 4 }}>Questions Correct</div>
            </div>
            {/* Circular progress */}
            <div style={{
              width: 68, height: 68, borderRadius: '50%',
              background: `conic-gradient(${rank.color} ${pct * 3.6}deg, rgba(148,163,184,0.12) 0deg)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%', background: '#1e293b',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 900, color: '#f1f5f9',
              }}>{pct}%</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
            <Amara size={64} expression={score >= total / 2 ? 'happy' : 'worried'} />
            <MrObi size={70} expression={score >= total / 2 ? 'happy' : 'neutral'} />
          </div>
          <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7, maxWidth: 340, margin: '0 auto' }}>
            {rank.msg}
          </p>
        </div>

        {/* Question breakdown */}
        <div style={{
          background: 'rgba(30,41,59,0.85)', border: '1px solid rgba(148,163,184,0.15)',
          borderRadius: 20, padding: '16px 14px', marginBottom: 14,
          animation: 'fadeUp 0.5s ease 0.2s both',
        }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 12 }}>
            Question Breakdown
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {answers.map((a, i) => (
              <button key={i}
                onClick={() => setShowDetail(showDetail === i ? null : i)}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  background: a.correct ? 'rgba(10,46,34,0.5)' : 'rgba(46,10,10,0.5)',
                  border: `1px solid ${a.correct ? 'rgba(29,158,117,0.25)' : 'rgba(226,75,74,0.25)'}`,
                  borderRadius: 10, padding: '10px 12px',
                  width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 6, flexShrink: 0, marginTop: 1,
                  background: a.correct ? '#1D9E75' : '#E24B4A',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 900, color: '#fff',
                }}>{a.correct ? '✓' : '✗'}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#e2e8f0', lineHeight: 1.4 }}>
                    {a.topic}
                  </div>
                  <div style={{ fontSize: 10, color: '#64748b', marginTop: 1 }}>
                    {a.noteSection} {showDetail === i ? '▲' : '▼'}
                  </div>
                  {showDetail === i && scenarios?.[i] && (
                    <div style={{
                      marginTop: 8, background: 'rgba(15,23,42,0.6)',
                      borderRadius: 8, padding: '8px 10px',
                    }}>
                      <div style={{ fontSize: 11, color: '#94a3b8', lineHeight: 1.6 }}>
                        <strong style={{ color: '#a5b4fc' }}>💡 Tip:</strong> {scenarios[i].tip}
                      </div>
                    </div>
                  )}
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 800, flexShrink: 0,
                  color: a.correct ? '#6EE7C7' : '#FCA5A5',
                  marginTop: 2,
                }}>
                  {a.correct ? 'Correct' : 'Wrong'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Study focus for wrong topics */}
        {Object.keys(wrongBySection).length > 0 && (
          <div style={{
            background: 'rgba(83,74,183,0.1)', border: '1px solid rgba(83,74,183,0.25)',
            borderRadius: 16, padding: '14px 16px', marginBottom: 16,
            animation: 'fadeUp 0.5s ease 0.3s both',
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: 0.7, marginBottom: 10 }}>
              📖 Study Focus Before Next Attempt
            </div>
            {Object.entries(wrongBySection).map(([section, items]) => (
              <div key={section} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#c7d2fe', marginBottom: 4 }}>
                  {section}
                </div>
                {items.map((item, i) => (
                  <div key={i} style={{
                    fontSize: 12, color: '#94a3b8', paddingLeft: 12,
                    borderLeft: '2px solid rgba(83,74,183,0.4)',
                    marginBottom: 3, lineHeight: 1.5,
                  }}>
                    • {item.topic}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Badge */}
        <div style={{
          background: 'rgba(83,74,183,0.12)', border: '1px solid rgba(83,74,183,0.25)',
          borderRadius: 14, padding: 16, textAlign: 'center', marginBottom: 18,
          animation: 'fadeUp 0.5s ease 0.35s both',
        }}>
          <div style={{ fontSize: 26, marginBottom: 6 }}>
            {pct >= 80 ? '🎖️' : pct >= 60 ? '📛' : '📚'}
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: '#a5b4fc', marginBottom: 3 }}>
            {pct >= 80 ? 'Cyber Safety Badge Earned!' : pct >= 60 ? 'Cyber Learner Badge Earned!' : 'Keep Studying!'}
          </div>
          <div style={{ fontSize: 11, color: '#6366f1', fontWeight: 600 }}>
            {pct >= 60 ? 'Show this result to your Digital Technology teacher 🏅' : 'Score 60% or more to earn your badge'}
          </div>
        </div>

        {/* Replay button */}
        <button onClick={onReplay} style={{
          width: '100%', padding: 15,
          background: 'linear-gradient(135deg,#1D9E75,#0F6E56)',
          border: 'none', borderRadius: 14, fontSize: 16,
          fontWeight: 800, color: '#fff', fontFamily: 'Nunito, sans-serif',
          boxShadow: '0 6px 24px rgba(29,158,117,0.4)',
          animation: 'fadeUp 0.5s ease 0.4s both',
        }}>
          🔄 Play Again
        </button>
      </div>
    </div>
  )
}
