'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, GitBranch, Award, ExternalLink, ChevronRight, Briefcase, Target, TrendingUp, Star, Clock, Trophy } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BangkitExperiencePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      name: "Health Innovation Capstone Project",
      description: "Led a team to develop a comprehensive health innovation mobile application with machine learning integration, focusing on user-centric health solutions.",
      technologies: ["Kotlin", "Android Studio", "Machine Learning", "REST API", "Firebase"],
      status: "Completed",
      impact: "Delivered 4 days ahead of deadline",
      duration: "3 months",
      role: "Project Manager & Lead Developer"
    },
    {
      name: "Android Development Learning Path",
      description: "Completed intensive Android development curriculum covering fundamental to advanced concepts, with hands-on projects and real-world applications.",
      technologies: ["Kotlin", "Android SDK", "Room Database", "Retrofit", "MVVM Pattern"],
      status: "Completed",
      impact: "900+ hours of structured learning",
      duration: "5 months",
      role: "Mobile Developer"
    },
    {
      name: "Machine Learning Integration Project",
      description: "Successfully integrated ML models into Android applications, creating seamless user experiences with intelligent features and predictions.",
      technologies: ["TensorFlow Lite", "Kotlin", "API Integration", "Model Optimization"],
      status: "Completed",
      impact: "Enhanced app functionality with AI capabilities",
      duration: "2 months",
      role: "ML Integration Specialist"
    }
  ];

  const achievements = [
    {
      title: "Perfect 5-Star Rating Achievement",
      description: "Consistently achieved perfect ratings for all projects throughout the Bangkit Academy program, demonstrating excellence in mobile development.",
      date: "Sept 2024 - Jan 2025",
      icon: <Star className="w-6 h-6 text-white" />
    },
    {
      title: "Android Developer Expert Training",
      description: "Selected as a leading cohort member to receive advanced Android Developer Expert training, recognizing outstanding performance and potential.",
      date: "Dec 2024",
      icon: <Trophy className="w-6 h-6 text-white" />
    },
    {
      title: "Capstone Project Leadership",
      description: "Chosen as project manager for the capstone project based on previous project management experience and leadership capabilities.",
      date: "Nov 2024",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "900+ Hours of Learning Mastery",
      description: "Completed over 900 hours of intensive learning in Kotlin and Android development, mastering intermediate to advanced concepts.",
      date: "Jan 2025",
      icon: <Clock className="w-6 h-6 text-white" />
    }
  ];

  const skills = [
    { name: "Kotlin", level: 95, category: "Programming" },
    { name: "Android Studio", level: 92, category: "Development Tools" },
    { name: "Android SDK", level: 90, category: "Framework" },
    { name: "Machine Learning Integration", level: 85, category: "AI/ML" },
    { name: "REST API", level: 88, category: "Backend Integration" },
    { name: "Firebase", level: 87, category: "Cloud Services" },
    { name: "Room Database", level: 83, category: "Database" },
    { name: "Retrofit", level: 86, category: "Networking" },
    { name: "MVVM Pattern", level: 89, category: "Architecture" },
    { name: "TensorFlow Lite", level: 82, category: "AI/ML" },
    { name: "Project Management", level: 94, category: "Leadership" },
    { name: "Team Leadership", level: 91, category: "Leadership" }
  ];

  const responsibilities = [
    "Developed Android applications using Kotlin and Android Studio with ML integration",
    "Led capstone project team to successful completion ahead of schedule",
    "Integrated machine learning models with mobile applications seamlessly",
    "Implemented REST API integrations for dynamic data management",
    "Mastered intermediate to advanced Android development concepts",
    "Achieved consistent 5-star ratings across all project deliverables",
    "Completed 900+ hours of structured learning and hands-on practice",
    "Successfully implemented main and side quests in capstone development",
    "Managed project timeline and team coordination effectively",
    "Applied MVVM architecture patterns for scalable app development"
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
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-md overflow-hidden flex items-center justify-center bg-white">
                  <img 
                  src="https://media.licdn.com/dms/image/v2/D560BAQGVomgVddrtBA/company-logo_200_200/B56ZWOrFbWGUAM-/0/1741855415072/bangkit_academy_logo?e=2147483647&v=beta&t=oWNWz9O6b8rrBzaHIYm0P8JDa0hYPcNOJcPJMa_jpcY" 
                  alt="Bangkit Academy Logo" 
                  className="w-full h-full object-contain"
                  />
            </div>

            <div className="flex-grow w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-800 mb-2">
                Mobile Development Cohort
              </h1>
              <p className="text-lg sm:text-xl text-[#800000] font-semibold mb-2">Bangkit Academy by Google, GoTo, & Traveloka</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-stone-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Sept 2024 - Jan 2025
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="truncate">Remote Learning Program</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Mobile Development Track
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
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Program Overview</h2>
              <p className="text-stone-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                Participated in Bangkit Academy's intensive Mobile Development program, a collaboration between Google, GoTo, and Traveloka. Mastered Android development with Kotlin, machine learning integration, and led a successful capstone project while maintaining perfect ratings throughout the program.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Perfect Rating</h3>
                  <p className="text-stone-600 text-sm sm:text-base">5-star projects</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Learning Hours</h3>
                  <p className="text-stone-600 text-sm sm:text-base">900+ hours</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Leadership Role</h3>
                  <p className="text-stone-600 text-sm sm:text-base">Capstone PM</p>
                </div>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">Key Responsibilities & Achievements</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#800000] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm sm:text-base">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Info */}
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">About Bangkit Academy</h2>
              <p className="text-stone-600 leading-relaxed mb-4 text-sm sm:text-base">
                Bangkit Academy is an intensive career readiness program led by Google in collaboration with GoTo and Traveloka. The program focuses on preparing students for high-growth careers in technology through hands-on learning, mentorship, and real-world project experience in machine learning, mobile development, and cloud computing.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-stone-500 space-y-1 sm:space-y-0">
                <span>• Founded: 2021</span>
                <span>• Partners: Google, GoTo, Traveloka</span>
                <span>• Focus: Tech Career Readiness</span>
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
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-stone-500 mb-2">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {project.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {project.role}
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
                    <div className="text-xs sm:text-sm text-stone-500">Key Achievement</div>
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
            
            {['Programming', 'Development Tools', 'Framework', 'AI/ML', 'Backend Integration', 'Cloud Services', 'Database', 'Networking', 'Architecture', 'Leadership'].map((category) => (
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
                      {achievement.icon}
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
                  <div className="text-2xl sm:text-3xl font-bold mb-2">5⭐</div>
                  <div className="text-white/80 text-xs sm:text-sm">Perfect Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">900+</div>
                  <div className="text-white/80 text-xs sm:text-sm">Learning Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">4</div>
                  <div className="text-white/80 text-xs sm:text-sm">Days Ahead Schedule</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">1</div>
                  <div className="text-white/80 text-xs sm:text-sm">Leadership Position</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};