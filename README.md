# 🌾 KrisiSar AI

**AI-Powered Farm Decision Intelligence Platform**

> Built for the Google Gen AI Academy — Decision Intelligence Hackathon

KrisiSar AI turns fragmented agricultural data into clear, actionable decisions for farmers. Instead of raw numbers, farmers get answers: *should I spray today, irrigate, or worry about this leaf?* The platform combines Google Gemini, a BigQuery data pipeline, NVIDIA RAPIDS GPU acceleration, and a Looker Studio dashboard.

---

## 🎯 Problem → Solution

**Problem.** Farmers rely on scattered sources — weather apps, YouTube, WhatsApp, local dealers. This fragmentation drives poor decisions on irrigation, pesticides, disease management, and crop planning.

**Solution.** One platform that unifies the data and returns decisions:
- 📸 Crop disease diagnosis from a photo (Gemini Vision)
- 🎯 Farm risk score (0–100)
- 🌤️ Weather intelligence + irrigation advice
- 💬 Multilingual AI chat
- 🏛️ Government scheme discovery
- 📊 Analytics dashboard over 500K farm records (BigQuery + Looker)

---

## 🏆 Hackathon alignment (Data Intelligence + Acceleration)

| Requirement | How KrisiSar AI meets it |
|---|---|
| Real user + problem | Farmers making irrigation / pesticide / risk decisions |
| Decision that depends on data | Risk score, disease action, irrigation timing |
| Pipeline (ingest → analyze → visualize) | CSV/synthetic → **BigQuery** → **cuDF** aggregation → **Gemini** advice → dashboard |
| Useful output | Dashboard, risk score, alerts, recommendations |
| **Acceleration evidence** | **NVIDIA RAPIDS cuDF: 22.58x average, 49.8x on GroupBy** over 500K rows (T4 GPU) |
| Two+ technologies | **BigQuery + Looker + NVIDIA RAPIDS** (three) |

---

## 🧱 Tech stack

**Frontend** — Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Recharts, Framer Motion, Lucide icons. Optional PWA (opt-in). Supabase JS for auth.

**Backend** — FastAPI (Python 3.11+), modular multi-agent design, Google Gemini API (`gemini-2.5-flash` for text, vision, and reasoning slots).

**Data & analytics** — Google BigQuery (dataset `krisisar_analytics`), Looker Studio dashboard, NVIDIA RAPIDS cuDF benchmark (Google Colab T4).

**External APIs** — Open-Meteo (weather), BigDataCloud (reverse geocoding), data.gov.in (optional real datasets).

---

## 🤖 Multi-agent backend

Six focused agents, each a Python module under `backend/agents/`:

| Agent | Purpose | Powered by |
|---|---|---|
| Image Diagnosis | Crop disease detection from images | Gemini Vision |
| Weather Intelligence | Forecast + disease-risk signals | Open-Meteo |
| Risk Prediction | Farm risk score (0–100) | Weather + disease + crop-health factors |
| Recommendation | Actionable decision cards | Gemini |
| Government Scheme | Scheme eligibility / guidance | RAG-style matching |
| Analytics | BigQuery logging + aggregation queries | BigQuery |

---

## 📊 Data pipeline

```
Synthetic 500K farm records (analytics/generate_synthetic_data.py)
        │  CSV
        ▼
   BigQuery  ── dataset: krisisar_analytics
        │        tables:  farm_perf_raw, diagnosis_events, risk_score_events,
        │                 weather_events, chat_sessions, user_activity, farm_performance
        │        views:   disease_heatmap, top_diseases, risk_distribution,
        │                 daily_activity, farmer_engagement
        │
        ├──► Looker Studio dashboard  (yield by crop, risk by state, crop mix, scorecards)
        │
        ├──► FastAPI /api/v1/analytics/farm-insights  ──►  in-app Analytics dashboard
        │
        └──► NVIDIA RAPIDS cuDF benchmark (Colab T4)  ──►  22.58x avg speedup
```

The in-app Analytics page (`/dashboard/analytics`) reads `farm-insights`, which aggregates the 500K-row `farm_perf_raw` table into three live charts: **average yield by crop**, **average risk by state**, and **disease spread across farms**.

---

## 🚀 Getting started

### Prerequisites
- Node.js 22+, pnpm
- Python 3.11+
- Google Gemini API key
- A Google Cloud project with BigQuery + a service-account JSON

### Frontend
```bash
cd frontend
pnpm install
# create .env.local (see below)
pnpm dev            # http://localhost:3000
```

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
# create .env (see below)
python main.py               # http://localhost:8000  (docs at /docs)
```

### BigQuery (one-time)
1. Create dataset `krisisar_analytics`.
2. Run `database/bigquery/schema.sql` to create tables + views.
3. Load the bulk dataset:
   ```bash
   python analytics/generate_synthetic_data.py     # -> farm_performance_500k.csv
   ```
   Upload the CSV in the BigQuery console as table `farm_perf_raw` (CSV, auto-detect schema).

### NVIDIA RAPIDS benchmark
Upload `analytics/rapids_benchmark.ipynb` + the CSV to Google Colab, set runtime to **T4 GPU**, and Run all. (On current Colab, install with `cudf-cu12`.)

---

## 🔑 Environment variables

**frontend/.env.local**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
# NEXT_PUBLIC_ENABLE_PWA=true   # optional, PWA is off unless set
```

**backend/.env**
```env
GOOGLE_API_KEY=your_gemini_api_key
DATABASE_URL=your_postgres_url            # or a placeholder if unused
BIGQUERY_PROJECT_ID=krisisar
BIGQUERY_DATASET_ID=krisisar_analytics
BIGQUERY_FARM_TABLE=farm_perf_raw
BIGQUERY_CREDENTIALS_PATH=./service-account.json
OPEN_METEO_API_URL=https://api.open-meteo.com/v1/forecast
```

> ⚠️ `service-account.json` is a secret credential. It is gitignored and must never be committed.

---

## 📁 Project structure

```
krisisar-ai/
├── frontend/                 # Next.js 15 app
│   ├── app/                  # landing, dashboard + 6 feature pages, signup, demo, docs
│   ├── components/           # FeatureShell, shared UI
│   └── lib/                  # api client, supabase client, utils
├── backend/                  # FastAPI + agents
│   ├── agents/               # 6 AI agents
│   ├── api/routes/           # 8 route groups
│   ├── config.py
│   └── main.py
├── database/bigquery/        # schema.sql (tables + views)
├── analytics/                # synthetic data generator + RAPIDS benchmark notebook
├── docs/                     # ARCHITECTURE.md
└── README.md
```

---

## 📈 Results

- **500,000** farm records analyzed in BigQuery
- **NVIDIA RAPIDS cuDF**: 22.58x average speedup (49.8x GroupBy, 15.1x load) vs pandas on a T4 GPU
- Live Looker Studio dashboard + in-app analytics, both served from BigQuery

---

## 📄 License

MIT.
