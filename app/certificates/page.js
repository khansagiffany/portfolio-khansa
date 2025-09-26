'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CertificatesPage() {
      const router = useRouter();
  const certificates = [
    {
      id: 1,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0001.jpg",
      title: "Internship @ Telkom"
    },
    {
      id: 2,
      image: "/img/Belajar Pengembangan Aplikasi Android Intermediate-images-0.jpg",
      title: "Intermediate Android Development"
    },
    {
      id: 3,
      image: "img/ML.jpeg",
      title: "Machine Learning for Android"
    },
    {
      id: 4,
      image: "/img/DB.jpeg",
      title: "Database Design & Programming"
    },
    {
      id: 5,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0020.jpg",
      title: "Java Programming"
    },
    {
      id: 6,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0006.jpg",
      title: "Artificial Intelligence"
    },
    {
      id: 7,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0009.jpg",
      title: "Programming With Kotlin"
    },
    {
      id: 8,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0012.jpg",
      title: "Javascript"
    },
    {
      id: 9,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0013.jpg",
      title: "UI/UX Design"
    },
    {
      id: 10,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0014.jpg",
      title: "Web Programming"
    },
    {
      id: 11,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0017.jpg",
      title: "Database Design"
    },
    {
      id: 12,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0015.jpg",
      title: "Google HackFest 2025"
    },
    {
      id: 13,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0016.jpg",
      title: "Database Programming - SQL"
    },
    {
      id: 14,
      image: "img/certificates/CERTIFICATES_Khansa Putri Giffany (1)_page-0019.jpg",
      title: "Java Foundations"
    }
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-red-900/95 backdrop-blur-sm border-b border-red-800">
      <div className="container mx-auto px-2 py-3">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-white hover:text-red-200 transition-colors duration-200 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Home Page</span>
        </button>
      </div>
    </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
        <div className="container mx-auto px-2">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certificates
          </h1>
          <p className="text-xl text-center text-red-100 max-w-2xl mx-auto">
            A collection of my professional achievements and certifications
          </p>
        </div>
      </div>

      {/* Certificate Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-red-100"
              onClick={() => setSelectedCertificate(cert)}
            >
              {/* Image Container with 3:4 aspect ratio */}
              <div className="relative overflow-hidden bg-red-50">
                <div className="aspect-[4/3] relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Title */}
              <div className="p-4">
                <h3 className="font-semibold text-red-900 text-center text-sm md:text-base group-hover:text-red-700 transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-red-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-800 transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-red-900 text-center">
                {selectedCertificate.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-red-200/30 rounded-full blur-xl animate-pulse" />
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-2xl animate-pulse" />
    </div>
  );
}