# 📡 KrisiSar AI - API Documentation

Complete API reference for the KrisiSar AI Backend.

**Base URL:** `https://your-backend.onrender.com/api/v1`  
**Format:** JSON  
**Authentication:** API Key (optional for hackathon)

---

## 🔹 **Health Check**

### GET `/health`

Check if the API is operational.

**Response:**
```json
{
  "status": "healthy",
  "service": "krisisar-ai-backend",
  "version": "1.0.0"
}
```

---

## 🩺 **Diagnosis API**

### POST `/diagnosis/analyze`

Analyze crop image for disease detection using Gemini Vision.

**Request:**
- **Content-Type:** `multipart/form-data`
- **Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `image` | File | Yes | Crop/leaf image (JPEG/PNG, max 10MB) |
| `crop_type` | String | No | Type of crop (e.g., "Rice", "Wheat") |
| `location` | JSON String | No | `{"lat": 28.6, "lng": 77.2}` |
| `weather` | JSON String | No | Weather context |
| `user_id` | String | No | User ID for analytics |

**Example Request:**
```bash
curl -X POST https://api.krisisar.ai/api/v1/diagnosis/analyze \
  -F "image=@crop-leaf.jpg" \
  -F "crop_type=Rice" \
  -F "location={\"lat\": 28.6139, \"lng\": 77.2090}" \
  -F "user_id=USER_123"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "disease": "Leaf Blight",
    "confidence": 0.92,
    "severity": "high",
    "description": "Fungal infection affecting leaf tissues...",
    "symptoms": ["Brown spots on leaves", "Yellowing", "Wilting"],
    "causes": ["High humidity", "Poor drainage"],
    "treatment": {
      "immediate": [
        "Spray Mancozeb 0.25% solution",
        "Remove infected leaves"
      ],
      "preventive": [
        "Improve field drainage",
        "Maintain plant spacing"
      ],
      "organic": [
        "Neem oil spray",
        "Copper-based fungicide"
      ],
      "chemical": [
        "Mancozeb 75% WP",
        "Carbendazim 50% WP"
      ]
    },
    "affectedParts": ["leaf"],
    "spreadRisk": "high",
    "economicImpact": "Potential 30-50% yield loss if untreated"
  }
}
```

### GET `/diagnosis/disease-info/{disease_name}`

Get detailed information about a specific disease.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `disease_name` | String | Yes | Name of disease |
| `language` | Query | No | Language code (en/hi/mr/ta/te) |

**Example:**
```bash
curl "https://api.krisisar.ai/api/v1/diagnosis/disease-info/Leaf%20Blight?language=en"
```

---

## 🌤️ **Weather API**

### GET `/weather/current`

Get current weather and 7-day forecast with disease risk analysis.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `latitude` | Float | Yes | Location latitude |
| `longitude` | Float | Yes | Location longitude |
| `forecast_days` | Integer | No | Number of forecast days (1-14, default 7) |

**Example:**
```bash
curl "https://api.krisisar.ai/api/v1/weather/current?latitude=28.6139&longitude=77.2090&forecast_days=7"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "current": {
      "temperature": 28.5,
      "humidity": 75,
      "precipitation": 0,
      "rain": 0,
      "windSpeed": 12.3,
      "pressure": 1013.2,
      "cloudCover": 40,
      "timestamp": "2026-07-05T10:00:00Z"
    },
    "forecast": [
      {
        "date": "2026-07-06",
        "tempMax": 32,
        "tempMin": 24,
        "precipitation": 5.2,
        "rain": 5.2,
        "windSpeed": 15
      }
    ],
    "diseaseRisk": {
      "score": 65,
      "level": "high",
      "factors": [
        "High humidity (>70%)",
        "Optimal temperature for pathogens (20-30°C)",
        "Rain expected in 2 of next 3 days"
      ],
      "recommendation": "Monitor crops closely, prepare preventive measures"
    }
  }
}
```

### GET `/weather/irrigation-recommendation`

Get irrigation recommendations based on weather forecast.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `latitude` | Float | Yes | Location latitude |
| `longitude` | Float | Yes | Location longitude |
| `crop_type` | String | Yes | Type of crop |
| `soil_type` | String | No | Type of soil |

**Example:**
```bash
curl "https://api.krisisar.ai/api/v1/weather/irrigation-recommendation?latitude=28.6&longitude=77.2&crop_type=Rice"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "shouldIrrigate": false,
    "reason": "Rain expected (25mm in next 3 days)",
    "timing": null,
    "weatherContext": {
      "temperature": 28.5,
      "humidity": 75,
      "upcomingRain": 25.5
    }
  }
}
```

---

## 🎯 **Risk Score API**

### POST `/risk/calculate`

Calculate comprehensive farm risk score (0-100).

**Request Body:**
```json
{
  "userId": "USER_123",
  "weatherData": {
    "current": { "temperature": 28, "humidity": 75 },
    "forecast": [],
    "diseaseRisk": { "score": 65 }
  },
  "diseaseHistory": [
    {
      "disease": "Leaf Blight",
      "severity": "high",
      "timestamp": "2026-07-01T10:00:00Z"
    }
  ],
  "cropInfo": {
    "type": "Rice",
    "stage": "flowering",
    "ageDays": 60
  },
  "location": {
    "lat": 28.6139,
    "lng": 77.2090,
    "district": "Delhi",
    "state": "Delhi"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "overallScore": 58,
    "riskLevel": "medium",
    "components": {
      "weatherRisk": 65,
      "diseaseRisk": 55,
      "cropHealthRisk": 45
    },
    "factors": {
      "weather": ["High temperature stress", "Very high humidity"],
      "disease": ["2 disease incidents recorded"],
      "crop": ["Crop in vulnerable stage"]
    },
    "actions": {
      "immediate": [
        "Inspect crops for disease symptoms",
        "Avoid irrigation if rain is expected"
      ],
      "shortTerm": [
        "Monitor weather daily",
        "Ensure drainage systems are working"
      ],
      "longTerm": [
        "Consider resistant crop varieties next season"
      ]
    }
  }
}
```

---

## 💡 **Recommendations API**

### POST `/recommendations/decision-card`

Get decision card for specific farmer questions.

**Request Body:**
```json
{
  "question": "Should I spray pesticide today?",
  "context": {
    "weather": { "temperature": 28, "humidity": 75 },
    "crop": "Rice",
    "diseases": ["Leaf Blight"],
    "riskScore": 58,
    "location": { "district": "Delhi" }
  },
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "question": "Should I spray pesticide today?",
    "recommendation": "✅ YES - Spray pesticide tomorrow morning\n\nReasoning:\n- Disease detected (Leaf Blight)\n- High humidity favors spread\n- Clear weather expected\n\nTiming: Early morning (6-8 AM)\n\nAdditional Tips:\n- Use Mancozeb 0.25% solution\n- Avoid spraying before rain\n\nRisks: Disease may spread if untreated",
    "language": "en",
    "timestamp": "2026-07-05T10:00:00Z"
  }
}
```

### POST `/recommendations/comprehensive`

Get comprehensive farming recommendations.

**Request Body:**
```json
{
  "farmData": {
    "crop": "Rice",
    "farmSize": 5.5,
    "location": { "district": "Delhi", "state": "Delhi" },
    "riskScore": 58,
    "weather": {},
    "recentIssues": ["Leaf Blight detected"]
  },
  "language": "en"
}
```

---

## 🏛️ **Government Schemes API**

### POST `/schemes/find-eligible`

Find eligible government schemes based on farmer profile.

**Request Body:**
```json
{
  "farmSize": 5.5,
  "crops": ["Rice", "Wheat"],
  "state": "Punjab",
  "landOwnership": "Owner",
  "language": "en"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "schemes": [
      {
        "name": "PM-KISAN",
        "description": "Income support of ₹6000/year",
        "eligibility": "All landholding farmers",
        "benefits": "₹2000 per installment, 3 times a year",
        "category": "income_support",
        "applicationUrl": "https://pmkisan.gov.in/"
      }
    ],
    "guidance": "Detailed guidance text...",
    "totalSchemes": 4
  }
}
```

### GET `/schemes/details/{scheme_name}`

Get detailed information about a specific scheme.

---

## 💬 **Chat API**

### POST `/chat/message`

Send message to multilingual AI assistant.

**Request Body:**
```json
{
  "message": "मुझे आज कीटनाशक छिड़कना चाहिए?",
  "language": "hi",
  "context": {
    "location": "Delhi",
    "crop": "Rice",
    "farmSize": 5.5
  },
  "sessionId": "SESSION_123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "हाँ, आज कीटनाशक छिड़कना उचित है...",
    "language": "hi",
    "sessionId": "SESSION_123"
  }
}
```

---

## 📊 **Analytics API**

### GET `/analytics/disease-trends`

Get disease trends from BigQuery.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `days` | Integer | No | Number of days (default 30) |
| `state` | String | No | Filter by state |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "disease": "Leaf Blight",
      "count": 1250,
      "avg_confidence": 0.87,
      "date": "2026-07-05"
    }
  ]
}
```

### GET `/analytics/risk-distribution`

Get risk level distribution.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "risk_level": "high",
      "count": 450,
      "avg_score": 72
    }
  ]
}
```

---

## 🔔 **Alerts API**

### GET `/alerts/user/{user_id}`

Get alerts for a specific user.

**Response:**
```json
{
  "success": true,
  "data": {
    "alerts": [
      {
        "id": "1",
        "type": "weather",
        "severity": "warning",
        "title": "Heavy Rain Alert",
        "message": "Heavy rainfall expected in next 24 hours",
        "timestamp": "2026-07-05T10:00:00Z"
      }
    ]
  }
}
```

---

## ❌ **Error Responses**

All APIs return consistent error responses:

```json
{
  "success": false,
  "error": "Error description",
  "type": "ErrorType"
}
```

**HTTP Status Codes:**

| Code | Meaning |
|------|---------|
| 200 | Success |
| 400 | Bad Request (invalid parameters) |
| 401 | Unauthorized |
| 404 | Not Found |
| 429 | Too Many Requests (rate limit) |
| 500 | Internal Server Error |

---

## 🔐 **Rate Limiting**

- **Default:** 100 requests/minute per IP
- **Diagnosis API:** 10 requests/minute
- **Chat API:** 20 requests/minute

**Rate Limit Headers:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1720177200
```

---

## 📚 **Interactive Documentation**

Visit `https://your-backend.onrender.com/docs` for:
- Interactive API testing (Swagger UI)
- Request/response examples
- Schema definitions

---

**For more information, see the [GitHub repository](https://github.com/yourusername/krisisar-ai).**
