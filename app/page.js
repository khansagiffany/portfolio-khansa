"use client";

import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Calendar, Award, GraduationCap, Briefcase, Download, Code, Eye } from 'lucide-react';
import { ReactTyped } from "react-typed";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const articlesRef = useRef(null);
  const certificatesRef = useRef(null);
  const router = useRouter();

  // Sample data - nanti bisa dipindah ke src/data/
  const profile = {
    name: "Khansa Putri Giffany",
    title: "Frontend Developer",
    description: "I enjoy building things with technology. Started my career in development before moving into product, which taught me to understand both how things work and how people actually use them.",
    location: "Jakarta, Indonesia",
    email: "khansaagiffany@gmail.com",
    phone: " ",
    linkedin: "https://www.linkedin.com/in/khansa-putri-giffany/",
    github: "https://github.com/khansagiffany"
    //resume: "https://khansai.vercel.app/"
  };


const experiences = [
  {
    id: 1,
    company: "Cermati Fintech Group",
    position: "Product",
    duration: "June 2026 - Present",
    location: "Plaza Bank Index, Jakarta",
    description: "Supporting product development within the fast paced fintech ecosystem, contributing to feature discovery, requirement gathering, and cross-functional alignment. Collaborated with engineering and design teams to define user stories, track sprint progress, and ensure product delivery aligned with business objectives.",
    skills: ["Product Discovery", "Pricing Strategy", "Requirement Gathering"],
    logo: "img/cermatilogo.jpg"
  },
  {
    id: 2,
    company: "PT Paragon Technology and Innovation (ParagonCorp)",
    position: "Product Manager",
    duration: "Nov 2025 - Apr 2026",
    location: "Paragon Head Office, Jakarta",
    description: "Driving the end-to-end development of Heron, a digital warehouse management platform improving inventory accuracy and operational visibility. Leading Scrum ceremonies, managing PRD/FSD documentation, and coordinating with stakeholders and engineering teams. Overseeing product roadmap and sprint execution in Jira to ensure timely, high-quality feature releases.",
    logo: "img/paragoncorp_logo.jpeg",
    skills: ["Jira", "Product Delivery", "Agile", "WMS"]
  },
  {
    id: 3,
    company: "Telkom Indonesia",
    position: "Fullstack Developer",
    duration: "Feb - Aug 2025",
    location: "Telkom Landmark Tower, Jakarta",
    description: "Developed AI chatbots for internal use, handling both frontend and backend tasks using React, Laravel, etc. Collaborated with cross-functional teams to improve automation and internal workflows.",
    logo: "https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png",
    skills: ["React.js", "Laravel", "MongoDB","AI Chatbot Development"]
  },
  {
    id: 4,
    company: "Bangkit Academy by Google, GoTo, and Traveloka",
    position: "Mobile Development Cohort",
    duration: "Sept 2024 - Jan 2025",
    location: "Jakarta, Indonesia",
    description: "Built Android apps using Kotlin, integrated with ML models and APIs. Completed over 900 hours of learning and consistently earned 5-star ratings. Achieved Android Developer Expert certification after advanced training.",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGVomgVddrtBA/company-logo_200_200/B56ZWOrFbWGUAM-/0/1741855415072/bangkit_academy_logo?e=2147483647&v=beta&t=oWNWz9O6b8rrBzaHIYm0P8JDa0hYPcNOJcPJMa_jpcY",
    skills: ["Kotlin", "Android Studio", "Machine Learning", "Firebase", "API Integration"]
  },
  {
    id: 5,
    company: "PT Artha Nusa Realty",
    position: "Digital Operations",
    duration: "2022 - 2025",
    location: "Jakarta, Indonesia",
    description: "Managed customer data cleaning and validation processes, created property contracts and agreements, and maintained accurate database records for real estate transactions with 75% data accuracy improvement.",
    logo: "https://cdn2.vectorstock.com/i/1000x1000/67/96/apartment-building-logo-design-inspiration-vector-29706796.jpg",
    skills: ["Microsoft Excel", "Data Entry", "Database Management", "Contract Management"]
  }
];

const projects = [
    {
      id: 1,
      title: "Heron - Warehouse Management System",
      description: "A centralized Warehouse Management System designed to streamline the entire supply chain. Replaces manual guesswork with system-driven workflows, giving real-time visibility and control over warehouse operations. Serving 3K+ active users with 100% uptime.",
      image: "/img/Heron0.jpg",
      technologies: ["Product Manager"],
      github: null,
      demo: "https://heron-wms.com",
      year: "2026"
    },
    {
      id: 2,
      title: "CIAMIC - Chat Intelligent Assistant for Media Interaction & Communication",
      description: "AI-powered chatbot for TelkomGroup employees to access internal product information, HR resources, KPIs, and secure company data. Improved adoption by 64% through user research and continuous iteration. Built for both desktop and mobile with responsive design.",
      image: "/img/ciamic.png",
      technologies: ["React.js", "Laravel", "MongoDB"],
      github: "https://github.com/khansagiffany/ciamic",
      demo: "https://ciamic-trf.itdri.id/",
      year: "2025"
    },
    {
      id: 3,
      title: "DANA Sense - The Invisible Insight Engine",
      description: "An intelligent, contextual, and invisible in-app analytics engine for DANA. Transforms how DANA listens to users through event-triggered micro-surveys, AI-powered auto-synthesis, and a real-time stakeholder dashboard — reducing time-to-insight from 3 weeks to under 24 hours.",
      image: "/img/danasense.jpg",
      technologies: ["Apache Kafka", "NLP / AI Engine", "Microservices", "Data Warehouse"],
      github: "",
      demo: "",
      year: "2025"
    },
    {
      id: 4,
      title: "Digimate - Personal Tracker for Interns",
      description: "Web-based personal tracker designed for interns, featuring task reminders, an AI chatbot for internship-related questions, and a calendar schedule for better time management.",
      image: "/img/digimate.jpg",
      technologies: ["Next.js", "Tailwind", "Gemini"],
      github: "https://github.com/khansagiffany/digimate-v2",
      demo: "https://digimate-v2.vercel.app",
      year: "2025"
    },
  ];

  const education = [
    {
      id: 1,
      institution: "Universitas Mercu Buana – West Jakarta, Indonesia",
      degree: "Bachelor of Informatics Engineering",
      duration: "Aug 2022 – Present (expected 2026)",
      gpa: "3.92/4.00",
      logo: "https://e7.pngegg.com/pngimages/358/597/png-clipart-mercu-buana-university-of-yogyakarta-master-s-degree-bachelor-s-degree-computer-engineering-miscellaneous-class-thumbnail.png",
      activities: [
        "Awardee of OSC 2021 Full Scholarship",
        "Outstanding Student at the MBKM Awards 2025",
        "Developed Student Creativity Program (PKM) idea: SMARTGRO – IoT-Based Agriculture Automation"
      ]
    },
    {
      id: 2,
      institution: "Universitas Brawijaya – Malang, Indonesia",
      degree: "Exchange, Summer School Programme in Statistics",
      duration: "June – Aug 2024",
      gpa: "3.63/4.00",
      logo: "img/UB.png",
      activities: [
        "12 credits conversion",
        "Proficient in R Studio for statistical tasks"
      ]
    }
  ];

  const certificates = [
    { id: 1, title: "Google Project Management", issuer: "Google x Coursera", year: "2026", image: "/img/PM1.jpg" },
    { id: 2, title: "Google AI Essentials", issuer: "Google x Coursera", year: "2026", image: "img/PM.jpeg" },
    { id: 3, title: "Project Management", issuer: "Komdigi", year: "2026", image: "/img/AI.jpeg" },
  ];

  const articles = [
  {
    id: 1,
    title: "How My First Internship Changed Me, Personally and Professionally.",
    image: "/img/dtelkom.jpeg",
    url: "/articles/telkom-internship"
  },
  {
    id: 2,
    title: "I Didn’t Expect My Product Journey to Start in a Warehouse.",
    image: "/img/dparagon.jpeg",
    url: "/articles/paragon-internship"
  },
];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollSlider = (ref, direction) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' });
  };


const handleViewDetails = (experienceId) => {
  switch(experienceId) {
    case 2:
      router.push('/experiences/paragon');
      break;
    case 1: // Cermati
      router.push('/experiences/cermati');
      break;
    case 3:
      router.push('/experiences/telkom');
      break;
    case 4:
      router.push('/experiences/bangkit');
      break;
    case 5:
      router.push('/experiences/artha-nusa');
      break;
  }
};

  const handleViewEducationDetails = (eduId) => {
    switch(eduId) {
      case 1: //umb
        router.push('/education/umb');
        break;
      case 2: //ub
        router.push('/education/ub');
        break;
      default:
          console.log('Experience detail page not found');
    }
  };

  const handleViewProject = (projectId) => {
  switch(projectId) {
    case 1: //heron
      router.push('/projects/heron');
      break;
    case 2: //ciamic
      router.push('/projects/ciamic');
      break;
    case 3: //danasense
      router.push('/projects/danasense');
      break;
    case 4: //digimate
      router.push('/projects/digimate');
      break;
    default:
      console.log('Projects detail page not found');
  }
};

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-stone-800">Portfolio</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm">
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-[#800000] transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-stone-700 hover:text-[#800000] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-stone-700 hover:text-[#800000] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-stone-700 hover:text-[#800000] transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="text-stone-700 hover:text-[#800000] transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('articles')} className="text-stone-700 hover:text-[#800000] transition-colors">Articles</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-[#800000] transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <ChevronDown className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pb-3 space-y-1 bg-white/20 backdrop-blur-md rounded-lg p-3 border border-white/30 text-sm">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('articles')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Articles</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-1.5 text-stone-700 hover:text-[#800000] transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>
  
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-10 px-6 sm:px-8 md:px-10 relative overflow-hidden flex items-center">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#800000]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#800000]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 items-center">
            
            {/* Left Content - Photo with Glass Effect */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-rose-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Main Photo Card */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl bg-white/40 backdrop-blur-xl p-1 shadow-2xl border border-white/60 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/40">
                    <img 
                      src="/img/khansagiffany.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl backdrop-blur-sm shadow-lg flex items-center justify-center animate-bounce border border-white/40">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-[#800000] to-rose-500 rounded-xl backdrop-blur-sm shadow-lg animate-pulse border border-white/40"></div>
              </div>
            </div>

            {/* Right Content - Text with Glass Cards */}
            <div className="space-y-3 lg:pl-8 lg:pr-12 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="space-y-3">
                {/* Status Badge
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-xl text-[#800000] px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/60 hover:scale-105 transition-transform">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span>Available for work</span>
                </div> */}
                
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 leading-tight flex flex-wrap items-center justify-center lg:justify-start gap-2 text-center lg:text-left">
                  <span>Hi, I am</span>
                  <span className="relative inline-block">
                    <span className="text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text font-extrabold">
                      {profile.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/20 to-rose-600/20 blur-xl -z-10 animate-pulse"></div>
                  </span>
                </h1>

                {/* Subtitle with Glass Background
                <div className="bg-white/40 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/60 shadow-xl inline-block">
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text text-transparent">
                    <ReactTyped
                      strings={["Fullstack Developer", "Product Manager"]}
                      typeSpeed={60}
                      backSpeed={40}
                      backDelay={1500}
                      loop
                    />
                  </h2>
                </div> */}
                
                {/* Description */}
                <p className="text-left text-sm text-stone-600 leading-relaxed bg-white/30 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/50 shadow-lg">
                  {profile.description}
                </p>
              </div>

              {/* Location Badge
              <div className="inline-flex items-center space-x-2 text-stone-600 bg-white/50 backdrop-blur-xl px-3 py-1 rounded-full border border-white/60 shadow-md text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.location}</span>
              </div> */}

              {/* CTA Buttons NEW */}
            <div className="flex flex-row flex-wrap items-center gap-2.5 justify-center lg:justify-start">
              {/* <a 
                href={profile.resume}
                className="flex items-center justify-center bg-gradient-to-r from-[#800000] to-rose-700 text-white px-6 h-12 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 overflow-hidden border border-white/20 text-sm shadow-lg"
              >
                <span className="relative z-10">khansAI (Currently Unavailable)</span>
              </a> */}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-xl border border-white/80 text-stone-700 hover:text-[#800000] w-10 h-10 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/80 text-sm shadow-lg"
              >
                <Mail className="w-4 h-4" />
              </button>

              <a href={profile.linkedin} className="flex items-center justify-center w-10 h-10 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/60 group">
                <Linkedin className="w-4 h-4 text-stone-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href={profile.github} className="flex items-center justify-center w-10 h-10 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/60 group">
                <Github className="w-4 h-4 text-stone-600 group-hover:text-stone-900 transition-colors" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* About Section */}
      <section id="about" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass Effect */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/60 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Let&apos;s get to know Khansa!
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Content - Bio */}
            <div className="space-y-4">
              {/* Bio Cards with Glass */}
              <div className="bg-white/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01]">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify">
                  Khansa Putri Giffany works in Product at Cermati Fintech Group, focusing on digital financial products.
                </p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01]">
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed text-justify">
                 Previously, she worked as a Product Manager at ParagonCorp and a Fullstack Developer at Telkom Indonesia. Her background in both technology and product helps her understand problems from both sides and turn ideas into practical solutions.
                </p>
              </div>

              {/* Stats with Glass */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative text-center p-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#800000] to-rose-600 bg-clip-text">2+</div>
                    <div className="text-stone-600 text-xs sm:text-sm font-medium mt-1">Years Experience</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative text-center p-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:scale-105 transition-transform">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#800000] to-rose-600 bg-clip-text">15+</div>
                    <div className="text-stone-600 text-xs sm:text-sm font-medium mt-1">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Skills */}
            <div className="space-y-6">
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-xl">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text mb-6">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  {[
                    { 
                      category: "Product Management", 
                      skills: ["Product Discovery", "Product Roadmap", "Requirement Gathering", "Sprint Planning", "Pricing Strategy", "Agile Methodology"],
                      gradient: "from-blue-700 to-blue-900",
                      full: true
                    },
                    { 
                      category: "Frontend", 
                    // skills: ["React.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Flutter"],
                      skills: ["React.js"],
                      gradient: "from-blue-500 to-cyan-500"
                    },
                    { 
                      category: "Backend", 
                      skills: ["Laravel"],
                    // skills: ["Node.js", "Laravel", "PHP", "MySQL", "MongoDB"],
                      gradient: "from-green-500 to-emerald-500"
                    },
                    // { 
                    //   category: "Programming & Data", 
                    //   skills: ["Python", "R", "C++", "Java", "SQL"],
                    //   gradient: "from-purple-500 to-pink-500"
                    // },
                    // { 
                    //   category: "Tools & Platforms", 
                    //   skills: ["Git","VS Code", "Figma", "Microsoft Office"],
                    //   gradient: "from-orange-500 to-red-500"
                    // }
                  ].map((skillGroup, index) => (
                    <div key={index} className={`group ${skillGroup.full ? 'col-span-2' : ''}`}>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-1 h-6 bg-gradient-to-b ${skillGroup.gradient} rounded-full`}></div>
                        <h4 className="font-bold text-stone-800">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1.5 bg-white/70 backdrop-blur-md text-[#800000] rounded-full text-sm font-semibold border border-white/60 shadow-md hover:shadow-lg hover:scale-110 transition-all cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/60 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Work Experience
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="group relative bg-white/50 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Logo with Glass */}
                  <div className="flex-shrink-0">
                    <div className="relative w-12 h-12 bg-white/70 backdrop-blur-md rounded-xl p-1.5 shadow-lg border border-white/60">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-2.5 pb-12 lg:pb-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                      <div className="space-y-0.5">
                        <h3 className="text-base lg:text-lg font-bold text-stone-800">{exp.position}</h3>
                        <p className="text-[#800000] font-semibold text-sm lg:text-base">{exp.company}</p>
                      </div>
                      
                      {/* Date & Location Badge */}
                      <div className="flex flex-col gap-1.5">
                        <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-stone-600 border border-white/60 shadow-md">
                          <Calendar className="w-3.5 h-3.5 text-[#800000]" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-stone-600 border border-white/60 shadow-md">
                          <MapPin className="w-3.5 h-3.5 text-[#800000]" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-stone-600 leading-relaxed bg-white/40 backdrop-blur-sm p-3 rounded-xl border border-white/40">
                      {exp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2.5 py-1 bg-white/70 backdrop-blur-md text-[#800000] rounded-full text-xs font-semibold border border-white/60 shadow-md hover:shadow-lg hover:scale-105 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  className="absolute bottom-3 right-3 group/btn bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#800000]/50 flex items-center space-x-1.5 border border-white/20"
                  onClick={() => handleViewDetails(exp.id)}
                >
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Featured Projects
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>

          {/* Mobile: 1 kolom | iPad & Desktop: 4 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-5 mb-8">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-row md:flex-col bg-white/40 backdrop-blur-2xl rounded-xl lg:rounded-2xl overflow-hidden shadow-lg border border-white/70 hover:shadow-2xl transition-all duration-300 md:hover:scale-[1.02]"
              >
                {/* Image: selalu 16:9 (mobile = thumbnail, iPad/desktop = full width kartu) */}
                <div className="relative overflow-hidden shrink-0 self-start w-40 sm:w-52 aspect-video md:self-auto md:w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Year badge */}
                  <span className="absolute top-1.5 left-1.5 px-2 py-0.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] text-stone-700 font-semibold border border-white/60 shadow">
                    {project.year}
                  </span>

                  {/* Hover overlay (hanya iPad/desktop) */}
                  <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center backdrop-blur-sm">
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
                          title="View Code"
                        >
                          <Github className="w-4 h-4 text-stone-800" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/90 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4 text-stone-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow gap-1.5 p-3 lg:p-4 bg-white/30 backdrop-blur-md min-w-0">
                  <h3 className="font-bold text-sm lg:text-base text-stone-800 line-clamp-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Deskripsi disembunyikan di HP kecil biar kartu tetap ramping */}
                  <p className="hidden sm:block text-stone-600 text-xs leading-relaxed line-clamp-2 md:line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="hidden sm:flex flex-wrap gap-1 mt-1">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-white/70 text-[#800000] rounded-full text-[10px] font-bold border border-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-0.5 bg-white/70 text-stone-600 rounded-full text-[10px] font-bold border border-white/60">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    className="group/btn mt-auto pt-1 self-start md:self-stretch inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg border border-white/30"
                    onClick={() => handleViewProject(project.id)}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button with Glass */}
          <div className="text-center">
            <Link href="/projects">
              <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Code className="w-4 h-4 relative z-10" />
                <span className="relative z-10">View More Projects</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div 
                key={edu.id} 
                className="group relative bg-white/40 backdrop-blur-2xl rounded-2xl p-4 sm:p-5 shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                <div className="flex items-start space-x-3">
                  {/* Logo with Glass */}
                  <div className="flex-shrink-0">
                    <div className="relative w-11 h-11 bg-white/70 backdrop-blur-md rounded-xl p-1.5 shadow-lg border border-white/60 group-hover:scale-110 transition-transform">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow pb-12">
                    {/* Header Info */}
                    <div className="space-y-1.5 mb-3">
                      <h3 className="text-base font-bold text-stone-800">{edu.degree}</h3>
                      <p className="text-[#800000] font-semibold text-sm">{edu.institution}</p>
                      
                      {/* Duration & GPA Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        <span className="inline-flex items-center px-2.5 py-1 bg-white/70 backdrop-blur-md rounded-full text-xs text-stone-600 font-semibold border border-white/60 shadow-md">
                          📅 {edu.duration}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-[#800000]/10 to-rose-600/10 backdrop-blur-md rounded-full text-xs text-[#800000] font-bold border border-white/60 shadow-md">
                          🎯 GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                    
                    {/* Activities Section with Glass */}
                    <div className="bg-white/30 backdrop-blur-md rounded-xl p-3 border border-white/50 shadow-md">
                      <h4 className="text-xs font-bold text-stone-800 mb-2 flex items-center space-x-2">
                        <span className="w-1 h-3.5 bg-gradient-to-b from-[#800000] to-rose-600 rounded-full"></span>
                        <span>Activities & Achievements</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {edu.activities.map((activity, index) => (
                          <li key={index} className="text-xs text-stone-600 flex items-start group/item">
                            <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mt-1.5 mr-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                            <span className="leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  className="absolute bottom-3 right-3 group/btn bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#800000]/50 flex items-center space-x-1.5 border border-white/30"
                  onClick={() => handleViewEducationDetails(edu.id)}
                >
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Certificates
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>

          {/* Carousel wrapper (sama seperti Articles) */}
          <div className="relative max-w-3xl mx-auto mb-6">
            {/* Prev / Next (hanya muncul kalau sertifikat > 2) */}
            {certificates.length > 2 && (
              <>
                <button
                  onClick={() => scrollSlider(certificatesRef, -1)}
                  aria-label="Previous certificates"
                  className="hidden sm:flex absolute -left-12 top-1/3 z-10 w-10 h-10 items-center justify-center bg-white/70 backdrop-blur-xl rounded-full border border-white/70 shadow-lg text-[#800000] hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollSlider(certificatesRef, 1)}
                  aria-label="Next certificates"
                  className="hidden sm:flex absolute -right-12 top-1/3 z-10 w-10 h-10 items-center justify-center bg-white/70 backdrop-blur-xl rounded-full border border-white/70 shadow-lg text-[#800000] hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slider: 2 kartu per layar, sisanya geser ke samping */}
            <div
              ref={certificatesRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative snap-start shrink-0 basis-[calc(50%-0.5rem)] bg-white/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Image holder 16:9 */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/70 via-[#800000]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-2.5 shadow-xl border border-white/60">
                        <Award className="w-5 h-5 text-[#800000]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 bg-white/30 backdrop-blur-md flex flex-col flex-grow gap-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-stone-800 line-clamp-2 group-hover:text-[#800000] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500">{cert.issuer}</p>
                    <div className="mt-auto self-start inline-flex items-center px-2.5 py-1 bg-white/70 backdrop-blur-md rounded-full text-xs text-[#800000] font-bold border border-white/60 shadow-md">
                      📅 {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Button with Glass */}
          <div className="text-center">
            <Link href="/certificates">
              <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Award className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View All Certificates</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-8">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Articles
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
          </div>

          {/* Carousel wrapper */}
          <div className="relative max-w-3xl mx-auto">
            {/* Prev / Next (hanya muncul kalau artikel > 2) */}
            {articles.length > 2 && (
              <>
                <button
                  onClick={() => scrollSlider(articlesRef, -1)}
                  aria-label="Previous articles"
                  className="hidden sm:flex absolute -left-12 top-1/3 z-10 w-10 h-10 items-center justify-center bg-white/70 backdrop-blur-xl rounded-full border border-white/70 shadow-lg text-[#800000] hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollSlider(articlesRef, 1)}
                  aria-label="Next articles"
                  className="hidden sm:flex absolute -right-12 top-1/3 z-10 w-10 h-10 items-center justify-center bg-white/70 backdrop-blur-xl rounded-full border border-white/70 shadow-lg text-[#800000] hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slider: 2 kartu per layar, sisanya geser ke samping */}
            <div
              ref={articlesRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="group relative snap-start shrink-0 basis-[calc(50%-0.5rem)] bg-white/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Image holder 16:9 */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 bg-white/30 backdrop-blur-md flex flex-col flex-grow gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-stone-800 line-clamp-3 group-hover:text-[#800000] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500">Read the full story here</p>

                    <Link
                      href={article.url}
                      className="mt-auto inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 self-start"
                    >
                      <span>Read Article</span>
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4 md:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Header with Glass */}
          <div className="mb-8">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform mb-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Let&apos;s Work Together
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-3 rounded-full"></div>
            </div>
            
            <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto bg-white/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white/60 shadow-lg leading-relaxed">
              <span className="block">Interested in working together or just want to say hi?</span>
              <span className="block">Feel free to reach out.</span>
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <a 
              href={`mailto:${profile.email}`}
              className="group relative flex flex-col items-center p-5 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Mail className="w-6 h-6 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-1 text-base">Email</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-medium break-all">{profile.email}</p>
            </a>

            <a 
              href={`tel:${profile.phone}`}
              className="group relative flex flex-col items-center p-5 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Phone className="w-6 h-6 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-1 text-base">Phone</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-medium">{profile.phone}</p>
            </a>

            <a 
              href={profile.linkedin}
              className="group relative flex flex-col items-center p-5 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-12 h-12 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-center mb-3 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Linkedin className="w-6 h-6 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-1 text-base">LinkedIn</h3>
              <p className="text-stone-600 text-xs sm:text-sm font-medium">Connect with Me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Glass */}
      <footer className="relative py-8 px-4 md:px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000] via-[#600000] to-stone-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Footer Content with Glass Card */}
          <div className="bg-[#800000]/30 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-[#800000]/40 shadow-2xl">
            <div className="text-center space-y-4">
              {/* Name */}
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {profile.name}
              </h3>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              {/* Copyright */}
              <p className="text-white/90 text-xs sm:text-sm drop-shadow">
                &copy; 2026 {profile.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;