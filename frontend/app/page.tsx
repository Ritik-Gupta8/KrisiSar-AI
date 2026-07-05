import Link from "next/link";
import { ArrowRight, Camera, CloudRain, Shield, MessageCircle, FileText, BarChart3 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            🌾 KrisiSar AI
          </h1>
          <p className="text-2xl md:text-3xl text-green-600 dark:text-green-400 mb-4">
            AI-Powered Farm Decision Intelligence
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Stop guessing. Start deciding with confidence. 
            One platform for all your farming decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/dashboard"
              className="farmer-button bg-green-600 text-white hover:bg-green-700"
            >
              Get Started <ArrowRight className="inline ml-2" />
            </Link>
            <Link
              href="/demo"
              className="farmer-button bg-white text-green-600 border-2 border-green-600 hover:bg-green-50"
            >
              Watch Demo
            </Link>
          </div>

          {/* Language Badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
              🇬🇧 English
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
              🇮🇳 हिंदी
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
              🇮🇳 मराठी
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
              🇮🇳 தமிழ்
            </span>
            <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium">
              🇮🇳 తెలుగు
            </span>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need in One Platform
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Camera className="w-12 h-12 text-green-600" />}
            title="📸 Crop Diagnosis"
            description="Upload crop photo. Get instant disease detection + treatment. Powered by Gemini Vision."
          />
          
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-orange-600" />}
            title="🎯 Farm Risk Score"
            description="Real-time risk assessment (0-100). Know your farm's health in seconds."
          />
          
          <FeatureCard
            icon={<CloudRain className="w-12 h-12 text-blue-600" />}
            title="🌤️ Weather Intelligence"
            description="7-day forecast + disease risk prediction. Should I irrigate today? We tell you."
          />
          
          <FeatureCard
            icon={<MessageCircle className="w-12 h-12 text-purple-600" />}
            title="💬 Ask KrisiSar"
            description="Multilingual AI assistant. Ask anything in your language. Get instant answers."
          />
          
          <FeatureCard
            icon={<FileText className="w-12 h-12 text-indigo-600" />}
            title="🏛️ Government Schemes"
            description="Find schemes you're eligible for. PM-KISAN, insurance, loans - all in one place."
          />
          
          <FeatureCard
            icon={<BarChart3 className="w-12 h-12 text-teal-600" />}
            title="📊 Analytics Dashboard"
            description="Disease trends. Risk patterns. Data-driven insights for better farming."
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-red-50 dark:bg-red-900/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700 dark:text-red-400">
            The Problem We Solve
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <ProblemCard
                title="❌ Fragmented Information"
                description="Weather apps, YouTube, WhatsApp groups, dealers - too many sources."
              />
              <ProblemCard
                title="❌ Poor Decisions"
                description="Wrong pesticide timing. Over-irrigation. Missed diseases. Lost money."
              />
              <ProblemCard
                title="❌ Language Barriers"
                description="Most apps in English only. 70% farmers prefer local language."
              />
              <ProblemCard
                title="❌ No Actionable Advice"
                description="Apps show data. Farmers need decisions. 'What should I do today?'"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700 dark:text-green-400">
            ✅ KrisiSar AI Solution
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <SolutionCard
              title="✅ One Platform"
              description="All information unified. Diagnosis + Weather + Risk + Schemes + Chat."
            />
            <SolutionCard
              title="✅ Actionable Decisions"
              description="Not just data. Clear YES/NO answers. 'Spray tomorrow morning.'"
            />
            <SolutionCard
              title="✅ Multilingual"
              description="5 languages. Voice assistant. Works for every farmer."
            />
            <SolutionCard
              title="✅ Works Offline"
              description="PWA app. Cached data. Sync when online. 2G compatible."
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            🚀 Powered by Cutting-Edge Technology
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TechCard
              title="Google Gemini AI"
              description="Gemini 2.5 Flash, Pro, Vision for multimodal intelligence"
            />
            <TechCard
              title="Multi-Agent System"
              description="Google ADK orchestrates 6 specialized AI agents"
            />
            <TechCard
              title="NVIDIA RAPIDS"
              description="10-20x speedup on analytics with GPU acceleration"
            />
            <TechCard
              title="BigQuery Analytics"
              description="Petabyte-scale analytics for millions of farmers"
            />
            <TechCard
              title="Next.js 15 + React 19"
              description="Modern, fast, production-ready frontend"
            />
            <TechCard
              title="FastAPI + Python"
              description="High-performance async backend for AI workloads"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Smarter Decisions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers using AI to increase yields and reduce losses.
          </p>
          <Link
            href="/signup"
            className="farmer-button bg-green-600 text-white hover:bg-green-700 inline-flex items-center"
          >
            Start Free Trial <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            🌾 KrisiSar AI - Built for Google Gen AI Academy Cohort 2 Hackathon
          </p>
          <p className="text-gray-400">
            Powered by Google Gemini • NVIDIA RAPIDS • BigQuery • Supabase
          </p>
          <div className="mt-6 flex gap-6 justify-center">
            <Link href="/docs" className="hover:text-green-400">Documentation</Link>
            <Link href="/docs" className="hover:text-green-400">API</Link>
            <Link href="https://github.com/Ritik-Gupta8/KrisiSar-AI" className="hover:text-green-400">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="feature-card">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-2 text-red-600 dark:text-red-400">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function SolutionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 shadow-sm">
      <h3 className="font-bold text-lg mb-2 text-green-700 dark:text-green-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

function TechCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
