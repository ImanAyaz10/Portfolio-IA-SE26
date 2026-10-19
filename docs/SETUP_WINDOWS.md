# Windows Local Development & Setup Guide
**Portfolio:** `IMAN // BUILD LOG`  
**OS:** Windows 10 / 11 (PowerShell & Command Prompt)

This guide walks you through running, developing, and testing your portfolio locally on your Windows laptop.

---

## 1. Prerequisites Check

Open Windows PowerShell or Windows Terminal and verify your tools:

```powershell
node -v
npm.cmd -v
git --version
```

- **Node.js:** v18.0.0 or higher is required (v24.x LTS tested and verified).
- **Git:** Version 2.x installed.

> [!IMPORTANT]
> **Windows PowerShell Script Execution Policy Tip:**
> If you ever see an error like `npm.ps1 cannot be loaded because running scripts is disabled on this system`, simply use `npm.cmd` instead of `npm`, or run your commands in Command Prompt (`cmd.exe`).
> Alternatively, you can run PowerShell as Administrator once and run:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

---

## 2. Project Directory Structure

Your project is organized as a clean MERN architecture:

```
Portfolio-IA-SE'26/
├── client/              # React 18 + Vite + Tailwind CSS frontend (Port 5173)
├── server/              # Node.js + Express backend (Port 5000)
├── docs/                # Guides for Windows setup, editing, and deployment
├── .env.example         # Environment variables template
├── package.json         # Master orchestrator script runner
└── README.md            # Project introduction
```

---

## 3. Starting the Application

You can start the frontend and backend in one command, or in separate terminal tabs.

### Option A: Run Both Together (Recommended)
From the project root (`Portfolio-IA-SE'26`):

```powershell
npm.cmd run dev
```

This starts:
- **Frontend Vite Dev Server:** `http://localhost:5173`
- **Backend Express API:** `http://localhost:5000`

### Option B: Run in Separate Windows (Ideal for debugging)

**Terminal 1 — Backend Express Server:**
```powershell
cd server
npm.cmd run dev
```
You should see:
```
⚡ IMAN // BUILD LOG Server listening on port 5000
📡 Health Check: http://localhost:5000/api/health
```

**Terminal 2 — Frontend Vite Client:**
```powershell
cd client
npm.cmd run dev
```
You should see:
```
  VITE v6.x.x  ready in 400 ms

  ➜  Local:   http://localhost:5173/
```

Open `http://localhost:5173` in your browser.

---

## 4. Testing the Production Build

Before pushing changes or deploying, run a production build to verify there are no compilation errors:

```powershell
npm.cmd run build
```

This generates optimized, minified static files inside `client/dist/`.

---

## 5. Running Automated Backend Tests

We have included automated route tests for health checks, input validation, and honeypot spam protection:

```powershell
cd server
node --no-warnings test/api.test.js
```

All 8 tests should pass with code `0`.
