"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  image: string;
  text: string;
  button: string;
}

const HeroSection: React.FC = () => {
  const slides: Slide[] = [
    {
      image: "/images/090.jpeg",
      text: "38+ years of proven industry experience",
      button: "Get in touch",
    },
    {
      image: "/images/091.jpeg",
      text: "Strong HSE and quality complaiance culture",
      button: "Get in touch",
    },
    {
      image: "/images/083.jpeg",
      text: "High Project success and client retention rate",
      button: "Get in touch",
    },
    {
      image: "/images/081.jpeg",
      text: "90% customized solutions tailored to client needs",
      button: "Get in touch",
    },
    {
      image: "/images/086.jpeg",
      text: "Trusted by industry leaders multinational organizations",
      button: "Get in touch",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex flex-col lg:flex-row transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* LEFT SIDE: Text & Button */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center lg:justify-start bg-black px-8 md:px-16 lg:px-24">
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="font-heading mb-6 lg:mb-10 text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-white tracking-tighter leading-tight uppercase">
                {slide.text}
              </h1>
              <a
                className="inline-block px-4 py-4 tracking-tighter bg-blue-300 hover:bg-white text-black font-bold rounded-full transition duration-300"
                href="#"
              >
                {slide.button}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full">
            <Image
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
              width={400}
              height={300}
            />
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-8 lg:left-24 z-30 flex items-center gap-4">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-white/10 hover:bg-blue-300 hover:text-black text-white rounded-full transition backdrop-blur-md border border-white/20"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-white/10 hover:bg-blue-300 hover:text-black text-white rounded-full transition backdrop-blur-md border border-white/20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Numbers Indicator */}
        <span className="ml-4 text-white font-mono text-lg">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
