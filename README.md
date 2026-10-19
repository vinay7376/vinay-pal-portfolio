# Vinay Pal — Production Full-Stack MERN Portfolio

A world-class, production-ready personal portfolio and interactive engineering showcase for **Vinay Pal**, Full-Stack MERN Developer and Computer Science Engineering undergraduate (2023–2027) at United College of Engineering and Research (UCER), Prayagraj.

---

## Architecture & Technology Stack

```
vinay-pal-portfolio/
├── client/                     # Frontend Application
│   ├── public/                 # Static Assets, PDF Resume, OG Images, Sitemap, Robots
│   ├── src/
│   │   ├── components/         # Reusable Modular UI Components
│   │   │   ├── Navbar.jsx      # Glassmorphic Sticky Header & Mobile Drawer
│   │   │   ├── VpLogo.jsx      # Custom VP Monogram Vector
│   │   │   ├── ProjectCard.jsx # Premium Preview Cards with Screenshot Zoom
│   │   │   ├── CaseStudyModal.jsx # Deep Architectural Breakdown Modals
│   │   │   ├── InteractiveTerminal.jsx # Live Diagnostics & REPL Console
│   │   │   ├── InteractiveKanbanPreview.jsx # Live Drag & State Simulator
│   │   │   ├── Footer.jsx      # Editorial Footer & Health Ping Indicator
│   │   │   └── NotFound.jsx    # Custom 404 Route Handler
│   │   ├── sections/           # Primary One-Page Portfolio Sections
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ArchitectureSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── data/               # Verified Data Models & Constants
│   │   └── utils/              # Resilient API Client Layer
│   ├── index.html              # SEO, OpenGraph & Favicon Headers
│   ├── tailwind.config.js      # Custom Dark Palette & Atmospheric Glows
│   └── vite.config.js          # Vite Bundler with API Proxying
└── server/                     # Backend REST API
    ├── src/
    │   ├── config/             # Mongoose Connection & Lifecycle
    │   ├── controllers/        # Contact Inquiries & Health Controllers
    │   ├── middleware/         # Rate Limiting & Error Handlers
    │   ├── models/             # Mongoose Schemas (Contact Inquiry)
    │   ├── routes/             # REST API Routing (/api/contact, /api/health)
    │   └── server.js           # Express Entrypoint, Helmet & CORS
    ├── .env.example            # Environment Variable Documentation
    └── .env                    # Local Runtime Configuration
```

---

## Verified Credentials & Highlights

- **National Percentile:** **99.50%ile** in the *Young Turks Core CS & DSA National Competency Assessment*.
- **Algorithmic Practice:** **200+ Problems Solved** across LeetCode and GeeksforGeeks.
- **Academic Degree:** B.Tech in Computer Science & Engineering (2023–2027) at UCER Prayagraj.
- **Industry Certification:** IBM SkillsBuild MERN Stack Certified & completed IBM PBEL Internship.
- **Hackathons:** Shortlisted for **Smart India Hackathon (SIH 2025)** and **UHack 3.0**; Built **PayRecover AI** for Razorpay AI Buildathon Track 03.
- **Featured Projects:**
  - **PayRecover AI:** Bounded revenue-recovery pipeline across 110 synthetic INR payment failures with deterministic policy guardrails and human escalation thresholds.
  - **Swag-e-Swaad:** Live food ordering platform (`https://swag-e-swaad.vercel.app`) with dynamic dish customization, AI food concierge, and Razorpay HMAC SHA-256 signature verification.
  - **MERN Real-Time Kanban Board:** Drag-and-drop agile board with optimistic local state mutations and subtask progress tracking.
  - **Diagramly:** Architectural whiteboard combining Excalidraw vector canvases with EditorJS notes.

---

## Getting Started Locally

### Prerequisites

- **Node.js:** v18.0.0 or higher (tested on Node v24 LTS)
- **npm:** v9.0.0 or higher
- **MongoDB:** Local MongoDB service (running on port 27017) OR a MongoDB Atlas cluster URI.

### 1. Installation

From the project root:

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

Or using root script:
```bash
npm run install:all
```

### 2. Environment Configuration

Copy the example environment file for the server:

```bash
cd server
cp .env.example .env
```

Contents of `server/.env`:
```env
PORT=5051
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017/vinay_pal_portfolio
RATE_LIMIT_WINDOW_MINUTES=15
RATE_LIMIT_MAX_REQUESTS=100
CONTACT_RATE_LIMIT_MAX=5
NOTIFICATION_EMAIL=vphandia7376@gmail.com
```

### 3. Running Development Servers (One Command)

From the project root (`vinay-pal-portfolio`):

```bash
# Start BOTH Backend API (port 5051) and Frontend (port 5173) together:
npm run dev
```

Or on Windows, simply double-click:
```
run.bat
```

Or if you prefer running in separate terminals:
- **Terminal 1 (Backend):** `npm run dev:server` (Starts at http://localhost:5051)
- **Terminal 2 (Frontend):** `npm run dev:client` (Starts at http://localhost:5173)

---

## Production Build & Verification

To verify the client production build:

```bash
cd client
npm run build
```

This compiles optimized bundles into `client/dist/` with asset minification and zero warnings.

---

## MongoDB Atlas Setup Guide

To connect to a cloud MongoDB Atlas cluster:

1. Sign in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a free shared cluster (M0 sandbox).
3. Under **Database Access**, create a user with read/write privileges.
4. Under **Network Access**, add `0.0.0.0/0` (allow from anywhere) or your hosting IP.
5. Retrieve your connection string from the "Connect" modal:
   ```
   mongodb+srv://<username>:<password>@cluster0.mongodb.net/vinay_pal_portfolio?retryWrites=true&w=majority
   ```
6. Paste the connection string into `server/.env` as `MONGODB_URI`.

---

## Deployment Instructions

### Frontend (Vercel)

1. Push your repository to GitHub (`vinay7376/portfolio`).
2. Go to [Vercel](https://vercel.com/) and click "Add New Project".
3. Select the `client` directory as the Root Directory.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Set environment variable `VITE_API_URL` pointing to your hosted backend (e.g. `https://api.vinaypal.dev`).
8. Click **Deploy**.

### Backend (Render / Railway)

1. In Render, select **New Web Service** and connect your repository.
2. Root Directory: `server`.
3. Runtime: **Node**.
4. Build Command: `npm install`.
5. Start Command: `node src/server.js`.
6. Add environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
   - `CLIENT_ORIGIN`: Your deployed Vercel domain (e.g. `https://vinaypal.dev`)
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
7. Click **Deploy**.

---

## Security, Performance & Accessibility (WCAG)

- **Sanitization & Anti-Spam:** Express middleware strips unsafe HTML tags, validates regex for emails, and enforces a honeypot field (`honeypot`) that traps automated spam bots without false positives.
- **Rate Limiting:** `express-rate-limit` enforces strict IP windowing on `/api/contact` (max 5 requests per 15 minutes) to prevent mail exhaustion and denial-of-service.
- **Accessible Design:** High-contrast slate-on-dark palette, visible `:focus-visible` rings for keyboard navigators, semantic headings, and `prefers-reduced-motion` compliance.
- **Zero Secrets on Client:** All sensitive database credentials remain isolated in server environment variables.
