'use client';
import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, MapPin, Briefcase, FileText, BarChart3, Zap,
  Camera, Package, Target, TrendingUp, Award, ChevronRight, Users, GitBranch
} from 'lucide-react';

const photos = [
  { src: "/img/dtelkom.jpeg", caption: "Khansa @TelkomIndonesia", date: "2025" },
  { src: "/img/dtelkom1.jpeg", caption: "CIAMIC Demo Day", date: "2025" },
  { src: "/img/dtelkom2.jpeg", caption: "CIAMIC's Workplace", date: "2025" },
  { src: "/img/dtelkom3.jpeg", caption: "Team Ciamic", date: "2025" },
  { src: "/img/dtelkom4.jpeg", caption: "Full Team", date: "2025" },
  { src: "/img/dtelkom5.jpeg", caption: "Everyday Git Updates", date: "2025" }
];

export default function TelkomExperiencePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "CIAMIC (Chat Intelligent Assistant for Media Interaction & Communication)",
      description: "Developed an enterprise-grade AI chatbot for TelkomGroup employees to access HR resources, KPIs, product info, and secure company data.",
      technologies: ["React.js", "Laravel", "MongoDB", "Docker", "CI/CD"],
      status: "Completed",
      impact: "64% increase in user adoption",
      duration: "Feb 2025 - Aug 2025"
    },
    {
      name: "Cross-Platform Chatbot Experience",
      description: "Built responsive chatbot interfaces for both desktop and mobile platforms, ensuring seamless usability across devices.",
      technologies: ["React.js", "TailwindCSS", "API Integration", "Postman"],
      status: "Completed",
      impact: "Improved accessibility for 25,000+ employees",
      duration: "Feb 2025 - Aug 2025"
    },
    {
      name: "Executive Demo & Rollout",
      description: "Presented CIAMIC directly to BoD, C-Level executives, and SVPs, gathering feedback and securing leadership support for scaling.",
      technologies: ["Docker", "Git", "CI/CD Pipelines"],
      status: "Completed",
      impact: "Strategic approval for company-wide adoption",
      duration: "Feb 2025 - Aug 2025"
    }
  ];

  const achievements = [
    {
      title: "Top 1 Candidate Selected (0,02% Acceptance Rate)",
      description: "Earned the only Fullstack Developer position in Group Corporate Transformation Unit out of 45 selected applicants.",
      date: "Feb 2025"
    },
    {
      title: "User Adoption Growth",
      description: "Achieved a 64% increase in CIAMIC usage by iterating chatbot experience based on user interviews and data analysis.",
      date: "May 2025"
    },
    {
      title: "Executive Endorsement",
      description: "Received positive feedback and strong support from Telkom's BoD and SVPs after product demo.",
      date: "Jul 2025"
    }
  ];

  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "TailwindCSS", category: "Frontend" },
    { name: "Laravel", category: "Backend" },
    { name: "API Integration", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "CI/CD", category: "DevOps" },
    { name: "Postman", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "AI/Chatbot Integration", category: "Specialized" },
    { name: "User Research", category: "Specialized" },
    { name: "Data Analysis", category: "Specialized" }
  ];

  const skillCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Specialized'];

  const responsibilities = [
    "Developed CIAMIC AI chatbot end-to-end using React.js and Laravel",
    "Integrated MongoDB for managing structured and unstructured data",
    "Implemented CI/CD pipelines and containerization with Docker",
    "Conducted user research and data analysis to improve chatbot adoption",
    "Built responsive UI for desktop and mobile platforms",
    "Tested APIs with Postman and ensured secure integration",
    "Collaborated with Product, HR, and Design teams",
    "Pitched CIAMIC directly to BoD and C-Level executives"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-stone-600 hover:text-[#800000] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md overflow-hidden bg-white flex items-center justify-center border border-stone-100">
              <img
                src="https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png"
                alt="Telkom Indonesia Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full bg-[#800000] items-center justify-center"
              >
                <GitBranch className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">Fullstack Developer</h1>
              <p className="text-lg sm:text-xl text-[#800000] font-semibold mb-2">Telkom Indonesia</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />Feb – Aug 2025</div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span className="truncate">Telkom Landmark Tower, Jakarta</span></div>
                <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />Full-time Internship</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Impact' },
              { id: 'documentation', label: 'Documentation' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#800000] text-[#800000]'
                    : 'border-transparent text-stone-500 hover:text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Role Overview</h2>
              <p className="text-stone-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                As a Fullstack Developer intern at Telkom Indonesia, I developed and deployed CIAMIC, an AI-powered chatbot designed to streamline internal communication and data access for TelkomGroup employees. This role exposed me to enterprise-scale software development, agile workflows, and direct collaboration with C-Level executives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-red-50 rounded-lg">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Product Focus</h3>
                  <p className="text-stone-600 text-sm sm:text-base">CIAMIC AI Chatbot</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-rose-50 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Stack</h3>
                  <p className="text-stone-600 text-sm sm:text-base">React.js + Laravel</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-pink-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Impact Area</h3>
                  <p className="text-stone-600 text-sm sm:text-base">64% Adoption Growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#800000] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Telkom Indonesia</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Telkom Indonesia is the largest telecommunications and digital services company in Indonesia. As a state-owned enterprise, Telkom serves millions of customers across the archipelago, providing innovative digital solutions and maintaining Indonesia&apos;s digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Founded: 1884</span>
                <span>• Employees: 25,000+</span>
                <span>• Industry: Telecommunications</span>
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS & SKILLS */}
        {activeTab === 'projects' && (
          <div className="space-y-8 sm:space-y-10">

            {/* Projects */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Initiatives</h2>
              <div className="space-y-4">
                {projects.map((project, index) => {
                  const isOpen = expandedProject === index;
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                      <button
                        onClick={() => setExpandedProject(isOpen ? null : index)}
                        className="w-full text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            project.status === 'Completed' ? 'bg-green-500' :
                            project.status === 'In Progress' ? 'bg-blue-500' : 'bg-amber-500'
                          }`} />
                          <div className="min-w-0">
                            <p className="font-semibold text-stone-800 text-sm sm:text-base truncate">{project.name}</p>
                            <p className="text-xs text-stone-400 mt-0.5">{project.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`hidden sm:inline-block px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {project.status}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 border-t border-stone-100">
                          <div className="pt-4 sm:pt-5 space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <p className="text-stone-600 leading-relaxed text-sm sm:text-base flex-grow">{project.description}</p>
                              <div className="hidden lg:block text-right flex-shrink-0">
                                <p className="text-sm font-semibold text-[#800000]">{project.impact}</p>
                                <p className="text-xs text-stone-400">Key Impact</p>
                              </div>
                            </div>
                            <div className="lg:hidden">
                              <p className="text-xs text-stone-400 mb-1">Key Impact</p>
                              <p className="text-sm font-semibold text-[#800000]">{project.impact}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Technologies Used</p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <span key={i} className="px-2 sm:px-3 py-1 bg-[#800000] text-white rounded-full text-xs sm:text-sm font-medium">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-stone-200" />

            {/* Skills — tag-based */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Skills & Technologies</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {skillCategories.map((category) => {
                  const categorySkills = skills.filter(s => s.category === category);
                  if (!categorySkills.length) return null;
                  return (
                    <div key={category} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                      <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#800000] text-white rounded-full text-xs sm:text-sm font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* IMPACT */}
        {activeTab === 'achievements' && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Impact</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#800000] rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">{achievement.title}</h3>
                    <p className="text-stone-600 mb-2 text-sm sm:text-base">{achievement.description}</p>
                    <div className="flex items-center text-xs sm:text-sm text-stone-500">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-[#800000] rounded-xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Key Performance Metrics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">25,000+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Employees Supported</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">64%</div>
                  <div className="text-white/80 text-xs sm:text-sm">User Adoption Growth</div>
                </div>
                <div className="text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">3</div>
                  <div className="text-white/80 text-xs sm:text-sm">Major Initiatives Delivered</div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">1:45</div>
                  <div className="text-white/80 text-xs sm:text-sm">Acceptance Ratio</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DOCUMENTATION */}
        {activeTab === 'documentation' && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-1">Documentation</h2>
              <p className="text-stone-500 text-sm sm:text-base">Moments at Telkom Indonesia</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const placeholder = e.currentTarget.nextElementSibling;
                        if (placeholder) placeholder.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden absolute inset-0 bg-red-50 justify-center items-center">
                      <Camera className="w-10 h-10 text-red-300" />
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-stone-700 text-sm sm:text-base font-medium leading-snug">{photo.caption}</p>
                    <p className="text-stone-400 text-xs mt-1">{photo.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}