"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: "/img/telkom-1.jpg", alt: "Telkom internship 1" },
  { src: "/img/telkom-2.jpg", alt: "Telkom internship 2" },
  { src: "/img/telkom-3.jpg", alt: "Telkom internship 3" },
  { src: "/img/telkom-4.jpg", alt: "Telkom internship 4" },
  { src: "/img/telkom-5.jpg", alt: "Telkom internship 5" },
];

const tags = ["Internship", "Telkom Indonesia", "Full-Stack Developer", "Career"];

const TelkomArticle = () => {
  const sliderRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const slide = (dir) => {
    const el = sliderRef.current;
    if (!el || !el.firstElementChild) return;
    const itemWidth = el.firstElementChild.clientWidth;
    el.scrollBy({ left: dir * itemWidth, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Filmstrip Slider (full width, ~1/4 screen height) */}
      <div className="relative w-full h-[25vh] min-h-[160px]">
        <div
          ref={sliderRef}
          onScroll={updateArrows}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img, i) => (
            <div key={i} className="flex-none w-1/3 md:w-1/4 h-full snap-start">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Back (floating) */}
        <Link
          href="/#articles"
          className="absolute top-3 left-3 z-10 inline-flex items-center space-x-2 bg-white/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/70 shadow-lg text-sm font-semibold text-stone-700 hover:text-[#800000] hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </Link>

        {/* Prev */}
        {canPrev && (
          <button
            onClick={() => slide(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/70 shadow-lg flex items-center justify-center hover:scale-110 transition-all"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-5 h-5 text-[#800000]" />
          </button>
        )}

        {/* Next */}
        {canNext && (
          <button
            onClick={() => slide(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/70 shadow-lg flex items-center justify-center hover:scale-110 transition-all"
            aria-label="Next images"
          >
            <ChevronRight className="w-5 h-5 text-[#800000]" />
          </button>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Title & Meta */}
        <header className="mb-8 space-y-4">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-transparent bg-gradient-to-r from-[#800000] via-rose-600 to-[#800000] bg-clip-text">
            My First Internship Taught Me More Than I Expected
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
            <span className="font-semibold text-stone-800">Khansa Putri Giffany</span>
            <span>·</span>
            <span>4 min read</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/70 shadow-xl space-y-5 text-stone-700 text-lg leading-relaxed">
          <p>
            Hi, I’m Khansa. At the beginning of 2025, I started my first internship at Telkom Indonesia as a Full-Stack Developer Intern. I was studying Informatics at the time, and although I had worked on several projects before, this was my first experience working in a real office environment.
          </p>
          <p>And honestly, I had no idea what to expect.</p>
          <p>
            I joined the team to help develop an AI chatbot for Telkom’s employees. I worked on both the frontend and backend, using React.js and Laravel, while also learning how a real software development team worked together.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            The first few weeks were definitely an adjustment.
          </h2>
          <p>
            I had to get used to working with a team, following existing codebases, understanding requirements from users, joining discussions, and making sure the things I built actually worked for people who would use them. It was very different from working on projects at university, where I could decide most things myself.
          </p>
          <p>
            At first, I was mostly focused on completing my tasks and making sure my code worked.
          </p>
          <p>But the more I understood the project, the more I started to enjoy it.</p>
          <p>
            I began to understand how the frontend, backend, database, and business requirements connected to each other. I became more comfortable exploring the existing code, figuring out why something was built a certain way, and finding my own approach when I came across a problem.
          </p>
          <p>
            There were also many moments when I thought, “Okay, I’ve never done this before.”
          </p>
          <p className="border-l-4 border-[#800000] pl-4 italic text-stone-800 font-semibold">
            So I learned.
          </p>
          <p>
            Sometimes I searched for solutions after work. Sometimes I asked my mentor. Sometimes I tried several approaches before finally getting something to work. Slowly, things that initially felt difficult became much more familiar.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            What I enjoyed most was realizing that I could do more than just follow instructions.
          </h2>
          <p>
            As I became more familiar with the product and the workflow, I started noticing small things that could be improved. I began sharing ideas during discussions, suggesting changes to make certain features more useful or easier to use, and thinking more about the experience from the user’s perspective.
          </p>
          <p>That was probably one of the biggest changes in me during the internship.</p>
          <p>
            I started seeing my work not just as “the task I need to finish,” but as something that could actually make the product better.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            Towards the end, I received an experience I’ll always remember.
          </h2>
          <p>
            I was selected as one of the Top 3 mentees out of more than 250 participants in Digistar Class 2025 Batch 1.
          </p>
          <p>
            I didn’t start the internship expecting any recognition like that. So when I found out, I was genuinely happy. More than the title itself, it made me realize how much I had learned during those months.
          </p>
          <p>
            From someone who was still figuring out how a real office worked, I had become more confident in writing production-level code, discussing technical problems, communicating with teammates, and sharing my own ideas.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            And that’s probably why this internship means so much to me.
          </h2>
          <p>
            It was my first experience working in an office. My first time working with a real team, a real product, and real users. I made mistakes, asked a lot of questions, learned new technologies, and slowly became more confident in what I could contribute.
          </p>
          <p>
            Looking back, I’m really grateful that my first experience happened in a place where I was given the opportunity to learn instead of being expected to know everything from the beginning.
          </p>
          <p>
            Thank you to my mentors, teammates, and everyone who made those months such a memorable part of my journey.
          </p>
          <p>
            It was my first internship, but it gave me lessons that I know I’ll carry into every workplace I join after this.
          </p>
          <p className="border-l-4 border-[#800000] pl-4 italic text-stone-800 font-semibold">
            And honestly, I couldn’t have asked for a better place to start.
          </p>
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-white/70 backdrop-blur-md text-[#800000] rounded-full text-sm font-semibold border border-white/60 shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back to Articles */}
        <Link
          href="/#articles"
          className="inline-flex items-center space-x-2 mt-8 bg-gradient-to-r from-[#800000] to-rose-700 hover:from-rose-700 hover:to-[#800000] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-white/30"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>
    </div>
  );
};

export default TelkomArticle;