"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink, Calendar, Users, Target, CheckCircle, BarChart3, TrendingUp, Filter, Zap } from 'lucide-react';

const CrimsonDashDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace with actual CrimsonDash screenshots
  const projectImages = [
    '/img/CRIMSONDASH1.png',
    '/img/CRIMSONDASH2.png', 
    '/img/CRIMSONDASH3.png',
    '/img/CRIMSONDASH4.png',
    '/img/CRIMSONDASH5.png',
    '/img/CRIMSONDASH6.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Navigate back function
  const handleBackToMain = () => {
    // In a real app, this would use router.back()
    window.history.back();
  };

  const projectFeatures = [
    "Interactive charts with multiple view types (Bar, Line, Pie)",
    "Real-time custom sales threshold filtering",
    "Year-over-year growth analysis and KPI tracking",
    "Category-wise sales distribution visualization",
    "Comprehensive performance metrics dashboard",
    "Smooth animations and hover effects",
    "Responsive design for all device sizes",
    "Modern atomic design architecture"
  ];

  const techStack = [
    { name: "Next.js 15", color: "bg-black text-white" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
    { name: "Recharts", color: "bg-purple-100 text-purple-800" }
  ];

  const keyMetrics = [
    { label: "Total Revenue", value: "$1,093,000", growth: "+21.9%", color: "text-green-600" },
    { label: "Total Orders", value: "3,945", growth: "+16.6%", color: "text-blue-600" },
    { label: "Avg Order Value", value: "$277", growth: "+4.5%", color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToMain}
              className="flex items-center text-stone-600 hover:text-[#800000] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back</span>
            </button>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/khansagiffany/crimsondash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
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
            <span className="text-slate-600 font-medium">2024</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            <span className="text-red-600">Crimson</span>Dash
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Experience the future of data visualization with our cutting-edge sales analytics platform
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech.name}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Image Slider */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative aspect-video bg-slate-100">
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src={projectImages[currentSlide]} 
                alt={`CrimsonDash Screenshot ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/DC2626/FFFFFF?text=CrimsonDash+Screenshot+${currentSlide + 1}`;
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
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
            
            {/* Slide Counter */}
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
                    currentSlide === index ? 'border-red-500 ring-2 ring-red-500/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/64x64/DC2626/FFFFFF?text=${index + 1}`;
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
                <Target className="text-red-600" size={24} />
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CrimsonDash is a cutting-edge sales analytics dashboard built with Next.js 15 and modern web technologies. The platform provides comprehensive data visualization for sales performance tracking across 2022-2024, featuring interactive charts, real-time filtering, and advanced analytics capabilities.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Built with atomic design principles and TypeScript for scalability and maintainability, CrimsonDash offers multiple chart types, custom threshold filtering, and year-over-year growth analysis. The responsive design ensures optimal performance across all devices while providing smooth animations and intuitive user interactions.
              </p>
            </section>

            {/* Performance Metrics */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <TrendingUp className="text-green-600" size={24} />
                Key Performance Metrics
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl">
                    <div className="text-2xl font-bold text-slate-900 mb-2">{metric.value}</div>
                    <div className="text-sm text-slate-600 mb-2">{metric.label}</div>
                    <div className={`text-sm font-semibold ${metric.color}`}>{metric.growth}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="text-yellow-500" size={24} />
                Advanced Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Implementation */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Architecture</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Next.js 15 with App Router</h3>
                  <p className="text-slate-700">Latest Next.js features including App Router for optimal performance, server-side rendering, and modern React patterns.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">TypeScript Integration</h3>
                  <p className="text-slate-700">Full type safety throughout the application ensuring robust code quality and enhanced developer experience.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Tailwind CSS Styling</h3>
                  <p className="text-slate-700">Utility-first CSS framework enabling rapid development with consistent design system and responsive layouts.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Recharts Visualization</h3>
                  <p className="text-slate-700">Advanced charting library providing interactive bar, line, and pie charts with smooth animations and customizable styling.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Project Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Dashboard Analytics</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-3xl font-bold text-red-600 mb-1">3</div>
                  <div className="text-sm text-slate-600">Chart Types</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">21.9%</div>
                  <div className="text-sm text-slate-600">Revenue Growth</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3 Years</div>
                  <div className="text-sm text-slate-600">Data Coverage</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/khansagiffany/crimsondash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <Github size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">View Source Code</span>
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">Live Dashboard</span>
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <BarChart3 size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">Analytics Demo</span>
                </a>
              </div>
            </div>

            {/* Features Highlight */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Filter size={20} />
                Core Capabilities
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-slate-700">Real-time data filtering</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Interactive chart views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700">Growth trend analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700">Category distribution</span>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                Development Team
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">Full-Stack Developer</p>
                <p className="text-sm text-slate-600">Frontend architecture, data visualization, and user experience design</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrimsonDashDetail;