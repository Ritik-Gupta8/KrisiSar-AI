# 🚀 KrisiSar AI - Deployment Guide

Complete guide for deploying KrisiSar AI to production.

---

## 📋 **Pre-Deployment Checklist**

### **Required Accounts** (All Free Tier)

- [ ] Google Cloud Account (Gemini API key)
- [ ] Supabase Account (PostgreSQL database)
- [ ] Vercel Account (Frontend hosting)
- [ ] Render or Railway Account (Backend hosting)
- [ ] Firebase Account (Image storage)
- [ ] Upstash Account (Redis)
- [ ] GitHub Account (Code repository)

---

## 🔧 **Local Development Setup**

### **1. Clone Repository**

```bash
git clone https://github.com/yourusername/krisisar-ai.git
cd krisisar-ai
```

### **2. Frontend Setup**

```bash
cd frontend

# Install dependencies
pnpm install
# or: npm install / yarn install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your API keys
nano .env.local

# Run development server
pnpm dev
```

Frontend will run at `http://localhost:3000`

### **3. Backend Setup (Python Virtual Environment)**

```bash
cd backend

# Create virtual environment (RECOMMENDED)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp ../.env.example .env

# Edit .env with your API keys
nano .env

# Run FastAPI server
uvicorn main:app --reload
```

Backend will run at `http://localhost:8000`  
API docs available at `http://localhost:8000/docs`

### **4. Database Setup (Prisma + Supabase)**

```bash
cd frontend

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

### **5. Docker Setup (Alternative)**

```bash
# Start all services
docker-compose up

# Services:
# - PostgreSQL: localhost:5432
# - Redis: localhost:6379
# - Backend: localhost:8000
# - Frontend: localhost:3000
```

---

## 🔑 **Environment Variables**

### **Frontend (.env.local)**

```env
# API URLs
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Optional
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
```

### **Backend (.env)**

```env
# Google Gemini
GOOGLE_API_KEY=your_gemini_api_key_here

# Database
DATABASE_URL=postgresql://user:password@host:port/dbname

# Redis
REDIS_URL=redis://default:password@redis-host:port

# BigQuery
BIGQUERY_PROJECT_ID=your_gcp_project_id
BIGQUERY_DATASET_ID=krisisar_analytics
BIGQUERY_CREDENTIALS_PATH=./service-account.json

# Weather API
OPEN_METEO_API_URL=https://api.open-meteo.com/v1/forecast

# Security
SECRET_KEY=generate_random_secret_key_here
```

### **How to Get API Keys**

#### **1. Google Gemini API Key**

```bash
# Visit: https://aistudio.google.com/app/apikey
# Click "Get API Key"
# Create new key or use existing
# Copy the key
```

#### **2. Supabase Setup**

```bash
# Visit: https://supabase.com
# Create new project
# Go to Settings → API
# Copy:
#   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
#   - Anon/Public key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
#   - Connection string (DATABASE_URL)
```

#### **3. BigQuery Setup**

```bash
# Visit: https://console.cloud.google.com
# Create new project or select existing
# Enable BigQuery API
# Create service account:
#   - IAM & Admin → Service Accounts
#   - Create Service Account
#   - Grant BigQuery Admin role
#   - Create JSON key
#   - Download and save as service-account.json
# Copy project ID
```

#### **4. Redis (Upstash)**

```bash
# Visit: https://upstash.com
# Create new Redis database
# Copy Redis URL
```

#### **5. Firebase Storage**

```bash
# Visit: https://console.firebase.google.com
# Create new project
# Go to Storage → Get Started
# Copy configuration from Project Settings
```

---

## ☁️ **Cloud Deployment**

### **Step 1: Deploy Frontend to Vercel**

#### **Via Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import GitHub repository
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: **frontend**
   - Build Command: `pnpm build` (or `npm run build`)
   - Output Directory: `.next`
5. Add Environment Variables (from `.env.local`)
6. Click "Deploy"

#### **Via Vercel CLI**

```bash
cd frontend

# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Follow prompts
```

**Result:** Your frontend will be live at `https://your-project.vercel.app`

---

### **Step 2: Deploy Backend to Render**

#### **Via Render Dashboard**

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - Name: `krisisar-ai-backend`
   - Environment: **Python 3.11**
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Instance Type: **Free**
5. Add Environment Variables (from backend `.env`)
6. Click "Create Web Service"

#### **Alternative: Railway**

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select backend directory
4. Add environment variables
5. Deploy

**Result:** Backend API will be live at `https://your-backend.onrender.com`

---

### **Step 3: Update Frontend API URL**

```bash
# In Vercel dashboard:
# Go to Settings → Environment Variables
# Update NEXT_PUBLIC_API_URL to your backend URL

NEXT_PUBLIC_API_URL=https://your-backend.onrender.com

# Redeploy frontend
vercel --prod
```

---

### **Step 4: Setup Database (Supabase)**

#### **Run Database Migrations**

```bash
cd frontend

# Ensure DATABASE_URL points to Supabase
# Run Prisma migrations
npx prisma migrate deploy

# Or push schema
npx prisma db push
```

#### **Run BigQuery Schema**

```bash
# Install Google Cloud SDK
# Or use BigQuery web console

# Create dataset
bq mk --dataset --location=US krisisar_analytics

# Run schema.sql
bq query --use_legacy_sql=false < database/bigquery/schema.sql
```

---

## 🧪 **Testing Deployment**

### **Frontend Health Check**

```bash
curl https://your-project.vercel.app
# Should return Next.js landing page
```

### **Backend Health Check**

```bash
curl https://your-backend.onrender.com/health
# Should return: {"status":"healthy","service":"krisisar-ai-backend"}
```

### **API Endpoints Test**

```bash
# Test weather API
curl "https://your-backend.onrender.com/api/v1/weather/current?latitude=28.6139&longitude=77.2090&forecast_days=7"

# Test diagnosis (requires image upload)
curl -X POST https://your-backend.onrender.com/api/v1/diagnosis/analyze \
  -F "image=@path/to/crop-image.jpg" \
  -F "crop_type=Rice"
```

---

## 📊 **Setup BigQuery Analytics**

### **1. Create BigQuery Dataset**

```bash
bq mk --dataset --location=US krisisar_analytics
```

### **2. Run Schema**

```bash
bq query --use_legacy_sql=false < database/bigquery/schema.sql
```

### **3. Upload Synthetic Data (Optional)**

```bash
cd analytics

# Generate data
python generate_synthetic_data.py

# Upload to BigQuery
bq load \
  --source_format=CSV \
  --skip_leading_rows=1 \
  krisisar_analytics.farm_performance \
  farm_performance_500k.csv
```

### **4. Setup Looker Studio Dashboard**

1. Go to [lookerstudio.google.com](https://lookerstudio.google.com)
2. Create new report
3. Add BigQuery data source
4. Connect to `krisisar_analytics` dataset
5. Create visualizations:
   - Disease heatmap (geo chart)
   - Risk distribution (pie chart)
   - Top diseases (bar chart)
   - Daily activity (line chart)

---

## 🔒 **Security Configuration**

### **1. Enable CORS (Backend)**

```python
# backend/main.py
origins = [
    "https://your-project.vercel.app",  # Add your Vercel URL
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### **2. Setup Rate Limiting**

```python
# Install: pip install slowapi
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.get("/api/v1/diagnosis/analyze")
@limiter.limit("10/minute")
async def analyze_crop(request: Request):
    # ...
```

### **3. Environment Variable Security**

- ✅ Never commit `.env` files
- ✅ Use separate keys for dev/prod
- ✅ Rotate API keys monthly
- ✅ Use least-privilege service accounts

---

## 📱 **PWA Setup**

### **1. Configure Service Worker**

Already configured in `next.config.ts` with `next-pwa`.

### **2. Test PWA**

```bash
# Build production version
cd frontend
pnpm build
pnpm start

# Open Chrome DevTools → Application → Service Workers
# Check "Update on reload"
# Test offline mode
```

### **3. PWA Manifest**

Located at `frontend/public/manifest.json` (auto-generated by next-pwa).

---

## 🌍 **Custom Domain Setup (Optional)**

### **Vercel Custom Domain**

1. Vercel Dashboard → Project → Settings → Domains
2. Add your domain
3. Configure DNS (add CNAME record)
4. Wait for SSL certificate provisioning

### **Render Custom Domain**

1. Render Dashboard → Service → Settings → Custom Domains
2. Add your domain
3. Configure DNS
4. Enable HTTPS

---

## 📈 **Monitoring & Logging**

### **Backend Logging**

```python
# Already configured in main.py
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
```

### **Error Tracking (Optional)**

```bash
# Install Sentry
npm install @sentry/nextjs

# Initialize in next.config.ts
```

### **BigQuery Logging**

All events automatically logged to BigQuery for analytics.

---

## 🔄 **CI/CD Setup (Optional)**

### **GitHub Actions**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: cd frontend && pnpm install && pnpm build
      - run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
      - run: cd backend && pip install -r requirements.txt
      - run: pytest  # Run tests
```

---

## 🚨 **Troubleshooting**

### **Issue: Gemini API Quota Exceeded**

**Solution:**
```bash
# Check quota: https://aistudio.google.com/app/apikey
# Use rate limiting on backend
# Switch to Gemini Flash (faster, cheaper)
```

### **Issue: Vercel Build Fails**

**Solution:**
```bash
# Check build logs
# Ensure all dependencies in package.json
# Verify Node.js version in vercel.json
```

### **Issue: Database Connection Failed**

**Solution:**
```bash
# Check DATABASE_URL format
# Ensure Supabase project is active
# Verify connection pooling settings
```

### **Issue: BigQuery Permission Denied**

**Solution:**
```bash
# Check service account has BigQuery Admin role
# Verify BIGQUERY_CREDENTIALS_PATH is correct
# Ensure dataset exists
```

---

## 📞 **Support**

- **Documentation:** [GitHub Wiki](https://github.com/yourusername/krisisar-ai/wiki)
- **Issues:** [GitHub Issues](https://github.com/yourusername/krisisar-ai/issues)
- **Discord:** [Community Server](#)

---

## ✅ **Post-Deployment Checklist**

- [ ] Frontend accessible at custom domain
- [ ] Backend API responding correctly
- [ ] Database migrations applied
- [ ] BigQuery dataset created
- [ ] Environment variables set
- [ ] SSL certificates active
- [ ] PWA installable on mobile
- [ ] Analytics dashboard configured
- [ ] Error monitoring enabled
- [ ] Backup strategy in place

---

**🎉 Congratulations! KrisiSar AI is now live in production!**
