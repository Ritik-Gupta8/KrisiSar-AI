<a id="readme-top"></a>

<div align="center">

<h1>🌾 KrisiSar AI</h1>

### AI-Powered Farm Decision Intelligence Platform

*From fragmented information to confident decisions — one platform for every farming choice.*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-krisi--sar--ai.vercel.app-22c55e?style=for-the-badge)](https://krisi-sar-ai.vercel.app)
[![API](https://img.shields.io/badge/⚙️_API-Render-46E3B7?style=for-the-badge)](https://krisisar-ai.onrender.com/docs)

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![BigQuery](https://img.shields.io/badge/BigQuery-669DF6?style=for-the-badge&logo=googlebigquery&logoColor=white)](https://cloud.google.com/bigquery)
[![NVIDIA RAPIDS](https://img.shields.io/badge/NVIDIA_RAPIDS-76B900?style=for-the-badge&logo=nvidia&logoColor=white)](https://rapids.ai/)

**[Explore the Demo »](https://krisi-sar-ai.vercel.app)** · [Report Bug](https://github.com/Ritik-Gupta8/KrisiSar-AI/issues) · [Request Feature](https://github.com/Ritik-Gupta8/KrisiSar-AI/issues)

> Built for the **Google Gen AI Academy — Decision Intelligence Hackathon**

</div>

---

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Results & Impact](#results--impact)
- [Hackathon Alignment](#hackathon-alignment)
- [Built With](#built-with)
- [Architecture](#architecture)
- [Data Pipeline](#data-pipeline)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

</details>

---

## About The Project

Farmers make high-stakes decisions every day — when to irrigate, which pesticide to spray, whether a leaf spot is a threat — yet the information they need is scattered across weather apps, YouTube, WhatsApp groups, and local dealers. This fragmentation leads to poor timing, wasted inputs, and lost income.

**KrisiSar AI unifies this into one intelligent platform that returns decisions, not just data.** Upload a leaf photo and get a diagnosis with treatment. Ask "should I irrigate today?" and get a clear answer. Check a 0–100 farm risk score built from weather, disease, and crop-health signals. Explore national-scale analytics powered by a GPU-accelerated data pipeline.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key Features

| Feature | What it does | Powered by |
|---|---|---|
| 📸 **Crop Diagnosis** | Photo → instant disease detection, severity, and treatment | Gemini Vision |
| 🎯 **Farm Risk Score** | Real-time 0–100 risk from multi-factor analysis | Weather + disease + crop health |
| 🌤️ **Weather Intelligence** | 7-day forecast + irrigation & disease-risk advice | Open-Meteo |
| 💬 **Ask KrisiSar** | Natural-language assistant for any farming question | Gemini |
| 🏛️ **Government Schemes** | Eligibility & guidance for PM-KISAN, insurance, loans | RAG matching |
| 📊 **Analytics Dashboard** | Yield, risk, and disease insights over 500K records | BigQuery + Looker |
| 🌐 **Multilingual UI** | Landing page in English, Hindi, Marathi, Tamil, Telugu | Built-in i18n |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Screenshots

<div align="center">

### ⚡ NVIDIA RAPIDS — 22.58× average speedup (49.8× on GroupBy), 500K records
<img src="docs/screenshots/rapids-benchmark.png" alt="Pandas vs cuDF benchmark — 22.58x average speedup" width="95%"/>

### 📊 Live BigQuery Analytics — Looker Studio dashboard
<table>
  <tr>
    <td width="60%"><img src="docs/screenshots/looker-yield-by-crop.png" alt="Average yield by crop"/></td>
    <td width="40%"><img src="docs/screenshots/looker-crop-distribution.png" alt="Crop distribution"/></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/looker-yield-scatter.png" alt="Yield vs farm size"/></td>
    <td><img src="docs/screenshots/looker-scorecards.png" alt="Key metrics — 500,000 farms analyzed"/></td>
  </tr>
</table>

</div>

▶️ **See it live:** [krisi-sar-ai.vercel.app](https://krisi-sar-ai.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Results & Impact

<div align="center">

| 📦 Data scale | ⚡ GPU speedup | ☁️ Google Cloud | 🌐 Languages |
|:---:|:---:|:---:|:---:|
| **500,000** farm records | **22.58×** avg (49.8× GroupBy) | **3** services | **5** on landing |

</div>

- **Acceleration evidence:** NVIDIA RAPIDS cuDF processes the same 500K-row analytics **22.58× faster on average** than pandas on a Google Colab T4 GPU — GroupBy aggregations run **49.8× faster**. This is what makes real-time insight viable at national farmer scale.
- **Real pipeline, live in production:** the deployed backend serves aggregated BigQuery insights to both the in-app dashboard and a public Looker Studio report.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Hackathon Alignment

*Track: Data Intelligence + Acceleration.*

| Requirement | How KrisiSar AI meets it |
|---|---|
| Clear real-world user & problem | Farmers deciding irrigation / pesticide / disease action |
| A decision that depends on data | Risk score, disease diagnosis, irrigation timing |
| Pipeline (ingest → analyze → visualize) | CSV → **BigQuery** → **cuDF** → **Gemini** → dashboard |
| Useful output | Dashboard, risk score, alerts, recommendations |
| **Acceleration improves the experience** | **RAPIDS cuDF: 22.58× avg, 49.8× GroupBy** on 500K rows |
| Two+ technologies | **BigQuery + Looker + NVIDIA RAPIDS** (three) |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

**Frontend** — Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Recharts · Framer Motion
**Backend** — FastAPI · Python 3.11 · Google Gemini 2.5 · multi-agent design
**Data & Analytics** — Google BigQuery · Looker Studio · NVIDIA RAPIDS cuDF
**Infra** — Vercel (frontend) · Render (backend) · Supabase (auth)
**External APIs** — Open-Meteo · BigDataCloud · data.gov.in

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Architecture

```
┌──────────────────────────────┐        ┌───────────────────────────┐
│   Next.js 15 (Vercel)         │  REST  │   FastAPI (Render)         │
│   Landing · Dashboard · i18n  ├───────►│   8 routes · 6 AI agents   │
└──────────────────────────────┘        └───────┬───────────┬────────┘
                                                 │           │
                                    ┌────────────▼──┐   ┌────▼─────────┐
                                    │  Google Gemini │   │  BigQuery    │
                                    │  (text+vision) │   │  analytics   │
                                    └────────────────┘   └────┬─────────┘
                                                    ┌─────────┴──────────┐
                                                    ▼                    ▼
                                             ┌────────────┐     ┌──────────────────┐
                                             │Looker Studio│     │ NVIDIA RAPIDS cuDF│
                                             │  dashboard  │     │  22.58× speedup   │
                                             └────────────┘     └──────────────────┘
```

> Full details, agent responsibilities, and query design are in **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Data Pipeline

1. **Ingest** — generate 500K synthetic farm records (`analytics/generate_synthetic_data.py`) and load into BigQuery table `farm_perf_raw`.
2. **Store** — BigQuery dataset `krisisar_analytics` (7 tables + 5 views, partitioned & clustered).
3. **Accelerate** — RAPIDS cuDF benchmark (`analytics/rapids_benchmark.ipynb`) proves 22.58× speedup on the same aggregations.
4. **Serve** — `GET /api/v1/analytics/farm-insights` aggregates yield by crop, risk by state, and disease spread.
5. **Visualize** — in-app Analytics page (Recharts) + public Looker Studio dashboard.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites
- Node.js 22+ and `pnpm`
- Python 3.11+
- A Google Gemini API key
- A Google Cloud project with BigQuery + a service-account JSON

### Installation

```sh
# 1. Clone
git clone https://github.com/Ritik-Gupta8/KrisiSar-AI.git
cd KrisiSar-AI

# 2. Frontend
cd frontend
pnpm install
# create .env.local (see Environment Variables)
pnpm dev            # http://localhost:3000

# 3. Backend
cd ../backend
python -m venv venv
venv\Scripts\activate            # Windows  (source venv/bin/activate on macOS/Linux)
pip install -r requirements.txt
# create .env (see Environment Variables)
python main.py                   # http://localhost:8000  (Swagger at /docs)
```

### BigQuery + RAPIDS (one-time)

```sh
# Create dataset krisisar_analytics, then run database/bigquery/schema.sql

# Generate + load the analytics dataset
python analytics/generate_synthetic_data.py   # -> farm_performance_500k.csv
# Upload the CSV in the BigQuery console as table `farm_perf_raw` (auto-detect schema)

# Benchmark: upload analytics/rapids_benchmark.ipynb + the CSV to Google Colab (T4 GPU) and Run all
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Environment Variables

**frontend/.env.local**
```env
NEXT_PUBLIC_API_URL=https://krisisar-ai.onrender.com
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**backend/.env**
```env
GOOGLE_API_KEY=your_gemini_api_key
BIGQUERY_PROJECT_ID=krisisar
BIGQUERY_DATASET_ID=krisisar_analytics
BIGQUERY_FARM_TABLE=farm_perf_raw
BIGQUERY_CREDENTIALS_PATH=./service-account.json
DATABASE_URL=postgresql://user:pass@host:5432/db
OPEN_METEO_API_URL=https://api.open-meteo.com/v1/forecast
```

> ⚠️ `service-account.json` is a secret and is gitignored — never commit it. In production it's mounted as a Render secret file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Structure

```
KrisiSar-AI/
├── frontend/          # Next.js 15 app (landing, dashboard + 6 features, i18n)
├── backend/           # FastAPI + 6 AI agents + 8 routes
├── database/bigquery/ # schema.sql (tables + views)
├── analytics/         # synthetic data generator + RAPIDS benchmark
├── docs/              # ARCHITECTURE.md
└── README.md
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Multi-agent backend (diagnosis, weather, risk, recommendation, schemes, analytics)
- [x] BigQuery pipeline + 500K-record analytics
- [x] NVIDIA RAPIDS cuDF benchmark (22.58× speedup)
- [x] Looker Studio dashboard
- [x] Multilingual landing page (5 languages)
- [x] Production deployment (Vercel + Render)
- [ ] Voice assistant (speech-to-text / text-to-speech)
- [ ] Offline-first PWA for low-connectivity areas
- [ ] Full multilingual support across all dashboard pages
- [ ] Live data.gov.in ingestion (mandi prices, rainfall)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are welcome. To propose a change:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Google Gemini](https://ai.google.dev/) · [BigQuery](https://cloud.google.com/bigquery) · [Looker Studio](https://lookerstudio.google.com/)
- [NVIDIA RAPIDS](https://rapids.ai/)
- [Open-Meteo](https://open-meteo.com/) · [data.gov.in](https://data.gov.in/)
- [Vercel](https://vercel.com/) · [Render](https://render.com/) · [Supabase](https://supabase.com/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template) for structure inspiration

<p align="right">(<a href="#readme-top">back to top</a>)</p>
