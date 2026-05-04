"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, Calendar, Users, Target, CheckCircle } from 'lucide-react';

const HeronDetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectImages = [
    '/img/Heron1.jpg',
    '/img/Heron2.jpg',
    '/img/Heron3.jpg',
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleBackToMain = () => router.back();

  const projectFeatures = [
    "Monitor incoming orders in real-time",
    "Fulfill orders with system-driven workflows",
    "Inbound goods receiving and processing",
    "Replenishment management to prevent stockouts",
    "Reallocation of inventory across warehouse locations",
    "Full supply chain visibility from a single dashboard",
    "And many more operational modules",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToMain}
              className="flex items-center text-stone-600 hover:text-[#4B0082] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back</span>
            </button>
            <div className="flex items-center gap-4">
              <a
                href="https://heron-wms.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#4B0082] text-white rounded-lg hover:bg-[#3a006b] transition-colors"
              >
                <ExternalLink size={16} />
                Live Site
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={20} className="text-slate-500" />
            <span className="text-slate-600 font-medium">2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Heron
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Warehouse Management System
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Product Manager", color: "bg-purple-100 text-purple-800" },
            ].map((role) => (
              <span
                key={role.name}
                className={`px-3 py-1 rounded-full text-sm font-medium ${role.color}`}
              >
                {role.name}
              </span>
            ))}
          </div>
        </div>

        {/* Image Slider */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative aspect-video bg-slate-100">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={projectImages[currentSlide]}
                alt={`Heron Screenshot ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/4B0082/FFFFFF?text=Heron+Screenshot+${currentSlide + 1}`;
                }}
              />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 bottom-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 bottom-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>

            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentSlide + 1} / {projectImages.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 bg-slate-50">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {projectImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    currentSlide === index
                      ? 'border-purple-600 ring-2 ring-purple-600/30'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/64x64/4B0082/FFFFFF?text=${index + 1}`;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Target className="text-purple-700" size={24} />
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Heron is a centralized Warehouse Management System designed to streamline our entire supply chain. It replaces manual guesswork with system-driven workflows, giving us real-time visibility and control over our warehouse operations.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                As Product Manager, I led the end-to-end product lifecycle — from discovery and requirement gathering to roadmap prioritization and cross-functional coordination — ensuring the system delivers measurable operational impact at scale.
              </p>
            </section>

            {/* Key Features */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Project Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Impact</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-700 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="text-center p-4 bg-violet-50 rounded-xl">
                  <div className="text-3xl font-bold text-violet-700 mb-1">3K+</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-indigo-700 mb-1">2026</div>
                  <div className="text-sm text-slate-600">Project Year</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="https://heron-wms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-purple-700" />
                  <span className="text-slate-700 group-hover:text-slate-900">Production Site</span>
                </a>
              </div>
            </div>

            {/* Role */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                My Role
              </h3>
              <div className="text-slate-700">
                <p className="mb-2 font-medium">Product Manager</p>
                <p className="text-sm text-slate-600">End-to-end product ownership, roadmap planning, stakeholder alignment, and cross-functional team coordination.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeronDetail;