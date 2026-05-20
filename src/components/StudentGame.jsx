import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import { getRandomScenarios } from '../data/scenarios'
import SplashScreen from './SplashScreen'
import QuestionCard from './QuestionCard'
import ResultsScreen from './ResultsScreen'

export default function StudentGame() {
  const { user, profile, signOut } = useAuth()
  const [screen, setScreen]     = useState('splash')
  const [scenarios, setScenarios] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers]   = useState([])

  function handleStart() {
    const picked = getRandomScenarios(10)
    setScenarios(picked)
    setCurrentIndex(0)
    setAnswers([])
    setScreen('game')
  }

  function handleAnswerWithResult(isCorrect) {
    const scenario = scenarios[currentIndex]
    const newAnswers = [...answers, {
      scenarioId: scenario.id,
      topic: scenario.topic,
      noteSection: scenario.noteSection,
      correct: isCorrect,
    }]
    setAnswers(newAnswers)

    if (currentIndex + 1 >= scenarios.length) {
      saveSession(newAnswers)
      setScreen('results')
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  async function saveSession(finalAnswers) {
    try {
      const score = finalAnswers.filter(a => a.correct).length
      // Insert session
      const { data: sessionData, error } = await supabase
        .from('game_sessions')
        .insert({
          student_id: user.id,
          score,
          total_questions: finalAnswers.length,
          completed_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error || !sessionData) return

      // Insert individual answer logs
      const logs = finalAnswers.map(a => ({
        session_id: sessionData.id,
        student_id: user.id,
        scenario_id: a.scenarioId,
        topic: a.topic,
        note_section: a.noteSection,
        is_correct: a.correct,
      }))
      await supabase.from('answer_logs').insert(logs)
    } catch (err) {
      console.error('Failed to save session:', err)
    }
  }

  function handleReplay() {
    setScreen('splash')
  }

  if (screen === 'splash') {
    return (
      <div>
        {/* Student top bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30,
          background: 'rgba(15,23,42,0.95)',
          borderBottom: '1px solid rgba(148,163,184,0.1)',
          padding: '10px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: 'blur(12px)',
          fontFamily: 'Nunito, sans-serif',
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, color: '#e2e8f0' }}>
              👋 {profile?.full_name || 'Student'}
            </div>
            <div style={{ fontSize: 10, color: '#64748b', fontWeight: 600 }}>
              {profile?.class_arm} · {profile?.student_id}
            </div>
          </div>
          <button onClick={signOut} style={{
            background: 'rgba(226,75,74,0.12)',
            border: '1px solid rgba(226,75,74,0.25)',
            borderRadius: 8, padding: '5px 12px',
            fontSize: 11, color: '#FCA5A5', fontWeight: 700,
            fontFamily: 'inherit', cursor: 'pointer',
          }}>Sign Out</button>
        </div>
        <div style={{ paddingTop: 50 }}>
          <SplashScreen onStart={handleStart} profile={profile} />
        </div>
      </div>
    )
  }

  if (screen === 'results') {
    return (
      <ResultsScreen
        answers={answers}
        scenarios={scenarios}
        onReplay={handleReplay}
      />
    )
  }

  return (
    <QuestionCard
      key={currentIndex}
      scenario={scenarios[currentIndex]}
      questionNumber={currentIndex + 1}
      total={scenarios.length}
      onAnswer={handleAnswerWithResult}
    />
  )
}
