"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle, Zap, Shield, BarChart2, Cpu } from "lucide-react";

const projectImages = [
  "/img/danasense.jpg",
  "/img/danasense1.jpg",
  "/img/danasense2.jpg",
  "/img/danasense3.jpg",
  "/img/danasense4.jpg",
];

const features = [
  "Event-triggered micro-surveys (e.g., payment failed)",
  "1-click bottom sheet response — under 2 seconds",
  "AI-powered auto-synthesis of feedback signals",
  "Live NPS & CES dashboard for stakeholders",
  "Complaint trend mapping with spike prediction",
  "Time-to-insight reduced to under 24 hours",
  "Data anonymization for user privacy",
  "Fault-tolerant: core transactions unaffected by downtime",
];

const techStack = [
  { name: "Apache Kafka", color: "bg-black text-white" },
  { name: "NLP / AI Engine", color: "bg-blue-100 text-blue-800" },
  { name: "Microservices", color: "bg-sky-100 text-sky-800" },
  { name: "Data Warehouse", color: "bg-indigo-100 text-indigo-800" },
];

const keyComponents = [
  {
    icon: <Zap className="text-yellow-500" size={22} />,
    title: "Right Time Triggers",
    description: "Questions fire seconds after a specific in-app event (e.g., Payment Failed), capturing feedback at peak relevance.",
  },
  {
    icon: <Cpu className="text-blue-500" size={22} />,
    title: "AI Auto-Synthesis",
    description: "Three-layer NLP pipeline — Keyword Extraction, Sentiment Analysis, Topic Modeling — summarizes millions of signals instantly.",
  },
  {
    icon: <BarChart2 className="text-green-500" size={22} />,
    title: "Stakeholder Dashboard",
    description: "Live NPS, CES, and complaint trend mapping with predictive spike alerts so PMs can act before issues escalate.",
  },
  {
    icon: <Shield className="text-purple-500" size={22} />,
    title: "Security & Reliability",
    description: "PII masked before reaching dashboards. If DANA Sense goes down, core transactions remain fully operational.",
  },
];

export default function DanaSenseDetail() {
  const router = useRouter();
  const [slide, setSlide] = useState(0);
  const next = () => setSlide(p => (p + 1) % projectImages.length);
  const prev = () => setSlide(p => (p - 1 + projectImages.length) % projectImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center text-slate-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </button>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <ExternalLink size={15} /> View Deck
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Project Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3 text-slate-500 text-sm">
            <Calendar size={16} />
            <span>2025 · Product Strategy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3 leading-tight">
            <span className="text-blue-600">DANA</span> Sense
          </h1>
          <p className="text-xl text-slate-500 mb-6 italic">The Invisible Insight Engine</p>
          <p className="text-slate-600 max-w-2xl mb-6 leading-relaxed">
            Zero-Waste Insights, Infinite Possibilities — an intelligent, contextual, and invisible in-app analytics engine for DANA.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map(t => (
              <span key={t.name} className={`px-3 py-1 rounded-full text-xs font-semibold ${t.color}`}>{t.name}</span>
            ))}
          </div>
        </div>

        {/* Image Slider */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative" style={{ aspectRatio: "16/9" }}>
            <img
              src={projectImages[slide]}
              alt={`Slide ${slide + 1}`}
              className="w-full h-full object-cover"
            />
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all">
              <ChevronRight size={22} />
            </button>
            <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              {slide + 1} / {projectImages.length}
            </div>
          </div>
          {/* Thumbnails */}
          <div className="p-4 bg-slate-50 flex gap-2 justify-center overflow-x-auto">
            {projectImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === slide ? "border-blue-500 ring-2 ring-blue-400/30" : "border-slate-200 hover:border-slate-300"}`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <Target className="text-blue-600" size={22} /> Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-base mb-4">
                DANA Sense solves a two-sided problem: users are tired of long pop-up surveys interrupting transactions, while Product Managers waste 60% of research time cleaning data and wait 14–21 days for insights.
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                The solution is a contextual micro-feedback engine — event-driven bottom sheets that appear at the right moment, collect one-click responses, and feed an AI pipeline that synthesizes insights in under 24 hours.
              </p>
            </section>

            {/* Key Components */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Key Components</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {keyComponents.map((c, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      {c.icon}
                      <h3 className="font-semibold text-slate-900 text-sm">{c.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-slate-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Technical Implementation</h2>
              <div className="space-y-4">
                {[
                  { color: "border-blue-500", title: "Event-Driven Architecture", desc: "Mobile app (producer) → API Gateway → Apache Kafka (broker) → Insight Microservices (consumer) → Data Warehouse. Asynchronous design ensures zero performance impact on core transactions." },
                  { color: "border-yellow-400", title: "AI Engine — Zero Waste Pipeline", desc: "Three stacked NLP layers: Keyword Extraction identifies complaint objects, Sentiment Analysis assigns weighted scores, and Topic Modeling groups recurring themes automatically." },
                  { color: "border-green-500", title: "GIST Framework Execution", desc: "Sprint 1 sets up Kafka endpoints and deploys the ML model. Sprint 2 designs the bottom-sheet UI and integrates the stakeholder dashboard. Alpha launches on DANA Pay." },
                ].map((item, i) => (
                  <div key={i} className={`border-l-4 ${item.color} pl-4`}>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-semibold text-slate-900 mb-4">Project Highlights</h3>
              <div className="space-y-3">
                {[
                  { val: "< 24h", label: "Time-to-Insight", bg: "bg-blue-50", text: "text-blue-600" },
                  { val: "> 25%", label: "Survey Response Target", bg: "bg-green-50", text: "text-green-600" },
                  { val: "> 85%", label: "NLP Accuracy Target", bg: "bg-purple-50", text: "text-purple-600" },
                  { val: "5K", label: "Sentiment Signals / Month", bg: "bg-yellow-50", text: "text-yellow-600" },
                ].map((s, i) => (
                  <div key={i} className={`text-center p-3 rounded-xl ${s.bg}`}>
                    <div className={`text-2xl font-bold ${s.text} mb-0.5`}>{s.val}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* OKRs */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-semibold text-slate-900 mb-4">OKRs</h3>
              <p className="text-xs text-slate-500 mb-3 italic">Objective: Improve speed & efficiency of in-app research</p>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <div className="text-xs font-bold text-blue-700 mb-1">KR1</div>
                  <p className="text-xs text-slate-600">Reduce time-to-insight from 3 weeks → 3 days</p>
                </div>
                <div className="p-3 bg-sky-50 rounded-xl">
                  <div className="text-xs font-bold text-sky-700 mb-1">KR2</div>
                  <p className="text-xs text-slate-600">Generate 5,000 validated sentiment signals in month 1 without increasing churn</p>
                </div>
              </div>
            </div>

            {/* Lifecycle */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-semibold text-slate-900 mb-4">Product Lifecycle</h3>
              <div className="space-y-3">
                {[
                  { phase: "Introduction", desc: "MVP on DANA Pay — calibrate AI tagging accuracy." },
                  { phase: "Growth", desc: "Expand to DANA Deals & Protection. Retrain NLP model." },
                  { phase: "Maturity", desc: "Self-service platform — squads create surveys without eng support." },
                ].map((lc, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-slate-800">{lc.phase}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{lc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-base font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Users size={17} /> Personas
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-pink-50 rounded-xl">
                  <p className="text-xs font-semibold text-pink-700 mb-1">Giffany — Product Manager</p>
                  <p className="text-xs text-slate-500">Needs instant validation of pain points to plan the next sprint.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <p className="text-xs font-semibold text-slate-700 mb-1">Andre — DANA User</p>
                  <p className="text-xs text-slate-500">Wants zero interruptions — feedback must be one-click and rewarding.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}