"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink, Calendar, Users, Target, CheckCircle } from 'lucide-react';

const CiamicDetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace with actual CIAMIC screenshots
  const projectImages = [
    '/img/CIAMIC1.png',
    '/img/CIAMIC2.png', 
    '/img/CIAMIC3.png',
    '/img/CIAMIC4.png',
    '/img/CIAMIC5.png',
    '/img/CIAMIC6.png'
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
    router.back();
  };

  const projectFeatures = [
    "AI-powered chatbot for internal communication",
    "Access to TelkomGroup product information",
    "HR resources integration",
    "KPI tracking and analytics",
    "Secure company data handling",
    "Desktop and mobile responsive design",
    "64% improvement in user adoption"
  ];

  const techStack = [
    { name: "React.js", color: "bg-blue-100 text-blue-800" },
    { name: "Laravel", color: "bg-red-100 text-red-800" },
    { name: "MongoDB", color: "bg-green-100 text-green-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackToMain}
              className="flex items-center text-stone-600 hover:text-[#800000] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="text-sm sm:text-base">Back to Projects</span>
            </button>
            <div className="flex items-center gap-4">
              <a 
                href="https://ciamic-trf.itdri.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
            <span className="text-slate-600 font-medium">2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            CIAMIC
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Chat Intelligent Assistant for Media Interaction & Communication
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
                alt={`CIAMIC Screenshot ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=CIAMIC+Screenshot+${currentSlide + 1}`;
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
                    currentSlide === index ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=${index + 1}`;
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
                <Target className="text-blue-600" size={24} />
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                CIAMIC is an AI-powered chatbot designed specifically for TelkomGroup employees to streamline internal communication and data access. The platform serves as a centralized hub for accessing product information, HR resources, KPIs, and secure company data.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Through comprehensive user research and continuous iteration, the platform achieved a remarkable 64% improvement in user adoption. The solution was built with responsive design principles, ensuring seamless functionality across both desktop and mobile devices.
              </p>
            </section>

            {/* Key Features */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
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
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Implementation</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Frontend Development</h3>
                  <p className="text-slate-700">Built with React.js to create a dynamic and responsive user interface with real-time chat capabilities and intuitive navigation.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Backend Architecture</h3>
                  <p className="text-slate-700">Laravel framework powers the backend with robust API endpoints, authentication, and secure data processing capabilities.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Database Management</h3>
                  <p className="text-slate-700">MongoDB provides flexible document storage for chat history, user data, and dynamic content management.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Project Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Impact</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">64%</div>
                  <div className="text-sm text-slate-600">Adoption Improvement</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Mobile Responsive</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">2025</div>
                  <div className="text-sm text-slate-600">Project Year</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/khansagiffany/ciamic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <Github size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">View Source Code</span>
                </a>
                <a 
                  href="https://ciamic-trf.itdri.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">Live Demo</span>
                </a>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                Development Team
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">Lead Developer & Designer</p>
                <p className="text-sm text-slate-600">Full-stack development, UI/UX design, and user research</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CiamicDetail;