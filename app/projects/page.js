'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProjectsPage = () => {
  const router = useRouter();
  
  const projects = [
    {
      id: 1,
      title: "CIAMIC - Chat Intelligent Assistant for Media Interaction & Communication",
      description: "AI-powered chatbot for TelkomGroup employees to access internal product information, HR resources, KPIs, and secure company data. Improved adoption by 64% through user research and continuous iteration. Built for both desktop and mobile with responsive design.",
      image: "/img/ciamic.png",
      technologies: ["React.js", "Laravel", "MongoDB"],
      github: "https://github.com/khansagiffany/ciamic",
      demo: "https://ciamic-trf.itdri.id/",
      year: "2025"
    },
    {
      id: 2,
      title: "Digimate - Personal Tracker for Interns",
      description: "Web-based personal tracker designed for interns, featuring task reminders, an AI chatbot for internship-related questions, and a calendar schedule for better time management. It also provides progress tracking to help interns stay motivated and organized throughout their journey.",
      image: "/img/digimate.jpg",
      technologies: ["Next.js", "Tailwind", "Gemini"],
      github: "https://github.com/khansagiffany/digimate-v2",
      demo: "https://digimate-v2.vercel.app",
      year: "2025"
    },
    {
      id: 3,
      title: "EYECON - Eye Health Mobile App",
      description: "Android application for early detection of eye diseases using machine learning. Features real-time image processing, health recommendations, and integration with a machine learning model for accurate analysis.",
      image: "/img/eyecon.jpg",
      technologies: ["Kotlin", "Android Studio", "ML"],
      github: "https://github.com/EYECON-Capstone",
      demo: "https://eyecon-demo.com",
      year: "2024"
    },
    {
      id: 4,
      title: "CrimsonDash Sales Dashboard",
      description: "Comprehensive sales analytics for 2022-2024 with advanced filtering, interactive charts, and year-over-year growth insights.",
      image: "/img/CrimsonDashmain.png",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Recharts", "Data Visualization", "Analytics"],
      github: "https://github.com/khansagiffany/CrimsonDash",
      demo: "https://crimson-dash.vercel.app/",
      year: "2025"
    }
  ];

  const handleViewProject = (projectId) => {
    switch(projectId) {
      case 1: //ciamic
        router.push('/projects/ciamic');
        break;
      case 2: //digimate
        router.push('/projects/digimate');
        break;
      case 3: //eyecon
        router.push('/projects/eyecon');
        break;
      case 4: //crimson
        router.push('/projects/crimson');
        break;
      default:
        console.log('Projects detail page not found');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-[#800000] transition-colors duration-200 group"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-[#800000]">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            mobile apps, and AI-powered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#800000]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#800000]/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#800000]/90 text-white text-sm px-3 py-1 rounded-full font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#800000] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-[#800000]/10 text-[#800000] rounded-full border border-[#800000]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewProject(project.id)}
                    className="flex-1 bg-[#800000] hover:bg-[#600000] text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 text-sm"
                  >
                    View Details
                  </button>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm border border-gray-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors duration-200 text-sm border border-green-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in working together or want to see more?
          </p>
         <a 
          href="https://www.linkedin.com/in/khansa-putri-giffany" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-[#800000] hover:bg-[#600000] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get In Touch
          </button>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;