'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, GitBranch, Award, ExternalLink, ChevronRight, Briefcase, Target, TrendingUp, Database, FileText, ClipboardCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ArthaNusaExperiencePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      name: "Customer Data Management & Cleaning System",
      description: "Developed comprehensive data cleaning processes for customer information, ensuring data accuracy and consistency across all real estate transactions and client records.",
      technologies: ["Microsoft Excel", "Data Validation", "SQL", "Database Management"],
      status: "Completed",
      impact: "95% data accuracy improvement",
      duration: "3 years"
    },
    {
      name: "Contract Management & Documentation",
      description: "Created and managed property purchase agreements, rental contracts, and legal documentation for real estate transactions, ensuring compliance with regulations.",
      technologies: ["Microsoft Word", "PDF Management", "Document Templates", "Legal Compliance"],
      status: "Completed",
      impact: "150+ contracts processed",
      duration: "3 years"
    },
    {
      name: "Data Entry & Records Organization",
      description: "Systematically organized and maintained customer databases, property listings, and transaction records with high accuracy and attention to detail.",
      technologies: ["Data Entry Systems", "File Organization", "Quality Control", "Database Updates"],
      status: "Completed",
      impact: "80% record organization",
      duration: "3 years"
    }
  ];

  const achievements = [
    {
      title: "3-Year Consistent Performance",
      description: "Successfully maintained high-quality data management and administrative support throughout entire employment period.",
      date: "2022-2025"
    },
    {
      title: "Data Accuracy Excellence",
      description: "Achieved 75% improvement in customer data accuracy through systematic cleaning and validation processes.",
      date: "2024"
    },
    {
      title: "Contract Processing Milestone",
      description: "Successfully processed over 150 property contracts and agreements with zero compliance issues.",
      date: "2025"
    }
  ];

  const skills = [
    { name: "Microsoft Excel", level: 95, category: "Data Management" },
    { name: "Data Cleaning", level: 82, category: "Data Management" },
    { name: "Data Entry", level: 88, category: "Data Management" },
    { name: "Database Management", level: 83, category: "Data Management" },
    { name: "Microsoft Word", level: 100, category: "Documentation" },
    { name: "Contract Writing", level: 85, category: "Documentation" },
    { name: "Document Organization", level: 95, category: "Documentation" },
    { name: "Quality Control", level: 93, category: "Process Management" },
    { name: "Attention to Detail", level: 98, category: "Process Management" },
    { name: "Administrative Support", level: 90, category: "Process Management" }
  ];

  const responsibilities = [
    "Performed comprehensive customer data cleaning and validation",
    "Maintained accurate customer databases and records",
    "Created property purchase agreements and rental contracts",
    "Organized and systematized company documentation",
    "Conducted quality control on all data entries",
    "Managed client information and transaction records",
    "Ensured compliance with real estate regulations",
    "Provided administrative support to sales and management teams"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-stone-600 hover:text-[#1e40af] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Back to Experience</span>
          </button>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <div className="text-white font-bold text-lg sm:text-xl">ANR</div>
            </div>
            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">
                Data Administrator
              </h1>
              <p className="text-lg sm:text-xl text-[#1e40af] font-semibold mb-2">PT Artha Nusa Realty</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  2022 - 2025
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Contract
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
                    ? 'border-[#1e40af] text-[#1e40af]'
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
                As a Data Administrator at PT Artha Nusa Realty, I was responsible for maintaining the integrity and organization of customer data, managing contract documentation, and ensuring accurate record-keeping for all real estate transactions. My role was crucial in supporting the companys operations through meticulous data management and administrative excellence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Team Size</h3>
                  <p className="text-stone-600 text-sm sm:text-base">20 employees</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Experience Duration</h3>
                  <p className="text-stone-600 text-sm sm:text-base">3 years</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Data Accuracy</h3>
                  <p className="text-stone-600 text-sm sm:text-base">95% improvement</p>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e40af] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About PT Artha Nusa Realty</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                PT Artha Nusa Realty is a real estate company specializing in property development, sales, and management services. The company focuses on providing quality residential and commercial properties while maintaining excellent customer service and professional standards in all transactions.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Industry: Real Estate</span>
                <span>• Company Size: 20 employees</span>
                <span>• Location: Jakarta, Indonesia</span>
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
                    <div className="text-base sm:text-lg font-bold text-[#1e40af]">{project.impact}</div>
                    <div className="text-xs sm:text-sm text-stone-500">Impact Achieved</div>
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3 text-sm sm:text-base">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-gradient-to-r from-[#1e40af] to-blue-700 text-white rounded-full text-xs sm:text-sm font-medium"
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
            
            {['Data Management', 'Documentation', 'Process Management'].map((category) => (
              <div key={category} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-4 sm:mb-6 flex items-center">
                  {category === 'Data Management' && <Database className="w-5 h-5 mr-2 text-blue-600" />}
                  {category === 'Documentation' && <FileText className="w-5 h-5 mr-2 text-green-600" />}
                  {category === 'Process Management' && <ClipboardCheck className="w-5 h-5 mr-2 text-purple-600" />}
                  {category}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {skills.filter(skill => skill.category === category).map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-stone-700 text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-stone-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-stone-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#1e40af] to-blue-700 h-2 rounded-full transition-all duration-1000"
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1e40af] to-blue-700 rounded-full flex items-center justify-center">
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
            <div className="bg-gradient-to-r from-[#1e40af] to-blue-700 rounded-xl p-4 sm:p-6 lg:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Key Performance Metrics</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Contracts Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/80 text-xs sm:text-sm">Data Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">3</div>
                  <div className="text-white/80 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                  <div className="text-white/80 text-xs sm:text-sm">Record Organization</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};