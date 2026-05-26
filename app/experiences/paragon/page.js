'use client';
import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Briefcase, FileText, BarChart3, Zap, Camera, Package, Target, TrendingUp, Award, ChevronRight, Users } from 'lucide-react';

const photos = [
  { src: "/img/dparagon.jpeg", caption: "Khansa @ParagonCorp", date: "2026" },
  { src: "/img/dparagon1.jpeg", caption: "Site Visit to DC Tegal", date: "2026" },
  { src: "/img/dparagon2.jpeg", caption: "Heron's Engineering Team", date: "2026" },
  { src: "/img/dparagon3.jpeg", caption: "Me, Leading the Daily Standup", date: "2026" },
  { src: "/img/dparagon4.JPG", caption: "Sprint Retrospective", date: "2026" },
  { src: "/img/dparagon5.jpeg", caption: "Last day @Paragon", date: "2026" }
];

export default function ParagonExperiencePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "Heron - Digital Warehouse Management System",
      description: "End-to-end development of a comprehensive digital warehouse management solution supporting inventory optimization and operational visibility across factories and distribution centers.",
      technologies: ["Jira", "PRD/FSD Documentation", "Scrum", "User Research", "Data Analysis"],
      status: "In Progress",
      impact: "Improved productivity & reduced manual processing",
      duration: "Nov 2025 - Apr 2026"
    },
    {
      name: "Cross-Functional Team Coordination",
      description: "Led Scrum ceremonies and coordinated collaboration between business stakeholders, developers, and QA teams to ensure delivery alignment with operational priorities.",
      technologies: ["Scrum Ceremonies", "Sprint Planning", "Stakeholder Management"],
      status: "Ongoing",
      impact: "Enhanced team alignment and delivery predictability",
      duration: "Nov 2025 - Apr 2026"
    },
    {
      name: "Workflow Optimization Initiative",
      description: "Conducted comprehensive user research and data analysis to evaluate warehouse workflow bottlenecks, prioritizing features that improved productivity.",
      technologies: ["User Research", "Data Analysis", "Feature Prioritization"],
      status: "Ongoing",
      impact: "Data-driven feature roadmap prioritization",
      duration: "Nov 2025 - Apr 2026"
    }
  ];

  const achievements = [
    {
      title: "Product Launch & Deployment",
      description: "Managed end-to-end development of Heron WMS from conception to deployment across multiple facilities.",
      date: "2025 - 2026"
    },
    {
      title: "Operational Efficiency Gains",
      description: "Delivered features that reduced manual processing and improved warehouse productivity through systematic workflow analysis.",
      date: "2025 - 2026"
    },
    {
      title: "Cross-Team Collaboration Excellence",
      description: "Established strong working relationships between business, development, and QA teams ensuring smooth delivery cycles.",
      date: "2025 - 2026"
    }
  ];

  const skills = [
    { name: "Product Development", category: "Core PM Skills" },
    { name: "Product Lifecycle Management", category: "Core PM Skills" },
    { name: "Scrum/Agile", category: "Core PM Skills" },
    { name: "Requirements Gathering", category: "Core PM Skills" },
    { name: "Backlog Management", category: "Core PM Skills" },
    { name: "Jira", category: "Tools" },
    { name: "PRD", category: "Documentation" },
    { name: "Guidebook", category: "Documentation" },
    { name: "Userflow", category: "Documentation" },
    { name: "User Research", category: "Research & Analysis" },
    { name: "Data Analysis", category: "Research & Analysis" },
    { name: "Sprint Planning", category: "Agile Practices" },
    { name: "Daily Standups", category: "Agile Practices" },
    { name: "Backlog Grooming", category: "Agile Practices" },
    { name: "Sprint Review", category: "Agile Practices" },
    { name: "Sprint Retrospective", category: "Agile Practices" },
    { name: "Roadmap Planning", category: "Strategy" },
    { name: "Feature Prioritization", category: "Strategy" }
  ];

  const skillCategories = ['Core PM Skills', 'Agile Practices', 'Documentation', 'Research & Analysis', 'Strategy', 'Tools'];

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
            {/* Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md overflow-hidden bg-white flex items-center justify-center border border-stone-100">
              <img
                src="/img/paragoncorp_logo.jpeg"
                alt="Paragon Corp Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full bg-[#1e3a5f] items-center justify-center"
              >
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">Product Manager</h1>
              <p className="text-lg sm:text-xl text-[#1e3a5f] font-semibold mb-2">Paragon Technology & Innovations</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />Nov 2025 – Apr 2026</div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span className="truncate">Paragon Head Office, Jakarta</span></div>
                <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />Technology Solutions Unit</div>
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
                    ? 'border-[#1e3a5f] text-[#1e3a5f]'
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
                As a Product Manager Intern at Paragon Technology & Innovations, I manage the development of Heron, a digital warehouse management solution designed to optimize inventory operations and enhance visibility across factories and distribution centers. I bridge business needs with technical execution through agile methodologies and data-driven decision making.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-lg">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-[#1e3a5f] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Product Focus</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Heron WMS</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-indigo-50 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#1e3a5f] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Methodology</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Scrum/Agile</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-sky-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#1e3a5f] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Impact Area</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Operational Efficiency</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((r, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a5f] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Paragon Technology & Innovations</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Paragon Technology & Innovations is the technology arm of Paragon Corp, one of Indonesia&apos;s leading consumer goods companies. The Technology Solutions Unit focuses on developing digital solutions that optimize operations, enhance supply chain visibility, and drive business transformation across manufacturing and distribution networks.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Parent: Paragon Corp</span>
                <span>• Industry: Consumer Goods & Technology</span>
                <span>• Focus: Digital Transformation</span>
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
                                <p className="text-sm font-semibold text-[#1e3a5f]">{project.impact}</p>
                                <p className="text-xs text-stone-400">Key Impact</p>
                              </div>
                            </div>
                            <div className="lg:hidden">
                              <p className="text-xs text-stone-400 mb-1">Key Impact</p>
                              <p className="text-sm font-semibold text-[#1e3a5f]">{project.impact}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Core Competencies</p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <span key={i} className="px-2 sm:px-3 py-1 bg-[#1e3a5f] text-white rounded-full text-xs sm:text-sm font-medium">
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

            {/* Skills — tag-based, no bars */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Skills & Expertise</h2>
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
                            className="px-3 py-1.5 bg-[#1e3a5f] text-white rounded-full text-xs sm:text-sm font-medium"
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
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

            <div className="bg-[#1e3a5f] rounded-xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Product Management Excellence</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">End-to-End</div>
                  <div className="text-white/80 text-xs sm:text-sm">Product Ownership</div>
                </div>
                <div className="text-center">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">PRD & Guidebook</div>
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

        {/* DOCUMENTATION */}
        {activeTab === 'documentation' && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-1">Documentation</h2>
              <p className="text-stone-500 text-sm sm:text-base">Moments at Paragon Technology & Innovations</p>
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
                    <div className="hidden absolute inset-0 bg-blue-50 justify-center items-center">
                      <Camera className="w-10 h-10 text-blue-300" />
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