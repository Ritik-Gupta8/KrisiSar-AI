# 🌾 KrisiSar AI

**AI-Powered Farm Decision Intelligence Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3.11-green)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-teal)](https://fastapi.tiangolo.com/)
[![Gemini](https://img.shields.io/badge/Gemini-2.5-orange)](https://ai.google.dev/)

> **Google Gen AI Academy Cohort 2 - Decision Intelligence Hackathon**

KrisiSar AI empowers millions of farmers with AI-driven decisions by unifying fragmented agricultural data into actionable intelligence.

---

## 🎯 Problem Statement

Farmers rely on scattered information sources:
- Weather apps, YouTube videos, WhatsApp groups
- Local pesticide dealers, government websites
- Personal experience

This fragmentation leads to poor decisions on:
- ❌ Irrigation timing
- ❌ Pesticide application
- ❌ Disease management
- ❌ Fertilizer usage
- ❌ Crop planning

**KrisiSar AI unifies everything into one intelligent platform.**

---

## 🚀 Core Features

### 1. 📸 Crop Image Diagnosis
- Upload crop/leaf images
- Gemini Vision analyzes disease, pests, deficiencies
- Returns disease name, confidence, severity, treatment

### 2. 🎯 Farm Risk Score (0-100)
Real-time risk assessment combining:
- Weather patterns
- Disease prevalence
- Crop health
- Historical data

### 3. 🧠 Decision Cards
Instead of raw data, farmers get **actionable recommendations**:
```
✅ Spray pesticide tomorrow morning
❌ Avoid irrigation (rain expected)
⚠️ Humidity high - disease risk increasing
```

### 4. 🌤️ Weather Intelligence
- Current conditions + 7-day forecast
- Disease spread prediction
- Irrigation recommendations

### 5. 🏛️ Government Schemes
AI-powered scheme discovery:
- PM-Kisan, Crop Insurance, Subsidies
- Eligibility checker
- Application process guidance

### 6. 💬 Ask KrisiSar (Multilingual AI Chat)
- Supports: English, Hindi, Marathi, Tamil, Telugu
- Natural language queries
- Context-aware responses

### 7. 📊 Analytics Dashboard
- Disease trends and heatmaps
- Farm health scoring
- Predictive analytics
- BigQuery + Looker Studio integration

### 8. 🎤 Voice Assistant
- Speech-to-text input
- Text-to-speech responses
- Browser-based (no external APIs)

### 9. 📴 Offline Mode (PWA)
- Service worker caching
- Offline functionality
- Sync when online

### 10. 🔔 Smart Alerts
- Rain predictions
- Disease outbreak warnings
- High-risk notifications

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│          Next.js 15 Frontend (Vercel)           │
│  React 19 • TypeScript • Tailwind v4 • PWA      │
└────────────────┬────────────────────────────────┘
                 │
                 ├─► Next.js API Routes (BFF)
                 │
┌────────────────▼────────────────────────────────┐
│      FastAPI + Google ADK (Render/Railway)      │
│           Multi-Agent AI System                  │
├─────────────────────────────────────────────────┤
│ • Image Diagnosis Agent (Gemini Vision)         │
│ • Weather Intelligence Agent                     │
│ • Risk Prediction Agent                          │
│ • Recommendation Agent                           │
│ • Government Scheme Agent (RAG)                  │
│ • Market Intelligence Agent                      │
│ • Analytics Agent                                │
└────┬────────────────┬───────────────┬───────────┘
     │                │               │
     ▼                ▼               ▼
┌─────────┐   ┌──────────────┐  ┌────────────┐
│Supabase │   │   BigQuery   │  │  Firebase  │
│PostgreSQL│   │  Analytics   │  │  Storage   │
└─────────┘   └──────┬───────┘  └────────────┘
                     │
                     ▼
              ┌─────────────┐
              │Looker Studio│
              │  Dashboard  │
              └─────────────┘
```

---

## 🤖 Multi-Agent System (Google ADK)

| Agent | Purpose | Technology |
|-------|---------|------------|
| **Image Diagnosis** | Crop disease detection | Gemini Vision |
| **Weather Intelligence** | Weather + disease risk | Open-Meteo API |
| **Risk Prediction** | Farm risk scoring (0-100) | ML + Historical Data |
| **Recommendation** | Actionable decisions | Gemini 2.5 Pro |
| **Government Scheme** | Scheme eligibility | RAG + Vector DB |
| **Market Intelligence** | Mandi prices + trends | Agmarknet API |
| **Analytics** | Data storage + insights | BigQuery |

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Charts**: Recharts
- **i18n**: next-intl (5 languages)
- **PWA**: next-pwa
- **Icons**: Lucide React

### Backend (AI Layer)
- **Framework**: FastAPI
- **Language**: Python 3.11+
- **AI SDK**: Google ADK
- **Models**: Gemini 2.5 Flash, Gemini 2.5 Pro, Gemini Vision
- **Task Queue**: Redis (Upstash Free)

### Backend (BFF)
- **Next.js Route Handlers** (TypeScript)
- **Authentication**: Better Auth
- **Validation**: Zod

### Database
- **Primary DB**: Supabase PostgreSQL (Free)
- **ORM**: Prisma
- **Analytics**: BigQuery (Free Tier)
- **Storage**: Firebase Storage (Free)

### GPU Analytics
- **NVIDIA RAPIDS cuDF** (Google Colab T4 GPU)
- **Benchmarking**: Pandas vs cuDF on 500K records

### Maps
- **Leaflet + OpenStreetMap** (FREE)

### Deployment
- **Frontend**: Vercel (Free)
- **Backend**: Render / Railway (Free)
- **Database**: Supabase (Free)

---

## 📁 Project Structure

```
krisisar-ai/
├── frontend/                    # Next.js 15 Frontend
│   ├── app/                     # App Router
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── api/                 # Next.js API Routes (BFF)
│   │   ├── layout.tsx
│   │   └── page.tsx             # Landing Page
│   ├── components/              # React Components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── features/            # Feature-specific components
│   │   └── shared/              # Shared components
│   ├── features/                # Feature modules
│   │   ├── diagnosis/
│   │   ├── weather/
│   │   ├── risk-score/
│   │   ├── recommendations/
│   │   ├── schemes/
│   │   ├── chat/
│   │   └── analytics/
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility libraries
│   ├── services/                # API services
│   ├── types/                   # TypeScript types
│   ├── public/                  # Static assets
│   └── messages/                # i18n translations
│
├── backend/                     # FastAPI + Google ADK Backend
│   ├── agents/                  # Multi-agent system
│   │   ├── image_diagnosis.py
│   │   ├── weather_intelligence.py
│   │   ├── risk_prediction.py
│   │   ├── recommendation.py
│   │   ├── government_scheme.py
│   │   ├── market_intelligence.py
│   │   └── analytics.py
│   ├── api/                     # FastAPI routes
│   ├── models/                  # Pydantic models
│   ├── services/                # Business logic
│   ├── utils/                   # Utilities
│   ├── config.py                # Configuration
│   └── main.py                  # FastAPI app entry
│
├── database/
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   └── bigquery/
│       └── schema.sql           # BigQuery tables
│
├── analytics/
│   ├── rapids_benchmark.ipynb   # NVIDIA RAPIDS cuDF benchmark
│   └── generate_synthetic_data.py
│
├── docs/
│   ├── API.md                   # API documentation
│   ├── ARCHITECTURE.md          # System architecture
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── DEMO_SCRIPT.md           # Judge demo script
│   └── PITCH_DECK_OUTLINE.md   # Pitch deck outline
│
├── .env.example
├── .gitignore
├── docker-compose.yml           # Local development
└── README.md
```

---

## 🚦 Getting Started

### Prerequisites

- **Node.js** 22 LTS
- **Python** 3.11+
- **pnpm** (or npm/yarn)
- **Google Cloud Account** (Gemini API access)
- **Supabase Account**

### Installation

#### 1. Clone Repository

```bash
git clone https://github.com/yourusername/krisisar-ai.git
cd krisisar-ai
```

#### 2. Frontend Setup

```bash
cd frontend
pnpm install
cp .env.example .env.local
# Add your API keys to .env.local
pnpm dev
```

Frontend runs at: `http://localhost:3000`

#### 3. Backend Setup (Python Virtual Environment)

```bash
cd backend
python -m venv venv
# Activate virtual environment:
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Add your API keys to .env
uvicorn main:app --reload
```

Backend runs at: `http://localhost:8000`

#### 4. Database Setup

```bash
cd frontend
npx prisma generate
npx prisma db push
```

#### 5. BigQuery Setup

- Create BigQuery dataset: `krisisar_analytics`
- Run `database/bigquery/schema.sql`

---

## 🌍 Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=optional
```

### Backend (.env)

```env
GOOGLE_API_KEY=your_gemini_api_key
DATABASE_URL=your_supabase_postgres_url
REDIS_URL=your_upstash_redis_url
BIGQUERY_PROJECT_ID=your_gcp_project_id
BIGQUERY_CREDENTIALS_PATH=path/to/service-account.json
OPEN_METEO_API_URL=https://api.open-meteo.com/v1/forecast
```

---

## 📊 NVIDIA RAPIDS Benchmark

Generate 500K synthetic farm records and benchmark Pandas vs cuDF:

```bash
cd analytics
# Use Google Colab with T4 GPU (free)
# Upload rapids_benchmark.ipynb
# Run all cells
```

**Expected Results:**
- Pandas: ~5-10 seconds
- cuDF: ~0.5-1 second
- **Speedup: 10-20x**

---

## 🎨 UI/UX Design Principles

- **Google Material Design** inspired
- **Large touch targets** (farmer-friendly)
- **Minimal text**, maximum visual communication
- **Dark & Light mode**
- **Responsive** (mobile-first)
- **Rounded cards** with subtle shadows
- **Smooth animations** (Framer Motion)
- **High contrast** for outdoor visibility

---

## 🌐 Multilingual Support

- 🇬🇧 English
- 🇮🇳 Hindi (हिंदी)
- 🇮🇳 Marathi (मराठी)
- 🇮🇳 Tamil (தமிழ்)
- 🇮🇳 Telugu (తెలుగు)

Powered by `next-intl` with dynamic language switching.

---

## 📱 PWA Features

- ✅ Installable on mobile/desktop
- ✅ Offline mode with service worker
- ✅ Background sync
- ✅ Push notifications (alerts)
- ✅ Add to home screen

---

## 🧪 Testing

```bash
# Frontend
cd frontend
pnpm test

# Backend
cd backend
pytest
```

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
cd frontend
vercel --prod
```

### Backend (Render/Railway)

```bash
cd backend
# Connect GitHub repo to Render/Railway
# Set environment variables
# Deploy
```

### Database (Supabase)

Already cloud-hosted (free tier).

---

## 📈 Analytics & Monitoring

- **BigQuery**: Real-time analytics ingestion
- **Looker Studio**: Visual dashboards
  - Disease heatmap
  - Risk distribution
  - Farmer usage metrics
  - Predictive trends

---

## 🏆 Hackathon Deliverables

✅ Complete production-ready codebase  
✅ System architecture diagram  
✅ Database schema + ER diagram  
✅ API documentation  
✅ Multi-agent AI system (Google ADK)  
✅ RAPIDS cuDF benchmark (500K records)  
✅ BigQuery analytics integration  
✅ Looker Studio dashboard design  
✅ Multilingual PWA (5 languages)  
✅ Landing page  
✅ README, deployment guide, demo script  
✅ Pitch deck outline  

---

## 🎤 Demo Script

See [docs/DEMO_SCRIPT.md](docs/DEMO_SCRIPT.md)

---

## 🤝 Contributing

Contributions are welcome! Please follow:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE)

---

## 👥 Team

Built for **Google Gen AI Academy Cohort 2 - Decision Intelligence Hackathon**

---

## 🙏 Acknowledgments

- Google Gemini AI
- NVIDIA RAPIDS
- Supabase
- Vercel
- Open-Meteo
- PlantVillage Dataset
- data.gov.in

---

## 📞 Contact

For questions or support, reach out via GitHub Issues.

---

**⭐ If you find KrisiSar AI useful, please star this repository!**
