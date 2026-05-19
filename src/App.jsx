import React, { useState } from 'react'
import SplashScreen from './components/SplashScreen'
import QuestionCard from './components/QuestionCard'
import ResultsScreen from './components/ResultsScreen'
import { scenarios } from './data/scenarios'

export default function App() {
  const [screen, setScreen] = useState('splash') // splash | game | results
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  function handleStart() {
    setCurrentIndex(0)
    setAnswers([])
    setScreen('game')
  }

  function handleAnswer() {
    const scenario = scenarios[currentIndex]
    // answers are tracked via the QuestionCard — we just move forward
    // We need to know if user got it right; QuestionCard calls onAnswer after showing feedback
    if (currentIndex + 1 >= scenarios.length) {
      setScreen('results')
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  function handleAnswerWithResult(isCorrect) {
    const newAnswers = [...answers, { topic: scenarios[currentIndex].topic, correct: isCorrect }]
    setAnswers(newAnswers)
    if (currentIndex + 1 >= scenarios.length) {
      // slight delay to show feedback before results
      setTimeout(() => setScreen('results'), 300)
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  function handleReplay() {
    setCurrentIndex(0)
    setAnswers([])
    setScreen('splash')
  }

  if (screen === 'splash') return <SplashScreen onStart={handleStart} />
  if (screen === 'results') return <ResultsScreen answers={answers} onReplay={handleReplay} />

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
