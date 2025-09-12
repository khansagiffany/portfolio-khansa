"use client";

import React, { useState } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Linkedin, Github, ExternalLink, Calendar, Award, GraduationCap, Briefcase, Download } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample data - nanti bisa dipindah ke src/data/
  const profile = {
    name: "Khansa Putri Giffany",
    title: "Frontend Developer",
    description: "Passionate about creating beautiful and functional web experiences. I love turning complex problems into simple, intuitive designs.",
    location: "Jakarta, Indonesia",
    email: "khansaagiffany@gmail.com",
    phone: "+6288972910997",
    linkedin: "https://www.linkedin.com/in/khansa-putri-giffany/",
    github: "https://github.com/khansagiffany",
    resume: "/resume.pdf"
  };

    const experiences = [
    {
      id: 1,
      company: "Telkom Indonesia",
      position: "Fullstack Developer",
      duration: "Feb - Aug 2025",
      location: "Telkom Landmark Tower, Jakarta",
      description: "Developed AI chatbots for internal use, handling both frontend and backend tasks using React, Next.js, and TypeScript. Collaborated with cross-functional teams to improve automation and internal workflows.",
      logo: "https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "AI Chatbot Development"]
    },
    {
      id: 2,
      company: "Bangkit Academy by Google, GoTo, and Traveloka",
      position: "Mobile Development Cohort",
      duration: "Sept 2024 - Jan 2025",
      location: "Jakarta, Indonesia",
      description: "Built Android apps using Kotlin, integrated with ML models and APIs. Completed over 900 hours of learning and consistently earned 5-star ratings. Achieved Android Developer Expert certification after advanced training.",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGVomgVddrtBA/company-logo_200_200/B56ZWOrFbWGUAM-/0/1741855415072/bangkit_academy_logo?e=2147483647&v=beta&t=oWNWz9O6b8rrBzaHIYm0P8JDa0hYPcNOJcPJMa_jpcY",
      skills: ["Kotlin", "Android Studio", "Machine Learning", "API Integration"]
    },
    {
      id: 3,
      company: "PT Artha Nusa Realty",
      position: "Web & Data Developer",
      duration: "2022 - 2025",
      location: "Jakarta, Indonesia",
      description: "Built custom websites for small businesses and startups. Specialized in responsive design and modern web technologies.",
      logo: "https://cdn2.vectorstock.com/i/1000x1000/67/96/apartment-building-logo-design-inspiration-vector-29706796.jpg",
      skills: ["HTML", "CSS", "JavaScript", "PHP"]
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
    { id: 2, title: "Machine Learning for Android", issuer: "Bangkit Academy by Google, GoTo, and Traveloka", year: "2025", image: "/img/public/img/Belajar Penerapan Machine Learning untuk Android-images-0.jpg" },
    { id: 3, title: "Database", issuer: "Talent Scouting Academy", year: "2024", image: "/img/public/img/Sertifikat_KHANSA PUTRI GIFFANY_Database Design & Database Programming with SQL.jpg" },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-stone-800">Portfolio</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-stone-600 hover:text-amber-700 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-stone-600 hover:text-amber-700 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('education')} className="text-stone-600 hover:text-amber-700 transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="text-stone-600 hover:text-amber-700 transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="text-stone-600 hover:text-amber-700 transition-colors">Contact</button>
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
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-stone-600 hover:text-amber-700 transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-stone-600 hover:text-amber-700 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left py-2 text-stone-600 hover:text-amber-700 transition-colors">Education</button>
              <button onClick={() => scrollToSection('certificates')} className="block w-full text-left py-2 text-stone-600 hover:text-amber-700 transition-colors">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-stone-600 hover:text-amber-700 transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                    {profile.name}
                  </span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-stone-600 font-light">
                  {profile.title}
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-stone-500">
                <MapPin className="w-5 h-5" />
                <span>{profile.location}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={profile.resume}
                  className="inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center space-x-2 border-2 border-stone-300 hover:border-amber-600 text-stone-600 hover:text-amber-600 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <a href={profile.linkedin} className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Linkedin className="w-6 h-6 text-stone-600 hover:text-blue-600" />
                </a>
                <a href={profile.github} className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <Github className="w-6 h-6 text-stone-600 hover:text-stone-800" />
                </a>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-amber-200 to-orange-200 p-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/320x320/8B7355/FFFFFF?text=Your+Photo"
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Let's get to know Khansa!</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-stone-600 leading-relaxed text-justify">
                Khansa Putri Giffany is a Fullstack Developer at Telkom Indonesia, specializing in AI chatbot development for
internal use. A fourth year Informatics Engineering student at Universitas Mercu Buana, she previously led the
EYECON eye health app project at Bangkit Academy, graduating with distinction.
              </p>
              
              <p className="text-lg text-stone-600 leading-relaxed text-justify">
               With expertise in project
management, software development, and AI integration, Khansa thrives in fast-paced corporate environments. Her
ability to adapt quickly and collaborate effectively makes her a valuable asset in dynamic teams, driving innovation
and efficiency
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">2+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-stone-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">30+</div>
                  <div className="text-stone-600">Projects Completed</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-stone-800 mb-4">Skills & Technologies</h3>
              <div className="space-y-4">
                {[
                  { 
                    category: "Frontend", 
                    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap", "Flutter"] 
                  },
                  { 
                    category: "Backend", 
                    skills: ["Node.js", "Laravel", "PHP", "MySQL", "PostgreSQL", "MongoDB"] 
                  },
                  { 
                    category: "Programming & Data", 
                    skills: ["Python", "R", "C/C++", "Java", "SQL", "Pandas", "TensorFlow", "Keras"] 
                  },
                  { 
                    category: "Tools & Platforms", 
                    skills: ["Git", "Docker", "Postman", "VS Code", "Figma", "Firebase", "pgAdmin", "Microsoft Office"] 
                  }
                ].map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-stone-700 mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
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
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-stone-800">{exp.position}</h3>
                        <p className="text-amber-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-stone-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pb-12 lg:pb-0">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-stone-100 text-stone-700 rounded text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Button di pojok kanan bawah */}
                <button 
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1"
                  onClick={() => handleViewDetails(exp.id)}
                >
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div 
                key={edu.id} 
                className="bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-grow pb-12">
                    <h3 className="text-lg font-semibold text-stone-800">{edu.degree}</h3>
                    <p className="text-amber-600 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm text-stone-600 mb-4">
                      <span>{edu.duration}</span>
                      <span className="font-medium">GPA: {edu.gpa}</span>
                    </div>
                    
                    {/* Activities Section */}
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-stone-700 mb-2">Activities & Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.activities.map((activity, index) => (
                          <li key={index} className="text-xs text-stone-600 flex items-start">
                            <span className="w-1 h-1 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Button View Details di pojok kanan bawah */}
                <button 
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1"
                  onClick={() => handleViewEducationDetails(edu.id)}
                >
                  <span>View Details</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {certificates.slice(0, 3).map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-stone-800 mb-1">{cert.title}</h3>
                  <p className="text-stone-600 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-stone-500 text-sm">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
              <Award className="w-5 h-5" />
              <span>View All Certificates</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">Let's Work Together</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a 
              href={`mailto:${profile.email}`}
              className="flex flex-col items-center p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">Email</h3>
              <p className="text-stone-600">{profile.email}</p>
            </a>

            <a 
              href={`tel:${profile.phone}`}
              className="flex flex-col items-center p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">Phone</h3>
              <p className="text-stone-600">{profile.phone}</p>
            </a>

            <a 
              href={profile.linkedin}
              className="flex flex-col items-center p-6 bg-stone-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="font-semibold text-stone-800 mb-1">LinkedIn</h3>
              <p className="text-stone-600">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 {profile.name}. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;