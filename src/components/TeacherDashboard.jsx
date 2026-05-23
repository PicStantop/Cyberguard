import React, { useEffect, useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { ALL_SCENARIOS } from '../data/scenarios'

const SECTION_BG = 'rgba(22,32,50,0.95)'
const CARD_BORDER = '1px solid rgba(148,163,184,0.12)'

// All unique topics for the filter dropdown
const ALL_TOPICS = [...new Set(ALL_SCENARIOS.map(s => s.topic))]

export default function TeacherDashboard() {
  const { profile, signOut } = useAuth()
  const [students, setStudents]     = useState([])
  const [sessions, setSessions]     = useState([])
  const [selected, setSelected]     = useState(null)   // selected student profile
  const [filterClass, setFilterClass] = useState('All')
  const [filterTopic, setFilterTopic] = useState('All')
  const [loading, setLoading]       = useState(true)
  const [activeTab, setActiveTab]   = useState('overview') // overview | topic | students

  const loadData = useCallback(async () => {
    setLoading(true)
    const { data: profs } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'student')
      .order('full_name')

    const { data: sess } = await supabase
      .from('game_sessions')
      .select('*, answer_logs(*)')
      .order('completed_at', { ascending: false })

    setStudents(profs || [])
    setSessions(sess || [])
    setLoading(false)
  }, [])

  useEffect(() => { loadData() }, [loadData])

  // ── Derived stats ──────────────────────────────────────────────────────────

  // class filter removed

  const filteredStudents = (students || []).filter(s =>
    true
  )

  // Per-student last session stats
  function getStudentStats(studentId) {
    const studentSessions = (sessions || [])
      .filter(s => s.student_id === studentId)
      .sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at))

    if (!studentSessions.length) return null

    const last = studentSessions[0]
    const allAnswers = studentSessions.flatMap(s => s.answer_logs || [])
    const totalAttempts = studentSessions.length
    const avgScore = studentSessions.reduce((acc, s) => acc + (s.score || 0), 0) / totalAttempts

    // Topic accuracy
    const topicMap = {}
    allAnswers.forEach(a => {
      if (!topicMap[a.topic]) topicMap[a.topic] = { correct: 0, total: 0 }
      topicMap[a.topic].total++
      if (a.is_correct) topicMap[a.topic].correct++
    })

    return { last, totalAttempts, avgScore, topicMap, allAnswers }
  }

  // Global topic difficulty (across all students)
  const globalTopicStats = {}
  ;(sessions || []).forEach(sess => {
    ;(sess.answer_logs || []).forEach(a => {
      if (!globalTopicStats[a.topic]) globalTopicStats[a.topic] = { correct: 0, total: 0, noteSection: a.note_section }
      globalTopicStats[a.topic].total++
      if (a.is_correct) globalTopicStats[a.topic].correct++
    })
  })

  const topicDifficulty = Object.entries(globalTopicStats)
    .map(([topic, stats]) => ({
      topic,
      noteSection: stats.noteSection,
      accuracy: stats.total ? Math.round((stats.correct / stats.total) * 100) : 0,
      attempts: stats.total,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)

  // Filtered by topic
  const filteredTopicStats = filterTopic === 'All'
    ? topicDifficulty
    : topicDifficulty.filter(t => t.topic === filterTopic)

  // Summary cards
  const totalStudents = filteredStudents.length
  const activeStudents = filteredStudents.filter(s => (sessions || []).some(sess => sess.student_id === s.id)).length
  const avgClassScore = (() => {
    const relevant = (sessions || []).filter(sess =>
      filteredStudents.some(s => s.id === sess.student_id)
    )
    if (!relevant.length) return 0
    return Math.round(relevant.reduce((a, s) => a + (s.score || 0), 0) / relevant.length)
  })()

  const hardestTopic = topicDifficulty[0]

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg,#0f172a 0%,#0d1525 100%)',
      color: '#f1f5f9',
      fontFamily: 'Nunito, sans-serif',
    }}>
      {/* ── Top Bar ── */}
      <div style={{
        background: 'rgba(15,23,42,0.98)',
        borderBottom: '1px solid rgba(148,163,184,0.1)',
        padding: '14px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 20,
        backdropFilter: 'blur(12px)',
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800 }}>🛡️ CyberGuard</div>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>Teacher Dashboard</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: '#94a3b8', fontWeight: 600 }}>
            {profile?.full_name || 'Teacher'}
          </div>
          <button onClick={signOut} style={{
            background: 'rgba(226,75,74,0.15)',
            border: '1px solid rgba(226,75,74,0.3)',
            borderRadius: 8, padding: '6px 12px',
            fontSize: 12, color: '#FCA5A5', fontWeight: 700,
            fontFamily: 'inherit', cursor: 'pointer',
          }}>Sign Out</button>
        </div>
      </div>

      <div style={{ padding: '16px 14px 40px', maxWidth: 900, margin: '0 auto' }}>

        {/* ── Refresh ── */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <button onClick={loadData} style={{
            padding: '6px 14px', borderRadius: 8,
            background: 'rgba(30,41,59,0.8)',
            border: '1px solid rgba(148,163,184,0.15)',
            color: '#94a3b8', fontSize: 12, fontWeight: 700,
            fontFamily: 'inherit', cursor: 'pointer',
          }}>↻ Refresh</button>
        </div>

        {/* ── Summary cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 20 }}>
          {[
            { label: 'Total Students', value: totalStudents, icon: '👨‍🎓', color: '#1D9E75' },
            { label: 'Played at Least Once', value: activeStudents, icon: '🎮', color: '#534AB7' },
            { label: 'Avg Score (Last Session)', value: `${avgClassScore}/10`, icon: '📊', color: '#BA7517' },
            { label: 'Hardest Topic', value: hardestTopic ? `${hardestTopic.accuracy}%` : '—', icon: '🔥', color: '#E24B4A', sub: hardestTopic?.topic?.split('—')[1]?.trim() || hardestTopic?.topic },
          ].map(card => (
            <div key={card.label} style={{
              background: SECTION_BG, border: CARD_BORDER,
              borderRadius: 16, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{card.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: card.color }}>{card.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700, marginTop: 2 }}>{card.label}</div>
              {card.sub && <div style={{ fontSize: 10, color: '#475569', marginTop: 2, lineHeight: 1.4 }}>{card.sub}</div>}
            </div>
          ))}
        </div>

        {/* ── Tab nav ── */}
        <div style={{
          display: 'flex', gap: 4,
          background: 'rgba(15,23,42,0.6)',
          border: '1px solid rgba(148,163,184,0.1)',
          borderRadius: 14, padding: 4, marginBottom: 18,
        }}>
          {[
            { key: 'overview', label: '📊 Overview' },
            { key: 'topic', label: '🧠 Topics' },
            { key: 'students', label: '👥 Students' },
          ].map(t => (
            <button key={t.key} onClick={() => setActiveTab(t.key)} style={{
              flex: 1, padding: '9px 4px', borderRadius: 10, border: 'none',
              background: activeTab === t.key ? 'linear-gradient(135deg,#1D9E75,#0F6E56)' : 'transparent',
              color: activeTab === t.key ? '#fff' : '#64748b',
              fontSize: 12, fontWeight: 800, fontFamily: 'Nunito, sans-serif', cursor: 'pointer',
            }}>{t.label}</button>
          ))}
        </div>

        {loading && (
          <div style={{ textAlign: 'center', padding: 40, color: '#64748b', fontWeight: 700 }}>
            Loading data…
          </div>
        )}

        {/* ══ OVERVIEW TAB ══════════════════════════════════════════════════ */}
        {!loading && activeTab === 'overview' && (
          <div>
            <SectionTitle>Recent Game Sessions</SectionTitle>
            {sessions.length === 0 ? (
              <EmptyState msg="No game sessions recorded yet. Share the link with your students!" />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {sessions.slice(0, 20).map(sess => {
                  const student = students.find(s => s.id === sess.student_id)
                  const pct = Math.round(((sess.score || 0) / (sess.total_questions || 10)) * 100)
                  return (
                    <div key={sess.id} style={{
                      background: SECTION_BG, border: CARD_BORDER,
                      borderRadius: 12, padding: '12px 14px',
                      display: 'flex', alignItems: 'center', gap: 12,
                    }}>
                      <div style={{
                        width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                        background: pct >= 70 ? 'rgba(10,46,34,0.8)' : pct >= 50 ? 'rgba(46,31,6,0.8)' : 'rgba(46,10,10,0.8)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, fontWeight: 900,
                        color: pct >= 70 ? '#6EE7C7' : pct >= 50 ? '#FCD34D' : '#FCA5A5',
                      }}>
                        {sess.score}/{sess.total_questions || 10}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#e2e8f0' }}>
                          {student?.full_name || 'Unknown Student'}
                        </div>
                        <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>
                          {student?.username}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{
                          fontSize: 13, fontWeight: 900,
                          color: pct >= 70 ? '#1D9E75' : pct >= 50 ? '#BA7517' : '#E24B4A',
                        }}>{pct}%</div>
                        <div style={{ fontSize: 10, color: '#475569' }}>
                          {sess.completed_at ? new Date(sess.completed_at).toLocaleDateString('en-NG') : ''}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ══ TOPICS TAB ══════════════════════════════════════════════════ */}
        {!loading && activeTab === 'topic' && (
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: '#64748b', fontWeight: 700 }}>Filter:</span>
              <select value={filterTopic} onChange={e => setFilterTopic(e.target.value)} style={{
                background: 'rgba(30,41,59,0.8)',
                border: '1px solid rgba(148,163,184,0.2)',
                borderRadius: 8, padding: '6px 10px',
                color: '#e2e8f0', fontSize: 12, fontFamily: 'inherit',
              }}>
                <option value="All">All Topics</option>
                {ALL_TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            <SectionTitle>Topic Performance — Class Accuracy</SectionTitle>
            <div style={{ fontSize: 11, color: '#64748b', marginBottom: 12, fontWeight: 600 }}>
              Sorted by difficulty (hardest first). Red = class needs more study on this topic.
            </div>

            {filteredTopicStats.length === 0 ? (
              <EmptyState msg="No answer data yet for this topic." />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {filteredTopicStats.map(t => {
                  const color = t.accuracy >= 70 ? '#1D9E75' : t.accuracy >= 50 ? '#BA7517' : '#E24B4A'
                  const bg    = t.accuracy >= 70 ? 'rgba(10,46,34,0.6)' : t.accuracy >= 50 ? 'rgba(46,31,6,0.6)' : 'rgba(46,10,10,0.6)'
                  return (
                    <div key={t.topic} style={{
                      background: SECTION_BG, border: CARD_BORDER,
                      borderRadius: 12, padding: '12px 14px',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: '#e2e8f0' }}>{t.topic}</div>
                          <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
                            {t.noteSection} · {t.attempts} answer{t.attempts !== 1 ? 's' : ''}
                          </div>
                        </div>
                        <div style={{
                          background: bg, borderRadius: 8,
                          padding: '4px 10px', height: 'fit-content',
                          fontSize: 14, fontWeight: 900, color,
                        }}>
                          {t.accuracy}%
                        </div>
                      </div>
                      {/* Progress bar */}
                      <div style={{ background: 'rgba(148,163,184,0.1)', borderRadius: 20, height: 6, overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', borderRadius: 20,
                          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
                          width: `${t.accuracy}%`, transition: 'width 0.6s ease',
                        }} />
                      </div>
                      {t.accuracy < 50 && (
                        <div style={{
                          marginTop: 8, fontSize: 11.5,
                          color: '#fca5a5', fontWeight: 600,
                          background: 'rgba(46,10,10,0.5)', borderRadius: 6, padding: '6px 10px',
                        }}>
                          ⚠ Class struggling here — review this topic in your next lesson.
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ══ STUDENTS TAB ════════════════════════════════════════════════ */}
        {!loading && activeTab === 'students' && (
          <div>
            {selected ? (
              <StudentDetail
                student={selected}
                stats={getStudentStats(selected.id)}
                onBack={() => setSelected(null)}
              />
            ) : (
              <>
                <SectionTitle>All Students ({filteredStudents.length})</SectionTitle>
                {filteredStudents.length === 0 ? (
                  <EmptyState msg="No students registered yet." />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {filteredStudents.map(student => {
                      const stats = getStudentStats(student.id)
                      const lastScore = stats?.last?.score
                      const total = stats?.last?.total_questions || 10
                      const pct = stats ? Math.round((lastScore / total) * 100) : null
                      return (
                        <button key={student.id} onClick={() => setSelected(student)} style={{
                          background: SECTION_BG, border: CARD_BORDER,
                          borderRadius: 12, padding: '12px 14px',
                          display: 'flex', alignItems: 'center', gap: 12,
                          width: '100%', textAlign: 'left', cursor: 'pointer',
                          fontFamily: 'inherit',
                        }}>
                          <div style={{
                            width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                            background: pct !== null
                              ? (pct >= 70 ? 'rgba(10,46,34,0.8)' : pct >= 50 ? 'rgba(46,31,6,0.8)' : 'rgba(46,10,10,0.8)')
                              : 'rgba(30,41,59,0.9)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 18,
                          }}>
                            {pct !== null ? (pct >= 70 ? '🏆' : pct >= 50 ? '📚' : '❗') : '⏳'}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 14, fontWeight: 800, color: '#e2e8f0' }}>{student.full_name}</div>
                            <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>
                              {student.username}
                            </div>
                          </div>
                          <div style={{ textAlign: 'right', flexShrink: 0 }}>
                            {pct !== null ? (
                              <>
                                <div style={{
                                  fontSize: 14, fontWeight: 900,
                                  color: pct >= 70 ? '#1D9E75' : pct >= 50 ? '#BA7517' : '#E24B4A',
                                }}>{lastScore}/{total}</div>
                                <div style={{ fontSize: 10, color: '#475569' }}>{stats.totalAttempts} attempt{stats.totalAttempts !== 1 ? 's' : ''}</div>
                              </>
                            ) : (
                              <div style={{ fontSize: 11, color: '#475569' }}>Not played</div>
                            )}
                            <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>→</div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Student Detail View ───────────────────────────────────────────────────────
function StudentDetail({ student, stats, onBack }) {
  if (!stats) return (
    <div>
      <BackButton onClick={onBack} />
      <div style={{
        background: 'rgba(22,32,50,0.95)',
        border: '1px solid rgba(148,163,184,0.12)',
        borderRadius: 16, padding: 24, textAlign: 'center',
        marginTop: 12,
      }}>
        <div style={{ fontSize: 32, marginBottom: 8 }}>⏳</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#e2e8f0' }}>{student.full_name} hasn't played yet.</div>
        <div style={{ fontSize: 12, color: '#64748b', marginTop: 6 }}>Share the game link with this student.</div>
      </div>
    </div>
  )

  const avgPct = Math.round((stats.avgScore / 10) * 100)

  const topicList = Object.entries(stats.topicMap)
    .map(([topic, d]) => ({
      topic,
      accuracy: Math.round((d.correct / d.total) * 100),
      attempts: d.total,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)

  return (
    <div>
      <BackButton onClick={onBack} />

      {/* Student header */}
      <div style={{
        background: 'rgba(22,32,50,0.95)',
        border: '1px solid rgba(148,163,184,0.12)',
        borderRadius: 16, padding: '18px 16px', marginBottom: 14,
      }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#f1f5f9', marginBottom: 4 }}>
          {student.full_name}
        </div>
        <div style={{ fontSize: 12, color: '#64748b', fontWeight: 700, marginBottom: 14 }}>
          {student.username}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
          {[
            { label: 'Attempts', value: stats.totalAttempts },
            { label: 'Avg Score', value: `${avgPct}%`, color: avgPct >= 70 ? '#1D9E75' : avgPct >= 50 ? '#BA7517' : '#E24B4A' },
            { label: 'Last Score', value: `${stats.last.score}/${stats.last.total_questions || 10}` },
          ].map(s => (
            <div key={s.label} style={{
              background: 'rgba(15,23,42,0.6)',
              borderRadius: 10, padding: '10px 8px', textAlign: 'center',
            }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: s.color || '#f1f5f9' }}>{s.value}</div>
              <div style={{ fontSize: 10, color: '#64748b', marginTop: 2, fontWeight: 700 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topic breakdown */}
      <div style={{ fontSize: 12, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 10 }}>
        Topic Accuracy (all attempts)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {topicList.map(t => {
          const color = t.accuracy >= 70 ? '#1D9E75' : t.accuracy >= 50 ? '#BA7517' : '#E24B4A'
          return (
            <div key={t.topic} style={{
              background: 'rgba(22,32,50,0.95)',
              border: '1px solid rgba(148,163,184,0.1)',
              borderRadius: 10, padding: '10px 12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#e2e8f0', flex: 1, paddingRight: 8 }}>{t.topic}</div>
                <div style={{ fontSize: 13, fontWeight: 900, color, flexShrink: 0 }}>{t.accuracy}%</div>
              </div>
              <div style={{ background: 'rgba(148,163,184,0.1)', borderRadius: 20, height: 5, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 20,
                  background: color, width: `${t.accuracy}%`, transition: 'width 0.5s ease',
                }} />
              </div>
              {t.accuracy < 50 && (
                <div style={{ fontSize: 11, color: '#fca5a5', marginTop: 5, fontWeight: 600 }}>
                  Needs more practice on this topic
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <div style={{ fontSize: 12, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 10 }}>
      {children}
    </div>
  )
}

function BackButton({ onClick }) {
  return (
    <button onClick={onClick} style={{
      background: 'rgba(30,41,59,0.8)',
      border: '1px solid rgba(148,163,184,0.15)',
      borderRadius: 10, padding: '8px 14px',
      fontSize: 13, color: '#94a3b8', fontWeight: 700,
      fontFamily: 'inherit', cursor: 'pointer', marginBottom: 14,
    }}>
      ← Back to Students
    </button>
  )
}

function EmptyState({ msg }) {
  return (
    <div style={{
      background: 'rgba(22,32,50,0.8)',
      border: '1px solid rgba(148,163,184,0.1)',
      borderRadius: 12, padding: '24px 16px', textAlign: 'center',
    }}>
      <div style={{ fontSize: 28, marginBottom: 8 }}>📭</div>
      <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>{msg}</div>
    </div>
  )
}
