"use client";

import React, { useState } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Calendar, Award, GraduationCap, Briefcase, Download, Code, Eye } from 'lucide-react';
import { ReactTyped } from "react-typed";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Sample data - nanti bisa dipindah ke src/data/
  const profile = {
    name: "Khansa Putri Giffany",
    title: "Frontend Developer",
    description: "Always exploring tech, design, and innovation to create meaningful experiences, from AI-driven solutions to user-friendly web and mobile apps. Staying curious about how technology can make life easier.",
    location: "Jakarta, Indonesia",
    email: "khansaagiffany@gmail.com",
    phone: " ",
    linkedin: "https://www.linkedin.com/in/khansa-putri-giffany/",
    github: "https://github.com/khansagiffany",
    resume: "https://khansai.vercel.app/"
  };

  const experiences = [
    {
      id: 1,
      company: "Telkom Indonesia",
      position: "Fullstack Developer",
      duration: "Feb - Aug 2025",
      location: "Telkom Landmark Tower, Jakarta",
      description: "Developed AI chatbots for internal use, handling both frontend and backend tasks using React, Laravel, etc. Collaborated with cross-functional teams to improve automation and internal workflows.",
      logo: "https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png",
      skills: ["React.js", "Laravel", "Python", "MongoDB", "Docker", "Postman", "Git", "CI/CD", "AI Chatbot Development"]
    },
    {
      id: 2,
      company: "Bangkit Academy by Google, GoTo, and Traveloka",
      position: "Mobile Development Cohort",
      duration: "Sept 2024 - Jan 2025",
      location: "Jakarta, Indonesia",
      description: "Built Android apps using Kotlin, integrated with ML models and APIs. Completed over 900 hours of learning and consistently earned 5-star ratings. Achieved Android Developer Expert certification after advanced training.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGVomgVddrtBA/company-logo_200_200/B56ZWOrFbWGUAM-/0/1741855415072/bangkit_academy_logo?e=2147483647&v=beta&t=oWNWz9O6b8rrBzaHIYm0P8JDa0hYPcNOJcPJMa_jpcY",
      skills: ["Kotlin", "Android Studio", "Machine Learning", "Firebase", "API Integration"]
    },
    {
      id: 3,
      company: "PT Artha Nusa Realty",
      position: "Data Administrator",
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
      title: "CIAMIC - Chat Intelligent Assistant for Media Interaction & Communication",
      description: "AI-powered chatbot for TelkomGroup employees to access internal product information, HR resources, KPIs, and secure company data. Improved adoption by 64% through user research and continuous iteration. Built for both desktop and mobile with responsive design.",
      image: "/img/ciamic.png",
      technologies: ["React.js", "Laravel", "MongoDB"],
      github: "https://github.com/khansagiffany/ciamic", 
      demo: "https://ciamic-trf.itdri.id/", 
      year: "2025"
    },
    {
      id: 2,
      title: "Digimate - Personal Tracker for Interns",
      description: "Web-based personal tracker designed for interns, featuring task reminders, an AI chatbot for internship-related questions, and a calendar schedule for better time management.",
      image: "/img/digimate.jpg",
      technologies: ["Next.js", "Tailwind", "Gemini"],
      github: "https://github.com/khansagiffany/digimate-v2",
      demo: "https://digimate-v2.vercel.app",
      year: "2025"
    },
    {
      id: 3,
      title: "EYECON - Eye Health Mobile App",
      description: "Android application for early detection of eye diseases using machine learning. Features real-time image processing, health recommendations, and integration with a machine learning model for accurate analysis.",
      image: "/img/eyecon.jpg",
      technologies: ["Kotlin", "Android Studio", "ML"],
      github: "https://github.com/EYECON-Capstone",
      demo: "https://eyecon-demo.com",
      year: "2024"
    },
    {
      id: 4,
      title: "CrimsonDash Sales Dashboard",
      description: "Comprehensive sales analytics for 2022-2024 with advanced filtering, interactive charts, and year-over-year growth insights.",
      image: "/img/CrimsonDashmain.png",
      technologies: ["TypeScript", "Data Visualization"],
      github: "https://github.com/khansagiffany/CrimsonDash",
      demo: "https://crimson-dash.vercel.app/",
      year: "2025"
    }
  ];

  const education = [
    {
      id: 1,
      institution: "Universitas Mercu Buana – West Jakarta, Indonesia",
      degree: "Bachelor of Informatics Engineering",
      duration: "Aug 2022 – Present (expected 2026)",
      gpa: "3.90/4.00",
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
      degree: "Short Course (Summer School Programme) in Statistics",
      duration: "June – Aug 2024",
      gpa: "3.63/4.00",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png",
      activities: [
        "12 credits conversion",
        "Proficient in R Studio for statistical tasks"
      ]
    }
  ];

  const certificates = [
    { id: 1, title: "Intermediate Android Application Development", issuer: "Bangkit Academy by Google, GoTo, and Traveloka", year: "2025", image: "/img/Belajar Pengembangan Aplikasi Android Intermediate-images-0.jpg" },
    { id: 2, title: "Machine Learning for Android", issuer: "Bangkit Academy by Google, GoTo, and Traveloka", year: "2025", image: "img/ML.jpeg" },
    { id: 3, title: "Database Design & Programming", issuer: "TSA by Komdigi", year: "2024", image: "/img/DB.jpeg" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Handler untuk navigasi ke halaman detail berdasarkan ID
  const handleViewDetails = (experienceId) => {
    switch(experienceId) {
      case 1: // Telkom Indonesia
        router.push('/experiences/telkom');
        break;
      case 2: // Bangkit Academy  
        router.push('/experiences/bangkit');
        break;
      case 3: // Artha Nusa
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
      case 1: //ciamic
        router.push('/projects/ciamic');
        break;
      case 2: //digimate
        router.push('/projects/digimate');
        break;
      case 3: //eyecon
        router.push('/projects/eyecon');
        break;
      case 4: //crimson
        router.push('/projects/crimson');
        break;
      default:
        console.log('Projects detail page not found');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-b border-white/20 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-stone-800">Portfolio</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-[#800000] transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-stone-700 hover:text-[#800000] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-stone-700 hover:text-[#800000] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="text-stone-700 hover:text-[#800000] transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="text-stone-700 hover:text-[#800000] transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-[#800000] transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-stone-700 hover:text-[#800000] transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>
  
      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-12 px-6 relative overflow-hidden min-h-screen flex items-center">
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
                <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-2xl bg-white/40 backdrop-blur-xl p-1 shadow-2xl border border-white/60 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/40">
                    <img 
                      src="/img/khansagiffany.jpg"
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl backdrop-blur-sm shadow-lg flex items-center justify-center animate-bounce border border-white/40">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#800000] to-rose-500 rounded-xl backdrop-blur-sm shadow-lg animate-pulse border border-white/40"></div>
              </div>
            </div>

            {/* Right Content - Text with Glass Cards */}
            <div className="space-y-4 pr-6 lg:pr-12 max-w-2xl">
              <div className="space-y-3">
                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-xl text-[#800000] px-3 py-1.5 rounded-full text-sm font-bold shadow-lg border border-white/60 hover:scale-105 transition-transform">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span>Available for work</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 leading-tight flex flex-wrap items-center gap-2 text-left">
                  <span>Hi, I am</span>
                  <span className="relative inline-block whitespace-nowrap">
                    <span className="text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text font-extrabold">
                      {profile.name}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#800000]/20 to-rose-600/20 blur-xl -z-10 animate-pulse"></div>
                  </span>
                </h1>

                {/* Subtitle with Glass Background */}
                <div className="bg-white/40 backdrop-blur-xl p-3 rounded-xl border border-white/60 shadow-xl inline-block">
                  <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-stone-700 to-stone-900 bg-clip-text text-transparent">
                    <ReactTyped
                      strings={["Fullstack Developer", "AI Engineer"]}
                      typeSpeed={60}
                      backSpeed={40}
                      backDelay={1500}
                      loop
                    />
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-base text-stone-600 leading-relaxed bg-white/30 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg">
                  {profile.description}
                </p>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center space-x-2 text-stone-600 bg-white/50 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/60 shadow-md text-sm">
                <MapPin className="w-4 h-4" />
                <span>{profile.location}</span>
              </div>

              {/* CTA Buttons NEW*/}
            <div className="flex flex-row flex-wrap items-center gap-3 justify-start sm:justify-start">
              <a 
                href={profile.resume}
                className="flex items-center justify-center bg-gradient-to-r from-[#800000] to-rose-700 text-white px-6 h-12 rounded-xl font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 overflow-hidden border border-white/20 text-sm shadow-lg"
              >
                <span className="relative z-10">khansAI</span>
              </a>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-xl border border-white/80 text-stone-700 hover:text-[#800000] w-12 h-12 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white/80 text-sm shadow-lg"
              >
                <Mail className="w-4 h-4" />
              </button>

              <a href={profile.linkedin} className="flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/60 group">
                <Linkedin className="w-5 h-5 text-stone-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a href={profile.github} className="flex items-center justify-center w-12 h-12 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-white/60 group">
                <Github className="w-5 h-5 text-stone-600 group-hover:text-stone-900 transition-colors" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* About Section */}
      <section id="about" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass Effect */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-8 py-6 rounded-3xl border border-white/60 shadow-2xl mb-4 hover:scale-105 transition-transform">
              <h2 className="text-3xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Let&apos;s get to know Khansa!
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content - Bio */}
            <div className="space-y-6">
              {/* Bio Cards with Glass */}
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                <p className="text-lg text-stone-600 leading-relaxed text-justify">
                  Khansa Putri Giffany is a Fullstack Developer at Telkom Indonesia, specializing in AI chatbot development for
                  internal use. A fourth year Informatics Engineering student at Universitas Mercu Buana, she previously led the
                  EYECON eye health app project at Bangkit Academy, graduating with distinction.
                </p>
              </div>
              
              <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                <p className="text-lg text-stone-600 leading-relaxed text-justify">
                  With expertise in project management, software development, and AI integration, Khansa thrives in fast-paced 
                  corporate environments. Her ability to adapt quickly and collaborate effectively makes her a valuable asset in 
                  dynamic teams, driving innovation and efficiency.
                </p>
              </div>

              {/* Stats with Glass */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] to-rose-600 bg-clip-text">2+</div>
                    <div className="text-stone-600 font-medium mt-1">Years Experience</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-rose-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative text-center p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#800000] to-rose-600 bg-clip-text">25+</div>
                    <div className="text-stone-600 font-medium mt-1">Projects Completed</div>
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
                <div className="space-y-5">
                  {[
                    { 
                      category: "Frontend", 
                      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap", "Flutter"],
                      gradient: "from-blue-500 to-cyan-500"
                    },
                    { 
                      category: "Backend", 
                      skills: ["Node.js", "Laravel", "PHP", "MySQL", "PostgreSQL", "MongoDB"],
                      gradient: "from-green-500 to-emerald-500"
                    },
                    { 
                      category: "Programming & Data", 
                      skills: ["Python", "R", "C/C++", "Java", "SQL", "Pandas", "TensorFlow", "Keras"],
                      gradient: "from-purple-500 to-pink-500"
                    },
                    { 
                      category: "Tools & Platforms", 
                      skills: ["Git", "Docker", "Postman", "VS Code", "Figma", "Firebase", "pgAdmin", "Microsoft Office"],
                      gradient: "from-orange-500 to-red-500"
                    }
                  ].map((skillGroup, index) => (
                    <div key={index} className="group">
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
      <section id="experience" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#800000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-8 py-6 rounded-3xl border border-white/60 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Work Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="group relative bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Logo with Glass */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 bg-white/70 backdrop-blur-md rounded-xl p-2 shadow-lg border border-white/60">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow space-y-3 pb-16 lg:pb-0">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-stone-800">{exp.position}</h3>
                        <p className="text-[#800000] font-semibold text-lg">{exp.company}</p>
                      </div>
                      
                      {/* Date & Location Badge */}
                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-stone-600 border border-white/60 shadow-md">
                          <Calendar className="w-4 h-4 text-[#800000]" />
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full text-sm text-stone-600 border border-white/60 shadow-md">
                          <MapPin className="w-4 h-4 text-[#800000]" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-stone-600 leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/40">
                      {exp.description}
                    </p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1.5 bg-white/70 backdrop-blur-md text-[#800000] rounded-full text-sm font-semibold border border-white/60 shadow-md hover:shadow-lg hover:scale-110 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  className="absolute bottom-4 right-4 group/btn bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#800000]/50 flex items-center space-x-2 border border-white/20"
                  onClick={() => handleViewDetails(exp.id)}
                >
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-8 py-6 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.slice(0, 4).map((project) => (
              <div 
                key={project.id} 
                className="group relative bg-white/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay with Glass Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex space-x-3">
                      <a 
                        href={project.github}
                        className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 border border-white/60"
                        title="View Code"
                      >
                        <Github className="w-5 h-5 text-stone-800" />
                      </a>
                      <a 
                        href={project.demo}
                        className="p-3 bg-white/90 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-lg hover:scale-110 border border-white/60"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-stone-800" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 pb-16 bg-white/30 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-stone-800">{project.title}</h3>
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-md rounded-full text-sm text-stone-600 font-semibold border border-white/60 shadow-md">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-white/70 backdrop-blur-md text-[#800000] rounded-full text-xs font-bold border border-white/60 shadow-md hover:scale-110 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-white/70 backdrop-blur-md text-stone-600 rounded-full text-xs font-bold border border-white/60 shadow-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  className="absolute bottom-4 right-4 group/btn bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#800000]/50 flex items-center space-x-2 border border-white/30"
                  onClick={() => handleViewProject(project.id)}
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* View More Button with Glass */}
          <div className="text-center">
            <Link href="/projects">
              <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Code className="w-5 h-5 relative z-10" />
                <span className="relative z-10">View More Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-8 py-6 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div 
                key={edu.id} 
                className="group relative bg-white/40 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                <div className="flex items-start space-x-4">
                  {/* Logo with Glass */}
                  <div className="flex-shrink-0">
                    <div className="relative w-14 h-14 bg-white/70 backdrop-blur-md rounded-xl p-2 shadow-lg border border-white/60 group-hover:scale-110 transition-transform">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow pb-16">
                    {/* Header Info */}
                    <div className="space-y-2 mb-4">
                      <h3 className="text-xl font-bold text-stone-800">{edu.degree}</h3>
                      <p className="text-[#800000] font-semibold text-lg">{edu.institution}</p>
                      
                      {/* Duration & GPA Badges */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-md rounded-full text-sm text-stone-600 font-semibold border border-white/60 shadow-md">
                          📅 {edu.duration}
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#800000]/10 to-rose-600/10 backdrop-blur-md rounded-full text-sm text-[#800000] font-bold border border-white/60 shadow-md">
                          🎯 GPA: {edu.gpa}
                        </span>
                      </div>
                    </div>
                    
                    {/* Activities Section with Glass */}
                    <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow-md">
                      <h4 className="text-sm font-bold text-stone-800 mb-3 flex items-center space-x-2">
                        <span className="w-1 h-4 bg-gradient-to-b from-[#800000] to-rose-600 rounded-full"></span>
                        <span>Activities & Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {edu.activities.map((activity, index) => (
                          <li key={index} className="text-sm text-stone-600 flex items-start group/item">
                            <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mt-1.5 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                            <span className="leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* View Details Button */}
                <button 
                  className="absolute bottom-4 right-4 group/btn bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#800000]/50 flex items-center space-x-2 border border-white/30"
                  onClick={() => handleViewEducationDetails(edu.id)}
                >
                  <span>View Details</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto">
          {/* Header with Glass */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-8 py-6 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Certificates
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certificates.slice(0, 3).map((cert) => (
              <div 
                key={cert.id} 
                className="group relative bg-white/40 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300 hover:scale-[1.05]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                {/* Certificate Image with Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-[#800000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white/90 backdrop-blur-md rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 border border-white/60">
                      <Award className="w-8 h-8 text-[#800000]" />
                    </div>
                  </div>
                </div>
                
                {/* Content with Glass Effect */}
                <div className="p-5 bg-white/30 backdrop-blur-md">
                  <h3 className="font-bold text-lg text-stone-800 mb-2 line-clamp-2 group-hover:text-[#800000] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-stone-600 text-sm font-medium">{cert.issuer}</p>
                    <div className="inline-flex items-center px-3 py-1.5 bg-white/70 backdrop-blur-md rounded-full text-sm text-[#800000] font-bold border border-white/60 shadow-md">
                      📅  {cert.year}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-gradient-to-br from-[#800000] to-rose-600 rounded-full backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/40">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button with Glass */}
          <div className="text-center">
            <Link href="/certificates">
              <button className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#800000]/50 hover:scale-105 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Award className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View All Certificates</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-rose-50 -z-10"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#800000]/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Header with Glass */}
          <div className="mb-12">
            <div className="inline-block bg-white/50 backdrop-blur-2xl px-8 py-6 rounded-3xl border border-white/70 shadow-2xl hover:scale-105 transition-transform mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
                Let&apos;s Work Together
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#800000] to-rose-700 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <p className="text-lg text-stone-600 max-w-2xl mx-auto bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/60 shadow-lg leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a 
              href={`mailto:${profile.email}`}
              className="group relative flex flex-col items-center p-8 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Mail className="w-8 h-8 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-2 text-lg">Email</h3>
              <p className="text-stone-600 text-sm font-medium">{profile.email}</p>
            </a>

            <a 
              href={`tel:${profile.phone}`}
              className="group relative flex flex-col items-center p-8 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Phone className="w-8 h-8 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-2 text-lg">Phone</h3>
              <p className="text-stone-600 text-sm font-medium">{profile.phone}</p>
            </a>

            <a 
              href={profile.linkedin}
              className="group relative flex flex-col items-center p-8 bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Icon Container with Glass */}
              <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/60 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <Linkedin className="w-8 h-8 text-[#800000] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-stone-800 mb-2 text-lg">LinkedIn</h3>
              <p className="text-stone-600 text-sm font-medium">Connect with Me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Glass */}
      <footer className="relative py-12 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000] via-[#600000] to-stone-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Footer Content with Glass Card */}
          <div className="bg-[#800000]/30 backdrop-blur-xl rounded-3xl p-8 border border-[#800000]/40 shadow-2xl">
            <div className="text-center space-y-6">
              {/* Name */}
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                {profile.name}
              </h3>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              
              {/* Copyright */}
              <p className="text-white/90 text-sm drop-shadow">
                &copy; 2025 {profile.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;