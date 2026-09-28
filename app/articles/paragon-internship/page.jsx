"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: "/img/paragon-1.jpg"},
  { src: "/img/paragon-2.jpg"},
  { src: "/img/paragon-3.jpg"},
  { src: "/img/paragon-4.jpg"},
  { src: "/img/paragon-5.jpg"},
];

const tags = ["Product Management", "Warehouse", "Office", "Internship"];

const ParagonArticle = () => {
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
            I Didn’t Expect My Product Journey to Start in a Warehouse.
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-stone-600">
            <span className="font-semibold text-stone-800">Khansa Putri Giffany</span>
            <span>·</span>
            <span>3 min read</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/70 shadow-xl space-y-5 text-stone-700 text-lg leading-relaxed">
          <p>
            When I first joined ParagonCorp, I honestly thought Product Management was mostly about writing documents and discussing features in meeting rooms.
          </p>
          <p>Turns out, I was wrong.</p>
          <p>
            Hi, I’m Khansa. I joined Paragon’s Technology Solutions Unit without much experience as a Product Manager. I actually started as an IT Project Manager, following my mentor closely and learning how projects moved across different teams. Not long after, I slowly transitioned into Product Management.
          </p>
          <p>
            Looking back, that transition became one of the most meaningful learning experiences I’ve ever had.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            The first few weeks felt overwhelming.
          </h2>
          <p>
            I had to understand warehouse operations from scratch, learn how inbound, fulfillment, and outbound processes worked, and connect those operational realities with the product we were building. Coming from an Informatics background, I never imagined I’d spend time learning warehouse business processes.
          </p>
          <p>But that became my favorite part.</p>
          <p>
            One of the highlights was visiting Paragon’s distribution centers and doing genba, observing the real operations behind the system. Seeing warehouse operators use the product completely changed how I looked at Product Management.
          </p>
          <p>
            Suddenly, every button, every workflow, and every feature request wasn’t just a ticket anymore.
          </p>
          <p className="border-l-4 border-[#800000] pl-4 italic text-stone-800 font-semibold">
            It affected someone’s daily work.
          </p>
          <p>
            That experience taught me something I couldn’t have learned behind a laptop: good products aren’t built only from technical knowledge. They’re built by understanding the people who use them every day.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            As I became more comfortable, my responsibilities grew naturally.
          </h2>
          <p>
            I started leading daily stand-ups, collecting and confirming updates from engineers, preparing and prioritizing backlogs, coordinating with business and QA teams, and creating guidebooks to help warehouse users adopt new features more smoothly.
          </p>
          <p>At first, I was nervous.</p>
          <p>
            There were days when I made mistakes. There were moments when I wasn’t sure whether I was asking the right questions or making the right decisions. But every challenge became another lesson.
          </p>
          <p>And somehow, that became the best part of the journey.</p>
          <p>
            Every day brought a new case to solve. One day I’d be discussing warehouse workflows with business users, and the next I’d be reviewing technical updates with engineers. It constantly pushed me to think from different perspectives, balancing business needs, operational realities, and technical constraints.
          </p>

          <h2 className="text-2xl font-bold text-stone-800 pt-4">
            More than anything, Paragon taught me what leadership actually looks like.
          </h2>
          <p>It wasn’t about having all the answers.</p>
          <p>
            It was about listening, asking better questions, keeping everyone aligned, and helping the team move forward together.
          </p>
          <p>
            When I think about those months now, I don’t remember only the PRDs, backlogs, or stand-ups.
          </p>
          <p>I remember the warehouse visits.</p>
          <p>I remember learning from my mentor.</p>
          <p>
            I remember realizing that Product Management isn’t just about building features, it’s about building understanding between people.
          </p>
          <p>
            I’m grateful that my first real Product Management experience happened in an environment that gave me room to learn, make mistakes, and grow.
          </p>
          <p className="border-l-4 border-[#800000] pl-4 italic text-stone-800 font-semibold">
            Sometimes the best classroom isn’t a meeting room.
            <br />
            Sometimes it’s a warehouse.
          </p>
          <p>
            Thank you, Paragon, for giving me the space to learn, make mistakes, and grow into someone more confident than the person who first walked through those doors. I’ll always be thankful to have been part of you.
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

export default ParagonArticle;