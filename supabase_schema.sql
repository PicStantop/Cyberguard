-- ============================================================
-- CyberGuard Academy — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name    TEXT NOT NULL,
  username     TEXT UNIQUE,          -- chosen by student at registration (null for teachers)
  role         TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'teacher')),
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. GAME SESSIONS TABLE
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score            INTEGER NOT NULL,
  total_questions  INTEGER NOT NULL DEFAULT 10,
  completed_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ANSWER LOGS TABLE
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
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public.profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answer_logs   ENABLE ROW LEVEL SECURITY;

-- Drop existing policies first (safe to re-run)
DROP POLICY IF EXISTS "Own profile access"          ON public.profiles;
DROP POLICY IF EXISTS "Teacher reads all profiles"  ON public.profiles;
DROP POLICY IF EXISTS "Insert own session"          ON public.game_sessions;
DROP POLICY IF EXISTS "Read own sessions"           ON public.game_sessions;
DROP POLICY IF EXISTS "Teacher reads all sessions"  ON public.game_sessions;
DROP POLICY IF EXISTS "Insert own logs"             ON public.answer_logs;
DROP POLICY IF EXISTS "Read own logs"               ON public.answer_logs;
DROP POLICY IF EXISTS "Teacher reads all logs"      ON public.answer_logs;

-- PROFILES
CREATE POLICY "Own profile access"
  ON public.profiles FOR ALL
  USING (auth.uid() = id);

CREATE POLICY "Teacher reads all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'teacher')
  );

-- GAME SESSIONS
CREATE POLICY "Insert own session"
  ON public.game_sessions FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Read own sessions"
  ON public.game_sessions FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Teacher reads all sessions"
  ON public.game_sessions FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'teacher')
  );

-- ANSWER LOGS
CREATE POLICY "Insert own logs"
  ON public.answer_logs FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Read own logs"
  ON public.answer_logs FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Teacher reads all logs"
  ON public.answer_logs FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'teacher')
  );


-- ============================================================
-- CREATE YOUR TEACHER ACCOUNT — 3 STEPS
-- ============================================================

-- STEP 1: Supabase Dashboard → Authentication → Users
--         → Add User → Create New User
--         Enter your real email and a password. Click Create.
--         Copy the UUID shown next to the new user.

-- STEP 2: Paste your UUID and run:

-- INSERT INTO public.profiles (id, full_name, username, role)
-- VALUES (
--   'PASTE-YOUR-UUID-HERE',
--   'Mr. Stanley',
--   NULL,
--   'teacher'
-- );

-- STEP 3: App → Teacher tab → log in with that email and password ✅


-- ============================================================
-- USEFUL MONITORING QUERIES
-- ============================================================

-- All students:
-- SELECT full_name, username, created_at FROM profiles WHERE role = 'student' ORDER BY full_name;

-- All game sessions with names:
-- SELECT p.full_name, p.username, gs.score, gs.total_questions, gs.completed_at
-- FROM game_sessions gs JOIN profiles p ON gs.student_id = p.id
-- ORDER BY gs.completed_at DESC;

-- Topic difficulty (whole class):
-- SELECT topic, note_section,
--   COUNT(*) AS total_attempts,
--   SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) AS correct,
--   ROUND(100.0 * SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) / COUNT(*), 1) AS accuracy_pct
-- FROM answer_logs
-- GROUP BY topic, note_section
-- ORDER BY accuracy_pct ASC;

-- Students who have NEVER played:
-- SELECT p.full_name, p.username
-- FROM profiles p
-- LEFT JOIN game_sessions gs ON p.id = gs.student_id
-- WHERE p.role = 'student' AND gs.id IS NULL;
