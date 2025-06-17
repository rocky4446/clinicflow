/voice-clinic-app/
│
├── /app/                   → App directory (Next.js 14+)
│   ├── /login              → Auth page
│   ├── /dashboard          → Doctor’s Dashboard
│   ├── /patients/[id]      → Patient details and prescription
│
├── /components/            → Reusable UI components
│
├── /lib/                   → Utility functions (e.g., MCP API client)
│
├── /server/                → MCP logic (or can be a separate Express server)
│   ├── /controllers/
│   ├── /models/
│   ├── /routes/
│   └── /middleware/        → Auth etc.
│
├── /public/                → Static files
├── /styles/                → Tailwind styles
├── /types/                 → TypeScript interfaces
├── .env                    → Secrets like DB_URL, OPENAI_API_KEY
└── README.md
