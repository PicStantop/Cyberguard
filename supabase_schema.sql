-- ============================================================
-- CyberGuard Academy — Supabase Database Schema
-- Run this entire file in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. PROFILES TABLE
-- Stores student and teacher details (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name    TEXT NOT NULL,
  student_id   TEXT UNIQUE,               -- e.g. SS1A/001 (null for teachers)
  class_arm    TEXT,                       -- e.g. SS1A (null for teachers)
  role         TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'teacher')),
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. GAME SESSIONS TABLE
-- One row per completed game attempt
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score            INTEGER NOT NULL,
  total_questions  INTEGER NOT NULL DEFAULT 10,
  completed_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ANSWER LOGS TABLE
-- One row per question answered, within a session
CREATE TABLE IF NOT EXISTS public.answer_logs (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id   UUID NOT NULL REFERENCES public.game_sessions(id) ON DELETE CASCADE,
  student_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scenario_id  INTEGER NOT NULL,
  topic        TEXT NOT NULL,
  note_section TEXT,
  is_correct   BOOLEAN NOT NULL,
  answered_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE public.profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answer_logs   ENABLE ROW LEVEL SECURITY;

-- PROFILES: students can read/write own row; teachers can read all
CREATE POLICY "Students can manage own profile"
  ON public.profiles FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "Teachers can read all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- GAME SESSIONS: students write own; teachers read all
CREATE POLICY "Students can insert own sessions"
  ON public.game_sessions FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can read own sessions"
  ON public.game_sessions FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Teachers can read all sessions"
  ON public.game_sessions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- ANSWER LOGS: students write own; teachers read all
CREATE POLICY "Students can insert own answer logs"
  ON public.answer_logs FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can read own answer logs"
  ON public.answer_logs FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Teachers can read all answer logs"
  ON public.answer_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'teacher'
    )
  );

-- ============================================================
-- CREATE YOUR TEACHER ACCOUNT
-- Run this AFTER you have signed up through the app with your
-- teacher email, OR manually insert here:
-- ============================================================

-- Step 1: Sign up at your deployed app URL using the Teacher tab.
-- Step 2: Come back here and run this to promote your account:

-- UPDATE public.profiles
-- SET role = 'teacher'
-- WHERE student_id IS NULL
--   AND full_name = 'Your Full Name Here';

-- OR if you know your auth user UUID:
-- UPDATE public.profiles
-- SET role = 'teacher', full_name = 'Mr. Stanley', student_id = NULL, class_arm = NULL
-- WHERE id = 'your-auth-uuid-here';

-- ============================================================
-- USEFUL QUERIES FOR THE TEACHER (run in SQL Editor anytime)
-- ============================================================

-- View all students:
-- SELECT full_name, student_id, class_arm, created_at FROM profiles WHERE role = 'student' ORDER BY class_arm;

-- View all game sessions with student names:
-- SELECT p.full_name, p.class_arm, gs.score, gs.total_questions, gs.completed_at
-- FROM game_sessions gs JOIN profiles p ON gs.student_id = p.id
-- ORDER BY gs.completed_at DESC;

-- Topic difficulty (class-wide):
-- SELECT topic, note_section,
--   COUNT(*) as total_attempts,
--   SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct,
--   ROUND(100.0 * SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) / COUNT(*), 1) as accuracy_pct
-- FROM answer_logs
-- GROUP BY topic, note_section
-- ORDER BY accuracy_pct ASC;

-- Students who have never played:
-- SELECT p.full_name, p.student_id, p.class_arm
-- FROM profiles p
-- LEFT JOIN game_sessions gs ON p.id = gs.student_id
-- WHERE p.role = 'student' AND gs.id IS NULL;
