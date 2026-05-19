import React, { useState, useEffect } from 'react'
import Amara from './characters/Amara'
import MrObi from './characters/MrObi'
import Hacker from './characters/Hacker'

const CHAR_MAP = {
  amara: Amara,
  mrObi: MrObi,
  hacker: Hacker,
}

const BADGE_CONFIG = {
  skill:  { label: '🛡 Core Skill',  bg: '#0a2e22', color: '#1D9E75', border: 'rgba(29,158,117,0.3)' },
  warn:   { label: '⚡ Medium Risk', bg: '#2e1f06', color: '#BA7517', border: 'rgba(186,117,23,0.3)' },
  danger: { label: '⚠ High Risk',   bg: '#2e0a0a', color: '#E24B4A', border: 'rgba(226,75,74,0.3)' },
}

export default function QuestionCard({ scenario, questionNumber, total, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [shake, setShake] = useState(false)
  const [animIn, setAnimIn] = useState(false)

  useEffect(() => {
    setSelected(null)
    setShake(false)
    setTimeout(() => setAnimIn(true), 50)
    return () => setAnimIn(false)
  }, [scenario.id])

  const CharComponent = CHAR_MAP[scenario.character] || Amara
  const badge = BADGE_CONFIG[scenario.badge]
  const answered = selected !== null

  function handleChoice(idx) {
    if (answered) return
    const isCorrect = scenario.choices[idx].correct
    setSelected(idx)
    if (!isCorrect) setShake(true)
    setTimeout(() => setShake(false), 500)
    // store result so FeedbackBlock can pass it up
    window.__lastAnswerCorrect = isCorrect
  }

  function getChoiceStyle(idx) {
    const base = {
      background: 'rgba(30,41,59,0.7)',
      border: '1.5px solid rgba(148,163,184,0.15)',
      borderRadius: 12, padding: '12px 14px',
      fontSize: 14, fontFamily: 'inherit', fontWeight: 600,
      cursor: answered ? 'default' : 'pointer',
      textAlign: 'left', color: '#e2e8f0',
      transition: 'all 0.2s', lineHeight: 1.5,
      width: '100%', display: 'block',
    }
    if (!answered) return base
    if (scenario.choices[idx].correct) return { ...base, background: '#0a2e22', border: '1.5px solid #1D9E75', color: '#6EE7C7' }
    if (idx === selected && !scenario.choices[idx].correct) return { ...base, background: '#2e0a0a', border: '1.5px solid #E24B4A', color: '#FCA5A5' }
    return { ...base, opacity: 0.4 }
  }

  return (
    <div style={{
      minHeight: '100dvh',
      background: 'linear-gradient(160deg, #0f172a 0%, #0d1f35 100%)',
      padding: '0 0 32px',
      opacity: animIn ? 1 : 0,
      transform: animIn ? 'translateY(0)' : 'translateY(16px)',
      transition: 'all 0.35s ease',
    }}>
      {/* Top bar */}
      <div style={{
        padding: '16px 20px 12px',
        background: 'rgba(15,23,42,0.95)',
        borderBottom: '1px solid rgba(148,163,184,0.1)',
        position: 'sticky', top: 0, zIndex: 10,
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 700 }}>
            🛡️ CyberGuard Academy
          </div>
          <div style={{
            background: badge.bg, color: badge.color,
            border: `1px solid ${badge.border}`,
            borderRadius: 20, padding: '3px 10px',
            fontSize: 11, fontWeight: 800,
          }}>
            {badge.label}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: 'rgba(148,163,184,0.15)', borderRadius: 20, height: 6, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 20,
            background: 'linear-gradient(90deg, #1D9E75, #34d399)',
            width: `${((questionNumber) / total) * 100}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>{scenario.topic}</div>
          <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>
            {questionNumber}/{total}
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 16px 0' }}>
        {/* Character + speech bubble */}
        <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
          {/* Character */}
          <div style={{
            flexShrink: 0,
            animation: shake ? 'shake 0.45s ease' : 'none',
          }}>
            <div style={{
              background: scenario.character === 'hacker'
                ? 'linear-gradient(135deg,#1a1a2e,#16213e)'
                : 'linear-gradient(135deg,#162032,#1e293b)',
              borderRadius: 18,
              border: scenario.character === 'hacker'
                ? '2px solid rgba(226,75,74,0.3)'
                : '2px solid rgba(29,158,117,0.2)',
              padding: '4px 4px 0',
              width: 90,
            }}>
              <CharComponent
                size={82}
                expression={answered
                  ? (selected !== null && scenario.choices[selected]?.correct ? 'happy' : 'worried')
                  : scenario.expression}
              />
            </div>
            <div style={{ textAlign: 'center', marginTop: 5 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#e2e8f0' }}>{scenario.characterName}</div>
              <div style={{ fontSize: 10, color: '#64748b', fontWeight: 600 }}>{scenario.characterRole}</div>
            </div>
          </div>

          {/* Speech bubble */}
          <div style={{ flex: 1, position: 'relative', paddingTop: 4 }}>
            {/* Bubble tail */}
            <div style={{
              position: 'absolute', left: -8, top: 20,
              width: 0, height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderRight: '10px solid rgba(30,41,59,0.95)',
            }} />
            <div style={{
              background: 'rgba(30,41,59,0.95)',
              border: '1px solid rgba(148,163,184,0.12)',
              borderRadius: '4px 16px 16px 16px',
              padding: '12px 14px',
              fontSize: 13, lineHeight: 1.7,
              color: '#cbd5e1', fontWeight: 600,
            }}>
              {scenario.bubble}
            </div>
          </div>
        </div>

        {/* Question */}
        <div style={{
          background: 'rgba(29,158,117,0.08)',
          border: '1px solid rgba(29,158,117,0.2)',
          borderRadius: 14, padding: '12px 14px',
          marginBottom: 16,
        }}>
          <div style={{ fontSize: 10, color: '#1D9E75', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 }}>
            ❓ Your Decision
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, color: '#f1f5f9', lineHeight: 1.5 }}>
            {scenario.question}
          </div>
        </div>

        {/* Choices */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {scenario.choices.map((choice, idx) => (
            <button
              key={idx}
              style={getChoiceStyle(idx)}
              onClick={() => handleChoice(idx)}
              disabled={answered}
            >
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: 6,
                background: answered && scenario.choices[idx].correct ? '#1D9E75'
                  : answered && idx === selected && !scenario.choices[idx].correct ? '#E24B4A'
                  : 'rgba(148,163,184,0.15)',
                fontSize: 11, fontWeight: 800,
                color: answered && (scenario.choices[idx].correct || idx === selected) ? '#fff' : '#94a3b8',
                marginRight: 10, flexShrink: 0,
              }}>
                {answered && scenario.choices[idx].correct ? '✓'
                  : answered && idx === selected && !scenario.choices[idx].correct ? '✗'
                  : String.fromCharCode(65 + idx)}
              </span>
              {choice.text}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <FeedbackBlock
            scenario={scenario}
            isCorrect={scenario.choices[selected]?.correct}
            onNext={() => onAnswer(scenario.choices[selected]?.correct)}
            isLast={questionNumber === total}
          />
        )}
      </div>
    </div>
  )
}

function FeedbackBlock({ scenario, isCorrect, onNext, isLast }) {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease both' }}>
      {/* Result banner */}
      <div style={{
        background: isCorrect ? 'rgba(10,46,34,0.9)' : 'rgba(46,10,10,0.9)',
        border: `1.5px solid ${isCorrect ? '#1D9E75' : '#E24B4A'}`,
        borderRadius: 14, padding: '14px 16px', marginBottom: 12,
      }}>
        <div style={{ fontSize: 15, fontWeight: 900, color: isCorrect ? '#6EE7C7' : '#FCA5A5', marginBottom: 6 }}>
          {isCorrect ? '✅ Correct!' : '❌ Not quite…'}
        </div>
        <div style={{ fontSize: 13, color: isCorrect ? '#a7f3d0' : '#fecaca', lineHeight: 1.7 }}>
          {isCorrect ? scenario.feedback.correct : scenario.feedback.wrong}
        </div>
      </div>

      {/* Mr Obi tip */}
      <div style={{
        display: 'flex', gap: 12, alignItems: 'flex-start',
        background: 'rgba(83,74,183,0.1)',
        border: '1px solid rgba(83,74,183,0.25)',
        borderRadius: 14, padding: '12px 14px', marginBottom: 18,
      }}>
        <div style={{ flexShrink: 0 }}>
          <MrObi size={48} expression="happy" />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 3 }}>
            💡 Mr. Obi's Tip
          </div>
          <div style={{ fontSize: 12.5, color: '#c7d2fe', lineHeight: 1.7 }}>
            {scenario.tip}
          </div>
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        style={{
          width: '100%', padding: '15px 20px',
          background: 'linear-gradient(135deg, #1D9E75, #0F6E56)',
          border: 'none', borderRadius: 14, fontSize: 16,
          fontWeight: 800, color: '#fff', fontFamily: 'inherit',
          boxShadow: '0 6px 20px rgba(29,158,117,0.4)',
        }}
      >
        {isLast ? 'See My Results 🏆' : 'Next Scenario →'}
      </button>
    </div>
  )
}
