// 32 scenarios — every topic from Cybersecurity I & II notes fully covered.
// Wrong answers are plausible; students MUST have studied to distinguish them.
// Topics map directly to section headings in the class notes.

export const ALL_SCENARIOS = [

  // ─── NOTE 1 › KEY TERMS & DEFINITIONS ───────────────────────────────────────

  {
    id: 1,
    topic: 'Key Terms — Vulnerability',
    noteSection: 'Cybersecurity I',
    badge: 'warn',
    character: 'hacker',
    characterName: 'Cyber News Report',
    characterRole: 'Real-World Incident',
    expression: 'neutral',
    bubble: "BREAKING: A Nigerian university's student portal was hacked. Investigators found that the web software had not been updated in two years. The hacker found a specific flaw in the outdated code — a gap in the system's defences — and used it to access the full database of 15,000 student records.",
    question: "According to the Key Terms table in your notes, what is the specific name for the flaw or gap in the system that the hacker exploited?",
    choices: [
      { text: "Authentication — the process of verifying a user's identity was bypassed.", correct: false },
      { text: "Cyber Attack — the hacker launched an attack on the university's network.", correct: false },
      { text: "Vulnerability — a weakness in a system that attackers can take advantage of.", correct: true },
      { text: "Data Breach — the student records were accessed without authorisation.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define Vulnerability as 'a weakness in a system that attackers can take advantage of.' The outdated, unpatched software contained the vulnerability. Note: a Data Breach is the outcome (records accessed), but Vulnerability is the specific term for the weakness that made the breach possible.",
      wrong: "Check your notes' Key Terms table. The flaw in the system code is called a Vulnerability — 'a weakness in a system that attackers can take advantage of.' A Data Breach is what happened as a result; Vulnerability is what enabled it. Authentication is a process; Cyber Attack describes the action taken.",
    },
    tip: "From your notes Key Terms: Vulnerability = 'a weakness in a system that attackers can take advantage of.' Regular software updates exist specifically to PATCH (fix) vulnerabilities before hackers find them. Unpatched software = known vulnerabilities waiting to be exploited.",
  },

  {
    id: 2,
    topic: 'Key Terms — Authentication',
    noteSection: 'Cybersecurity I',
    badge: 'skill',
    character: 'amara',
    characterName: 'Tunde',
    characterRole: 'SS1 Student',
    expression: 'neutral',
    bubble: "Every morning when Tunde opens his school portal, he types his student ID and password. The system then checks both details against its database to confirm he is genuinely who he says he is — before granting him access to his results and timetable.",
    question: "According to the Key Terms in your Cybersecurity I notes, what is the name for this process of verifying that a user is who they claim to be?",
    choices: [
      { text: "Encryption — converting data into a coded format to keep it safe.", correct: false },
      { text: "Authentication — verifying that someone is who they claim to be.", correct: true },
      { text: "Quarantine — isolating suspicious files to prevent them from spreading.", correct: false },
      { text: "Firewall — monitoring and controlling incoming and outgoing network traffic.", correct: false },
    ],
    feedback: {
      correct: "Correct! Authentication is defined in both your Key Terms table and in Note 2's glossary: 'The process of verifying a user's identity before granting access to a system.' Entering your student ID and password is the most common form of authentication.",
      wrong: "From your Key Terms table: Authentication = 'Verifying that someone is who they claim to be (e.g. entering a password).' This is the exact example your notes give. Encryption deals with making data unreadable; Quarantine isolates threats; Firewall controls network traffic.",
    },
    tip: "Authentication answers the question: 'Are you really who you say you are?' Your notes list it as a key cybersecurity term. Passwords are the most common authentication method. 2FA adds a SECOND authentication factor — making it much harder to fake your identity.",
  },

  {
    id: 3,
    topic: 'Key Terms — Data Breach',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Cyber Incident',
    characterRole: 'School Portal Attack',
    expression: 'neutral',
    bubble: "A cyber criminal gained access to a school's database containing the full names, home addresses, date of birth, and next-of-kin details of 800 students — all without any authorisation from the school. The school only discovered the breach three weeks later.",
    question: "According to the glossary in your Cybersecurity I notes, what is the specific term for this type of incident where sensitive information is accessed without authorisation?",
    choices: [
      { text: "Hacking — because a criminal gained unauthorised access to the school's computer system.", correct: false },
      { text: "Vulnerability — because a weakness in the school's system was exploited.", correct: false },
      { text: "Data Breach — an incident where sensitive or confidential information is accessed without authorisation.", correct: true },
      { text: "Cyber Attack — any attempt to damage or access a computer system without permission.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes' glossary defines Data Breach as 'an incident where sensitive or confidential information is accessed without authorization.' While hacking may have been the METHOD used, Data Breach is the specific term for the OUTCOME — sensitive data being accessed without permission.",
      wrong: "Your notes' glossary has the exact definition: Data Breach = 'An incident where sensitive or confidential information is accessed without authorization.' Hacking describes how they got in; Vulnerability describes the weakness used; Cyber Attack is the general action. Data Breach specifically describes what happened to the data itself.",
    },
    tip: "Know your glossary terms. Data Breach = sensitive data accessed without permission (the outcome). Hacking = unauthorized system access (the method). Vulnerability = weakness exploited (the cause). One attack can involve all three — vulnerability → hacking → data breach.",
  },

  // ─── NOTE 1 › IMPORTANCE OF CYBERSECURITY ───────────────────────────────────

  {
    id: 4,
    topic: 'Importance — Financial Loss Prevention',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Suspicious Caller',
    characterRole: 'Phone Scam',
    expression: 'neutral',
    bubble: "Mrs. Adeyemi received a call from someone claiming to be from GTBank. The caller said there was suspicious activity on her account and that she must urgently transfer ₦200,000 to a 'safe account' they would provide. She panicked, complied, and lost her savings. The bank confirmed the call was fake.",
    question: "This incident demonstrates the need for which of the SIX reasons why cybersecurity is important, as listed in Section 2 of your notes?",
    choices: [
      { text: "Safeguarding National Infrastructure — because banks are critical national systems.", correct: false },
      { text: "Prevention of Financial Loss — cybercriminals target people to steal money through deception.", correct: true },
      { text: "Maintaining Privacy and Dignity — her personal conversations were compromised.", correct: false },
      { text: "Building Trust in Technology — she will no longer trust phone banking services.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state under Importance #2: 'Cybercriminals target online banking platforms and e-commerce websites to steal money. Strong cybersecurity practices prevent unauthorized transactions and protect savings.' Mrs. Adeyemi lost money through a social engineering scam — this is exactly the financial threat your notes describe.",
      wrong: "Go back to Section 2 of your notes — the 6 reasons why cybersecurity is important. Reason #2 is 'Prevention of Financial Loss: Cybercriminals target online banking platforms...to steal money.' While the other options have some logic, the PRIMARY harm here is financial — lost savings. Match the incident to the most specific importance from your notes.",
    },
    tip: "Your notes list 6 importances. Learn to match scenarios to the MOST specific one: Financial Loss = money stolen/banking fraud. Privacy = personal messages/photos leaked. National Infrastructure = hospitals, power grids, government systems attacked. Personal Information = name, address, ID stolen for identity fraud.",
  },

  {
    id: 5,
    topic: 'Importance — National Infrastructure',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'National Incident',
    characterRole: 'Infrastructure Attack',
    expression: 'neutral',
    bubble: "A sophisticated cyber attack targeted a major hospital in Abuja, locking doctors out of ALL computer systems — patient records, ICU monitoring software, surgery scheduling, and medical equipment controls. The hospital was paralysed for 72 hours. Three patients in critical care could not receive timely treatment.",
    question: "This incident highlights which importance of cybersecurity from Section 2 of your Cybersecurity I notes?",
    choices: [
      { text: "Protection of Personal Information — patient medical records are personal data.", correct: false },
      { text: "Prevention of Financial Loss — hospitals spend money recovering from cyber attacks.", correct: false },
      { text: "Supporting Business Continuity — the hospital's operations were disrupted.", correct: false },
      { text: "Safeguarding National Infrastructure — hospitals, power grids, and government systems rely on computers.", correct: true },
    ],
    feedback: {
      correct: "Correct! Your notes state: 'Government systems, hospitals, power grids, and banks all rely on computers. A cyber attack on any of these can disrupt an entire country.' The hospital is specifically listed in your notes as an example of national infrastructure. The fact that patient lives were at risk shows the scale of impact.",
      wrong: "This question has three plausible answers — but your notes are precise. Section 2, Importance #3: 'Safeguarding National Infrastructure — Government systems, HOSPITALS, power grids, and banks all rely on computers.' Hospitals are EXPLICITLY listed as national infrastructure in your notes. Business Continuity refers more to private businesses; Personal Information is about individual data theft.",
    },
    tip: "Memorise the examples your notes give for each importance. National Infrastructure = hospitals, power grids, banks, government systems. When a scenario involves ANY of these being disrupted by a cyber attack, the answer is 'Safeguarding National Infrastructure.'",
  },

  {
    id: 6,
    topic: 'Importance — Privacy and Dignity',
    noteSection: 'Cybersecurity I',
    badge: 'warn',
    character: 'amara',
    characterName: 'Ngozi',
    characterRole: 'SS1 Student',
    expression: 'worried',
    bubble: "Ngozi used a shared computer at a cyber cafe to log into her social media. She forgot to log out. The next person to use the computer found her account open, read all her private messages, and shared screenshots of her personal conversations in a WhatsApp group at school.",
    question: "Which importance of cybersecurity from your notes does this situation most directly highlight the need for?",
    choices: [
      { text: "Protection of Personal Information — her name and details are now exposed.", correct: false },
      { text: "Maintaining Privacy and Dignity — her private messages and personal conversations were leaked.", correct: true },
      { text: "Building Trust in Technology — she will no longer trust public computers.", correct: false },
      { text: "Supporting Business Continuity — the cyber cafe's reputation is damaged.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state under Importance #4: 'Private messages, personal photos, and confidential conversations can be leaked if devices are not properly secured. Cybersecurity helps individuals keep their personal lives private.' Ngozi's private messages being shared publicly is exactly the privacy and dignity violation your notes describe.",
      wrong: "Your notes distinguish these importances carefully. 'Protection of Personal Information' refers to sensitive data like bank details and home address. 'Maintaining Privacy and Dignity' is specifically about 'private messages, personal photos, and confidential conversations.' Ngozi's private messages fit Importance #4 from your notes.",
    },
    tip: "Know the difference between 'Personal Information' (name, address, bank details, ID numbers) and 'Privacy and Dignity' (private messages, personal photos, confidential conversations). Your notes treat these as separate importances. The type of data leaked determines which one applies.",
  },

  // ─── NOTE 1 › MALWARE ────────────────────────────────────────────────────────

  {
    id: 7,
    topic: 'Malware — Spyware vs Trojan',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'amara',
    characterName: 'Chioma',
    characterRole: 'SS1 Student',
    expression: 'worried',
    bubble: "I downloaded a free 'Homework Helper' app from a random website. It works fine! But unknown to me, the app has been silently recording every key I press — banking PINs, passwords, and private messages — and sending them to criminals. My computer looks completely normal.",
    question: "The app secretly records keystrokes and activities without Chioma's knowledge. Which malware type BEST describes this specific silent data-collection behaviour?",
    choices: [
      { text: "Ransomware — it will eventually lock her files and demand payment.", correct: false },
      { text: "Spyware — it secretly watches and collects a user's activities, including passwords, without their knowledge.", correct: true },
      { text: "Trojan Horse — it disguised itself as a legitimate helpful app to get installed.", correct: false },
      { text: "Worm — it is spreading itself automatically to other devices.", correct: false },
    ],
    feedback: {
      correct: "Correct! Spyware = malware that 'secretly watches and collects your activities (passwords, browsing history).' A Trojan describes HOW it disguised itself to get installed — but the BEHAVIOUR being tested (silent data collection) is Spyware. Both can be true at once, but the question asks for the behaviour, not the entry method.",
      wrong: "Trojan = HOW malware enters (disguise). Spyware = WHAT it does (silently collects data). Your notes define Spyware as malware that 'secretly watches and collects your activities (passwords, browsing history).' The behaviour described — silent keystroke recording — is the definition of Spyware, not Trojan.",
    },
    tip: "Trojan Horse = disguises itself to get installed. Spyware = silently monitors and collects data. These describe different aspects. When a question focuses on the BEHAVIOUR of silent collection, the answer is Spyware. When it focuses on the DISGUISE method, it's Trojan.",
  },

  {
    id: 8,
    topic: 'Malware — Ransomware',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Ransomware Attack',
    characterRole: 'School Admin Computer',
    expression: 'neutral',
    bubble: "The school administrator arrives to find ALL files on the office computer have been renamed with strange extensions and cannot be opened. A message on screen reads: 'ALL YOUR FILES ARE ENCRYPTED. Transfer ₦150,000 in Bitcoin to this address within 72 hours or your files will be permanently destroyed.'",
    question: "Using your notes' description of malware types, which specific type attacked the school's computer?",
    choices: [
      { text: "Spyware — it secretly collected the school's confidential student data.", correct: false },
      { text: "Adware — it is flooding the screen with payment demand advertisements.", correct: false },
      { text: "Ransomware — it locked and encrypted the files and is demanding payment (ransom) to restore access.", correct: true },
      { text: "Worm — it spread across the school network and encrypted multiple computers automatically.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define Ransomware as malware that 'locks or encrypts your files and demands payment (ransom) to unlock them.' The ₦150,000 Bitcoin demand and the 72-hour deadline are classic ransomware features. This is one of the most damaging malware types because the files are genuinely inaccessible without the decryption key.",
      wrong: "Your notes define Ransomware as malware that 'locks or encrypts your files and demands payment (ransom) to unlock them.' The keywords are: encrypted files + payment demand = Ransomware. Adware shows advertisements. Spyware collects data silently. Worm spreads automatically but doesn't necessarily encrypt files.",
    },
    tip: "Ransomware = Ransom + Malware. The two defining features: (1) files are ENCRYPTED/locked and (2) payment (ransom) is DEMANDED to restore access. The only defence against ransomware that works even after infection is having a DATA BACKUP — which is why backup is listed as a key protection practice in Note 2.",
  },

  {
    id: 9,
    topic: 'Malware — Adware',
    noteSection: 'Cybersecurity I',
    badge: 'warn',
    character: 'amara',
    characterName: 'Seun',
    characterRole: 'SS1 Student',
    expression: 'surprised',
    bubble: "After downloading a 'free movie streaming' app from an unknown website, Seun's phone started behaving strangely. Every few minutes, 10–15 pop-up advertisements appear, even when she's not using any app. Her browser keeps automatically redirecting to shopping websites. The ads appear constantly, even when she's offline.",
    question: "Based on the malware types in your notes, which type has infected Seun's phone?",
    choices: [
      { text: "Ransomware — it will soon lock her phone and demand payment.", correct: false },
      { text: "Trojan Horse — it disguised itself as a free streaming app to get installed.", correct: false },
      { text: "Adware — it floods the device with unwanted advertisements.", correct: true },
      { text: "Spyware — it is secretly monitoring her activity through the phone.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define Adware as malware that 'floods your screen with unwanted advertisements.' The constant pop-ups and browser redirects to shopping sites are the defining symptoms of Adware. Like the Spyware/Trojan distinction, Trojan describes HOW it entered (disguise), but Adware describes WHAT it does (floods with ads).",
      wrong: "Your notes list Adware as malware that 'floods your screen with unwanted advertisements.' The behaviour described — constant pop-ups and browser redirects — is precisely the definition of Adware. Trojan = disguise method (not the behaviour). Ransomware = encrypts files + payment demand (no mention here). Spyware = silent data collection (no mention here).",
    },
    tip: "Adware = Ad + Malware. It bombards you with advertisements. Signs: unexpected pop-ups, browser redirects to shopping sites, ads appearing constantly. It is less destructive than ransomware but very annoying and can slow your device significantly.",
  },

  {
    id: 10,
    topic: 'Malware — Virus vs Worm',
    noteSection: 'Cybersecurity I',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'Mr. Obi',
    characterRole: 'Digital Tech Teacher',
    expression: 'neutral',
    bubble: "The IT teacher writes two definitions on the board: 'Type A: Attaches itself to an existing program and only spreads when a user ACTIVELY RUNS that infected program or shares the infected file.' 'Type B: Spreads across networks AUTOMATICALLY — no user needs to click or run anything.'",
    question: "Which option correctly identifies Type A and Type B from your malware notes?",
    choices: [
      { text: "Type A = Worm; Type B = Virus", correct: false },
      { text: "Type A = Ransomware; Type B = Trojan Horse", correct: false },
      { text: "Type A = Virus; Type B = Worm", correct: true },
      { text: "Type A = Spyware; Type B = Adware", correct: false },
    ],
    feedback: {
      correct: "Correct! From your notes: Virus = 'Attaches itself to a program and spreads when you run that program.' Worm = 'Spreads across networks on its own without any user action.' The KEY distinction is user dependency: a Virus NEEDS a user to run or share the file; a Worm spreads AUTOMATICALLY without any user involvement.",
      wrong: "Your notes define: Virus = 'Attaches itself to a program and spreads when you RUN that program' (needs user action). Worm = 'Spreads across networks on its OWN without any user action' (fully automatic). Type A requires a user to run the infected program = Virus. Type B spreads with no user input = Worm.",
    },
    tip: "The single critical difference between a Virus and a Worm: a VIRUS needs a user to run the infected file to spread. A WORM spreads by itself with zero user action. Remember: Worm = self-spreading. Virus = user-activated spreading. This distinction appears in your notes comparison table.",
  },

  {
    id: 11,
    topic: 'Malware — Trojan Horse',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Fake Software',
    characterRole: 'Malware Disguise',
    expression: 'neutral',
    bubble: "Biodun downloads what appears to be a legitimate 'free antivirus scanner' from an unofficial website. After installing it, the software appears to scan his computer normally. But secretly, it has opened a hidden 'back door' in his system, allowing criminals to remotely access his computer, steal files, and install more malware.",
    question: "The malware pretended to be a legitimate program to get installed, then performed harmful actions. Which malware type from your notes does this describe?",
    choices: [
      { text: "Worm — because it is now installing more malware, spreading to other programs.", correct: false },
      { text: "Spyware — because it is secretly collecting his files and activities.", correct: false },
      { text: "Ransomware — because it will eventually encrypt his files and demand payment.", correct: false },
      { text: "Trojan Horse — it disguises itself as a legitimate application but performs harmful actions.", correct: true },
    ],
    feedback: {
      correct: "Correct! Your notes define Trojan Horse as malware that 'disguises itself as a legitimate app but performs harmful actions.' The key feature is the DISGUISE — it looks like a real, useful program. Unlike a Worm (which spreads automatically) or Spyware (which collects data specifically), a Trojan's defining characteristic is the deceptive disguise.",
      wrong: "Your notes define Trojan Horse as malware that 'disguises itself as a legitimate app but performs harmful actions.' The KEY feature here is DISGUISE — it pretended to be a real antivirus tool. While it may also spy (Spyware behaviour), the defining characteristic asked about is the disguise/pretense = Trojan Horse.",
    },
    tip: "Trojan Horse = named after the Greek myth. Just like the wooden horse looked like a gift but hid soldiers inside, a Trojan looks like a legitimate, helpful program but hides malware inside. The disguise IS the defining feature. Your notes example: 'disguises itself as a legitimate app but performs harmful actions.'",
  },

  // ─── NOTE 1 › PHISHING ───────────────────────────────────────────────────────

  {
    id: 12,
    topic: 'Phishing — Recognition',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Fake School Email',
    characterRole: 'Phishing Attempt',
    expression: 'neutral',
    bubble: "Kemi receives an email: 'URGENT — Your school portal account will be DELETED in 24 hours! Click here to verify your details: http://schoolportal-ng-secure.info/verify.' The email sender shows: schooladmin@gmail.com. Kemi almost clicks the link.",
    question: "Using the phishing prevention steps in your notes, what should Kemi check FIRST before doing anything else?",
    choices: [
      { text: "Call a friend to ask if they received the same email.", correct: false },
      { text: "Click the link but enter fake information just to see what happens.", correct: false },
      { text: "Check the sender's email address carefully — a real school uses an official domain, not @gmail.com.", correct: true },
      { text: "Forward it to the school IT department without reading it.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes list as the FIRST phishing prevention tip: 'Always check the sender's email address carefully before clicking any link.' A real school portal email would never come from @gmail.com — it would come from the school's official domain. The fake URL (schoolportal-ng-secure.info) is also a red flag from your notes.",
      wrong: "Your notes list the FIRST phishing protection step as: 'Always check the sender's email address carefully before clicking any link.' The sender is schooladmin@gmail.com — a legitimate school would use its own official email domain, not Gmail. This is a classic phishing red flag your notes describe.",
    },
    tip: "Phishing red flags from your notes: (1) Suspicious sender email address (e.g., @gmail.com for a bank/school) (2) Urgent pressure ('24 hours', 'act now') (3) Suspicious link URL that doesn't match the real organisation (4) Request for passwords or sensitive data. Check ALL of these before clicking any link.",
  },

  {
    id: 13,
    topic: 'Phishing vs Hacking — Distinction',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Unknown Attacker',
    characterRole: 'Cybercriminal',
    expression: 'neutral',
    bubble: "Kunle receives an SMS: 'GTBank: Account suspended. Verify now: www.gtbank-secure-ng.com/verify.' The website looks IDENTICAL to real GTBank. Kunle enters his account number and ATM PIN. The criminal captures it all — without ever touching GTBank's real servers or exploiting any software weakness.",
    question: "The criminal used deception — not a technical system exploit. According to your notes, what type of cyber attack is this?",
    choices: [
      { text: "Hacking — the criminal gained unauthorised access to Kunle's bank account.", correct: false },
      { text: "Malware — a virus on Kunle's phone captured his details as he typed them.", correct: false },
      { text: "Phishing — a deceptive message tricked Kunle into willingly entering his details on a fake website.", correct: true },
      { text: "Hacking — because criminals exploited a weakness in the SMS network.", correct: false },
    ],
    feedback: {
      correct: "Correct! Phishing = 'criminals send deceptive messages that appear to come from a trusted source, with the goal of TRICKING the victim into REVEALING sensitive information.' No system was technically broken into — Kunle voluntarily gave his details after being deceived. Your notes even list this exact example: 'A fake school portal login page that looks exactly like the real one.'",
      wrong: "Key distinction: Hacking = 'gaining unauthorised access by EXPLOITING WEAKNESSES in a system.' Phishing = 'deceptive messages that TRICK the victim into REVEALING information themselves.' No software was exploited here. Kunle was deceived into voluntarily entering his own details on a fake site = Phishing.",
    },
    tip: "The difference: Hacking = technical force (exploit + break in). Phishing = psychological trick (deceive + victim gives data willingly). Your notes describe phishing as working through 'fake websites that look identical to the real one' — exactly what happened to Kunle.",
  },

  // ─── NOTE 1 › HACKING ────────────────────────────────────────────────────────

  {
    id: 14,
    topic: 'Hacking — Weak Password Attack',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Account Breach',
    characterRole: 'School Portal Attack',
    expression: 'neutral',
    bubble: "A hacker accessed Ola's school portal account without any special tools — by trying common passwords one by one: 'ola123', 'password', '12345678', 'ola2024'. The fourth attempt worked. The hacker then changed Ola's results, read private teacher comments, and accessed her classmates' data.",
    question: "Which two protection practices from your notes would have MOST effectively prevented this specific attack?",
    choices: [
      { text: "Installing antivirus and enabling a hardware firewall on the school server.", correct: false },
      { text: "Using a strong, unique password AND enabling Two-Factor Authentication (2FA).", correct: true },
      { text: "Regular data backup and encrypting the school portal database.", correct: false },
      { text: "Using HTTPS and a software firewall on the school portal website.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes list under Hacking Prevention: 'Always use strong, unique passwords' AND 'Enable Two-Factor Authentication on email and social media accounts.' A strong password prevents guessing; 2FA ensures that even if a password is guessed, the attacker still cannot log in without the second factor (Ola's phone).",
      wrong: "Your hacking prevention section says: 'Always use strong, unique passwords (mix of letters, numbers, and symbols)' and 'Enable Two-Factor Authentication.' If 'ola2024' had been 'Xt7!kM#29Lq@' — it would never have been guessed. And with 2FA, even a guessed password wouldn't be enough to log in.",
    },
    tip: "Your notes' hacking prevention: strong passwords + 2FA work together as the first line of defence. Antivirus and firewalls protect against malware and network intrusions — but if you have a weak password, no firewall helps. Password strength is your first defence against account hacking.",
  },

  // ─── NOTE 1 › TYPES OF HACKERS ───────────────────────────────────────────────

  {
    id: 15,
    topic: 'Types of Hackers — White vs Grey Hat',
    noteSection: 'Cybersecurity I',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'PocketPay Nigeria',
    characterRole: 'Fintech Company',
    expression: 'neutral',
    bubble: "VACANCY — Cybersecurity Expert Needed: We will pay you to legally attempt to break into our payment system, discover security weaknesses, and report everything to our team BEFORE real criminals find them. The candidate will receive full written authorisation from PocketPay management before any testing begins.",
    question: "Based on the three types of hackers in your notes, what type of hacker is PocketPay looking to hire?",
    choices: [
      { text: "Grey Hat Hacker — they find and report vulnerabilities, which matches this job.", correct: false },
      { text: "Black Hat Hacker — companies need their advanced illegal knowledge to test systems.", correct: false },
      { text: "White Hat Hacker — an ethical professional hired WITH full written permission to legally test security.", correct: true },
      { text: "Grey Hat Hacker — they sometimes ask for a fee, which fits a paid job offer.", correct: false },
    ],
    feedback: {
      correct: "Well done! The critical phrase is 'full written authorisation.' Your notes define White Hat Hacker as 'cybersecurity professionals HIRED to find and fix weaknesses WITH PERMISSION.' Grey Hats also report vulnerabilities — but WITHOUT permission. The legal, authorised, employed nature of this role = White Hat.",
      wrong: "Both White Hat and Grey Hat hackers find and report vulnerabilities. The ONLY difference: White Hat = HIRED + WRITTEN PERMISSION. Grey Hat = no permission, hacks first, reports later (sometimes for a fee). PocketPay said 'full written authorisation from management' = White Hat definition from your notes.",
    },
    tip: "One word separates White Hat from Grey Hat: PERMISSION. White Hat = has permission before hacking. Grey Hat = no permission, but not malicious. Black Hat = no permission + malicious intent. Always look for 'hired' or 'authorised' to identify a White Hat.",
  },

  {
    id: 16,
    topic: 'Types of Hackers — Black Hat',
    noteSection: 'Cybersecurity I',
    badge: 'danger',
    character: 'hacker',
    characterName: 'Breaking News',
    characterRole: 'Criminal Hacker',
    expression: 'neutral',
    bubble: "A news report: 'A hacker accessed the database of a major Nigerian bank, stole the account details of 50,000 customers, and sold the data on the dark web for profit. The hacker had no permission from the bank and used the breach to fraudulently transfer funds from multiple accounts.'",
    question: "This hacker broke into systems without permission and for personal financial gain. According to your notes' hacker classification, what type of hacker is described?",
    choices: [
      { text: "White Hat Hacker — because they found a real security weakness in the bank's system.", correct: false },
      { text: "Grey Hat Hacker — because they exposed a security problem the bank should fix.", correct: false },
      { text: "Black Hat Hacker — a criminal who breaks into systems illegally for personal gain, financial profit, or to cause damage.", correct: true },
      { text: "Grey Hat Hacker — because they didn't cause physical harm to anyone.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define a Black Hat Hacker as 'a criminal hacker who breaks into systems illegally for personal gain, financial profit, or to cause damage. These are the bad guys.' All three defining features are present: illegal access + financial profit + criminal intent. White Hats and Grey Hats do not steal data for profit.",
      wrong: "Your notes define Black Hat = 'criminal hacker who breaks into systems ILLEGALLY for PERSONAL GAIN, FINANCIAL PROFIT, or to CAUSE DAMAGE.' All three indicators are present here: illegal (no permission) + financial profit (sold data, stole funds) + criminal intent. Grey Hat may hack without permission but does not sell data for profit.",
    },
    tip: "The three types: Black Hat = illegal + for personal gain (criminal). White Hat = legal + hired + for protection (security professional). Grey Hat = in between — hacks without permission but doesn't intend harm, may report what they find. Intent and permission are the two keys to classification.",
  },

  // ─── NOTE 2 › ANTIVIRUS ──────────────────────────────────────────────────────

  {
    id: 17,
    topic: 'Antivirus — Quarantine',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'amara',
    characterName: 'Tunde',
    characterRole: 'SS1 Student',
    expression: 'surprised',
    bubble: "My Kaspersky antivirus detected a suspicious file called 'FreeGame_setup.exe' and immediately moved it to a special isolated folder. The file is locked there — it cannot run or affect my computer. But I'm confused because it hasn't been deleted. I can still see it in the antivirus dashboard.",
    question: "What specific action did the antivirus perform? Use the exact term from your Cybersecurity II notes.",
    choices: [
      { text: "Encryption — it converted the file into unreadable code to prevent it from being used.", correct: false },
      { text: "Authentication — it verified whether the file was safe before allowing it to run.", correct: false },
      { text: "Quarantine — it isolated the detected threat so it cannot execute or spread, pending removal.", correct: true },
      { text: "Backup — it saved a protected copy of the file to a separate location.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes' glossary: Quarantine = 'The action of isolating a detected threat so it cannot execute or spread, pending removal.' The file is NOT deleted immediately in case it is a false positive — so the user can review it. This is standard antivirus behaviour described precisely in your notes.",
      wrong: "From your notes glossary: Quarantine = 'The action of isolating a detected threat so it cannot execute or spread, pending removal.' Clues: 'moved to special isolated folder' + 'cannot run' + 'still visible in dashboard.' Encryption makes data unreadable. Authentication verifies identity. Backup creates copies. Only Quarantine fits.",
    },
    tip: "Quarantine ≠ Delete. Antivirus quarantines (isolates) rather than immediately deleting because some files may be false positives. The file sits in a locked folder where it's harmless. You can then review it and either delete it permanently or restore it if it turns out to be safe.",
  },

  {
    id: 18,
    topic: 'Antivirus — Custom Scan',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'IT Teacher',
    characterRole: 'Computer Lab',
    expression: 'neutral',
    bubble: "Students in the computer lab are asked to plug in their personal USB drives to transfer class notes. The IT teacher says: 'Before you open ANY file from that USB, I want each of you to scan ONLY the USB drive — not the entire computer. We don't have time for a full computer scan right now.'",
    question: "According to the types of antivirus scans in your Cybersecurity II notes, which scan type should each student select?",
    choices: [
      { text: "Full System Scan — it is the most thorough and will definitely catch any USB threats.", correct: false },
      { text: "Real-Time Scan — it automatically scans the USB as soon as it is plugged in.", correct: false },
      { text: "Scheduled Scan — it runs automatically at a preset time to cover the USB.", correct: false },
      { text: "Custom Scan — it allows the user to select specific drives or folders to scan.", correct: true },
    ],
    feedback: {
      correct: "Correct! Your notes define Custom Scan as: 'Allows the user to choose specific folders, drives, or files to scan. Useful for checking a newly plugged-in USB drive.' This is the ONLY scan type that lets you target just the USB drive instead of scanning the entire computer.",
      wrong: "Your notes define Custom Scan as: 'Allows the user to choose specific folders, drives, or files to scan — useful for checking a newly plugged-in USB drive.' Your notes even give this EXACT use case. Full System Scan checks everything (too slow). Real-Time runs continuously but doesn't specifically target the USB. Scheduled runs at preset times. Only Custom Scan = targeted USB-only scan.",
    },
    tip: "Memorise when to use each scan type. Real-Time = always running in background. Full System = thorough weekly scan. Quick Scan = fast check of common malware locations. Custom Scan = when you want to check a SPECIFIC drive, folder, or file — like a newly plugged USB. Your notes give 'USB drive' as the exact Custom Scan example.",
  },

  {
    id: 19,
    topic: 'Antivirus — Real-Time Scan',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'amara',
    characterName: 'Ngozi',
    characterRole: 'SS1 Student',
    expression: 'happy',
    bubble: "While typing a report on her laptop, Ngozi received an email with an attachment. She clicked 'download' and — INSTANTLY, without her doing anything else — her antivirus popped up: 'Threat Detected! File quarantined.' The file never even opened. Ngozi didn't manually start any scan.",
    question: "Which type of antivirus scan caught this threat the moment the file was downloaded, without Ngozi starting anything manually?",
    choices: [
      { text: "Full System Scan — it runs continuously and checks every new action.", correct: false },
      { text: "Real-Time Scan — it continuously monitors all running processes and new files as they appear.", correct: true },
      { text: "Scheduled Scan — it was programmed to run at this exact time automatically.", correct: false },
      { text: "Custom Scan — it was pre-configured to monitor the downloads folder.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define Real-Time Scan as: 'Runs continuously in the background; IMMEDIATELY scans any new file or program as it is opened or downloaded.' This is exactly what happened — no manual trigger, immediate detection at download. This is the most important type of scan for day-to-day protection.",
      wrong: "Your notes define Real-Time Scan as: 'Runs continuously in the background; immediately scans any new file or program as it is opened or downloaded.' The keywords are: INSTANT detection WITHOUT manual start = Real-Time Scan. Full System Scan is manual/scheduled. Scheduled Scan runs at preset times. Custom Scan requires the user to choose what to scan.",
    },
    tip: "Real-Time Scan = always-on background protection. It runs continuously and catches threats the MOMENT a new file appears — without you doing anything. This is why your notes say to always keep antivirus running — the real-time protection is your automatic first line of defence.",
  },

  {
    id: 20,
    topic: 'Antivirus — Zero-Day Limitation',
    noteSection: 'Cybersecurity II',
    badge: 'danger',
    character: 'amara',
    characterName: 'Funke',
    characterRole: 'SS1 Student',
    expression: 'worried',
    bubble: "Funke has Avast Antivirus fully installed, updated just yesterday. But she still got infected by ransomware through an email attachment — and Avast detected NOTHING. How is this possible when her antivirus is fully updated?",
    question: "According to the limitations of antivirus in your Cybersecurity II notes, what is the MOST LIKELY reason a fully updated antivirus failed?",
    choices: [
      { text: "Avast is a fake antivirus — only Norton and Kaspersky are listed as reliable in the notes.", correct: false },
      { text: "Antivirus cannot scan email attachments — it only checks files already saved on the computer.", correct: false },
      { text: "The quarantine folder was full and couldn't accept the new threat.", correct: false },
      { text: "Zero-day attack — the ransomware was brand new with no virus signature in any database yet.", correct: true },
    ],
    feedback: {
      correct: "Exactly right! Your notes state clearly: 'Cannot stop a threat it has not been updated to recognize (zero-day attacks).' Antivirus uses virus SIGNATURES — unique patterns of known malware. A brand-new zero-day attack has no signature yet. No antivirus, however updated, can detect code it has never seen before.",
      wrong: "Avast IS listed in your notes as a legitimate antivirus. The limitation section states: 'Cannot stop a threat it has not been updated to recognize (zero-day attacks).' Your glossary: 'Zero-Day Attack = An attack that exploits a vulnerability before developers have had chance to release a fix.' New malware = no signature = antivirus cannot detect it.",
    },
    tip: "Antivirus limitation from your notes: 'Cannot stop a threat it has not been updated to recognize (zero-day attacks).' Antivirus relies on virus SIGNATURES (patterns of known malware). Zero-day = brand new malware with no known signature. This is why your notes say to combine antivirus WITH other protection methods — no single tool is enough.",
  },

  // ─── NOTE 2 › FIREWALLS ──────────────────────────────────────────────────────

  {
    id: 21,
    topic: 'Firewalls — Data Packets',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'Mr. Obi',
    characterRole: 'Digital Tech Teacher',
    expression: 'neutral',
    bubble: "Mr. Obi explains: 'When data travels across a network to reach your computer, it is broken into small units for transmission. A firewall sits at the network boundary and examines EACH of these small units against its security rules — allowing safe ones through and blocking anything suspicious.'",
    question: "According to your Cybersecurity II notes on how firewalls work, what are these small units of data called?",
    choices: [
      { text: "Virus Signatures — unique patterns used to identify malware.", correct: false },
      { text: "Data Packets — small units of data transmitted across a network, inspected by firewalls.", correct: true },
      { text: "Authentication Tokens — codes used to verify a user's identity.", correct: false },
      { text: "Encryption Keys — codes used to lock and unlock protected data.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state: 'Every piece of data sent across a network is broken into small units called PACKETS. When these packets arrive at your computer, the firewall inspects them against a set of rules.' Your glossary also defines: 'Data Packet: A small unit of data transmitted across a network. Firewalls inspect these packets against security rules.'",
      wrong: "Your notes say: 'Every piece of data sent across a network is broken into small units called PACKETS. When these packets arrive at your computer, the firewall inspects them.' Your glossary even gives a specific definition: 'Data Packet: A small unit of data transmitted across a network. Firewalls inspect these packets against security rules.'",
    },
    tip: "Your notes' glossary: Data Packet = 'A small unit of data transmitted across a network. Firewalls inspect these packets against security rules.' When you send a message or load a website, the data is split into packets, transmitted, and reassembled at the destination. The firewall checks each packet before it enters your system.",
  },

  {
    id: 22,
    topic: 'Firewalls — Hardware vs Software',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'IT Coordinator',
    characterRole: 'School Network',
    expression: 'neutral',
    bubble: "Greenfield School wants ONE security device at the internet entry point to protect ALL 40 computers in the school network simultaneously — without installing any extra security program on each individual machine.",
    question: "Which type of firewall from your Cybersecurity II notes is being described?",
    choices: [
      { text: "Software firewall — like Windows Firewall, configurable on each computer.", correct: false },
      { text: "Hardware firewall — a physical device that protects all devices on a network at once.", correct: true },
      { text: "Software firewall — because it is more powerful than hardware for school networks.", correct: false },
      { text: "Antivirus software — because it monitors all incoming network traffic centrally.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes comparison table: Software Firewall = 'Protects ONLY the computer it is installed on.' Hardware Firewall = 'Protects ALL devices on the network at once.' Examples of hardware firewalls from your notes: Cisco ASA, SonicWall, Fortinet. One device, whole network = hardware firewall.",
      wrong: "From your notes comparison table: Software Firewall = 'Protects only the computer it is installed on.' Hardware Firewall = 'Protects all devices on the network at once — best for offices, schools, and organisations.' The scenario needs ONE device for 40 computers = hardware firewall.",
    },
    tip: "Notes comparison table key row — 'Protection scope': Software Firewall = 'Only the computer it is installed on.' Hardware Firewall = 'All devices on the network at once.' Also remember: Software Firewalls are often FREE (Windows Firewall). Hardware Firewalls 'can be expensive.' Use hardware for organisations, software for individual computers.",
  },

  {
    id: 23,
    topic: 'Firewalls — Insider Threat Limitation',
    noteSection: 'Cybersecurity II',
    badge: 'warn',
    character: 'mrObi',
    characterName: 'Hospital Network',
    characterRole: 'Internal Threat',
    expression: 'serious',
    bubble: "A hospital installed an enterprise-grade Cisco hardware firewall that successfully blocked all external cyber attacks. However, a disgruntled staff member — using his own authorised login on an internal hospital computer — deleted and leaked confidential patient records. The firewall did NOT stop him.",
    question: "Why couldn't the hospital's properly configured firewall prevent this internal attack? Use the specific limitation from your Cybersecurity II notes.",
    choices: [
      { text: "The hardware firewall needed to be updated — only updated firewalls can detect internal threats.", correct: false },
      { text: "Hardware firewalls only protect wireless networks, not wired internal computers.", correct: false },
      { text: "Firewalls cannot prevent insider attacks — threats from within the trusted network bypass firewall rules.", correct: true },
      { text: "The hospital needed a software firewall as well — hardware alone cannot stop internal threats.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state this exact limitation: 'Cannot prevent insider attacks — threats from within the network.' A firewall is designed to monitor traffic BETWEEN the trusted internal network and the untrusted external internet. An employee already inside the trusted network is not subject to those boundary rules.",
      wrong: "Your notes' firewall limitations include: 'Cannot prevent insider attacks — threats from within the network.' A firewall controls what enters from OUTSIDE. A staff member already inside the trusted network bypasses the firewall completely — they are not 'incoming external traffic.' No firewall type prevents this; you need access controls and monitoring instead.",
    },
    tip: "Firewall limitation from your notes: 'Cannot prevent insider attacks — threats from within the network.' Firewalls guard the BOUNDARY between inside and outside. Someone already INSIDE (an employee, student) is already past the firewall. This is why organisations need multiple layers: firewalls (external), access controls, monitoring, and staff training.",
  },

  {
    id: 24,
    topic: 'Firewalls — Allowed Traffic Limitation',
    noteSection: 'Cybersecurity II',
    badge: 'warn',
    character: 'mrObi',
    characterName: 'Hospital Download Incident',
    characterRole: 'Real-World Case Study',
    expression: 'serious',
    bubble: "A hospital's Cisco hardware firewall was fully configured and working. Dr. Aminu downloaded what appeared to be a music file from a random website. The file contained ransomware. The firewall did NOT block it. The ransomware encrypted patient records across the entire network.",
    question: "Using the specific limitations of firewalls in your notes, why did the working firewall fail to stop this download?",
    choices: [
      { text: "Hardware firewalls only block hacking attacks — not malware hidden in downloads.", correct: false },
      { text: "The firewall needed virus signature updates, just like antivirus software.", correct: false },
      { text: "Firewalls cannot stop threats that arrive through ALLOWED traffic channels — web browsing is permitted traffic.", correct: true },
      { text: "Only software firewalls inspect individual downloads; hardware firewalls only block IP addresses.", correct: false },
    ],
    feedback: {
      correct: "Excellent! This tests the hardest firewall limitation. Your notes: 'Cannot stop threats that come through allowed channels (e.g. email attachments).' Web browsing (HTTP/HTTPS) must be ALLOWED — if the firewall blocked all web traffic, no computer could access the internet. The ransomware hid inside legitimate-looking web traffic.",
      wrong: "Your notes' key limitation: 'Cannot stop threats that come through ALLOWED CHANNELS.' Web browsing uses port 80/443 — standard allowed traffic. Also critical: firewalls do NOT use virus signatures (that is the antivirus's job). This is precisely why your notes say antivirus + firewall must work TOGETHER — they defend different channels.",
    },
    tip: "Firewall limitation: 'Cannot stop threats through allowed channels.' Web browsing, email, and common downloads all use ALLOWED channels. The firewall must permit them or nothing would work. This is why you need BOTH a firewall (blocks suspicious connections) AND antivirus (catches malware that sneaks through allowed traffic).",
  },

  // ─── NOTE 2 › STRONG PASSWORDS ───────────────────────────────────────────────

  {
    id: 25,
    topic: 'Strong Passwords — All Criteria',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'Mr. Obi',
    characterRole: 'Digital Tech Teacher',
    expression: 'serious',
    bubble: "Mr. Obi asks four students to create strong passwords for the school portal. Check each one against ALL criteria from your notes: 12+ characters, uppercase, lowercase, numbers, symbols — AND no personal information, no common dictionary words, and no predictable sequences.",
    question: "Which ONE password meets ALL the criteria of a strong password from your Cybersecurity II notes?",
    choices: [
      { text: "Blessing@secondary — has a symbol and an uppercase letter.", correct: false },
      { text: "Nigeria@1960! — has uppercase, lowercase, symbol, number, and 12 characters.", correct: false },
      { text: "Qwerty!2025# — has symbols and numbers.", correct: false },
      { text: "T3ch!Sch00l#NG24 — uppercase, lowercase, numbers, symbols, 16 characters, no personal info.", correct: true },
    ],
    feedback: {
      correct: "Correct! T3ch!Sch00l#NG24 passes ALL criteria. The others fail: 'Blessing@secondary' = contains a personal name ❌. 'Nigeria@1960!' = contains a country name (your notes say 'does NOT contain common dictionary words — nigeria' is literally in your notes as an example to avoid) ❌. 'Qwerty!2025#' = 'qwerty' is explicitly listed in your notes as a weak common sequence ❌.",
      wrong: "Each option fails one criterion from your notes: 'Blessing@secondary' = personal name (notes say no personal info). 'Nigeria@1960!' = your notes explicitly list 'nigeria' as a word NOT to use. 'Qwerty!2025#' = your notes list 'qwerty' as a weak common sequence. Only T3ch!Sch00l#NG24 passes EVERY rule.",
    },
    tip: "Your notes explicitly list these as examples of words NOT to use: 'nigeria', 'football', 'password', 'admin', 'qwerty'. These appear in your notes' WEAK password characteristics. A password can have symbols and numbers and still be WEAK if it contains any of these. Check every criterion, not just the obvious ones.",
  },

  {
    id: 26,
    topic: 'Strong Passwords — Passphrase',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'Mr. Obi',
    characterRole: 'Digital Tech Teacher',
    expression: 'happy',
    bubble: "Mr. Obi writes on the board: 'Instead of struggling with complicated short passwords, try combining four RANDOM words with numbers and symbols: Mango!Rain#Boat9Star. This is called a PASSPHRASE and it is listed in your notes as a recommended technique.'",
    question: "According to your Cybersecurity II notes, WHY is the passphrase approach recommended?",
    choices: [
      { text: "Because passphrases bypass antivirus detection and are therefore more secure.", correct: false },
      { text: "Because websites store passphrases differently from regular passwords, making them harder to steal.", correct: false },
      { text: "Because it is long (hard for attackers to guess) and can still be memorable to the creator.", correct: true },
      { text: "Because passphrases don't need symbols or numbers to qualify as strong passwords.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state under passphrase tips: 'Use a passphrase: combine 4 random words — long but MEMORABLE.' The two key benefits are: (1) LENGTH — longer passwords are exponentially harder to guess or crack, and (2) MEMORABILITY — unlike 'Xk#92!mL@7', a passphrase like 'Mango!Rain#Boat9Star' can actually be remembered.",
      wrong: "Your notes explain the passphrase approach: 'combine 4 random words — LONG but MEMORABLE.' The reasons are simply (1) length makes it hard to crack and (2) it's memorable. Passphrases still need symbols and numbers to be strong. They are not stored differently by websites. They have nothing to do with antivirus.",
    },
    tip: "Passphrase = 4 random unrelated words + numbers + symbols. Example from your notes: 'Mango!Rain#Boat9Star' — 20 characters, completely random combination, but you can picture a mango in the rain on a boat under stars. Length is the most important factor in password strength — passphrases give you length AND memorability.",
  },

  // ─── NOTE 2 › TWO-FACTOR AUTHENTICATION ─────────────────────────────────────

  {
    id: 27,
    topic: 'Two-Factor Authentication — Protection',
    noteSection: 'Cybersecurity II',
    badge: 'warn',
    character: 'hacker',
    characterName: 'Phisher247',
    characterRole: 'Cybercriminal',
    expression: 'neutral',
    bubble: "I successfully tricked Adaeze into entering her Gmail password on my fake phishing page. I now have her EXACT correct password. I go straight to Gmail and type it in — but Google demands a 6-digit code just sent to Adaeze's registered phone. A phone I don't have.",
    question: "Using the 2FA steps explained in your Cybersecurity II notes, can this criminal access Adaeze's Gmail?",
    choices: [
      { text: "Yes — the password is the only requirement, so having it is enough to log in.", correct: false },
      { text: "Yes — the criminal can request the OTP to be resent to any phone number they choose.", correct: false },
      { text: "No — 2FA requires a second verification code sent to Adaeze's registered phone, which the criminal cannot access.", correct: true },
      { text: "No — Google auto-detects phishing and permanently blocks the criminal's IP address.", correct: false },
    ],
    feedback: {
      correct: "Perfect! Your notes' 2FA steps: Step 1 = password (Factor 1: something you KNOW). Step 2 = OTP to registered phone (Factor 2: something you HAVE). Step 3 = access granted. Your notes: 'Even if a hacker has your password, they cannot log in without the second code.' The criminal is stopped at Step 2.",
      wrong: "Your notes are explicit: 'Even if a hacker has your password, they cannot log in without the second code.' The OTP goes to the phone REGISTERED on HER account — the criminal cannot redirect it. Option D sounds reasonable but Google does not automatically detect phishing on external fake sites. The protection comes entirely from Factor 2.",
    },
    tip: "2FA: Factor 1 = something you KNOW (password — can be stolen via phishing). Factor 2 = something you HAVE (your phone with the OTP — cannot be stolen remotely). Even a perfectly executed phishing attack is defeated by 2FA. Your notes say to 'enable 2FA on all important accounts' — this is exactly why.",
  },

  {
    id: 28,
    topic: 'Two-Factor Authentication — Methods',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'mrObi',
    characterName: 'Mr. Obi',
    characterRole: 'Digital Tech Teacher',
    expression: 'neutral',
    bubble: "Mr. Obi asks: 'Two-Factor Authentication adds a second verification step beyond the password. Your notes list several methods for delivering this second factor. Identify which of the following is NOT listed as a 2FA method in your Cybersecurity II notes.'",
    question: "Which of the following is NOT listed as a 2FA method in your notes?",
    choices: [
      { text: "SMS code sent to your registered phone number.", correct: false },
      { text: "Google Authenticator app generating a time-based code.", correct: false },
      { text: "Fingerprint scan or face recognition (biometric).", correct: false },
      { text: "Email password reset link sent to your backup email address.", correct: true },
    ],
    feedback: {
      correct: "Correct! Your notes list these 2FA methods: 'SMS code, Google Authenticator app, email OTP, fingerprint scan, or face recognition.' A password RESET link sent to a backup email is not 2FA — it is account recovery, which actually bypasses security. Your notes do mention 'email OTP' (a one-time code via email) but not a reset link.",
      wrong: "Your notes list these 2FA methods: 'SMS code, Google Authenticator app, email OTP, fingerprint scan, or face recognition.' All three correct options appear in this list. A password RESET LINK is NOT 2FA — it is account recovery that bypasses the password entirely and can actually be exploited by attackers who have access to the backup email.",
    },
    tip: "2FA methods from your notes: SMS code, authenticator app (Google Authenticator), email OTP, fingerprint scan, face recognition. Know the difference between an email OTP (a one-time CODE sent to email — this IS 2FA) and a password reset link (this is account recovery, NOT 2FA and can be a security risk if the email is compromised).",
  },

  // ─── NOTE 2 › OTHER PROTECTION PRACTICES ────────────────────────────────────

  {
    id: 29,
    topic: 'Other Practices — Software Updates',
    noteSection: 'Cybersecurity II',
    badge: 'warn',
    character: 'amara',
    characterName: 'Sola',
    characterRole: 'SS1 Student',
    expression: 'neutral',
    bubble: "Sola's phone has been showing 'System Update Available — includes security patches' for three months. She always dismisses it because she doesn't want her phone to restart. Three months later, a hacker exploits a known vulnerability in her outdated operating system and gains access to her accounts.",
    question: "Which protection practice from Section 5 of your Cybersecurity II notes did Sola fail to follow?",
    choices: [
      { text: "Data Backup — she should have backed up her files before the attack.", correct: false },
      { text: "Regular Software Updates — developers release updates that fix security vulnerabilities.", correct: true },
      { text: "Encryption — she should have encrypted her phone data to prevent access.", correct: false },
      { text: "Physical Security — she should have used a stronger PIN lock on her phone.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state under Other Protection Practices #1: 'Regular Software Updates — Developers release updates that FIX SECURITY VULNERABILITIES. Keeping your OS and apps updated CLOSES THESE GAPS before attackers exploit them.' Sola's three-month delay meant a known, already-patched vulnerability remained open on her phone.",
      wrong: "Section 5 of your notes lists 'Regular Software Updates' as the first other protection practice: 'Developers release updates that fix security vulnerabilities. Keeping your OS and apps updated closes these gaps BEFORE attackers exploit them.' The hacker exploited a KNOWN vulnerability — one that had already been patched in the update Sola kept ignoring.",
    },
    tip: "Software updates patch (fix) KNOWN vulnerabilities. When developers discover a weakness in their software, they release an update. Until you install it, your device has a known gap that hackers can exploit. Your notes say updates 'close these gaps before attackers exploit them' — but only if you install them promptly.",
  },

  {
    id: 30,
    topic: 'Other Practices — Data Backup',
    noteSection: 'Cybersecurity II',
    badge: 'danger',
    character: 'amara',
    characterName: 'Biodun',
    characterRole: 'SS1 Student',
    expression: 'worried',
    bubble: "Biodun had 6 months of research for his school project saved ONLY on his laptop. Ransomware infected his laptop, encrypted all his files, and demanded ₦80,000 to restore them. He refused to pay but had absolutely no way to recover his work. All 6 months of research was permanently lost.",
    question: "Which protection practice from your Cybersecurity II notes, if Biodun had followed it, would have allowed him to recover his files WITHOUT paying the ransom?",
    choices: [
      { text: "Installing antivirus — it would have automatically restored his encrypted files after detection.", correct: false },
      { text: "Using a stronger password — it would have prevented the ransomware from encrypting his files.", correct: false },
      { text: "Data Backup — regularly saving copies to an external drive or cloud service ensures recovery even after ransomware.", correct: true },
      { text: "Enabling a firewall — it would have blocked the ransomware from activating on his laptop.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes state: 'Data Backup — Regularly backing up important files to an external drive or cloud service ensures you can recover data even if ransomware or hardware failure strikes.' This is the ONLY protection that works AFTER ransomware has already encrypted files. You simply restore from backup and ignore the ransom demand.",
      wrong: "Your notes: 'Data Backup — ensures you can recover data even if RANSOMWARE or hardware failure strikes.' This is the specific scenario your notes give for data backup. Antivirus cannot restore already-encrypted files. Stronger passwords don't prevent ransomware (which comes through downloads/email). Only a backup gives you a clean copy to restore.",
    },
    tip: "Data Backup is the ONLY effective defence against already-executed ransomware. If your files are encrypted and you have a backup, you restore from backup and don't need to pay. Without backup, you either pay the ransom or lose your data permanently. Your notes specifically mention ransomware as the reason to keep backups.",
  },

  {
    id: 31,
    topic: 'Other Practices — Encryption',
    noteSection: 'Cybersecurity II',
    badge: 'skill',
    character: 'amara',
    characterName: 'Amaka',
    characterRole: 'SS1 Student',
    expression: 'neutral',
    bubble: "Amaka sends a private health document through an unencrypted messaging app — a hacker intercepts and reads it easily. Later, her friend sends a similar document through WhatsApp. The same hacker intercepts it but sees only meaningless scrambled characters — completely unreadable.",
    question: "According to your Cybersecurity II notes, why couldn't the hacker read the document sent via WhatsApp?",
    choices: [
      { text: "WhatsApp uses a stronger internet connection that prevents interception.", correct: false },
      { text: "The document was too large for the hacker's interception tool to process.", correct: false },
      { text: "WhatsApp uses encryption — data is converted into unreadable code, only decodable by the intended recipient.", correct: true },
      { text: "WhatsApp requires 2FA verification before any file can be sent or received.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes define Encryption (both in the glossary and in Section 5): 'Converting data into unreadable code. Even if stolen, encrypted data cannot be read without the decryption key.' Your notes also say 'Use encrypted messaging apps (e.g. WhatsApp, Signal)' — WhatsApp is directly listed as an example of encryption in practice.",
      wrong: "Your notes define Encryption as: 'Converts data into unreadable code. Even if stolen, encrypted data cannot be read without the decryption key.' Section 5 even says: 'Use encrypted messaging apps (e.g. WhatsApp, Signal).' WhatsApp is specifically listed in your notes as an example of encryption — that's exactly why the intercepted document was unreadable.",
    },
    tip: "Encryption from your notes: 'Converting data into unreadable code that can only be read by authorized parties.' Your notes list WhatsApp and Signal as examples of encrypted messaging apps. Even if a hacker intercepts encrypted data, they see only scrambled characters — useless without the decryption key.",
  },

  {
    id: 32,
    topic: 'Other Practices — Physical Security',
    noteSection: 'Cybersecurity II',
    badge: 'warn',
    character: 'amara',
    characterName: 'Damilola',
    characterRole: 'SS1 Student',
    expression: 'neutral',
    bubble: "During a free period, Damilola quickly runs to the cafeteria for 5 minutes and leaves his laptop open and LOGGED IN on his desk in an empty classroom. When he returns, he notices a classmate had walked in and could see his school portal with all his results, teacher comments, and personal details fully visible.",
    question: "Which protection practice from Section 5 of your Cybersecurity II notes did Damilola fail to follow?",
    choices: [
      { text: "Regular Software Updates — his operating system may be outdated and vulnerable.", correct: false },
      { text: "Safe Browsing Habits — he should have checked for https:// before logging in.", correct: false },
      { text: "Physical Security — lock your device screen when stepping away; never leave devices unattended.", correct: true },
      { text: "Encryption — he should have encrypted his school portal login details.", correct: false },
    ],
    feedback: {
      correct: "Correct! Your notes list Physical Security as a protection practice: 'Lock your device screen when not in use. Never leave your computer or phone unattended in a public place. Use screen locks and PINs.' Damilola left his logged-in laptop unattended — a physical security failure that required no technical hacking to exploit.",
      wrong: "Section 5, Practice #6: Physical Security — 'Lock your device screen when not in use. Never leave your computer or phone unattended in a public place.' No hacking was involved — the classmate simply walked up to an unlocked, unattended logged-in laptop. This is a physical security failure, not a software or network vulnerability.",
    },
    tip: "Physical security from your notes: lock screen + don't leave devices unattended. Not all attacks are digital — sometimes the simplest breach is someone walking up to your unlocked, unattended device. Your notes specifically say 'use screen locks and PINs' and 'never leave devices unattended in a public place.'",
  },

]

// Randomly pick `count` questions from the full pool each session
export function getRandomScenarios(count = 10) {
  const shuffled = [...ALL_SCENARIOS].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
