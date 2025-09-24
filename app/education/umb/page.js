"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Lightbulb, TrendingUp, Star, Download, ExternalLink } from 'lucide-react';

const EducationDetail = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Navigate back function
  const handleBackToMain = () => {
    router.back();
  };

  // Sample transcript data
  const transcriptData = [
    { semester: 1, courses: [
      { code: "INF101", name: "Introduction to Programming", credits: 3, grade: "A", points: 4.0 },
      { code: "MAT101", name: "Calculus I", credits: 3, grade: "A", points: 4.0 },
      { code: "ENG101", name: "English I", credits: 2, grade: "A-", points: 3.7 },
      { code: "PHY101", name: "Physics I", credits: 3, grade: "A", points: 4.0 },
    ]},
    { semester: 2, courses: [
      { code: "INF102", name: "Data Structures", credits: 3, grade: "A", points: 4.0 },
      { code: "MAT102", name: "Calculus II", credits: 3, grade: "A-", points: 3.7 },
      { code: "INF103", name: "Database Systems", credits: 3, grade: "A", points: 4.0 },
      { code: "STA101", name: "Statistics", credits: 3, grade: "A", points: 4.0 },
    ]},
    { semester: 3, courses: [
      { code: "INF201", name: "Web Development", credits: 3, grade: "A", points: 4.0 },
      { code: "INF202", name: "Software Engineering", credits: 3, grade: "A", points: 4.0 },
      { code: "INF203", name: "Computer Networks", credits: 3, grade: "A-", points: 3.7 },
      { code: "MAT201", name: "Discrete Mathematics", credits: 3, grade: "A", points: 4.0 },
    ]},
    { semester: 4, courses: [
      { code: "INF301", name: "Machine Learning", credits: 3, grade: "A", points: 4.0 },
      { code: "INF302", name: "Mobile Development", credits: 3, grade: "A", points: 4.0 },
      { code: "INF303", name: "Algorithms Analysis", credits: 3, grade: "A", points: 4.0 },
      { code: "MGT101", name: "Project Management", credits: 2, grade: "A-", points: 3.7 },
    ]},
    { semester: 5, courses: [
      { code: "INF401", name: "Artificial Intelligence", credits: 3, grade: "A", points: 4.0 },
      { code: "INF402", name: "Cloud Computing", credits: 3, grade: "A", points: 4.0 },
      { code: "INF403", name: "Cybersecurity", credits: 3, grade: "A-", points: 3.7 },
    ]},
    { semester: 6, courses: [
      { code: "INF501", name: "Capstone Project I", credits: 4, grade: "A", points: 4.0 },
      { code: "INF502", name: "Research Methodology", credits: 2, grade: "A", points: 4.0 },
    ]},
  ];

  const activities = [
    {
      title: "OSC 2021 Full Scholarship Awardee",
      description: "Received full scholarship covering tuition fees based on academic excellence and leadership potential. This scholarship program supports outstanding students throughout their undergraduate studies.",
      icon: <Award className="text-yellow-500" size={24} />,
      category: "Scholarship",
      year: "2021"
    },
    {
      title: "Outstanding Student at MBKM Awards 2025",
      description: "Recognized as an outstanding student in the Merdeka Belajar Kampus Merdeka (MBKM) program for exceptional performance in independent learning activities and cross-institutional collaboration.",
      icon: <Trophy className="text-blue-500" size={24} />,
      category: "Achievement",
      year: "2025"
    },
    {
      title: "SMARTGRO - IoT-Based Agriculture Automation",
      description: "Developed an innovative Student Creativity Program (PKM) focusing on IoT-based agriculture automation system. The project aims to optimize crop management through smart sensors and automated irrigation systems.",
      icon: <Lightbulb className="text-green-500" size={24} />,
      category: "Research",
      year: "2024"
    }
  ];

  const academicHighlights = [
    { label: "Current GPA", value: "3.90/4.00", color: "text-green-600" },
    { label: "Major", value: "Informatics Engineering", color: "text-blue-600" },
    { label: "Expected Graduation", value: "2026", color: "text-purple-600" },
    { label: "Total Credits", value: "144+ Credits", color: "text-orange-600" }
  ];

  const skills = [
    "Programming Languages", "Software Engineering", "Web Development", 
    "Mobile Development", "Machine Learning", "Database Management",
    "Cloud Computing", "Cybersecurity", "Project Management"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                href="/documents/transcript-umb.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download Transcript</span>
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
                src="https://e7.pngegg.com/pngimages/358/597/png-clipart-mercu-buana-university-of-yogyakarta-master-s-degree-bachelor-s-degree-computer-engineering-miscellaneous-class-thumbnail.png"
                alt="Universitas Mercu Buana Logo"
                className="w-20 h-20 rounded-full border-4 border-blue-100"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=UMB';
                }}
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                Bachelor of Informatics Engineering
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  <span>Universitas Mercu Buana</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>West Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>Aug 2022 – Present (expected 2026)</span>
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
              { id: 'overview', label: 'Overview', icon: <BookOpen size={16} /> },
              { id: 'transcript', label: 'Academic Transcript', icon: <TrendingUp size={16} /> },
              { id: 'activities', label: 'Activities & Awards', icon: <Award size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Program Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Currently pursuing a Bachelor's degree in Informatics Engineering at Universitas Mercu Buana, one of the leading private universities in Indonesia. The program focuses on comprehensive software engineering, data science, and emerging technologies in computer science.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Maintaining an exceptional GPA of 3.90/4.00 while actively participating in various academic and research activities. Expected to graduate in 2026 with strong foundations in both theoretical computer science and practical software development.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Competencies</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Star className="text-blue-500 flex-shrink-0" size={16} />
                      <span className="text-slate-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Academic Journey</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-slate-900">Foundation Years (2022-2023)</h3>
                    <p className="text-slate-700">Built strong foundations in programming, mathematics, and computer science fundamentals.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-slate-900">Intermediate Studies (2024-2025)</h3>
                    <p className="text-slate-700">Advanced coursework in software engineering, web development, and data structures.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-slate-900">Specialization (2025-2026)</h3>
                    <p className="text-slate-700">Focus on AI, machine learning, and capstone project development.</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Transcript Tab */}
          {activeTab === 'transcript' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-900">Academic Transcript</h2>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">3.90</div>
                  <div className="text-sm text-slate-600">Cumulative GPA</div>
                </div>
              </div>

              {transcriptData.map((semesterData) => (
                <div key={semesterData.semester} className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="bg-slate-50 px-4 py-3 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-slate-900">Semester {semesterData.semester}</h3>
                      <div className="text-right">
                        <span className="text-sm text-slate-600">GPA: </span>
                        <span className="font-semibold text-blue-600">
                          {calculateSemesterGPA(semesterData.courses)}
                        </span>
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
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Activities & Awards</h2>
              
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
                            activity.category === 'Scholarship' ? 'bg-yellow-100 text-yellow-800' :
                            activity.category === 'Achievement' ? 'bg-blue-100 text-blue-800' :
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Users size={20} />
                  Leadership & Community Involvement
                </h3>
                <p className="text-blue-800 text-sm">
                  Actively engaged in campus activities, research programs, and scholarship initiatives that demonstrate leadership potential and commitment to academic excellence and community service.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EducationDetail;