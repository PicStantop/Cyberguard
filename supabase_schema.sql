-- ============================================================
-- CyberGuard Academy — Run this in Supabase SQL Editor
-- ============================================================

-- STEP 1: Create tables (safe to run even if they exist)
-- ============================================================

CREATE TABLE IF NOT EXISTS public.profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name    TEXT NOT NULL,
  username     TEXT UNIQUE,
  role         TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'teacher')),
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.game_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  score            INTEGER NOT NULL,
  total_questions  INTEGER NOT NULL DEFAULT 10,
  completed_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

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


-- STEP 2: Wipe ALL existing policies on these tables
-- ============================================================

DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname, tablename
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename IN ('profiles', 'game_sessions', 'answer_logs')
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', pol.policyname, pol.tablename);
  END LOOP;
END
$$;


-- STEP 3: Create helper function (no recursion)
-- ============================================================

CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;


-- STEP 4: Enable RLS
-- ============================================================

ALTER TABLE public.profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answer_logs   ENABLE ROW LEVEL SECURITY;


-- STEP 5: Create new clean policies
-- ============================================================

-- PROFILES: any logged-in user can read; only own row for write
CREATE POLICY "profiles_select"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "profiles_insert"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- GAME SESSIONS
CREATE POLICY "sessions_insert"
  ON public.game_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "sessions_select_own"
  ON public.game_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = student_id);

CREATE POLICY "sessions_select_teacher"
  ON public.game_sessions FOR SELECT
  TO authenticated
  USING (public.current_user_role() = 'teacher');

-- ANSWER LOGS
CREATE POLICY "logs_insert"
  ON public.answer_logs FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "logs_select_own"
  ON public.answer_logs FOR SELECT
  TO authenticated
  USING (auth.uid() = student_id);

CREATE POLICY "logs_select_teacher"
  ON public.answer_logs FOR SELECT
  TO authenticated
  USING (public.current_user_role() = 'teacher');


-- ============================================================
-- CREATE TEACHER ACCOUNT
-- ============================================================
-- 1. Authentication > Users > Add User > Create New User
--    Enter your real email + password. Copy the UUID.
--
-- 2. Run this (replace the values):
--
-- INSERT INTO public.profiles (id, full_name, username, role)
-- VALUES ('PASTE-UUID-HERE', 'Mr. Stanley', NULL, 'teacher');
--
-- 3. App > Teacher tab > log in ✅
