import { getDBStatus } from '../config/db.js';

export const getHealth = (req, res) => {
  const dbStatus = getDBStatus();
  res.json({
    status: 'healthy',
    service: 'Vinay Pal Portfolio API',
    version: '1.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: {
      status: dbStatus.connected ? 'connected' : 'disconnected',
      readyState: dbStatus.readyState,
      name: dbStatus.databaseName,
    },
    environment: process.env.NODE_ENV || 'development',
  });
};

export const getProjects = (req, res) => {
  const projects = [
    {
      id: 'payrecover-ai',
      title: 'PayRecover AI',
      category: 'Full-Stack & Applied AI',
      subtitle: 'Deterministic Revenue-Recovery Agent for Failed Payments & Invoices',
      tagline: 'Razorpay AI Buildathon Track 03 Project',
      featured: true,
      badge: 'Buildathon Special',
      summary: 'A bounded recovery workflow turning failed INR transactions and checkout abandonment into structured, guardrailed automated actions.',
      problemStatement: 'Payment failures leak revenue, but manual follow-up is slow and inconsistent. Traditional chatbots lack financial guardrails and idempotency controls needed for payment transactions.',
      myContribution: 'Architected the full MERN pipeline: Detect → Diagnose → Decide → Execute → Measure → Audit. Designed deterministic policy guardrails preventing double retries, high-value escalations, and strict Zod validation.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Zod', 'Tailwind CSS', 'OpenAI JSON Mode'],
      keyFeatures: [
        'Multi-stage recovery pipeline across 110 synthetic realistic INR payment cases',
        'Deterministic guardrails: retry limits (max 2), human escalation above ₹10,000 threshold, and confidence floor (0.65)',
        'Idempotency key enforcement (transactionId:action:attemptNumber) preventing duplicate actions',
        'Dual decision engine: OpenAI structured JSON output with an offline deterministic fallback simulator',
        'Immutable audit log tracking every decision, guardrail check, and simulator execution',
        'Real-time operations dashboard with recovery funnel metrics and case inspector'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Ensuring AI cannot hallucinate arbitrary financial operations or execute unchecked transactions.',
          solution: 'Isolated the AI engine to pure diagnosis and recommendation. All actions must pass deterministic policy guardrails before execution.'
        },
        {
          challenge: 'Guaranteed idempotency in distributed retries.',
          solution: 'Implemented composite idempotency hashing per transaction attempt with MongoDB unique indexing.'
        }
      ],
      metrics: [
        { label: 'Synthetic Test Records', value: '110' },
        { label: 'Recovery Funnel Stages', value: '6' },
        { label: 'Policy Rules Enforced', value: '8' }
      ],
      githubUrl: 'https://github.com/vinay7376',
      liveUrl: null,
      images: [
        '/assets/projects/dashboard-overview.png',
        '/assets/projects/recovery-cases.png'
      ]
    },
    {
      id: 'swag-e-swaad',
      title: 'Swag-e-Swaad',
      category: 'Full-Stack MERN',
      subtitle: 'Full-Stack Food Ordering & Delivery Ecosystem',
      tagline: 'Production-Grade Food Commerce Platform',
      featured: true,
      badge: 'Live Production',
      summary: 'An end-to-end food commerce and delivery platform featuring real-time multi-stage order tracking, AI menu pairing, and dual-mode Razorpay checkout.',
      problemStatement: 'Modern food ordering requires seamless customization (portion sizing, add-ons), fault-tolerant payments, and intuitive tracking from kitchen to doorstep.',
      myContribution: 'Engineered the entire frontend and backend from scratch. Developed dynamic dish customization modals, Razorpay HMAC SHA-256 webhook verification, role-based admin controls, and 1-click recruiter demo authentication.',
      techStack: ['React 19', 'Node.js', 'Express 5', 'MongoDB', 'JWT Auth', 'Razorpay API', 'Tailwind CSS'],
      keyFeatures: [
        'Dynamic dish sizing, custom add-ons, and instant cart calculation',
        'AI Food Concierge: Contextual mood chat and intelligent cart pairing suggestions',
        'Dual payment integration: Razorpay checkout with HMAC SHA-256 signature verification plus an offline test simulator',
        'Real-time order progression tracking: Pending → Confirmed → Preparing → Out for Delivery → Delivered',
        'Admin command dashboard with revenue analytics, inventory management, and menu CRUD',
        '1-Click Demo Login credentials allowing immediate recruiter evaluation without sign-up friction'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Preventing checkout inconsistencies when modifying cart item configurations.',
          solution: 'Generated deterministic variant hash keys for customized items so items with different add-ons don’t overwrite one another.'
        },
        {
          challenge: 'Secure payment verification without exposing merchant secret keys.',
          solution: 'Implemented server-side HMAC SHA-256 signature verification validating Razorpay payment signatures before order confirmation.'
        }
      ],
      metrics: [
        { label: 'Menu Items Supported', value: '50+' },
        { label: 'Order Stages Tracked', value: '5' },
        { label: 'Avg API Response', value: '<85ms' }
      ],
      githubUrl: 'https://github.com/vinay7376/Swag-e-Swaad',
      liveUrl: 'https://swag-e-swaad.vercel.app',
      images: [
        '/assets/projects/Veg Biryani.png',
        '/assets/projects/Chicken Biryani.png',
        '/assets/projects/Cheese Garlic Bread.png',
        '/assets/projects/Chicken Tikka.png'
      ]
    },
    {
      id: 'kanban-task-board',
      title: 'MERN Real-Time Kanban Board',
      category: 'Full-Stack & Real-Time',
      subtitle: 'Collaborative Multi-Tenant Task & Sprint Workflow Engine',
      tagline: 'High-Performance Agile Project Manager',
      featured: true,
      badge: 'Interactive Demo Available',
      summary: 'A drag-and-drop task management system featuring multi-column workflow boards, priority tag filtering, subtask tracking, and optimistic state updates.',
      problemStatement: 'Agile teams need responsive task boards that update fluidly without jitter or slow round-trips.',
      myContribution: 'Designed the responsive kanban interface with smooth drag interactions, priority color coding, optimistic UI updates, and REST/WebSocket synchronization architecture.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
      keyFeatures: [
        'Multi-column workflow: Backlog, In Progress, Review, and Done columns',
        'Interactive drag-and-drop task movement with optimistic local state updates',
        'Priority tagging (Urgent, High, Medium, Low) with visual indicator chips',
        'Subtask checklists with real-time percentage progress bars',
        'Search, filter by assignee and tags, and instant column reordering',
        'Local storage persistence with backend API synchronization'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Maintaining instant drag-and-drop responsiveness while syncing updates with the server.',
          solution: 'Applied optimistic UI updates locally, rolling back gracefully if the backend request rejects.'
        }
      ],
      metrics: [
        { label: 'Drag Latency', value: '0ms' },
        { label: 'State Sync', value: 'Optimistic' },
        { label: 'Frame Rate', value: '60 FPS' }
      ],
      githubUrl: 'https://github.com/vinay7376',
      liveUrl: null,
      images: []
    },
    {
      id: 'diagramly',
      title: 'Diagramly',
      category: 'Frontend & Systems',
      subtitle: 'Collaborative Whiteboard & Technical Documentation Canvas',
      tagline: 'Next.js Whiteboarding Suite',
      featured: false,
      badge: 'Modern Tooling',
      summary: 'A collaborative architecture diagramming and documentation tool combining Excalidraw canvas capabilities with EditorJS technical notes.',
      problemStatement: 'Engineers often have to switch between drawing tools and text documentation tools, fragmenting system design workflows.',
      myContribution: 'Integrated Excalidraw whiteboarding with structured EditorJS blocks, Kinde authentication, and PDF document exports.',
      techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Excalidraw', 'EditorJS', 'Kinde Auth', 'Tailwind CSS'],
      keyFeatures: [
        'Vector whiteboard canvas powered by Excalidraw',
        'Integrated modular document editor with checklists, warnings, and code blocks',
        'Secure user authentication with Kinde Auth',
        'Client-side high-resolution PDF export with html2pdf'
      ],
      challengesAndSolutions: [
        {
          challenge: 'Rendering heavy vector canvases and dynamic document editors simultaneously without lag.',
          solution: 'Utilized Next.js dynamic imports with SSR disabled for client-only canvas bundles.'
        }
      ],
      metrics: [
        { label: 'Canvas Tools', value: '15+' },
        { label: 'Export Quality', value: 'Vector' }
      ],
      githubUrl: 'https://github.com/vinay7376',
      liveUrl: null,
      images: [
        '/assets/projects/diagramly-logo.png'
      ]
    }
  ];

  const normalized = projects.map(p => ({
    ...p,
    technologies: p.technologies || p.techStack || [],
    techStack: p.techStack || p.technologies || [],
    overview: p.overview || p.summary || '',
    summary: p.summary || p.overview || '',
    problem: p.problem || p.problemStatement || '',
    problemStatement: p.problemStatement || p.problem || '',
    contribution: p.contribution || p.myContribution || '',
    myContribution: p.myContribution || p.contribution || '',
    features: p.features || p.keyFeatures || [],
    keyFeatures: p.keyFeatures || p.features || [],
    challenges: p.challenges || p.challengesAndSolutions || [],
    challengesAndSolutions: p.challengesAndSolutions || p.challenges || [],
    metrics: p.metrics || [],
    images: p.images || []
  }));

  res.json({ success: true, count: normalized.length, data: normalized });
};

export const getProfile = (req, res) => {
  const profile = {
    name: 'Vinay Pal',
    role: 'Full-Stack MERN Developer',
    education: {
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 - 2027',
      institution: 'United College of Engineering and Research (UCER)',
      location: 'Prayagraj, India',
    },
    status: 'Open to Software Engineering Opportunities (2027 Grad)',
    email: 'vphandia7376@gmail.com',
    links: {
      github: 'https://github.com/vinay7376',
      linkedin: 'https://linkedin.com/in/vinaypal7376/',
      leetcode: 'https://leetcode.com/u/vinay7376/',
      geeksforgeeks: 'https://auth.geeksforgeeks.org/user/vinay7376/',
      resume: '/Vinay_Pal_Resume.pdf',
    },
    verifiedFacts: [
      { label: 'National Rank', value: '99.50%ile', description: 'Young Turks Core CS & DSA National Assessment' },
      { label: 'Problem Solving', value: '200+ Solved', description: 'LeetCode & GeeksforGeeks Algorithmic Challenges' },
      { label: 'Graduation Year', value: '2027', description: 'B.Tech Computer Science & Engineering (UCER)' },
      { label: 'Certification', value: 'IBM SkillsBuild', description: 'MERN Stack Certified & PBEL Intern' },
      { label: 'Mentorship', value: '20+ Juniors', description: 'Guided in Web Development & Git Fundamentals' }
    ]
  };

  res.json({ success: true, data: profile });
};
