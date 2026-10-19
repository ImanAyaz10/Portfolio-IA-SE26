# Unverified Profile Details & Confirmation Checklist
**Document:** `docs/UNVERIFIED_ITEMS.md`  
**Purpose:** Honest record of items requiring your review or confirmation before final public launch.

In keeping with strict engineering integrity, we have strictly avoided inventing numbers, unverified claims, or artificial ratings. The following list identifies items you should review or customize:

---

## 1. Professional Headshot
- **Current State:** A clean, branded SVG technical monogram (`IA`) is displayed by default.
- **Action Required:** When ready, drop your professional photo into:
  `client/public/assets/profile-photo.jpg`.

---

## 2. PDF Resume File
- **Current State:** A downloadable placeholder link points to `/assets/Iman_Ayaz_Resume.pdf`.
- **Action Required:** Drop your latest exported PDF resume into:
  `client/public/assets/Iman_Ayaz_Resume.pdf`.

---

## 3. Internship Dates & Details Confirmation
- **CodeAlpha AI Internship:**
  - Recorded as: *AI Intern (Feb 2026 – Mar 2026)*.
  - Linked Deliverable: AI Multilingual Translation Tool (`CodeAlpha_TranslationTool`).
  - *Please confirm if the end date is March 2026 or ongoing.*
- **Elevvo Pathways Frontend Internship:**
  - Recorded as: *Frontend Web Developer Intern (Feb 2026 – Mar 2026)*.
  - Linked Deliverables: Weather Dashboard & ML projects.
  - *Please confirm if this was completed or continues.*
- **Dr. Coder Internship:**
  - Recorded as: *Frontend Developer Intern (Jul 2025 – Dec 2025)*.
  - *Please verify if the title was "Frontend Developer Intern" or "React Developer Intern".*

---

## 4. Security Audit Note: Groq API Key in Past Notebook
- **Observation:** In your public repository `CodeAlpha_TranslationTool`, file `app.py` line 45 contained an exposed Groq API token (`gsk_...`) from a Google Colab output session.
- **Action Required (Important Best Practice):**
  1. Log into your [Groq Cloud Console](https://console.groq.com/keys).
  2. Revoke and delete that old API key.
  3. Generate a fresh key and store it only in environment variables (`.env`).
  4. Ensure `.env` is never committed to GitHub (our root `.gitignore` already protects this for your portfolio).

---

## 5. LawBridge Capstone Team Attribution
- **Current State:** Marked as *Final Year Project at LCWU, with individual leadership over Frontend Architecture, UI/UX, jsPDF client document synthesis, and AI streaming endpoints.*
- **Action Required:** If you wish to acknowledge specific faculty advisors or capstone team partners by name, you can add them to `teamNote` inside `client/src/data/portfolioData.js`.

---

## 6. Certificates & Credential URLs
- **Current State:** Certificate titles, issuers, and award recognitions (including Pak Angels Top Performer Award) are recorded without exposing private credential IDs.
- **Action Required:** If you have public verification URLs (e.g. Credly, Google Drive, or issuer certificate verification links), you can add them to the `credentialUrl` field in `client/src/data/portfolioData.js`.
