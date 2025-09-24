"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, Github, ExternalLink, Calendar, Users, Target, CheckCircle, Eye, Camera, Smartphone, Brain, Shield, Activity } from 'lucide-react';

const EyeconDetail = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images - replace with actual EYECON screenshots
  const projectImages = [
    '/img/eyecon-1.png',
    '/img/eyecon-2.png', 
    '/img/eyecon-3.png',
    '/img/eyecon-4.png',
    '/img/eyecon-5.png',
    '/img/eyecon-6.png'
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
    "Real-time eye disease detection using ML",
    "Camera integration for image capture",
    "Machine learning model for accurate analysis",
    "Personalized health recommendations",
    "Early detection of common eye diseases",
    "User-friendly mobile interface",
    "Secure health data processing",
    "Offline analysis capabilities"
  ];

  const techStack = [
    { name: "Kotlin", color: "bg-orange-100 text-orange-800" },
    { name: "Android Studio", color: "bg-green-100 text-green-800" },
    { name: "ML", color: "bg-blue-100 text-blue-800" }
  ];

  const keyComponents = [
    {
      icon: <Camera className="text-blue-500" size={24} />,
      title: "Image Capture",
      description: "Advanced camera integration for high-quality eye image capture and processing."
    },
    {
      icon: <Brain className="text-purple-500" size={24} />,
      title: "ML Analysis",
      description: "Sophisticated machine learning model for accurate eye disease detection."
    },
    {
      icon: <Eye className="text-green-500" size={24} />,
      title: "Disease Detection",
      description: "Early detection of various eye conditions with high accuracy rates."
    },
    {
      icon: <Activity className="text-red-500" size={24} />,
      title: "Health Insights",
      description: "Comprehensive health recommendations based on analysis results."
    }
  ];

  const detectedConditions = [
    "Cataracts",
    "Glaucoma", 
    "Diabetic Retinopathy",
    "Macular Degeneration",
    "Dry Eye Syndrome",
    "Conjunctivitis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
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
                href="https://github.com/EYECON-Capstone"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://eyecon-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
            EYECON
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Eye Health Mobile App
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
                alt={`EYECON Screenshot ${currentSlide + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x450/10B981/FFFFFF?text=EYECON+Screenshot+${currentSlide + 1}`;
                }}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all backdrop-blur-sm"
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
                    currentSlide === index ? 'border-green-500 ring-2 ring-green-500/30' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/64x64/10B981/FFFFFF?text=${index + 1}`;
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
                <Target className="text-green-600" size={24} />
                Project Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg mb-6">
                EYECON is an innovative Android application designed to revolutionize eye health monitoring through advanced machine learning technology. The app enables early detection of various eye diseases using real-time image processing and sophisticated AI algorithms.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Built with Kotlin and Android Studio, EYECON integrates a custom-trained machine learning model that can accurately analyze eye images captured through the device camera, providing users with instant health insights and personalized recommendations for maintaining optimal eye health.
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

            {/* Detectable Conditions */}
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Eye className="text-blue-600" size={24} />
                Detectable Eye Conditions
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {detectedConditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <Shield className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-green-800 font-medium text-sm">{condition}</span>
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
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Kotlin Development</h3>
                  <p className="text-slate-700">Leveraged Kotlins modern features for robust Android development with null safety, coroutines for async operations, and clean architecture patterns.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Android Studio Integration</h3>
                  <p className="text-slate-700">Utilized Android Studios comprehensive development environment with advanced debugging tools, UI designer, and performance profilers.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Machine Learning Model</h3>
                  <p className="text-slate-700">Integrated TensorFlow Lite for on-device inference with custom-trained convolutional neural networks optimized for eye disease classification.</p>
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
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">AI</div>
                  <div className="text-sm text-slate-600">Powered Detection</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">6+</div>
                  <div className="text-sm text-slate-600">Eye Conditions</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-600 mb-1">2024</div>
                  <div className="text-sm text-slate-600">Capstone Project</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/EYECON-Capstone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <Github size={20} className="text-slate-600 group-hover:text-slate-900" />
                  <span className="text-slate-700 group-hover:text-slate-900">View Source Code</span>
                </a>
                <a 
                  href="https://eyecon-demo.com"
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
                <p className="mb-2">Healthcare & General Public</p>
                <p className="text-sm text-slate-600">Designed for individuals seeking early eye disease detection and healthcare professionals looking for diagnostic assistance tools</p>
              </div>
            </div>

            {/* Platform Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Smartphone size={20} />
                Platform
              </h3>
              <div className="text-slate-700">
                <p className="mb-2 font-medium">Android Application</p>
                <p className="text-sm text-slate-600">Native Android app built with Kotlin, optimized for mobile devices with camera integration</p>
              </div>
            </div>

            {/* Team Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Development Team</h3>
              <div className="text-slate-700">
                <p className="mb-2">Capstone Project Team</p>
                <p className="text-sm text-slate-600">Collaborative development with focus on mobile development, machine learning, and healthcare technology</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EyeconDetail;