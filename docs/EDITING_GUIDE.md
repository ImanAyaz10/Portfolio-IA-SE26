# Customization & Editing Guide
**File:** `docs/EDITING_GUIDE.md`  
**Primary Config:** `client/src/data/portfolioData.js`

All portfolio content is decoupled from presentation components. You can customize nearly 100% of your portfolio by editing a single configuration file:
👉 `client/src/data/portfolioData.js`

---

## 1. Updating Your Personal Profile & Bio

Open `client/src/data/portfolioData.js` and locate `personalInfo`:

```javascript
export const personalInfo = {
  name: "Iman Ayaz",
  roleTitle: "Software Engineering Graduate",
  specializations: [
    "Frontend Development",
    "AI Applications",
    "Software Quality Assurance",
    "Full-Stack Projects"
  ],
  location: "Lahore, Pakistan",
  introduction: "Your updated introduction text here...",
  socials: {
    github: "https://github.com/ImanAyaz10",
    linkedin: "https://www.linkedin.com/in/iman-ayaz-853b3a279/",
    email: "your-email@example.com",
  },
};
```

Changes update immediately on the website without touching JSX components!

---

## 2. Adding Your Profile Picture

1. Choose a square photo (recommended dimensions: `600x600` or `800x800` pixels, JPG or PNG).
2. Save it to:
   ```
   client/public/assets/profile-photo.jpg
   ```
3. Refresh the website. The avatar slot in the Hero section will automatically display your picture.
4. If the file is absent or the name does not match, the website gracefully falls back to an aesthetic technical monogram avatar ("IA").

---

## 3. Adding Your PDF Resume

1. Export your resume from Word, Canva, or LaTeX as a PDF.
2. Save it to:
   ```
   client/public/assets/Iman_Ayaz_Resume.pdf
   ```
3. When recruiters click **"Download PDF"** in the navigation bar, hero, or recruiter view, this exact file is downloaded.

---

## 4. How to Add a New Project Case Study

To add a new project to your Build Log, open `client/src/data/portfolioData.js` and add an entry to the `projects` array:

```javascript
{
  id: "my-new-app",                     // Unique identifier (lowercase, hyphens)
  title: "My New Application Title",
  tagline: "One sentence summarizing what it does and why it matters.",
  category: "frontend",                 // Options: "frontend", "fullstack", "aiml", "sqa"
  type: "Full-Stack Web Application",
  status: "Verified Repo",              // e.g. "Verified Demo & Repo", "In Progress"
  statusBadge: "completed",             // "completed" or "in-progress"
  featured: false,                      // Set to true to highlight in top cards
  github: "https://github.com/ImanAyaz10/your-repo-name",
  demo: "https://your-demo-url.vercel.app/", // or null if no live demo yet
  date: "2026",

  // Case Study Sections
  problem: "What real problem does this solve?",
  solution: "How does the application solve it technically?",
  evidence: "Proof of functionality, tests, or live URL.",
  myContribution: "What specific modules did you implement?",
  teamNote: "Individual project or collaborative notes.",

  techStack: ["React.js", "Node.js", "Tailwind CSS"],

  architecture: {
    client: "Description of client architecture...",
    server: "Description of server architecture...",
  },

  engineeringDecisions: [
    {
      decision: "Why did you choose tool X over Y?",
      rationale: "Technical reason (speed, size, memory)...",
      tradeoff: "What was sacrificed (e.g. initial setup time)?"
    }
  ],

  challengesAndLessons: "What edge case or bug did you overcome?"
}
```

Once saved:
- The project will automatically appear in the **Build Log** explorer.
- It will be filterable by category and searchable by title and tech stack.
- Clicking **"Case Study Log"** will automatically open the deep case-study modal with your architecture and trade-offs!

---

## 5. Adding or Editing Skills

In `client/src/data/portfolioData.js`, edit `skillsData`. Each skill can list projects where it was verified:

```javascript
{
  name: "React.js",
  level: "Primary",           // "Primary", "Competent", or "Exploring"
  projects: ["lawbridge", "jobtrack-pro"] // Project IDs matching the projects array above
}
```

When visitors click a skill pill in the **Skills Matrix**, the website dynamically links and highlights the connected projects!

---

## 6. Updating Experience & Education

Edit the `experience`, `education`, and `certifications` arrays in `client/src/data/portfolioData.js`.
All timeline nodes, duration badges, and course lists update automatically.
