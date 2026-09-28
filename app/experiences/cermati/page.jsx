'use client';
import React, { useState } from 'react';
import {
  ArrowLeft, Calendar, MapPin, Briefcase, BarChart3, Zap,
  Camera, Package, Target, TrendingUp, Award, ChevronRight, Users,
  GitBranch, Rocket, Tag
} from 'lucide-react';

const photos = [
  { src: "/img/cermati1.jpeg", caption: "Khansa @Cermati", date: "2026" },
  { src: "/img/cermati2.jpeg", caption: "Plaza Bank Index Office", date: "2026" },
  { src: "/img/cermati3.jpeg", caption: "Product Team", date: "2026" },
  { src: "/img/cermati4.jpeg", caption: "Sprint Planning", date: "2026" }
];

export default function CermatiExperiencePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      name: "PPOB Product Portfolio",
      description: "Managed the PPOB product line covering e-wallet top up, mobile data, mobile top up, and other digital products, from discovery and requirement gathering to release, working closely with engineering, design, and business teams.",
      technologies: ["Product Discovery", "User Stories", "Agile", "Jira"],
      status: "In Progress",
      impact: "Broader digital product catalog for users",
      duration: "Jun 2026 - Present"
    },
    {
      name: "Pricing Management",
      description: "Owned pricing for digital products: coordinating price and margin updates with business and partner teams, validating them before release, and making sure prices shown to users stay accurate and competitive.",
      technologies: ["Pricing Strategy", "Stakeholder Alignment", "Data Analysis"],
      status: "In Progress",
      impact: "Accurate and consistent pricing across products",
      duration: "Jun 2026 - Present"
    },
    {
      name: "Product Launch & Go-Live Planning",
      description: "Decided and coordinated when each product goes live, aligning readiness across engineering, QA, operations, and partners, then tracking sprint progress so releases matched business targets.",
      technologies: ["Release Planning", "Sprint Tracking", "Cross-functional Alignment"],
      status: "In Progress",
      impact: "Predictable and well-coordinated product releases",
      duration: "Jun 2026 - Present"
    }
  ];

  const achievements = [
    {
      title: "Ownership of Multiple Digital Product Lines",
      description: "Trusted to manage pricing and go-live decisions across e-wallet, mobile data, mobile top up, and other digital products in a fast-paced fintech environment.",
      date: "2026"
    },
    {
      title: "Smoother Release Coordination",
      description: "Improved alignment between product, engineering, QA, and business teams through clear user stories, sprint tracking, and structured go-live planning.",
      date: "2026"
    },
    {
      title: "Cross-functional Collaboration",
      description: "Worked with engineering, design, and business stakeholders to turn product needs into clear requirements and delivered features.",
      date: "2026"
    }
  ];

  const skills = [
    { name: "Product Discovery", category: "Product" },
    { name: "User Stories", category: "Product" },
    { name: "Pricing Strategy", category: "Product" },
    { name: "Release Planning", category: "Product" },
    { name: "Agile", category: "Process" },
    { name: "Sprint Tracking", category: "Process" },
    { name: "Requirement Gathering", category: "Process" },
    { name: "Stakeholder Management", category: "Collaboration" },
    { name: "Cross-functional Alignment", category: "Collaboration" },
    { name: "Jira", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Fintech", category: "Domain" },
    { name: "PPOB", category: "Domain" },
    { name: "Digital Products", category: "Domain" }
  ];

  const skillCategories = ['Product', 'Process', 'Collaboration', 'Tools', 'Domain'];

  const responsibilities = [
    "Managed PPOB products: e-wallet, mobile data, mobile top up, and digital products",
    "Owned pricing management and price update for digital products",
    "Decided and coordinated product go-live timelines",
    "Ran product discovery and gathered requirements from stakeholders",
    "Wrote user stories and acceptance criteria for engineering",
    "Tracked sprint progress and cleared blockers with engineering and QA",
    "Aligned product delivery with business objectives and targets",
    "Collaborated with engineering, design, and business teams"
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
                src="/img/cermatilogo.jpg"
                alt="Cermati Fintech Group Logo"
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">Product</h1>
              <p className="text-lg sm:text-xl text-[#800000] font-semibold mb-2">Cermati Fintech Group</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />Jun 2026 – Present</div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /><span className="truncate">Plaza Bank Index, Jakarta</span></div>
                <div className="flex items-center"><Briefcase className="w-4 h-4 mr-2" />PPOB Product</div>
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
            //   { id: 'achievements', label: 'Impact' },
            //   { id: 'documentation', label: 'Documentation' }
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
                At Cermati Fintech Group, I work on the PPOB product line, covering e-wallet, mobile data, mobile top up, and other digital products. I manage product pricing and decide when each product goes live, while supporting product discovery, requirement gathering, and cross-functional alignment with engineering and design teams in a fast-paced fintech ecosystem.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-red-50 rounded-lg">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Product Focus</h3>
                  <p className="text-stone-600 text-sm sm:text-base">PPOB & Digital Products</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-rose-50 rounded-lg">
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Ownership</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Pricing & Go-Live</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-pink-50 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-[#800000] mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Methodology</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Agile / Scrum</p>
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
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Cermati Fintech Group</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Cermati Fintech Group is an Indonesian fintech ecosystem that helps people compare, choose, and access financial and digital products through technology. Its products span financial marketplace services, payments, and digital products used by a wide range of customers across Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Industry: Fintech</span>
                <span>• Location: Jakarta, Indonesia</span>
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
                              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Skills Used</p>
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

            {/* Skills */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Skills & Tools</h2>
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
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Scope at a Glance</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <Package className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">4+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Product Categories</div>
                </div>
                <div className="text-center">
                  <Tag className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80 text-xs sm:text-sm">Pricing Ownership</div>
                </div>
                <div className="text-center">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">End-to-End</div>
                  <div className="text-white/80 text-xs sm:text-sm">Go-Live Planning</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold mb-2">3</div>
                  <div className="text-white/80 text-xs sm:text-sm">Teams Aligned</div>
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
              <p className="text-stone-500 text-sm sm:text-base">Moments at Cermati Fintech Group</p>
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
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                    <div
                      style={{ display: 'none' }}
                      className="absolute inset-0 bg-red-50 justify-center items-center"
                    >
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