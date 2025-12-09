'use client';
import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Package, Target, TrendingUp, Award, ChevronRight, Briefcase, FileText, BarChart3, Zap } from 'lucide-react';

export default function ParagonExperiencePage() {
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      name: "Heron - Digital Warehouse Management System",
      description: "End-to-end development of a comprehensive digital warehouse management solution supporting inventory optimization and operational visibility across factories and distribution centers.",
      technologies: ["Jira", "PRD/FSD Documentation", "Scrum", "User Research", "Data Analysis"],
      status: "In Progress",
      impact: "Improved productivity & reduced manual processing",
      duration: "Nov 2025 - Present"
    },
    {
      name: "Cross-Functional Team Coordination",
      description: "Led Scrum ceremonies and coordinated collaboration between business stakeholders, developers, and QA teams to ensure delivery alignment with operational priorities.",
      technologies: ["Scrum Ceremonies", "Sprint Planning", "Stakeholder Management"],
      status: "Ongoing",
      impact: "Enhanced team alignment and delivery predictability",
      duration: "Nov 2025 - Present"
    },
    {
      name: "Workflow Optimization Initiative",
      description: "Conducted comprehensive user research and data analysis to evaluate warehouse workflow bottlenecks, prioritizing features that improved productivity.",
      technologies: ["User Research", "Data Analysis", "Feature Prioritization"],
      status: "Ongoing",
      impact: "Data-driven feature roadmap prioritization",
      duration: "Nov 2025 - Present"
    }
  ];

  const achievements = [
    {
      title: "Product Launch & Deployment",
      description: "Managed end-to-end development of Heron WMS from conception to deployment across multiple facilities.",
      date: "Nov 2025"
    },
    {
      title: "Operational Efficiency Gains",
      description: "Delivered features that reduced manual processing and improved warehouse productivity through systematic workflow analysis.",
      date: "Nov 2025"
    },
    {
      title: "Cross-Team Collaboration Excellence",
      description: "Established strong working relationships between business, development, and QA teams ensuring smooth delivery cycles.",
      date: "Dec 2025"
    }
  ];

  const skills = [
    { name: "Product Management", level: 95, category: "Core PM Skills" },
    { name: "Scrum/Agile", level: 92, category: "Core PM Skills" },
    { name: "Stakeholder Management", level: 90, category: "Core PM Skills" },
    { name: "Jira", level: 88, category: "Tools" },
    { name: "PRD/FSD Writing", level: 90, category: "Documentation" },
    { name: "User Research", level: 87, category: "Research & Analysis" },
    { name: "Data Analysis", level: 85, category: "Research & Analysis" },
    { name: "Sprint Planning", level: 89, category: "Agile Practices" },
    { name: "Roadmap Planning", level: 86, category: "Strategy" },
    { name: "Feature Prioritization", level: 88, category: "Strategy" }
  ];

  const responsibilities = [
    "Managed end-to-end development of Heron digital warehouse management solution",
    "Led Scrum ceremonies including daily standups, sprint planning, and retrospectives",
    "Coordinated cross-functional collaboration between business, development, and QA teams",
    "Built and maintained Product Requirement Documents (PRD) and Functional Specification Documents (FSD)",
    "Defined and tracked product roadmap with clear feature priorities",
    "Managed sprint planning and delivery timeline using Jira",
    "Conducted user research to understand warehouse workflow challenges",
    "Analyzed data to identify bottlenecks and prioritize productivity improvements",
    "Ensured feature releases met quality expectations and operational needs",
    "Translated business needs into clear, testable technical requirements"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center text-stone-600 hover:text-blue-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Back</span>
          </button>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-md flex items-center justify-center">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">
                IT Product Management
              </h1>
              <p className="text-lg sm:text-xl text-blue-700 font-semibold mb-2">Paragon Technology & Innovations</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Nov 2025 – Present
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">Paragon Head Office, Jakarta</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Technology Solutions Unit
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
              { id: 'skills', label: 'Skills & Expertise' },
              { id: 'achievements', label: 'Impact & Results' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-3 sm:px-4 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-700 text-blue-700'
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
                As an IT Product Management Intern at Paragon Technology & Innovations, I manage the development of Heron, a digital warehouse management solution designed to optimize inventory operations and enhance visibility across factories and distribution centers. I bridge business needs with technical execution through agile methodologies and data-driven decision making.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Product Focus</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Heron WMS</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Methodology</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Scrum/Agile</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-sky-50 to-sky-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-sky-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Impact Area</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Operational Efficiency</p>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Paragon Technology & Innovations</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Paragon Technology & Innovations is the technology arm of Paragon Corp, one of Indonesia's leading consumer goods companies. The Technology Solutions Unit focuses on developing digital solutions that optimize operations, enhance supply chain visibility, and drive business transformation across manufacturing and distribution networks.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Parent: Paragon Corp</span>
                <span>• Industry: Consumer Goods & Technology</span>
                <span>• Focus: Digital Transformation</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Initiatives</h2>
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
                          : project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-base sm:text-lg font-bold text-blue-700">{project.impact}</div>
                    <div className="text-xs sm:text-sm text-stone-500">Key Impact</div>
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3 text-sm sm:text-base">Core Competencies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-full text-xs sm:text-sm font-medium"
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
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Skills & Expertise</h2>
            
            {['Core PM Skills', 'Agile Practices', 'Documentation', 'Research & Analysis', 'Strategy', 'Tools'].map((category) => (
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
                          className="bg-gradient-to-r from-blue-700 to-blue-900 h-2 rounded-full transition-all duration-1000"
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
            <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Impact & Results</h2>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center">
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
            
            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Product Management Excellence</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">End-to-End</div>
                  <div className="text-white/80 text-xs sm:text-sm">Product Ownership</div>
                </div>
                <div className="text-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">PRD/FSD</div>
                  <div className="text-white/80 text-xs sm:text-sm">Documentation Mastery</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">Cross-Functional</div>
                  <div className="text-white/80 text-xs sm:text-sm">Team Leadership</div>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">Data-Driven</div>
                  <div className="text-white/80 text-xs sm:text-sm">Decision Making</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}