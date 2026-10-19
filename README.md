# IMAN // BUILD LOG
> **Interactive Engineering Journal & Full-Stack Developer Portfolio**  
> **Owner:** Iman Ayaz | Software Engineering Graduate (LCWU 2022–2026) | Lahore, Pakistan  
> **Positioning:** Frontend Development • Full-Stack (MERN) • AI Applications • Software Quality Assurance (SQA)

---

## 🏛️ System Overview

**IMAN // BUILD LOG** is an original, production-quality personal engineering portfolio built from the ground up for **Iman Ayaz**. Rejecting the generic templates, skill percentage bars, and superficial image grids typical of fresher portfolios, this platform presents software projects as **authentic engineering case studies** ("Problem → Architecture → Trade-Offs → Evidence").

### 🌟 Key Architectural Highlights
- **Engineering Build Log Explorer:** Searchable and filterable case study browser covering Full-Stack, Frontend, AI/ML, and SQA projects with real working filters.
- **Deep Case Study Modal:** Inspect architectural decisions, client/server breakdowns, trade-offs, and lessons learned for 14+ public GitHub repositories.
- **Evidence-Linked Skills Matrix:** Zero arbitrary percentages. Every listed technology (React, Node, Express, scikit-learn, YOLO, Groq API, jsPDF) is directly linked to verified codebases.
- **Career Constellation:** Interactive SVG topological graph mapping education at LCWU, internship roles, skills, and projects, with a full accessible list view alternative.
- **90-Second Recruiter Quick View:** High-density drawer designed for engineering managers and recruiters to evaluate candidate fit in under 90 seconds.
- **Engineering Decision Journal:** Documents real architectural trade-offs (e.g. client-side jsPDF vs server-side Puppeteer, TruncatedSVD for sparse user-item recommendation matrices).
- **Dual-Mode Resilient Contact System:** Express backend with rate-limiting, input sanitization, and honeypot anti-spam. Automatically connects to MongoDB Atlas in production, while falling back seamlessly to local storage during offline/local testing.
- **Accessibility & Motion First:** Full keyboard navigation, visible focus states, WCAG AA contrast compliance, dark/light theme persistence in `localStorage`, and `prefers-reduced-motion` overrides.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Lucide Icons, Custom Editorial Typography |
| **Backend** | Node.js, Express.js, Helmet, CORS, Express-Rate-Limit, Dotenv |
| **Database** | MongoDB Atlas with Mongoose (Dual-mode resilient local fallback) |
| **Testing** | Node.js native test runner, production build audits |
| **Tooling** | Git, npm, PowerShell, Vercel / Render ready |

---

## 🚀 Quickstart for Windows

### 1. Prerequisites
- Node.js v18+ (tested on Node v24.22 LTS)
- npm v9+

### 2. Install Dependencies
```powershell
# From the project root
npm.cmd run install:all
```

### 3. Run Locally (Development)
```powershell
# Starts backend API (port 5000) and frontend client (port 5173) simultaneously:
npm.cmd run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## 🧪 Testing & Quality Assurance

Run frontend build audit:
```powershell
npm.cmd run build
```

Run backend automated API tests:
```powershell
npm.cmd run test:server
```

---

## 📚 Documentation Links
- [Windows Setup Guide](docs/SETUP_WINDOWS.md)
- [How to Edit Content & Projects](docs/EDITING_GUIDE.md)
- [Production Deployment Guide](docs/DEPLOYMENT_GUIDE.md)
- [Unverified Items & Confirmation Checklist](docs/UNVERIFIED_ITEMS.md)

---

## 📄 License
MIT License © 2026 Iman Ayaz.
