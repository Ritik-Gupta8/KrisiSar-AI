# 🏗️ KrisiSar AI - System Architecture

## **Overview**

KrisiSar AI is a production-grade, AI-powered Farm Decision Intelligence Platform built for the Google Gen AI Academy Cohort 2 Hackathon. The architecture is designed for scale, reliability, and farmer-first user experience.

---

## 🎯 **Architecture Principles**

1. **Separation of Concerns**: Frontend (presentation), Backend (AI/logic), Database (persistence), Analytics (insights)
2. **Multi-Agent AI**: Specialized agents for diagnosis, weather, risk, recommendations, schemes
3. **API-First Design**: RESTful APIs for all services
4. **Progressive Enhancement**: Works on 2G networks, offline capable
5. **Scalability**: Horizontal scaling, GPU acceleration, cloud-native
6. **Free Tier Optimized**: All components use free tiers for hackathon demo

---

## 📊 **High-Level Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                    FARMER (Mobile/Desktop)                   │
│                     PWA | Multilingual                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ├─► Next.js 15 Frontend (Vercel)
                         │   ├─ React 19 + TypeScript
                         │   ├─ Tailwind CSS v4
                         │   ├─ shadcn/ui Components
                         │   ├─ Service Worker (Offline)
                         │   └─ next-intl (i18n)
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│             Next.js API Routes (BFF Layer)                   │
│  Authentication | Request Routing | Response Formatting     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         FastAPI + Python Backend (Render/Railway)            │
│                  Multi-Agent AI System                        │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────────────────────────────────────────┐       │
│  │         Google ADK Multi-Agent System           │       │
│  ├─────────────────────────────────────────────────┤       │
│  │ 1. Image Diagnosis Agent (Gemini Vision)        │       │
│  │    - Disease detection                           │       │
│  │    - Severity assessment                         │       │
│  │    - Treatment recommendations                   │       │
│  │                                                   │       │
│  │ 2. Weather Intelligence Agent                    │       │
│  │    - Open-Meteo API integration                  │       │
│  │    - 7-day forecast                              │       │
│  │    - Disease risk prediction                     │       │
│  │    - Irrigation recommendations                  │       │
│  │                                                   │       │
│  │ 3. Risk Prediction Agent                         │       │
│  │    - Farm risk score (0-100)                     │       │
│  │    - Multi-factor analysis                       │       │
│  │    - Actionable insights                         │       │
│  │                                                   │       │
│  │ 4. Recommendation Agent (Gemini Pro)             │       │
│  │    - Decision cards                              │       │
│  │    - Comprehensive recommendations               │       │
│  │    - Context-aware advice                        │       │
│  │                                                   │       │
│  │ 5. Government Scheme Agent (RAG)                 │       │
│  │    - ChromaDB vector store                       │       │
│  │    - Scheme matching                             │       │
│  │    - Eligibility checking                        │       │
│  │                                                   │       │
│  │ 6. Market Intelligence Agent (Optional)          │       │
│  │    - Mandi prices                                │       │
│  │    - Price trends                                │       │
│  │                                                   │       │
│  │ 7. Analytics Agent                               │       │
│  │    - BigQuery logging                            │       │
│  │    - Trend analysis                              │       │
│  │    - Dashboard data                              │       │
│  └─────────────────────────────────────────────────┘       │
│                                                               │
└──────┬──────────────┬──────────────┬──────────────┬─────────┘
       │              │              │              │
       ▼              ▼              ▼              ▼
  ┌─────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐
  │Supabase │  │BigQuery  │  │ Firebase │  │   Redis    │
  │PostgreSQL│  │Analytics │  │ Storage  │  │  (Upstash) │
  └─────────┘  └──────────┘  └──────────┘  └────────────┘
       │              │
       │              ▼
       │       ┌──────────────┐
       │       │Looker Studio │
       │       │  Dashboard   │
       │       └──────────────┘
       │
       ▼
┌─────────────────────────────────────────────┐
│        NVIDIA RAPIDS cuDF (Colab GPU)       │
│    500K Records | 10-20x Speedup           │
└─────────────────────────────────────────────┘
```

---

## 🔧 **Component Details**

### **1. Frontend Layer (Next.js 15)**

**Tech Stack:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- TanStack Query (state management)
- Framer Motion (animations)
- next-intl (multilingual)

**Features:**
- Server-side rendering (SSR)
- Progressive Web App (PWA)
- Offline mode with service worker
- Responsive design (mobile-first)
- Dark/light mode
- Multi-language support (5 languages)

**Deployment:** Vercel Free Tier

---

### **2. Backend API Layer (FastAPI)**

**Tech Stack:**
- Python 3.11+
- FastAPI 0.115+
- Pydantic (validation)
- httpx (async HTTP)
- google-generativeai (Gemini SDK)
- Google ADK (multi-agent system)

**API Endpoints:**

| Route | Method | Description |
|-------|--------|-------------|
| `/api/v1/diagnosis/analyze` | POST | Analyze crop image |
| `/api/v1/weather/current` | GET | Get weather + forecast |
| `/api/v1/weather/irrigation-recommendation` | GET | Irrigation advice |
| `/api/v1/risk/calculate` | POST | Calculate farm risk score |
| `/api/v1/recommendations/decision-card` | POST | Get decision card |
| `/api/v1/schemes/find-eligible` | POST | Find eligible schemes |
| `/api/v1/chat/message` | POST | Multilingual chat |
| `/api/v1/analytics/disease-trends` | GET | Disease trends data |

**Deployment:** Render/Railway Free Tier

---

### **3. Database Layer**

#### **Supabase PostgreSQL (Primary Database)**

**Schema:**
- Users
- Diagnoses
- RiskScores
- WeatherData
- ChatSessions
- ChatMessages
- GovernmentSchemes
- Alerts
- AnalyticsEvents
- MarketPrices

**Features:**
- Row-level security (RLS)
- Real-time subscriptions
- RESTful API
- Auth integration

#### **BigQuery (Analytics Database)**

**Tables:**
- diagnosis_events
- risk_score_events
- weather_events
- chat_sessions
- user_activity
- farm_performance (500K synthetic records)

**Views:**
- disease_heatmap
- top_diseases
- risk_distribution
- daily_activity
- farmer_engagement

---

### **4. AI/ML Layer**

#### **Google Gemini Models**

| Model | Use Case | Temperature |
|-------|----------|-------------|
| gemini-2.0-flash-exp | Image diagnosis, fast responses | 0.4 |
| gemini-1.5-pro | Complex recommendations | 0.7 |
| gemini-2.0-flash-exp | Vision (crop disease detection) | 0.4 |

#### **Multi-Agent System (Google ADK)**

Each agent is a specialized microservice with:
- **Single Responsibility**: One task, done well
- **Context Awareness**: Shares context with other agents
- **Tool Access**: Can call external APIs
- **State Management**: Maintains conversation state

**Agent Communication:**
```python
# Example: Risk Prediction Agent calling Weather Agent
weather_data = await weather_agent.get_weather_data(lat, lng)
disease_risk = weather_data['diseaseRisk']

# Use disease_risk in risk calculation
overall_risk = calculate_risk(weather_risk, disease_risk, crop_risk)
```

---

### **5. Data Pipeline**

```
User Action
    ↓
Frontend (Next.js)
    ↓
API Route (Next.js BFF)
    ↓
FastAPI Backend
    ↓
AI Agent Processing
    ↓
Database Write (Supabase)
    ↓
Analytics Log (BigQuery) [async]
    ↓
Response to User
```

---

### **6. Caching Strategy**

**Redis (Upstash Free Tier):**
- Weather data (1 hour TTL)
- Disease information (24 hours TTL)
- Government schemes (7 days TTL)

**Service Worker (Frontend):**
- Static assets
- API responses
- Offline fallbacks

---

### **7. Security Architecture**

**Authentication:**
- Better Auth (or Auth.js)
- JWT tokens
- Phone + OTP (farmer-friendly)

**API Security:**
- Rate limiting (FastAPI middleware)
- Input validation (Pydantic)
- CORS configuration
- API key authentication

**Data Privacy:**
- No PII in logs
- Encrypted storage (Supabase)
- GDPR compliant
- Farmer consent flows

---

### **8. Monitoring & Observability**

**Logging:**
- Backend: Python logging + file rotation
- Frontend: Sentry (optional)
- BigQuery: All events

**Metrics:**
- API response times
- AI model latencies
- Error rates
- User engagement

**Analytics:**
- Looker Studio dashboards
- BigQuery SQL queries
- RAPIDS cuDF for heavy analytics

---

## 🚀 **Scalability Design**

### **Current Architecture (Hackathon)**
- **Users:** 100-1,000
- **Requests/day:** 10,000
- **Cost:** $0 (all free tiers)

### **Production Scale (Future)**
- **Users:** 1,000,000+
- **Requests/day:** 10,000,000+
- **Horizontal Scaling:**
  - Frontend: Vercel auto-scaling
  - Backend: Kubernetes (GKE)
  - Database: Supabase Pro + read replicas
  - Analytics: BigQuery (petabyte-scale)
  - GPU: NVIDIA RAPIDS on GCP

---

## 🔄 **Data Flow Examples**

### **Example 1: Crop Diagnosis**

```
1. Farmer uploads image (Frontend)
   ↓
2. Image sent to /api/v1/diagnosis/analyze
   ↓
3. ImageDiagnosisAgent processes with Gemini Vision
   ↓
4. Disease detected with confidence score
   ↓
5. Treatment recommendations generated
   ↓
6. Response sent to farmer
   ↓
7. Event logged to BigQuery (async)
   ↓
8. Diagnosis saved to Supabase
```

### **Example 2: Risk Score Calculation**

```
1. User requests risk score
   ↓
2. RiskPredictionAgent fetches:
   - Weather data (WeatherAgent → Open-Meteo)
   - Disease history (Supabase)
   - Crop info (User profile)
   ↓
3. Calculate risk components:
   - Weather risk (40%)
   - Disease risk (35%)
   - Crop health risk (25%)
   ↓
4. Generate actionable recommendations (RecommendationAgent)
   ↓
5. Return risk score + actions
   ↓
6. Log to BigQuery for trends
```

---

## 📦 **Deployment Architecture**

### **Production Deployment**

```
┌──────────────┐       ┌──────────────┐
│   Vercel     │       │  Render/     │
│  (Frontend)  │◄─────►│  Railway     │
│   Global CDN │       │  (Backend)   │
└──────────────┘       └──────┬───────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
         ┌──────▼──────┐            ┌────────▼────────┐
         │  Supabase   │            │    BigQuery     │
         │  PostgreSQL │            │                 │
         └─────────────┘            └─────────────────┘
```

### **Local Development**

```
docker-compose up
  ├─ PostgreSQL (port 5432)
  ├─ Redis (port 6379)
  ├─ FastAPI Backend (port 8000)
  └─ Next.js Frontend (port 3000)
```

---

## 🎨 **Design Patterns**

1. **BFF (Backend for Frontend):** Next.js API routes
2. **Multi-Agent System:** Google ADK
3. **Repository Pattern:** Database access layer
4. **Service Layer:** Business logic separation
5. **Factory Pattern:** Agent initialization
6. **Observer Pattern:** Event logging to BigQuery

---

## 📈 **Performance Optimization**

1. **Image Optimization:** Next.js Image component
2. **Code Splitting:** Dynamic imports
3. **API Response Caching:** Redis
4. **Database Indexing:** Prisma indexes
5. **GPU Acceleration:** RAPIDS cuDF
6. **CDN:** Vercel Edge Network
7. **Lazy Loading:** React.lazy()
8. **Debouncing:** Search inputs

---

## 🔐 **Compliance & Standards**

- **WCAG 2.1 AA:** Accessibility
- **GDPR:** Data privacy
- **SOC 2:** Security (Supabase)
- **ISO 27001:** Information security
- **REST API Design:** Industry standards

---

## 📚 **Technology Justification**

| Choice | Reason |
|--------|--------|
| **Next.js 15** | SSR, SEO, PWA, best-in-class DX |
| **FastAPI** | Python for AI, async, auto docs |
| **Gemini 2.5** | Multimodal AI, context length, free tier |
| **Supabase** | PostgreSQL + realtime + auth |
| **BigQuery** | Petabyte-scale analytics |
| **RAPIDS cuDF** | 10-20x speedup on analytics |
| **Vercel** | Zero-config deployment |
| **Tailwind** | Utility-first, fast prototyping |

---

**This architecture is production-ready, scalable, and optimized for the Google Gen AI Academy hackathon evaluation criteria.**
