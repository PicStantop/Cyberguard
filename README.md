# 🛡️ CyberGuard Academy

Interactive cybersecurity quiz game for SS1 Digital Technology.  
32 note-based scenarios · Student login · Teacher progress dashboard · Supabase backend

---

## 🚀 FULL SETUP GUIDE (Step by Step)

---

### STEP 1 — Set up Supabase (free)

1. Go to **[supabase.com](https://supabase.com)** → Create a free account
2. Click **"New Project"** → Enter a name (e.g. `cyberguard`) → Set a database password → Create
3. Wait ~2 minutes for the project to be ready
4. In the left sidebar: click **SQL Editor** → **New Query**
5. Paste the entire contents of `supabase_schema.sql` into the editor → Click **Run**
6. You should see "Success. No rows returned." — database is ready ✅

**Get your keys:**
- Left sidebar → **Project Settings** → **API**
- Copy: **Project URL** (looks like `https://xxxx.supabase.co`)
- Copy: **anon public** key (long string starting with `eyJ…`)

---

### STEP 2 — Add environment variables

1. Copy `.env.example` to `.env.local`  
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local` and paste your Supabase keys:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

---

### STEP 3 — Deploy to Vercel

**Option A — GitHub + Vercel (recommended)**

1. Create a GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cyberguard-academy.git
   git push -u origin main
   ```

2. Go to **[vercel.com](https://vercel.com)** → Sign in with GitHub
3. Click **"Add New Project"** → Import your repo → Framework: **Vite** (auto-detected)
4. **IMPORTANT** — Before clicking Deploy, click **"Environment Variables"** and add:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
5. Click **Deploy** ✅

Your live URL will be: `https://cyberguard-academy.vercel.app`

---

### STEP 4 — Create your Teacher account

1. Open your live Vercel URL
2. Click the **👨‍🏫 Teacher** tab
3. Sign up with your email and a password
4. Go back to **Supabase → SQL Editor** and run:
   ```sql
   UPDATE public.profiles
   SET role = 'teacher'
   WHERE full_name = 'Your Full Name Here';
   ```
5. Sign in again with the Teacher tab — you'll see the dashboard ✅

---

### STEP 5 — Share with Students

Share the Vercel URL with your class.  
Students tap **📝 Register**, enter their full name, student ID, class, and a password.  
They can then log in on any phone or computer and play.

---

## 📊 What the Teacher Dashboard Shows

| Feature | Details |
|---|---|
| **Overview tab** | All recent game sessions across the class, with scores and dates |
| **Topics tab** | Every topic sorted by class accuracy (red = struggling) |
| **Students tab** | Every registered student, click any to see their full topic breakdown |
| **Class filter** | Filter all views by SS1A, SS1B, SS1C etc. |
| **Per-student view** | Number of attempts, average score, accuracy per topic, study warnings |

---

## 🧠 Scenarios — 32 Questions Across All Note Topics

| Note | Topics Covered |
|---|---|
| **Cybersecurity I** | Key Terms (Vulnerability, Authentication, Data Breach), Importance (Financial Loss, National Infrastructure, Privacy), All 6 Malware Types, Phishing, Hacking, 3 Types of Hackers |
| **Cybersecurity II** | Antivirus (Quarantine, 4 Scan Types, Zero-Day Limitation), Firewalls (Data Packets, Hardware vs Software, 2 Limitations), Strong Passwords, Passphrase, 2FA (Protection + Methods), Software Updates, Data Backup, Encryption, Physical Security |

Each session picks **10 random questions** from the full pool — so students get different questions each time.

---

## ➕ Adding More Topics Later

Edit `src/data/scenarios.js` — add to the `ALL_SCENARIOS` array. Each scenario needs:

```js
{
  id: 33,                          // unique number
  topic: 'Topic Name',
  noteSection: 'Cybersecurity I',  // or 'Cybersecurity II'
  badge: 'skill',                  // 'skill' | 'warn' | 'danger'
  character: 'amara',              // 'amara' | 'mrObi' | 'hacker'
  characterName: 'Display Name',
  characterRole: 'Role Label',
  expression: 'neutral',           // 'neutral' | 'happy' | 'worried' | 'surprised'
  bubble: 'The scenario story...',
  question: 'The actual question?',
  choices: [
    { text: 'Wrong option', correct: false },
    { text: 'Correct answer', correct: true },
    { text: 'Plausible wrong', correct: false },
    { text: 'Plausible wrong', correct: false },
  ],
  feedback: {
    correct: 'Why this is right...',
    wrong: 'What students missed...',
  },
  tip: "Mr. Obi's teaching tip from the notes...",
}
```

---

## 💻 Run Locally

```bash
npm install
npm run dev
```
Open `http://localhost:5173`

## 📦 Build

```bash
npm run build
```
