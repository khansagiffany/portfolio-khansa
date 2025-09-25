"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink, Calendar, Users, Target, CheckCircle, Clock, MessageSquare, CalendarDays, Bell } from 'lucide-react';

const DigimateDetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace with actual Digimate screenshots
  const projectImages = [
    '/img/D1.png',
    '/img/D2.png', 
    '/img/D3.png',
    '/img/D4.png',
    '/img/D5.png',
    '/img/D6.png'
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
    "Task management with smart reminders",
    "AI chatbot powered by Gemini for internship guidance",
    "Interactive calendar scheduling system",
    "Personal productivity tracking",
    "Time management optimization",
    "Responsive design for all devices",
    "Real-time notifications and alerts"
  ];

  const techStack = [
    { name: "Next.js", color: "bg-black text-white" },
    { name: "Tailwind", color: "bg-cyan-100 text-cyan-800" },
    { name: "Gemini", color: "bg-purple-100 text-purple-800" }
  ];

  const keyComponents = [
    {
      icon: <Bell className="text-orange-500" size={24} />,
      title: "Smart Reminders",
      description: "Intelligent task reminders that adapt to your schedule and priorities."
    },
    {
      icon: <MessageSquare className="text-blue-500" size={24} />,
      title: "AI Chatbot",
      description: "Gemini-powered assistant for internship-related questions and guidance."
    },
    {
      icon: <CalendarDays className="text-green-500" size={24} />,
      title: "Calendar Integration",
      description: "Comprehensive scheduling system for better time management."
    },
    {
      icon: <Clock className="text-purple-500" size={24} />,
      title: "Time Tracking",
      description: "Monitor productivity and optimize your daily workflow."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
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
                href="https://github.com/khansagiffany/digimate-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-600 hover:bg-gray-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://digimate-v2.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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
            Digimate
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Personal Tracker for Interns
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
                alt={`Digimate Screenshot ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Digimate+Screenshot+${currentSlide + 1}`;
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
                    currentSlide === index ? 'border-purple-500 ring-2 ring-purple-500/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/64x64/8B5CF6/FFFFFF?text=${index + 1}`;
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
                <Target className="text-purple-600" size={24} />
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                Digimate is a comprehensive web-based personal tracker specifically designed for interns to enhance their productivity and internship experience. The platform combines modern web technologies with AI capabilities to provide a seamless task management solution.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Built with Next.js and styled with Tailwind CSS, Digimate features an intelligent chatbot powered by Google Gemini AI that provides personalized guidance for internship-related questions, helping users navigate their professional journey more effectively.
              </p>
            </section>

            {/* Key Components */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Components</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {keyComponents.map((component, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      {component.icon}
                      <h3 className="font-semibold text-slate-900">{component.title}</h3>
                    </div>
                    <p className="text-slate-600 text-sm">{component.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
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
                <div className="border-l-4 border-black pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Next.js Framework</h3>
                  <p className="text-slate-700">Leveraged Next.js for server-side rendering, optimal performance, and seamless user experience with modern React features.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Tailwind CSS</h3>
                  <p className="text-slate-700">Utilized Tailwind CSS for rapid UI development with consistent design system and responsive layouts across all devices.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Gemini AI Integration</h3>
                  <p className="text-slate-700">Integrated Google Gemini AI to provide intelligent responses and personalized guidance for internship-related queries.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Project Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Highlights</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">AI</div>
                  <div className="text-sm text-slate-600">Powered Chatbot</div>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-xl">
                  <div className="text-3xl font-bold text-cyan-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Responsive Design</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">2025</div>
                  <div className="text-sm text-slate-600">Latest Version</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/khansagiffany/digimate-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <Github size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">View Source Code</span>
                </a>
                <a 
                  href="https://digimate-v2.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <ExternalLink size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">Live Demo</span>
                </a>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                Target Audience
              </h3>
              <div className="text-slate-700">
                <p className="mb-2">Interns & Students</p>
                <p className="text-sm text-slate-600">Designed specifically for interns seeking better time management and productivity tools during their professional journey</p>
              </div>
            </div>

            {/* Version Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Version</h3>
              <div className="text-slate-700">
                <p className="mb-2 font-medium">Digimate v2.0</p>
                <p className="text-sm text-slate-600">Enhanced with AI capabilities and improved user interface for better user experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DigimateDetail;