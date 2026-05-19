# 🛡️ CyberGuard Academy

An interactive cybersecurity quiz game for SS1 Digital Technology students.

## Characters
- **Amara** — A relatable SS1 student who walks through real-life scenarios
- **Mr. Obi** — The cybersecurity mentor who gives tips after each question
- **The Hacker** — The villain character used in danger scenarios

## Topics Covered (Cybersecurity Module)
1. Password Security
2. Phishing Attacks
3. Social Media Safety
4. Public Wi-Fi Risks
5. Malware & Downloads
6. OTP & Account Security

---

## 🚀 Deploy to Vercel (Step by Step)

### Option A — GitHub + Vercel (Recommended)

1. **Create a GitHub repo**
   - Go to [github.com](https://github.com) → New Repository
   - Name it `cyberguard-academy`
   - Keep it Public

2. **Upload this project**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cyberguard-academy.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) → Sign up / Log in with GitHub
   - Click **"Add New Project"**
   - Import your `cyberguard-academy` repo
   - Framework: **Vite** (auto-detected)
   - Click **Deploy** ✅

4. **Share the link** — Vercel gives you a URL like:
   `https://cyberguard-academy.vercel.app`
   Share this with your students — works on any phone browser!

---

### Option B — Vercel CLI

```bash
npm install -g vercel
npm install
vercel
```

---

## 🛠️ Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📦 Build for Production

```bash
npm run build
```

---

## ➕ Adding More Topics

Edit `src/data/scenarios.js` to add new scenario objects. Each scenario needs:
- `id`, `topic`, `badge` (skill/warn/danger)
- `character` (amara/mrObi/hacker)
- `expression` (neutral/happy/worried/surprised)
- `bubble` — the character's speech
- `question` — the question text
- `choices` — array of 4 options, one with `correct: true`
- `feedback.correct`, `feedback.wrong`
- `tip` — Mr. Obi's teaching tip
