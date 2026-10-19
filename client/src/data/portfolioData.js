/**
 * IMAN // BUILD LOG — Central Single Source of Truth
 * 
 * Edit this file to update your bio, projects, skills, experience, education,
 * certifications, and social links.
 */

export const personalInfo = {
  name: "Iman Ayaz",
  roleTitle: "Software Engineering Graduate",
  specializations: [
    "Frontend Development",
    "AI Applications",
    "Software Quality Assurance",
    "Full-Stack Projects"
  ],
  headline: "Software Engineering Graduate | Frontend Development | AI Applications | Software Quality Assurance | Full-Stack Projects",
  location: "Lahore, Pakistan",
  educationBadge: "LCWU Software Engineering (2022–2026)",
  status: "Available for Hire",
  statusNote: "Open for Entry-Level Frontend, SQA, and Full-Stack Roles (Remote & Onsite)",
  
  // Starting introduction as requested: authentic, confident, fresher-tailored
  introduction: "I am a Software Engineering graduate from Lahore College for Women University with practical experience and project-based learning across frontend development, full-stack applications, and AI-powered solutions. I enjoy turning ideas into usable software, exploring technical challenges, and continuously improving how I design, build, and test applications. I am looking for opportunities to contribute, learn from experienced teams, and grow as a software professional.",

  socials: {
    github: "https://github.com/ImanAyaz10",
    linkedin: "https://www.linkedin.com/in/iman-ayaz-853b3a279/",
    email: "imanayaz2003@gmail.com",
    demoPortfolio: "https://imanayaz-portfolio.vercel.app/",
  },

  resume: {
    fileName: "Iman_Ayaz_Resume.pdf",
    filePath: "/assets/Iman_Ayaz_Resume.pdf",
    lastUpdated: "March 2026",
    summary: "Software Engineering fresher with proven project-driven experience in React, Node.js, AI APIs, and Quality Assurance.",
  },

  // Profile Photo configuration
  // Place your photo at client/public/assets/profile-photo.jpg to automatically display it!
  profilePhoto: {
    path: "/assets/profile-photo.jpg",
    alt: "Iman Ayaz — Software Engineering Graduate",
    fallbackInitials: "IA",
  },
};

/**
 * Central GitHub Integration Configuration
 * Modify this configuration to manage all GitHub URLs, repository tracking,
 * and live API display settings across your entire portfolio.
 */
export const gitHubConfig = {
  username: "ImanAyaz10",
  profileUrl: "https://github.com/ImanAyaz10",
  repositoriesUrl: "https://github.com/ImanAyaz10?tab=repositories",
  apiUrl: "https://api.github.com/users/ImanAyaz10",
  verifiedRepoCount: 27,
  enableLiveSync: true,
  // Featured repositories showcased in the GitHub Activity stream
  featuredRepos: [
    {
      name: "LAWBRIDGE-FYP",
      url: "https://github.com/ImanAyaz10/LAWBRIDGE-FYP",
      description: "AI-powered legal tech platform connecting citizens with verified lawyers in Pakistan. Built with MERN stack, Gemini AI & jsPDF.",
      language: "JavaScript / React",
      badge: "Signature Capstone",
      hasDemo: true,
      demoUrl: "https://lawbridge-fyp-xcg3.vercel.app/"
    },
    {
      name: "Movie-Recommendation-System-elevvo-inernship-ML",
      url: "https://github.com/ImanAyaz10/Movie-Recommendation-System-elevvo-inernship-ML",
      description: "Collaborative filtering recommendation engine with User-Item sparse matrices, Cosine Similarity, and TruncatedSVD.",
      language: "Python / Jupyter",
      badge: "AI / ML",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "Laon-approval-predictor-elevvo-pathways-inernship",
      url: "https://github.com/ImanAyaz10/Laon-approval-predictor-elevvo-pathways-inernship",
      description: "Credit risk classification pipeline using Random Forest ensemble model to predict applicant loan approval probabilities.",
      language: "Python / scikit-learn",
      badge: "Machine Learning",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "Traffic-Sign-Recognition-elevvo-inernship-ML",
      url: "https://github.com/ImanAyaz10/Traffic-Sign-Recognition-elevvo-inernship-ML",
      description: "Real-time computer vision object detection model applying YOLOv8 and OpenCV for road asset recognition.",
      language: "Python / YOLOv8",
      badge: "Computer Vision",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "CodeAlpha_TranslationTool",
      url: "https://github.com/ImanAyaz10/CodeAlpha_TranslationTool",
      description: "Interactive multilingual translation application powered by Gradio UI and Groq API with Llama models.",
      language: "Python / Gradio",
      badge: "AI API",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "Weather-Dashboard-internship-elevvopathways",
      url: "https://github.com/ImanAyaz10/Weather-Dashboard-internship-elevvopathways",
      description: "Responsive meteorological dashboard with asynchronous weather API fetching, debounced search, and multi-day forecasts.",
      language: "JavaScript / HTML5",
      badge: "Frontend",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "jobtrack-pro",
      url: "https://github.com/ImanAyaz10/jobtrack-pro",
      description: "Career management dashboard for tracking software engineering job applications and interview stages.",
      language: "React.js",
      badge: "Frontend App",
      hasDemo: false,
      demoUrl: null
    },
    {
      name: "waste-classification-project-SA-AI",
      url: "https://github.com/ImanAyaz10/waste-classification-project-SA-AI",
      description: "Deep learning image classification system categorizing municipal waste into organic and recyclable materials.",
      language: "Python / Deep Learning",
      badge: "AI Application",
      hasDemo: false,
      demoUrl: null
    }
  ]
};

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "aiml", label: "AI & Machine Learning" },
  { id: "sqa", label: "Software Quality & Practice" },
];

export const projects = [
  {
    id: "lawbridge",
    title: "LawBridge — AI-Assisted Legal Services Platform",
    tagline: "Digitizing Pakistan's legal access with AI consultation, lawyer discovery, and instant document generation.",
    category: "fullstack",
    type: "Final Year Capstone Project (FYP)",
    status: "Verified Demo & Repo",
    statusBadge: "completed",
    featured: true,
    github: "https://github.com/ImanAyaz10/LAWBRIDGE-FYP",
    demo: "https://lawbridge-fyp-xcg3.vercel.app/",
    date: "2025–2026",
    
    // Problem -> Solution -> Evidence Pattern
    problem: "Navigating the legal landscape in Pakistan is fraught with cost barriers, lack of transparent fee structures, and procedural intimidation for ordinary citizens. Accessing accredited legal counsel and drafting basic legal documents is often needlessly cumbersome.",
    solution: "LawBridge provides an all-in-one digital hub featuring an AI legal assistant powered by Google Gemini and Groq API, an accredited lawyer directory with domain/city filtering, automated legal document generation via jsPDF, transparent fee estimation, and visual procedural roadmaps.",
    evidence: "Implemented as a complete full-stack MERN application (React v19, Tailwind CSS, Node.js, Express, MongoDB) with working live demo on Vercel and public GitHub repository.",
    
    myContribution: "Led the frontend architecture and UI/UX design system in React and Tailwind CSS. Implemented the client-side legal document generation engine using jsPDF, designed responsive legal roadmap workflows, and integrated AI consultation query endpoints.",
    teamNote: "Collaborative final-year capstone project at LCWU; core frontend modules and AI integration led individually.",
    
    techStack: [
      "React.js v19",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Groq API",
      "Google Gemini",
      "jsPDF",
      "JWT"
    ],
    
    architecture: {
      client: "Single Page Application built on React 19 with Tailwind CSS for utility-first styling and jsPDF for zero-latency client-side PDF document generation.",
      server: "Node.js and Express RESTful API with modular route controllers, JWT authentication, and bcrypt password hashing.",
      database: "MongoDB with Mongoose schemas for users, lawyer credentials, appointments, and consultations.",
      aiService: "Streaming query integration with Groq API and Google Gemini for Pakistan-specific statutory guidance."
    },

    engineeringDecisions: [
      {
        decision: "Client-Side Document Synthesis with jsPDF",
        rationale: "Rather than running heavy headless browser PDF workers (Puppeteer) on the server, document synthesis runs directly in the client browser.",
        tradeoff: "Eliminates server CPU bottlenecks and keeps hosting free/cost-efficient, while trading off some complex print-layout styling."
      },
      {
        decision: "Decoupled AI Statutory Proxy",
        rationale: "Route all AI legal queries through a backend rate-limited proxy with Pakistani legal prompt guardrails.",
        tradeoff: "Prevents direct exposure of LLM API keys and ensures legal disclaimers are injected consistently."
      }
    ],

    challengesAndLessons: "Balancing strict Pakistani statutory guidance with conversational AI required rigorous prompt engineering. Additionally, creating responsive interactive legal procedural roadmaps demanded careful state management across nested timeline steps.",
  },

  {
    id: "movie-rec",
    title: "Movie Recommendation Engine",
    tagline: "Collaborative filtering and matrix factorization on MovieLens with TruncatedSVD and Cosine Similarity.",
    category: "aiml",
    type: "AI/ML Project (Elevvo Pathways)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: true,
    github: "https://github.com/ImanAyaz10/Movie-Recommendation-System-elevvo-inernship-ML",
    demo: null,
    date: "2026",
    
    problem: "Information overload in content streaming platforms creates decision fatigue for users seeking personalized entertainment matching their historical taste.",
    solution: "Engineered a collaborative filtering recommendation pipeline that constructs sparse user-item interaction matrices and utilizes Cosine Similarity and TruncatedSVD to predict ratings for unseen items.",
    evidence: "Verified Jupyter implementation with MovieLens dataset preprocessing, sparsity analysis, and Top-N user recommendation algorithms.",
    
    myContribution: "Constructed the user-item interaction matrix, calculated similarity scores using scikit-learn, evaluated sparse matrix factorization using TruncatedSVD, and generated Top-N personalized recommendations.",
    teamNote: "Individual project completed during the Elevvo Pathways AI/ML track.",
    
    techStack: ["Python", "scikit-learn", "pandas", "NumPy", "TruncatedSVD", "Cosine Similarity"],
    
    architecture: {
      pipeline: "Data cleaning -> User-Item sparse pivot table -> Cosine similarity matrix -> Latent factor decomposition with TruncatedSVD -> Top-N unseen item prediction."
    },

    engineeringDecisions: [
      {
        decision: "TruncatedSVD Matrix Factorization",
        rationale: "Collaborative filtering matrices are over 95% sparse; standard dense operations exhaust memory.",
        tradeoff: "TruncatedSVD compresses the feature space to latent components, speeding up inference at the cost of minor variance loss."
      }
    ],

    challengesAndLessons: "Dealing with the cold-start problem for users with very few ratings was addressed by establishing a baseline global popularity threshold fallback.",
  },

  {
    id: "loan-approval",
    title: "Loan Approval Credit Risk Predictor",
    tagline: "Supervised classification model for automated creditworthiness evaluation and risk mitigation.",
    category: "aiml",
    type: "AI/ML Project (Elevvo Pathways)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: true,
    github: "https://github.com/ImanAyaz10/Laon-approval-predictor-elevvo-pathways-inernship",
    demo: null,
    date: "2026",
    
    problem: "Manual financial underwriting is slow, prone to cognitive bias, and unable to process multi-variable applicant data at scale.",
    solution: "Constructed an automated credit classification model utilizing demographic and financial parameters (income, credit history, loan amount, collateral).",
    evidence: "Full notebook workflow with exploratory data analysis, missing value imputation, one-hot encoding, and Random Forest classification.",
    
    myContribution: "Conducted data preprocessing, handled skewed financial distributions, encoded categorical risk markers, and evaluated models prioritizing recall on default detection.",
    teamNote: "Individual project completed during Elevvo Pathways ML curriculum.",
    
    techStack: ["Python", "scikit-learn", "Random Forest", "pandas", "NumPy", "Matplotlib"],
    
    architecture: {
      pipeline: "Data normalization -> One-hot encoding -> Class balance inspection -> Ensemble Random Forest classifier -> Confusion matrix & Precision/Recall evaluation."
    },

    engineeringDecisions: [
      {
        decision: "Prioritizing Recall Over Raw Accuracy",
        rationale: "In credit underwriting, misclassifying a defaulting borrower as non-defaulter (False Negative) is exponentially costlier than false positives.",
        tradeoff: "Tuned probability thresholds to minimize financial loss rather than just optimizing overall accuracy."
      }
    ],

    challengesAndLessons: "Addressing class imbalance in historical loan datasets is crucial to prevent biased models that blindly predict approval for all applicants.",
  },

  {
    id: "sales-forecast",
    title: "Multi-Store Retail Sales Forecasting",
    tagline: "Time-series predictive regression leveraging lag variables and rolling window features.",
    category: "aiml",
    type: "AI/ML Project (Elevvo Pathways)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/Sales-Forecasting-elevvo-internship-ml",
    demo: null,
    date: "2026",
    
    problem: "Retailers suffer supply chain waste or stockouts when relying on naive historical averages instead of seasonal trend forecasting.",
    solution: "Formulated a time-series feature engineering pipeline incorporating datetime cyclical components, rolling averages, and lag features to forecast future store revenue.",
    evidence: "Complete regression pipeline in Python with feature importance analysis and validation curves.",
    
    myContribution: "Engineered 7-day and 30-day rolling statistics, created lag features to capture autocorrelation, and benchmarked regression models.",
    teamNote: "Individual project during Elevvo Pathways ML program.",
    
    techStack: ["Python", "pandas", "scikit-learn", "NumPy", "Time Series Analysis"],
    
    architecture: {
      pipeline: "Date parsing -> Seasonality extraction -> Lag & rolling window generation -> Train/Test split across temporal boundary -> Regression evaluation (MAE/RMSE)."
    },

    engineeringDecisions: [
      {
        decision: "Temporal Split instead of Random K-Fold",
        rationale: "Random cross-validation causes data leakage in time-series by allowing future data into training sets.",
        tradeoff: "Required strict chronological splitting to simulate realistic operational deployment."
      }
    ],

    challengesAndLessons: "Handling holiday outliers and store promotional weeks without overfitting required careful regularization.",
  },

  {
    id: "traffic-sign",
    title: "Traffic Sign Recognition System",
    tagline: "Computer vision object detection applying YOLOv8 for intelligent road asset recognition.",
    category: "aiml",
    type: "Computer Vision Project",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/Traffic-Sign-Recognition-elevvo-inernship-ML",
    demo: null,
    date: "2026",
    
    problem: "Autonomous driving and driver assistance systems require real-time, low-latency identification of traffic regulation signs under varied lighting conditions.",
    solution: "Implemented bounding-box object detection utilizing YOLOv8 trained on standardized traffic signage imagery.",
    evidence: "Repository containing dataset configurations, YOLO training scripts, and inference evaluation.",
    
    myContribution: "Configured YOLOv8 dataset pipelines, organized class labels, fine-tuned detection models, and benchmarked bounding box precision.",
    teamNote: "Individual project exploring deep learning computer vision.",
    
    techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Computer Vision"],
    
    architecture: {
      pipeline: "Image augmentation -> Bounding box annotation alignment -> Single-stage YOLOv8 network -> Non-Maximum Suppression (NMS) inference."
    },

    engineeringDecisions: [
      {
        decision: "Single-Stage Detector (YOLO) over Two-Stage (Faster R-CNN)",
        rationale: "Automotive vision mandates real-time frame rates (30+ FPS) which single-stage detectors achieve with minimal latency.",
        tradeoff: "Slightly reduced precision on tiny distant signs compared to heavy multi-stage networks."
      }
    ],

    challengesAndLessons: "Ensuring robustness against varying lighting and motion blur through realistic image augmentations.",
  },

  {
    id: "translation-tool",
    title: "AI Multilingual Translation Tool",
    tagline: "Rapid translation interface powered by Groq API LLMs and Gradio UI.",
    category: "aiml",
    type: "Internship Project (CodeAlpha)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/CodeAlpha_TranslationTool",
    demo: null,
    date: "2026",
    
    problem: "Translating technical documentation and regional languages requires high-speed inference without heavy local computational hardware.",
    solution: "Constructed an interactive web interface utilizing Gradio coupled with the high-throughput Groq API running high-performance Llama models for near-instant multi-language translation.",
    evidence: "Public repository containing notebook and Gradio application implementation.",
    
    myContribution: "Designed the interactive Gradio UI, configured Groq API client sessions, and implemented error handling for token quotas.",
    teamNote: "Internship task for CodeAlpha AI internship.",
    
    techStack: ["Python", "Gradio", "Groq API", "Llama 3", "NLP"],
    
    architecture: {
      pipeline: "User text input & target language selection -> Groq API fast inference stream -> Formatted translated output display."
    },

    engineeringDecisions: [
      {
        decision: "Gradio for Rapid AI UI Prototyping",
        rationale: "Gradio allows Python-native UI prototyping in under 50 lines of code without requiring full frontend build setups.",
        tradeoff: "Ideal for demo tasks and utility prototypes, though less flexible than custom React applications."
      }
    ],

    challengesAndLessons: "Managing API rate limits and ensuring sensitive credentials are never hardcoded in shared notebooks (prompting rotation of exposed keys as a security lesson).",
  },

  {
    id: "predictive-maint",
    title: "Predictive Maintenance Anomaly Classifier",
    tagline: "Machine telemetry sensor monitoring to predict industrial equipment failure.",
    category: "aiml",
    type: "AI/ML Project (Elevvo Pathways)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/predictive-maintainance-elevvo-pathways-inernship",
    demo: null,
    date: "2026",
    
    problem: "Unscheduled industrial machinery downtime costs manufacturing operations billions annually; reactive repairs are both slow and expensive.",
    solution: "Built a classification pipeline analyzing machine sensor telemetry (temperature, rotational speed, torque, tool wear) to classify potential failure states before breakdown.",
    evidence: "Documented classification model workflow in repository with feature correlation heatmaps.",
    
    myContribution: "Analyzed multi-sensor correlation, handled severe class imbalance (normal vs failure), and trained tree-based classifiers.",
    teamNote: "Individual project completed during Elevvo Pathways ML internship.",
    
    techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    
    architecture: {
      pipeline: "Telemetry ingestion -> Sensor normalization -> Thermal & torque feature cross-products -> Decision tree / Random Forest classifier."
    },

    engineeringDecisions: [
      {
        decision: "Feature Engineering on Thermal Differential",
        rationale: "Process temperature minus air temperature provides a stronger physical signal of motor stress than absolute temperature alone.",
        tradeoff: "Added domain-specific feature engineering step prior to training."
      }
    ],

    challengesAndLessons: "Severe class imbalance in telemetry requires specialized sampling (SMOTE or class weights) to avoid degenerate majority-class predictions.",
  },

  {
    id: "student-perf",
    title: "Student Academic Performance Predictor",
    tagline: "Classification and regression analysis identifying academic risk factors for proactive mentoring.",
    category: "aiml",
    type: "AI/ML Project (Elevvo Pathways)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/student-performance-report-elevvo-pathways-inernship",
    demo: null,
    date: "2026",
    
    problem: "Academic institutions often identify struggling students too late in the semester to provide effective intervention.",
    solution: "Constructed an analytical predictive model examining demographic attributes, study hours, attendance, and prior scores to project academic outcomes.",
    evidence: "Jupyter workflow with feature correlation analysis, score regressions, and risk-tier classification.",
    
    myContribution: "Extracted demographic features, trained multiple regression models (Linear, Ridge, Decision Tree), and generated comprehensive evaluation reports.",
    teamNote: "Elevvo Pathways AI track project.",
    
    techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Data Analysis"],
    
    architecture: {
      pipeline: "Student data cleaning -> Multi-variable correlation analysis -> Regression model tuning -> Risk classification thresholding."
    },

    engineeringDecisions: [
      {
        decision: "StandardScaler on Study Hours and Absences",
        rationale: "Prevents gradient scale dominance between unbounded hour metrics and percentage scores.",
        tradeoff: "Requires saving transform scalers for any inference pipeline."
      }
    ],

    challengesAndLessons: "Ensuring student privacy ethics and avoiding demographic bias in predictive academic scoring.",
  },

  {
    id: "weather-dashboard",
    title: "Interactive Weather Dashboard",
    tagline: "Responsive meteorological application with asynchronous weather API integration.",
    category: "frontend",
    type: "Frontend Internship Project (Elevvo)",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/Weather-Dashboard-internship-elevvopathways",
    demo: null,
    date: "2026",
    
    problem: "Users need quick, clean, and responsive access to multi-city meteorological forecasts with minimal data overhead.",
    solution: "Designed a lightweight frontend application that communicates with meteorological APIs to provide real-time temperature, humidity, wind speed, and multi-day forecasts.",
    evidence: "Public repository containing clean JavaScript component architecture and responsive styling.",
    
    myContribution: "Engineered API data fetching with debounce logic, built responsive forecast cards, and created weather condition visual indicators.",
    teamNote: "Completed as part of Elevvo Pathways frontend web development internship.",
    
    techStack: ["HTML5", "CSS3", "JavaScript", "REST APIs", "Async/Await"],
    
    architecture: {
      pipeline: "City search input with debounce -> Fetch weather API -> JSON parsing -> Dynamic DOM rendering -> Local storage caching of recent searches."
    },

    engineeringDecisions: [
      {
        decision: "Debounced City Search Input",
        rationale: "Prevents firing an API call on every keystroke, reducing network requests by over 70%.",
        tradeoff: "Introduces a negligible 300ms pause before fetching suggestions."
      }
    ],

    challengesAndLessons: "Gracefully handling edge-case API responses such as network disconnects, invalid city names, and API rate limits.",
  },

  {
    id: "jobtrack-pro",
    title: "JobTrack Pro — Career Application Tracker",
    tagline: "Structured career management dashboard for tracking job applications and interview stages.",
    category: "frontend",
    type: "Frontend Application",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/jobtrack-pro",
    demo: null,
    date: "2026",
    
    problem: "Software graduates managing multiple applications across portals struggle with scattered spreadsheets and missed interview deadlines.",
    solution: "Created an application tracking dashboard allowing candidates to categorize application stages (Applied, Interviewing, Offer, Rejected), record dates, and log interviewer feedback.",
    evidence: "Public GitHub repository with componentized interface and local persistence.",
    
    myContribution: "Architected component hierarchy, implemented stage filtering, and utilized localStorage for instantaneous client data persistence.",
    teamNote: "Personal project built to organize job search workflows.",
    
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage API"],
    
    architecture: {
      pipeline: "Application state management -> Filter by stage -> Modal edit forms -> Persistent local cache."
    },

    engineeringDecisions: [
      {
        decision: "Local-First Storage Architecture",
        rationale: "Eliminated authentication barriers and server latency, allowing immediate offline usage.",
        tradeoff: "Data resides in the local browser; export/import JSON utility added for portability."
      }
    ],

    challengesAndLessons: "Designing high-density data tables that maintain visual clarity and usability on mobile screen viewports.",
  },

  {
    id: "task-manager",
    title: "Task Manager Application",
    tagline: "Task management system with category prioritization and deadline tracking.",
    category: "frontend",
    type: "Web Application",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/Task-Manager_App",
    demo: null,
    date: "2025",
    
    problem: "Daily engineering workflows require minimal-friction task prioritization and status transitions without cognitive clutter.",
    solution: "Built a responsive task manager featuring priority tagging (High, Medium, Low), completion toggles, and category filtering.",
    evidence: "Verified GitHub repository demonstrating clean state updates and DOM manipulation.",
    
    myContribution: "Implemented CRUD operations for task items, created status filters, and ensured keyboard accessibility for item management.",
    teamNote: "Frontend practice project.",
    
    techStack: ["JavaScript", "HTML5", "CSS3", "State Management"],
    
    architecture: {
      pipeline: "Task creation form -> State array update -> Filter logic -> Dynamic UI render."
    },

    engineeringDecisions: [
      {
        decision: "Pure State Mutation Handlers",
        rationale: "Avoided direct DOM mutations in favor of predictable unidirectional state updates.",
        tradeoff: "Requires re-rendering the task list on changes, optimized with targeted list updates."
      }
    ],

    challengesAndLessons: "Ensuring focus state accessibility for screen readers when removing items from dynamic lists.",
  },

  {
    id: "waste-classification",
    title: "Waste Classification AI System",
    tagline: "Computer vision classification sorting waste into organic vs. recyclable categories.",
    category: "aiml",
    type: "AI/Data Science Project",
    status: "Verified Repo",
    statusBadge: "completed",
    featured: false,
    github: "https://github.com/ImanAyaz10/waste-classification-project-SA-AI",
    demo: null,
    date: "2025",
    
    problem: "Manual municipal waste sorting is labor-intensive and hazardous, leading to contaminated recyclable streams.",
    solution: "Engineered an image classification pipeline that categorizes discarded items as recyclable or organic to facilitate automated waste triage.",
    evidence: "Verified repository with dataset preprocessing and deep learning image classification scripts.",
    
    myContribution: "Curated dataset splits, implemented image normalization and augmentation, and benchmarked classification metrics.",
    teamNote: "Coursework / learning project in AI applications.",
    
    techStack: ["Python", "Computer Vision", "Deep Learning", "pandas", "NumPy"],
    
    architecture: {
      pipeline: "Image input -> Resize & normalization (224x224) -> Convolutional feature extraction -> Softmax binary classification."
    },

    engineeringDecisions: [
      {
        decision: "Data Augmentation (Flips & Rotations)",
        rationale: "Waste items appear at arbitrary orientations and lighting conditions in realistic conveyor streams.",
        tradeoff: "Increased training epochs to achieve convergence across augmented dataset."
      }
    ],

    challengesAndLessons: "Handling visual ambiguities such as soiled paper or organic matter trapped in plastic packaging.",
  },
];

export const skillsData = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, high-performance web interfaces with modern component architectures.",
    skills: [
      { name: "React.js", level: "Primary", projects: ["lawbridge", "jobtrack-pro"] },
      { name: "Tailwind CSS", level: "Primary", projects: ["lawbridge", "jobtrack-pro"] },
      { name: "JavaScript (ES6+)", level: "Primary", projects: ["lawbridge", "weather-dashboard", "task-manager"] },
      { name: "HTML5 & Semantic Markup", level: "Primary", projects: ["lawbridge", "weather-dashboard"] },
      { name: "CSS3 & Modern Layouts", level: "Primary", projects: ["weather-dashboard", "task-manager"] },
      { name: "Next.js", level: "Competent", projects: [] },
      { name: "Responsive & Mobile-First Design", level: "Primary", projects: ["lawbridge", "weather-dashboard"] },
      { name: "Context API & State Management", level: "Primary", projects: ["lawbridge"] },
    ],
  },
  {
    category: "Backend & Full-Stack",
    description: "Designing RESTful APIs, implementing authentication, and structuring persistent database schemas.",
    skills: [
      { name: "Node.js", level: "Primary", projects: ["lawbridge"] },
      { name: "Express.js", level: "Primary", projects: ["lawbridge"] },
      { name: "MongoDB & Mongoose", level: "Primary", projects: ["lawbridge"] },
      { name: "RESTful API Design", level: "Primary", projects: ["lawbridge", "weather-dashboard"] },
      { name: "JWT Authentication", level: "Primary", projects: ["lawbridge"] },
      { name: "bcrypt & Input Sanitization", level: "Primary", projects: ["lawbridge"] },
      { name: "Multer & File Uploads", level: "Competent", projects: ["lawbridge"] },
      { name: "MERN Stack Integration", level: "Primary", projects: ["lawbridge"] },
    ],
  },
  {
    category: "AI & Machine Learning",
    description: "Integrating high-performance LLM APIs, developing predictive pipelines, and computer vision models.",
    skills: [
      { name: "Groq API & Llama Models", level: "Primary", projects: ["lawbridge", "translation-tool"] },
      { name: "Python", level: "Primary", projects: ["movie-rec", "loan-approval", "sales-forecast", "traffic-sign"] },
      { name: "scikit-learn", level: "Primary", projects: ["movie-rec", "loan-approval", "sales-forecast", "predictive-maint"] },
      { name: "pandas & NumPy", level: "Primary", projects: ["movie-rec", "loan-approval", "sales-forecast"] },
      { name: "Collaborative Filtering & SVD", level: "Primary", projects: ["movie-rec"] },
      { name: "YOLOv8 & OpenCV", level: "Competent", projects: ["traffic-sign"] },
      { name: "Gradio UI", level: "Primary", projects: ["translation-tool"] },
      { name: "Google Gemini API", level: "Competent", projects: ["lawbridge"] },
    ],
  },
  {
    category: "Software Engineering & SQA",
    description: "Applying rigorous software quality assurance, testing methodologies, and architectural discipline.",
    skills: [
      { name: "Software Testing & SQA Concepts", level: "Primary", projects: ["lawbridge"] },
      { name: "SDLC & Agile Workflows", level: "Primary", projects: ["lawbridge"] },
      { name: "Git & GitHub Version Control", level: "Primary", projects: ["lawbridge", "movie-rec", "jobtrack-pro"] },
      { name: "Data Structures & Algorithms", level: "Primary", projects: [] },
      { name: "Object-Oriented Programming (OOP)", level: "Primary", projects: [] },
      { name: "C / C++", level: "Competent", projects: [] },
      { name: "SQL & Relational Databases", level: "Competent", projects: [] },
      { name: "UI/UX & Accessibility (WCAG AA)", level: "Primary", projects: ["lawbridge"] },
    ],
  },
];

export const experience = [
  {
    id: "exp-codealpha",
    role: "AI Intern",
    organization: "CodeAlpha",
    location: "Remote",
    period: "Feb 2026 – Mar 2026",
    duration: "2 months",
    status: "Completed",
    description: "Engaged in hands-on AI application development, LLM API integration, and computer vision experiments.",
    achievements: [
      "Engineered an AI Multilingual Translation application utilizing Gradio UI and Groq API with Llama models.",
      "Developed object tracking prototypes and explored image processing workflows.",
      "Documented prompt engineering patterns and API rate-limiting strategies for production stability.",
    ],
    skillsUsed: ["Python", "Gradio", "Groq API", "Llama 3", "Computer Vision", "Git"],
    linkedProject: "translation-tool",
  },
  {
    id: "exp-elevvo",
    role: "Frontend Web Developer Intern",
    organization: "Elevvo Pathways",
    location: "Remote",
    period: "Feb 2026 – Mar 2026",
    duration: "2 months",
    status: "Completed",
    description: "Built responsive frontend web interfaces while completing advanced project-based machine learning modules.",
    achievements: [
      "Developed an interactive Weather Dashboard featuring asynchronous multi-city weather API data fetching.",
      "Completed intensive AI/ML engineering curriculum, developing collaborative filtering recommendation systems, credit approval classifiers, and time-series forecasting models.",
      "Delivered clean, modular, and maintainable JavaScript components aligned with modern web standards.",
    ],
    skillsUsed: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "Python", "scikit-learn"],
    linkedProject: "weather-dashboard",
  },
  {
    id: "exp-drcoder",
    role: "Frontend Developer Intern",
    organization: "Dr. Coder",
    location: "Remote",
    period: "Jul 2025 – Dec 2025",
    duration: "6 months",
    status: "Completed",
    description: "Contributed to component-driven frontend web applications, responsive user interfaces, and state management tasks.",
    achievements: [
      "Built and tested modular React components for client-facing web pages and administrative views.",
      "Improved mobile responsiveness and cross-browser consistency across frontend practice workflows.",
      "Practiced collaborative Git workflows, code reviews, and structured bug tracking.",
    ],
    skillsUsed: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "UI/UX Fundamentals"],
    linkedProject: null,
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering (BS SE)",
  institution: "Lahore College for Women University (LCWU)",
  location: "Lahore, Pakistan",
  period: "2022 – 2026",
  status: "Final Year Graduate",
  overview: "Four-year comprehensive engineering curriculum covering foundational computer science, software engineering lifecycle, database design, modern web architectures, and artificial intelligence.",
  keyCourses: [
    "Software Engineering & SDLC",
    "Data Structures & Algorithms",
    "Object-Oriented Analysis & Design",
    "Database Management Systems",
    "Software Quality Assurance (SQA)",
    "Web Application Development",
    "Machine Learning Fundamentals",
    "Computer Networks & Security",
  ],
  capstone: {
    title: "LawBridge — AI-Assisted Legal Services Platform",
    role: "Full-Stack & Frontend Lead",
    scope: "Comprehensive MERN + AI capstone project addressing legal accessibility in Pakistan.",
  },
};

export const certifications = [
  {
    id: "cert-elevvo",
    title: "Frontend Development Certification",
    issuer: "Elevvo Pathways",
    date: "March 2026",
    credentialUrl: null,
    status: "Verified",
    description: "Awarded upon successful completion of frontend engineering curriculum and project deliverables.",
  },
  {
    id: "cert-pakangels",
    title: "Generative AI Application Developer (Top Performer Award)",
    issuer: "Pak Angels / ASPIRE Pakistan (Cohort 2)",
    date: "February 2026",
    credentialUrl: null,
    status: "Verified Credential",
    description: "Comprehensive training in Generative AI development, LLM fine-tuning concepts, and RAG pipelines; recognized with Top Performer Award.",
  },
  {
    id: "cert-pintech",
    title: "Pintech Expo 25' Innovation Showcase",
    issuer: "Punjab Higher Education Commission (PHEC)",
    date: "April 2025",
    credentialUrl: null,
    status: "Academic Event",
    description: "Participated in the university innovation showcase representing software engineering projects.",
  },
  {
    id: "cert-drcoders",
    title: "Certificate of Completion — React & Modern Web",
    issuer: "Dr. Coders Academy",
    date: "December 2024",
    credentialUrl: null,
    status: "Verified",
    description: "Completed hands-on practical curriculum in React.js, component design patterns, and state architecture.",
  },
  {
    id: "cert-techinsights",
    title: "Professional Branding & Industry Alignment",
    issuer: "Tech Insights",
    date: "November 2024",
    credentialUrl: null,
    status: "Verified",
    description: "Workshops on professional technical communication and software portfolio presentation.",
  },
];

export const decisionJournal = [
  {
    id: "dec-1",
    project: "LawBridge",
    title: "Client-Side vs. Server-Side Legal Document Generation",
    date: "Feb 2026",
    context: "LawBridge generates custom Pakistani legal affidavits, rental agreements, and notices dynamically based on client inputs.",
    decision: "Implemented jsPDF in the React client instead of running server-side headless Chrome (Puppeteer).",
    why: "Headless browsers require 300MB+ RAM per instance, causing severe memory spikes on economical hosting. Client-side synthesis yields immediate 0ms server latency and zero server compute cost.",
    tradeoff: "Complex pagination and CSS font rendering require careful coordinate calculations in jsPDF.",
    outcome: "Users download documents instantly; server maintains ultra-low resource footprint.",
  },
  {
    id: "dec-2",
    project: "Movie Recommendation System",
    title: "Dimensionality Reduction with TruncatedSVD for Sparse Ratings",
    date: "Feb 2026",
    context: "The MovieLens user-item matrix was over 96% empty, creating high memory overhead for pure Cosine Similarity calculations.",
    decision: "Applied TruncatedSVD to factorize the sparse matrix into latent factor embeddings.",
    why: "TruncatedSVD natively operates on scipy.sparse matrices without converting to dense arrays, slashing memory consumption by 85%.",
    tradeoff: "A small fraction of non-linear variance is lost during low-rank approximation.",
    outcome: "Near-instant Top-N recommendation query speeds on consumer hardware.",
  },
  {
    id: "dec-3",
    project: "IMAN // BUILD LOG (This Portfolio)",
    title: "Resilient Dual-Mode Storage Architecture for Contact Form",
    date: "Mar 2026",
    context: "Portfolios often break on local development when a live MongoDB Atlas connection string is not immediately configured.",
    decision: "Architected a dual-mode persistence layer in Express that connects to MongoDB Atlas if MONGODB_URI is provided, but transparently falls back to structured JSON file storage locally.",
    why: "Ensures the application works immediately out-of-the-box on any reviewer or developer's Windows laptop without mandatory cloud setup.",
    tradeoff: "File storage is not horizontally scalable across serverless containers, but serves as an ideal local development and testing fallback.",
    outcome: "Zero setup friction for local testing; production-ready for MongoDB Atlas on cloud deploy.",
  },
];

export const constellationNodes = [
  { id: "node-edu", label: "LCWU (BS SE)", type: "education", x: 15, y: 30, targetSection: "education" },
  { id: "node-lawbridge", label: "LawBridge (FYP)", type: "project", x: 30, y: 15, targetSection: "projects" },
  { id: "node-react", label: "React & Frontend", type: "skill", x: 45, y: 25, targetSection: "skills" },
  { id: "node-codealpha", label: "CodeAlpha (AI)", type: "experience", x: 60, y: 18, targetSection: "experience" },
  { id: "node-elevvo", label: "Elevvo Pathways", type: "experience", x: 75, y: 35, targetSection: "experience" },
  { id: "node-ml", label: "AI & ML Models", type: "project", x: 65, y: 55, targetSection: "projects" },
  { id: "node-drcoder", label: "Dr. Coder", type: "experience", x: 35, y: 50, targetSection: "experience" },
  { id: "node-node", label: "Node & MongoDB", type: "skill", x: 20, y: 70, targetSection: "skills" },
  { id: "node-cert", label: "Pak Angels Award", type: "certificate", x: 80, y: 75, targetSection: "certifications" },
  { id: "node-sqa", label: "SQA & Testing", type: "skill", x: 50, y: 80, targetSection: "skills" },
];
