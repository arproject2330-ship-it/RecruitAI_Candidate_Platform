/*
  # RecruiterAI Platform Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `bio` (text)
      - `skills` (jsonb array of skills)
      - `experience` (jsonb array of work experience)
      - `education` (jsonb array of education)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `resumes`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `profile_id` (uuid, references profiles)
      - `file_name` (text)
      - `file_url` (text)
      - `ats_score` (integer)
      - `analysis` (jsonb)
      - `created_at` (timestamp)
    
    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `company` (text)
      - `location` (text)
      - `type` (text - full-time, part-time, contract)
      - `experience_level` (text)
      - `description` (text)
      - `requirements` (jsonb array)
      - `skills_required` (jsonb array)
      - `salary_range` (text)
      - `posted_date` (timestamp)
      - `is_active` (boolean)
      - `created_at` (timestamp)
    
    - `interviews`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `job_title` (text)
      - `difficulty` (text)
      - `status` (text - scheduled, completed, in_progress)
      - `questions` (jsonb array)
      - `answers` (jsonb array)
      - `feedback` (jsonb)
      - `score` (integer)
      - `created_at` (timestamp)
      - `completed_at` (timestamp)
    
    - `tests`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `test_type` (text - technical, aptitude, personality)
      - `title` (text)
      - `status` (text - not_started, in_progress, completed)
      - `score` (integer)
      - `total_questions` (integer)
      - `correct_answers` (integer)
      - `time_taken` (integer)
      - `created_at` (timestamp)
      - `completed_at` (timestamp)
    
    - `test_questions`
      - `id` (uuid, primary key)
      - `test_id` (uuid, references tests)
      - `question` (text)
      - `options` (jsonb array)
      - `correct_answer` (text)
      - `user_answer` (text)
      - `is_correct` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  bio text,
  skills jsonb DEFAULT '[]'::jsonb,
  experience jsonb DEFAULT '[]'::jsonb,
  education jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create resumes table
CREATE TABLE IF NOT EXISTS resumes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  file_name text NOT NULL,
  file_url text,
  ats_score integer DEFAULT 0,
  analysis jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  location text NOT NULL,
  type text DEFAULT 'full-time',
  experience_level text DEFAULT 'mid-level',
  description text NOT NULL,
  requirements jsonb DEFAULT '[]'::jsonb,
  skills_required jsonb DEFAULT '[]'::jsonb,
  salary_range text,
  posted_date timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create interviews table
CREATE TABLE IF NOT EXISTS interviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  job_title text NOT NULL,
  difficulty text DEFAULT 'medium',
  status text DEFAULT 'scheduled',
  questions jsonb DEFAULT '[]'::jsonb,
  answers jsonb DEFAULT '[]'::jsonb,
  feedback jsonb DEFAULT '{}'::jsonb,
  score integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create tests table
CREATE TABLE IF NOT EXISTS tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  test_type text NOT NULL,
  title text NOT NULL,
  status text DEFAULT 'not_started',
  score integer DEFAULT 0,
  total_questions integer DEFAULT 0,
  correct_answers integer DEFAULT 0,
  time_taken integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

-- Create test_questions table
CREATE TABLE IF NOT EXISTS test_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id uuid REFERENCES tests(id) ON DELETE CASCADE,
  question text NOT NULL,
  options jsonb DEFAULT '[]'::jsonb,
  correct_answer text,
  user_answer text,
  is_correct boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE interviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE test_questions ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own profile"
  ON profiles FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Resumes policies
CREATE POLICY "Users can view own resumes"
  ON resumes FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own resumes"
  ON resumes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own resumes"
  ON resumes FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own resumes"
  ON resumes FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Jobs policies (public read, authenticated users can see all jobs)
CREATE POLICY "Anyone can view active jobs"
  ON jobs FOR SELECT
  TO authenticated
  USING (is_active = true);

-- Interviews policies
CREATE POLICY "Users can view own interviews"
  ON interviews FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own interviews"
  ON interviews FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own interviews"
  ON interviews FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own interviews"
  ON interviews FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Tests policies
CREATE POLICY "Users can view own tests"
  ON tests FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tests"
  ON tests FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tests"
  ON tests FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own tests"
  ON tests FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Test questions policies
CREATE POLICY "Users can view own test questions"
  ON test_questions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tests
      WHERE tests.id = test_questions.test_id
      AND tests.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own test questions"
  ON test_questions FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tests
      WHERE tests.id = test_questions.test_id
      AND tests.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own test questions"
  ON test_questions FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tests
      WHERE tests.id = test_questions.test_id
      AND tests.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tests
      WHERE tests.id = test_questions.test_id
      AND tests.user_id = auth.uid()
    )
  );

-- Insert sample jobs
INSERT INTO jobs (title, company, location, type, experience_level, description, requirements, skills_required, salary_range) VALUES
  ('Senior Software Engineer', 'Tech Corp', 'San Francisco, CA', 'full-time', 'senior', 'We are looking for an experienced software engineer to join our team.', '["5+ years experience", "Strong problem-solving skills", "Team player"]'::jsonb, '["JavaScript", "React", "Node.js", "PostgreSQL"]'::jsonb, '$120k - $180k'),
  ('Frontend Developer', 'StartupXYZ', 'Remote', 'full-time', 'mid-level', 'Join our growing team as a frontend developer.', '["3+ years experience", "Portfolio of projects", "Communication skills"]'::jsonb, '["React", "TypeScript", "CSS", "HTML"]'::jsonb, '$80k - $120k'),
  ('Data Scientist', 'AI Solutions', 'New York, NY', 'full-time', 'senior', 'Analyze data and build ML models.', '["PhD or Masters in relevant field", "Python expertise", "ML/AI experience"]'::jsonb, '["Python", "TensorFlow", "SQL", "Statistics"]'::jsonb, '$130k - $200k'),
  ('Product Manager', 'Innovation Labs', 'Austin, TX', 'full-time', 'mid-level', 'Lead product development and strategy.', '["3+ years PM experience", "Technical background", "Leadership skills"]'::jsonb, '["Product Management", "Agile", "User Research", "Analytics"]'::jsonb, '$100k - $150k'),
  ('Full Stack Developer', 'WebCo', 'Remote', 'contract', 'junior', 'Build web applications end-to-end.', '["1-2 years experience", "Eager to learn", "Good communication"]'::jsonb, '["JavaScript", "React", "Node.js", "MongoDB"]'::jsonb, '$60k - $80k');
