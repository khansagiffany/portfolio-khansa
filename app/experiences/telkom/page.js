'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, GitBranch, Award, ExternalLink, ChevronRight, Briefcase, Target, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TelkomExperiencePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      name: "CIAMIC (Chat Intelligent Assistant for Media Interaction & Communication)",
      description: "Developed an enterprise-grade AI chatbot for TelkomGroup employees to access HR resources, KPIs, product info, and secure company data.",
      technologies: ["React.js", "Laravel", "MongoDB", "Docker", "CI/CD"],
      status: "Completed",
      impact: "64% increase in user adoption",
      duration: "6 months"
    },
    {
      name: "Cross-Platform Chatbot Experience",
      description: "Built responsive chatbot interfaces for both desktop and mobile platforms, ensuring seamless usability across devices.",
      technologies: ["React.js", "TailwindCSS", "API Integration", "Postman"],
      status: "Completed",
      impact: "Improved accessibility for 25,000+ employees",
      duration: "2 months"
    },
    {
      name: "Executive Demo & Rollout",
      description: "Presented CIAMIC directly to BoD, C-Level executives, and SVPs, gathering feedback and securing leadership support for scaling.",
      technologies: ["Docker", "Git", "CI/CD Pipelines"],
      status: "Completed",
      impact: "Strategic approval for company-wide adoption",
      duration: "1 month"
    }
  ];

  const achievements = [
    {
      title: "Top 1 Candidate Selected (1:45 acceptance rate)",
      description: "Earned the only Fullstack Developer position in Group Corporate Transformation Unit out of 45 applicants.",
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
      date: "July 2025"
    }
  ];

  const skills = [
    { name: "React.js", level: 92, category: "Frontend" },
    { name: "Laravel", level: 88, category: "Backend" },
    { name: "MongoDB", level: 85, category: "Database" },
    { name: "Docker", level: 83, category: "DevOps" },
    { name: "CI/CD", level: 80, category: "DevOps" },
    { name: "Postman", level: 86, category: "Tools" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "AI/Chatbot Integration", level: 100, category: "Specialized" }
  ];

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
            onClick={() => router.back()}
            className="flex items-center text-stone-600 hover:text-[#800000] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Back to Experience</span>
          </button>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <img 
              src="https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png" 
              alt="Telkom Indonesia"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md"
            />
            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">
                Fullstack Developer
              </h1>
              <p className="text-lg sm:text-xl text-[#800000] font-semibold mb-2">Telkom Indonesia</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Feb - Aug 2025
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">Telkom Landmark Tower, Jakarta</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Full-time Internship
                </div>
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
              { id: 'skills', label: 'Skills & Tech' },
              { id: 'achievements', label: 'Achievements' }
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
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            {/* Role Description */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Role Overview</h2>
              <p className="text-stone-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                As a Fullstack Developer intern at Telkom Indonesia, I developed and deployed CIAMIC, an AI-powered chatbot designed to streamline internal communication and data access. This role exposed me to enterprise-scale software development, agile workflows, and direct collaboration with executives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Team Size</h3>
                  <p className="text-stone-600 text-sm sm:text-base">5 members</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Projects Delivered</h3>
                  <p className="text-stone-600 text-sm sm:text-base">3 major initiatives</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Impact</h3>
                  <p className="text-stone-600 text-sm sm:text-base">64% adoption growth</p>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#800000] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Telkom Indonesia</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Telkom Indonesia is the largest telecommunications and digital services company in Indonesia. As a state-owned enterprise, Telkom serves millions of customers across the archipelago, providing innovative digital solutions and maintaining Indonesia's digital infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Founded: 1884</span>
                <span>• Employees: 25,000+</span>
                <span>• Industry: Telecommunications</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Major Projects</h2>
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-grow mb-4 lg:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2">{project.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-stone-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {project.duration}
                      </span>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium inline-block ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-base sm:text-lg font-bold text-[#800000]">{project.impact}</div>
                    <div className="text-xs sm:text-sm text-stone-500">Impact Achieved</div>
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3 text-sm sm:text-base">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#800000] to-rose-700 text-white rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Skills & Technologies</h2>
            
            {['Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Specialized'].map((category) => (
              <div key={category} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-4 sm:mb-6">{category}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-stone-700 text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-stone-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-stone-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#800000] to-rose-700 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Achievements & Recognition</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#800000] to-rose-700 rounded-full flex items-center justify-center">
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
            
            {/* Additional Metrics */}
            <div className="bg-gradient-to-r from-[#800000] to-rose-700 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Key Performance Metrics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">25,000+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Employees Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">64%</div>
                  <div className="text-white/80 text-xs sm:text-sm">User Adoption Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">3</div>
                  <div className="text-white/80 text-xs sm:text-sm">Major Initiatives Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">1:45</div>
                  <div className="text-white/80 text-xs sm:text-sm">Acceptance Ratio</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};