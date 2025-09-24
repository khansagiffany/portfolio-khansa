"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Lightbulb, TrendingUp, Star, Download, ExternalLink, BarChart3, Code, Database } from 'lucide-react';

const UBEducationDetail = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Navigate back function
  const handleBackToMain = () => {
    router.back();
  };

  // Summer school transcript data (4 courses, 12 credits total)
  const transcriptData = [
    {
      semester: "Summer 2024",
      courses: [
        { code: "STAT101", name: "Introduction to Statistics", credits: 3, grade: "A-", points: 3.7 },
        { code: "STAT201", name: "Statistical Analysis with R", credits: 3, grade: "A", points: 4.0 },
        { code: "STAT202", name: "Data Visualization", credits: 3, grade: "B+", points: 3.3 },
        { code: "STAT301", name: "Applied Statistics", credits: 3, grade: "A-", points: 3.7 },
      ]
    }
  ];

  const activities = [
    {
      title: "12 Credits Conversion Program",
      description: "Successfully completed intensive summer school program with 12 credits that can be converted and transferred to home institution. Demonstrated ability to excel in accelerated learning environment.",
      icon: <BookOpen className="text-blue-500" size={24} />,
      category: "Academic",
      year: "2024"
    },
    {
      title: "R Studio Proficiency Development",
      description: "Gained comprehensive proficiency in R Studio for statistical analysis, data manipulation, visualization, and reporting. Mastered various R packages including ggplot2, dplyr, and tidyr for professional statistical tasks.",
      icon: <BarChart3 className="text-green-500" size={24} />,
      category: "Technical Skills",
      year: "2024"
    }
  ];

  const academicHighlights = [
    { label: "Final GPA", value: "3.63/4.00", color: "text-green-600" },
    { label: "Program Type", value: "Summer School", color: "text-blue-600" },
    { label: "Duration", value: "3 Months", color: "text-purple-600" },
    { label: "Total Credits", value: "12 Credits", color: "text-orange-600" }
  ];

  const skills = [
    "Statistical Analysis", "R Programming", "Data Visualization", 
    "Statistical Modeling", "Data Manipulation", "Hypothesis Testing",
    "Regression Analysis", "Descriptive Statistics", "Inferential Statistics"
  ];

  const rPackages = [
    { name: "ggplot2", description: "Data visualization and graphics", icon: <BarChart3 size={16} /> },
    { name: "dplyr", description: "Data manipulation and transformation", icon: <Database size={16} /> },
    { name: "tidyr", description: "Data tidying and reshaping", icon: <Code size={16} /> },
    { name: "readr", description: "Data import and export", icon: <BookOpen size={16} /> },
  ];

  const calculateSemesterGPA = (courses) => {
    const totalPoints = courses.reduce((sum, course) => sum + (course.points * course.credits), 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  const getGradeColor = (grade) => {
    if (grade === 'A') return 'text-green-600 bg-green-50';
    if (grade === 'A-') return 'text-green-500 bg-green-50';
    if (grade === 'B+') return 'text-blue-600 bg-blue-50';
    if (grade === 'B') return 'text-blue-500 bg-blue-50';
    return 'text-gray-600 bg-gray-50';
  };

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
              <span className="text-sm sm:text-base">Back to Education</span>
            </button>
            <div className="flex items-center gap-4">
              <a 
                href="/documents/transcript-ub.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Education Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Logo_Universitas_Brawijaya.svg/2036px-Logo_Universitas_Brawijaya.svg.png"
                alt="Universitas Brawijaya Logo"
                className="w-20 h-20 rounded-full border-4 border-green-100 p-2 bg-white"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/10B981/FFFFFF?text=UB';
                }}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Short Course in Statistics
              </h1>
              <p className="text-lg text-slate-600 mb-4">Summer School Programme</p>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  <span>Universitas Brawijaya</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Malang, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>June – Aug 2024</span>
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {academicHighlights.map((highlight, index) => (
                  <div key={index} className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className={`text-lg font-bold ${highlight.color}`}>{highlight.value}</div>
                    <div className="text-sm text-slate-600">{highlight.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-t-2xl shadow-lg mb-0">
          <div className="flex overflow-x-auto border-b border-slate-200">
            {[
              { id: 'overview', label: 'Program Overview', icon: <BookOpen size={16} /> },
              { id: 'transcript', label: 'Course Results', icon: <TrendingUp size={16} /> },
              { id: 'activities', label: 'Skills & Achievements', icon: <Award size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-2xl shadow-lg p-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Summer School Programme</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Participated in an intensive Summer School Programme in Statistics at Universitas Brawijaya, one of Indonesia's premier public universities. This accelerated program provided comprehensive exposure to statistical methods, data analysis techniques, and hands-on experience with statistical software.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The program focused on practical applications of statistical concepts using R Studio, covering everything from basic descriptive statistics to advanced statistical modeling. Achieved a GPA of 3.63/4.00 while completing 12 credits that can be converted to the home institution.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Trophy size={20} />
                    Program Highlights
                  </h3>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Intensive 3-month statistical training program</li>
                    <li>• Hands-on experience with real-world data analysis</li>
                    <li>• Collaborative learning with students from various backgrounds</li>
                    <li>• Industry-standard statistical software proficiency</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Statistical Competencies Gained</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Star className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">R Packages Mastered</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {rPackages.map((pkg, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                      <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg text-green-600">
                        {pkg.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{pkg.name}</h3>
                        <p className="text-sm text-slate-600">{pkg.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Transcript Tab */}
          {activeTab === 'transcript' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Course Results</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">3.63</div>
                  <div className="text-sm text-slate-600">Final GPA</div>
                </div>
              </div>

              {transcriptData.map((semesterData, semIndex) => (
                <div key={semIndex} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-slate-900">{semesterData.semester}</h3>
                      <div className="text-right">
                        <span className="text-sm text-slate-600">Total Credits: </span>
                        <span className="font-semibold text-green-600">12</span>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200 text-left">
                          <th className="px-4 py-2 text-sm font-medium text-slate-600">Course Code</th>
                          <th className="px-4 py-2 text-sm font-medium text-slate-600">Course Name</th>
                          <th className="px-4 py-2 text-sm font-medium text-slate-600 text-center">Credits</th>
                          <th className="px-4 py-2 text-sm font-medium text-slate-600 text-center">Grade</th>
                          <th className="px-4 py-2 text-sm font-medium text-slate-600 text-center">Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {semesterData.courses.map((course, index) => (
                          <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="px-4 py-3 text-sm font-medium text-slate-700">{course.code}</td>
                            <td className="px-4 py-3 text-sm text-slate-700">{course.name}</td>
                            <td className="px-4 py-3 text-sm text-slate-700 text-center">{course.credits}</td>
                            <td className="px-4 py-3 text-center">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getGradeColor(course.grade)}`}>
                                {course.grade}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-sm text-slate-700 text-center">{course.points.toFixed(1)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-blue-900 mb-2">Credit Conversion Information</h3>
                <p className="text-blue-800 text-sm">
                  All 12 credits from this Summer School Programme can be converted and transferred to the home institution 
                  as elective credits, contributing to the overall degree requirements.
                </p>
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills & Achievements</h2>
              
              {activities.map((activity, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-white rounded-lg border border-slate-200">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{activity.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            activity.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {activity.category}
                          </span>
                          <span className="text-sm text-slate-500">{activity.year}</span>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <BarChart3 size={20} />
                  R Studio Proficiency Portfolio
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-green-800 mb-1">Data Analysis Skills:</p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Exploratory Data Analysis (EDA)</li>
                      <li>• Statistical hypothesis testing</li>
                      <li>• Regression modeling</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-green-800 mb-1">Visualization Expertise:</p>
                    <ul className="text-green-700 space-y-1">
                      <li>• Advanced ggplot2 visualizations</li>
                      <li>• Interactive charts and dashboards</li>
                      <li>• Statistical reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UBEducationDetail;