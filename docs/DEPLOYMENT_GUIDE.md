# Production Deployment Guide
**Portfolio:** `IMAN // BUILD LOG`  
**Stack:** React + Vite (Frontend) + Express / Node.js (Backend) + MongoDB Atlas (Database)

This guide walks you through deploying your personal portfolio and API to production for free.

---

## 1. Pushing Your Code to GitHub

1. Open your terminal in `Portfolio-IA-SE'26`.
2. Create a new GitHub repository named `portfolio-buildlog` or `iman-buildlog` at https://github.com/new.
3. Commit and push your workspace:

```powershell
git add .
git commit -m "feat: complete IMAN // BUILD LOG engineering portfolio"
git remote add origin https://github.com/ImanAyaz10/portfolio-buildlog.git
git branch -M main
git push -u origin main
```

---

## 2. Deploying the Frontend to Vercel (Free)

Vercel provides lightning-fast CDN deployment with automatic SSL for React + Vite applications.

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New Project"** and select your repository: `portfolio-buildlog`.
3. In the project configuration:
   - **Root Directory:** Click "Edit" and select `client`.
   - **Framework Preset:** `Vite` (automatically detected).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.
5. Once deployed, Vercel gives you a live URL like `https://iman-buildlog.vercel.app`.

---

## 3. Deploying the Backend to Render (Free)

Render offers free Node.js web services with HTTPS support.

1. Sign in to [Render](https://render.com) using GitHub.
2. Click **"New +"** → **"Web Service"**.
3. Connect your repository: `portfolio-buildlog`.
4. Configure service settings:
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add Environment Variables in the Render dashboard:
   - `NODE_ENV`: `production`
   - `CLIENT_URL`: `https://your-vercel-domain.vercel.app`
   - `MONGODB_URI`: *(Your MongoDB connection string from step 4 below)*
6. Click **Create Web Service**. Your backend will be accessible at `https://your-api.onrender.com`.

---

## 4. Setting Up MongoDB Atlas (Free Tier)

Your portfolio backend stores contact inquiries and messages securely. It runs on a free MongoDB Atlas shared M0 cluster:

1. Sign up or log in at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Click **"Create a Database"** and select the **M0 Free** shared cluster (choose `AWS` / `Frankfurt` or `Singapore` for low latency to Pakistan).
3. Under **Security Quickstart**:
   - Create a database user with username (e.g. `iman_admin`) and a secure password.
   - Under IP Access List, select **"Allow Access from Anywhere"** (`0.0.0.0/0`) so cloud servers (Render) can connect.
4. Click **"Connect"** → **"Drivers"** (Node.js).
5. Copy your connection string:
   ```
   mongodb+srv://iman_admin:<password>@cluster0.abcde.mongodb.net/iman_portfolio?retryWrites=true&w=majority
   ```
6. Paste this URI into:
   - Your local `.env` file (for local development testing).
   - Your Render web service environment variables (for production).

> [!NOTE]
> If `MONGODB_URI` is not provided or fails to connect, the server automatically and transparently falls back to resilient local file storage (`server/data/messages.json`). It will never crash!

---

## 5. Connecting Frontend to Backend in Production

In `client/vite.config.js`, local development uses a proxy:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5000',
  }
}
```

For production, you can create a `client/.env.production` file:
```env
VITE_API_URL=https://your-api.onrender.com
```
And in `client/src/components/Contact.jsx`, the fetch endpoint can use `import.meta.env.VITE_API_URL || ''` prefix.

---

## 6. Live Verification Checklist

Once deployed:
1. Open your live Vercel URL on both desktop and mobile devices.
2. Test the **Dark / Light theme switch**.
3. Filter projects by category and verify that all case study modals open properly.
4. Click **"Recruiter Quick View"** and verify that email copy works.
5. Submit a test message through the contact form and confirm you receive a `201 Created` confirmation.
6. Verify your resume download link.
