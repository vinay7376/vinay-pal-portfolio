export const PERSONAL_INFO = {
  name: "Vinay Pal",
  firstName: "Vinay",
  title: "Full-Stack MERN Developer",
  roleSubtitles: [
    "Full-Stack MERN Developer",
    "Frontend Engineer",
    "Scalable API Architect",
    "Algorithmic Problem Solver"
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    period: "2023 - 2027",
    institution: "United College of Engineering and Research (UCER)",
    location: "Prayagraj, Uttar Pradesh, India",
    focus: "Distributed Web Architecture, Data Structures, Database Systems & UI/UX"
  },
  availability: "Available for Software Engineering Opportunities (Graduating 2027)",
  bio: "I am a Computer Science Engineering undergraduate (2023–2027) at United College of Engineering and Research (UCER), Prayagraj, specializing in full-stack MERN development. I design and build production-grade web applications with a focus on scalable REST APIs, rigorous data modeling, clean component architecture, and responsive 60 FPS interfaces. With 200+ algorithmic problems solved across LeetCode & GeeksforGeeks and a 99.50 percentile score in the Young Turks National CS Assessment, I blend theoretical engineering rigor with practical product delivery.",
  email: "vphandia7376@gmail.com",
  socials: {
    github: "https://github.com/vinay7376",
    linkedin: "https://linkedin.com/in/vinaypal7376/",
    leetcode: "https://leetcode.com/u/vinay7376/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/vinay7376/",
  },
  resumePath: "/Vinay_Pal_Resume.pdf",
};

export const VERIFIED_STATS = [
  {
    label: "National Rank",
    value: "99.50%ile",
    description: "Young Turks Core CS & DSA National Assessment",
    badge: "Top 0.5% Nationally"
  },
  {
    label: "Algorithmic Problems",
    value: "200+",
    description: "Solved on LeetCode & GeeksforGeeks",
    badge: "Consistent Practice"
  },
  {
    label: "Degree Graduation",
    value: "2027",
    description: "B.Tech Computer Science & Engineering (UCER)",
    badge: "Undergrad Scholar"
  },
  {
    label: "Industry Credential",
    value: "IBM Certified",
    description: "IBM SkillsBuild MERN & PBEL Internship",
    badge: "Verified Certificate"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend Engineering",
    description: "Crafting fluid, accessible, and reactive user experiences.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "Next.js (App Router)", level: "Intermediate", icon: "Globe" },
      { name: "Redux & Context API", level: "Proficient", icon: "Layers" },
      { name: "Framer Motion", level: "Proficient", icon: "Sparkles" },
      { name: "HTML5 & CSS3 Semantics", level: "Advanced", icon: "Layout" },
      { name: "Responsive & Accessible UI", level: "Advanced", icon: "Smartphone" },
    ]
  },
  {
    category: "Backend & Systems",
    description: "Designing resilient REST endpoints, business logic, and security guardrails.",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "RESTful API Design", level: "Advanced", icon: "Network" },
      { name: "JWT & RBAC Authorization", level: "Proficient", icon: "ShieldCheck" },
      { name: "Server Validation & Error Handling", level: "Advanced", icon: "CheckCircle2" },
      { name: "Socket.IO (Real-Time)", level: "Intermediate", icon: "Radio" },
      { name: "Rate Limiting & Security", level: "Proficient", icon: "Lock" },
    ]
  },
  {
    category: "Databases & Storage",
    description: "Structuring schemas for query efficiency, consistency, and scalability.",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "Mongoose ODM", level: "Advanced", icon: "FileSpreadsheet" },
      { name: "MySQL", level: "Proficient", icon: "Table" },
      { name: "Schema Modeling & Normalization", level: "Proficient", icon: "GitCommit" },
      { name: "Indexing & Query Optimization", level: "Proficient", icon: "Zap" },
    ]
  },
  {
    category: "Developer Tooling & CS Fundamentals",
    description: "Solid theoretical grounding combined with modern engineering workflows.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced (200+ Solved)", icon: "Binary" },
      { name: "C++ (OOP & STL)", level: "Proficient", icon: "Terminal" },
      { name: "Python", level: "Proficient", icon: "Braces" },
      { name: "Git & GitHub Version Control", level: "Advanced", icon: "GitBranch" },
      { name: "Postman API Testing", level: "Proficient", icon: "Send" },
      { name: "Vite & Modern Bundlers", level: "Proficient", icon: "Wrench" },
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "payrecover-ai",
    title: "PayRecover AI",
    category: "Full-Stack & Applied AI",
    badge: "Razorpay AI Buildathon",
    tagline: "Autonomous Revenue-Recovery Pipeline with Guardrailed Execution",
    overview: "Built for the Razorpay AI Buildathon (Track 03), PayRecover AI solves payment leakage by implementing a bounded Detect → Diagnose → Decide → Execute → Measure → Audit pipeline across 110 synthetic INR transactions.",
    problem: "Payment failures and abandoned checkouts leak substantial revenue. Traditional recovery processes are slow and manual, while chatbot solutions lack the determinism, idempotency, and financial guardrails needed for automated recovery.",
    contribution: "Architected the complete full-stack pipeline. Implemented deterministic policy engines enforcing retry limits, high-value transaction escalation thresholds (₹10,000), strict Zod schema validation, and immutable audit logs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Zod", "Tailwind CSS", "OpenAI JSON Mode"],
    metrics: [
      { label: "Synthetic Test Cases", value: "110" },
      { label: "Policy Guardrails", value: "8 Rules" },
      { label: "Execution Latency", value: "<120ms" }
    ],
    features: [
      "End-to-end 6-stage lifecycle: Detect, Diagnose, Decide, Execute, Measure, Audit",
      "Deterministic policy guardrail engine preventing retry abuse and unvetted executions",
      "Human escalation protocol automatically triggered for amounts above ₹10,000",
      "Composite idempotency keys (transactionId:action:attemptNumber) preventing duplicate recovery actions",
      "Dual decision engine: OpenAI structured JSON output paired with an offline deterministic fallback engine",
      "Interactive operations dashboard featuring recovery funnel metrics and case inspector"
    ],
    challenges: [
      {
        title: "Guaranteed Financial Guardrails",
        desc: "AI recommendations cannot directly interact with payment APIs. Isolated the AI to diagnostic recommendation only, passing every action through deterministic policy rules before execution."
      },
      {
        title: "Deterministic Fallback Architecture",
        desc: "Ensured the system functions reliably offline or during API timeouts by building a deterministic fallback engine with identical validation rules."
      }
    ],
    githubUrl: "https://github.com/vinay7376",
    liveUrl: null,
    images: [
      "/assets/projects/dashboard-overview.png",
      "/assets/projects/recovery-cases.png"
    ]
  },
  {
    id: "swag-e-swaad",
    title: "Swag-e-Swaad",
    category: "Full-Stack MERN",
    badge: "Live Production App",
    tagline: "Full-Stack Food Ordering & Delivery Ecosystem with AI Food Concierge",
    overview: "A production food commerce platform built with React and Express featuring dynamic dish customization, multi-stage live order progression, Razorpay checkout with HMAC verification, and an AI menu pairing assistant.",
    problem: "Food delivery platforms need flexible dish customizations (sizes, spice levels, add-ons), fraud-proof payment verification, and transparent order lifecycle updates from placement to delivery.",
    contribution: "Built the entire platform frontend and backend. Engineered the variant calculation engine for custom dish configurations, Razorpay HMAC SHA-256 webhook verification, role-based admin inventory management, and 1-click recruiter demo authentication.",
    technologies: ["React 19", "Node.js", "Express 5", "MongoDB", "JWT Auth", "Razorpay API", "Tailwind CSS"],
    metrics: [
      { label: "Active Menu Items", value: "50+" },
      { label: "Order Progression Stages", value: "5" },
      { label: "Security Verification", value: "HMAC SHA-256" }
    ],
    features: [
      "Dynamic dish customization modal (portion sizing, add-ons, spice preference) with instant cart pricing calculation",
      "AI Food Concierge: Contextual mood chat for personalized recommendations and smart cart pairings",
      "Dual payment flow: Live Razorpay gateway with server-side HMAC signature verification plus dev simulator mode",
      "Multi-stage live order tracking: Pending → Confirmed → Preparing → Out for Delivery → Delivered",
      "Role-based Admin Dashboard with real-time revenue analytics, category filtering, and menu item CRUD",
      "1-Click Recruiter Demo Login providing instant access without registration barriers"
    ],
    challenges: [
      {
        title: "Cart Configuration Hash Conflicts",
        desc: "Users customizing identical dishes with different add-ons required distinct cart keys. Solved via deterministic configuration hashing."
      },
      {
        title: "Tamper-Proof Payment Verification",
        desc: "Implemented strict server-side cryptographic verification using crypto HMAC SHA-256 against Razorpay payment signatures."
      }
    ],
    githubUrl: "https://github.com/vinay7376/Swag-e-Swaad",
    liveUrl: "https://swag-e-swaad.vercel.app",
    images: [
      "/assets/projects/Veg Biryani.png",
      "/assets/projects/Chicken Biryani.png",
      "/assets/projects/Cheese Garlic Bread.png",
      "/assets/projects/Chicken Tikka.png"
    ]
  },
  {
    id: "kanban-task-board",
    title: "MERN Real-Time Kanban Board",
    category: "Full-Stack & Real-Time",
    badge: "Interactive Demo Available",
    tagline: "Collaborative Agile Task & Sprint Management Engine",
    overview: "A high-performance sprint and task management application designed for agile teams, featuring multi-column workflow boards, priority tag filtering, subtask checklists, and optimistic UI state management.",
    problem: "Engineering teams require fluid sprint boards where task statuses update instantaneously without UI jitter or blocking network requests.",
    contribution: "Designed and engineered the responsive drag-and-drop board architecture with optimistic local state updates, priority indicator tagging, subtask calculation, and REST synchronization.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "REST APIs"],
    metrics: [
      { label: "Interaction Frame Rate", value: "60 FPS" },
      { label: "Drag Latency", value: "0ms Optimistic" },
      { label: "Status Columns", value: "4 States" }
    ],
    features: [
      "Multi-column workflow: Backlog, In Progress, Review, and Done columns",
      "Drag-and-drop and one-click task movement with immediate optimistic state updates",
      "Priority badges (Urgent, High, Medium, Low) with clear visual hierarchy",
      "Interactive subtask checklists with live completion percentage indicators",
      "Instant keyword search and priority filtering",
      "Local storage persistence with seamless API synchronization"
    ],
    challenges: [
      {
        title: "Optimistic State with Graceful Rollback",
        desc: "Prevented UI lag during task drags by updating local state immediately and reverting gracefully if server validation fails."
      }
    ],
    githubUrl: "https://github.com/vinay7376",
    liveUrl: null,
    images: []
  },
  {
    id: "diagramly",
    title: "Diagramly",
    category: "Frontend & Architecture",
    badge: "Modern Architecture Tool",
    tagline: "Collaborative Whiteboarding & Technical Documentation Suite",
    overview: "A unified system design tool bringing together freeform Excalidraw vector canvas drawing and structured EditorJS technical documentation in a single workspace.",
    problem: "Software architects frequently oscillate between visual diagram tools and markdown document editors, creating fragmented architecture records.",
    contribution: "Integrated the Excalidraw vector canvas alongside EditorJS modular document blocks, integrated Kinde Auth, and built client-side PDF export pipelines.",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Excalidraw", "EditorJS", "Kinde Auth", "Tailwind CSS"],
    metrics: [
      { label: "Canvas Engine", value: "Excalidraw Vector" },
      { label: "Document Blocks", value: "EditorJS Modular" },
      { label: "Export Format", value: "Vector PDF" }
    ],
    features: [
      "Full-featured vector architecture canvas with shape primitives, arrows, and styling",
      "Structured technical notes editor with checklist, header, warning, and code blocks",
      "Authentication and multi-tenant workspace routing via Kinde Auth",
      "Client-side high-fidelity PDF report generation"
    ],
    challenges: [
      {
        title: "SSR Bundle Isolation",
        desc: "Excalidraw relies heavily on browser canvas APIs. Implemented Next.js dynamic client-side imports with SSR disabled to eliminate hydration mismatches."
      }
    ],
    githubUrl: "https://github.com/vinay7376",
    liveUrl: null,
    images: [
      "/assets/projects/diagramly-logo.png"
    ]
  }
];

export const ENGINEERING_PILLARS = [
  {
    title: "Component Hygiene & Separation of Concerns",
    code: `// Presentation decoupled from business state
export const useOrderWorkflow = (orderId) => {
  const [order, setOrder] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  
  const updateStage = async (nextStage) => {
    // Optimistic mutation with rollback guard
    const previous = order;
    setOrder(prev => ({ ...prev, status: nextStage }));
    try {
      await api.patch(\`/orders/\${orderId}/stage\`, { stage: nextStage });
    } catch (err) {
      setOrder(previous); // Rollback
      throw err;
    }
  };
  return { order, updateStage, isSyncing };
};`,
    description: "UI components remain pure presentation layers while custom hooks isolate state transitions, error boundaries, and optimistic mutations.",
    tags: ["Custom Hooks", "Optimistic UI", "Error Boundaries", "State Hygiene"]
  },
  {
    title: "Defensive REST API Design & Validation",
    code: `// Express route with schema validation & rate limits
router.post('/contact', contactLimiter, async (req, res, next) => {
  const { name, email, subject, message, honeypot } = req.body;
  
  // Bot mitigation via honeypot field
  if (honeypot) return res.status(200).json({ success: true });
  
  // Strict sanitization & validation
  const cleanEmail = sanitize(email);
  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({ success: false, error: 'Invalid email format' });
  }
  
  const contact = await Contact.create({ ...validatedPayload });
  return res.status(201).json({ success: true, id: contact._id });
});`,
    description: "Every route is shielded with strict schema validation, sanitization against XSS/injection, honeypots for bots, and tiered rate limiters.",
    tags: ["Input Sanitization", "Rate Limiting", "Honeypot Trap", "Centralized Error Handler"]
  },
  {
    title: "Database Modeling & Query Efficiency",
    code: `// Mongoose schema with composite indexes & integrity
const transactionSchema = new mongoose.Schema({
  idempotencyKey: { type: String, required: true, unique: true },
  amount: { type: Number, required: true, min: 0 },
  currency: { type: String, default: 'INR' },
  status: { 
    type: String, 
    enum: ['PENDING', 'PROCESSED', 'RECOVERED', 'ESCALATED'], 
    index: true 
  },
  auditTrail: [{ action: String, timestamp: Date, metadata: Object }]
}, { timestamps: true });

transactionSchema.index({ status: 1, createdAt: -1 });`,
    description: "Database schemas are designed with explicit validation constraints, composite indexes for common access patterns, and immutable audit logs.",
    tags: ["MongoDB Indexes", "Schema Constraints", "Idempotency Keys", "Audit Logging"]
  },
  {
    title: "Performance, Accessibility & Polish",
    code: `/* Accessibility & smooth interactive defaults */
:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
    description: "Sub-second load times, semantic HTML tags, keyboard navigation compliance (WCAG AA), and reduced-motion queries ensure inclusion and speed.",
    tags: ["WCAG 2.1 AA", "Keyboard Nav", "Reduced Motion", "Asset Optimization"]
  }
];

export const TIMELINE_EXPERIENCE = [
  {
    year: "2023 — 2027",
    title: "B.Tech in Computer Science & Engineering",
    organization: "United College of Engineering and Research (UCER), Prayagraj",
    badge: "Current Degree",
    type: "education",
    description: "Undergraduate coursework in Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Software Design. Active technical mentor for junior student developers."
  },
  {
    year: "2025",
    title: "Young Turks Core CS & DSA National Assessment",
    organization: "National Level Competency Evaluation",
    badge: "99.50th Percentile",
    type: "achievement",
    description: "Secured a 99.50 national percentile in core Computer Science fundamentals and Data Structures & Algorithms, ranking among the top tier students across participating institutes."
  },
  {
    year: "2025",
    title: "IBM SkillsBuild MERN Stack & PBEL Internship",
    organization: "IBM SkillsBuild / Edunet Foundation",
    badge: "Certified MERN Intern",
    type: "certification",
    description: "Completed comprehensive full-stack training covering MongoDB, Express.js, React, Node.js, REST APIs, and team agile workflows. Built practical capstone web projects adhering to industry standards."
  },
  {
    year: "2025",
    title: "Razorpay AI Buildathon — Track 03 (PayRecover AI)",
    organization: "Razorpay & Hackerearth",
    badge: "Buildathon Project",
    type: "achievement",
    description: "Engineered PayRecover AI, an autonomous payment recovery system with deterministic policy guardrails, Zod validation, and human review escalation protocols for failed checkouts."
  },
  {
    year: "2025",
    title: "Smart India Hackathon (SIH 2025) & UHack 3.0",
    organization: "National Hackathons",
    badge: "Finalist / Shortlisted",
    type: "achievement",
    description: "Selected and shortlisted for innovative full-stack technological submissions tackling real-world digital workflows under time-bounded competitive sprints."
  },
  {
    year: "2024 — Present",
    title: "Algorithmic Problem Solving & Peer Mentorship",
    organization: "LeetCode & GeeksforGeeks Community",
    badge: "200+ Problems Solved",
    type: "learning",
    description: "Maintained consistent problem-solving practice solving 200+ DSA challenges in C++ and JavaScript. Mentored 20+ junior engineering students in Git, GitHub, and full-stack web basics."
  }
];
