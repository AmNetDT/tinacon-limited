"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import teamData from "../../../data/about.json";

interface TeamMember {
  name: string;
  role: string;
  specialty?: string; // Adding the '?' makes it optional so the code won't crash
  image: string;
  profile?: string;
}

export default function TeamSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or check if teamData is present
    if (teamData) {
      setIsLoading(false);
    }
  }, []);

  // Line 27: Corrected guard rail
  if (!isLoading && (!teamData || !teamData.team || teamData.team.length === 0))
    return null;

  const team: TeamMember[] = teamData?.team || [];
  const ceo = team[0];
  const specialists = team.slice(1);

  if (isLoading) {
    return <TeamSkeleton />;
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="container px-4 mx-auto relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase">
                Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              Our Professional <span className="text-blue-600">Core</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              &quot;Development of careers through leadership and example.&quot;
              — Tinacon Personnel Philosophy.
            </p>
          </div>
        </div>

        {/* --- CEO CENTRAL PROFILE --- */}
        <div className="flex justify-center mb-24">
          <div className="w-full max-w-4xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-blue-100 flex flex-col md:flex-row items-center gap-10 group transition-all duration-500 hover:shadow-blue-200/50">
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Image
                className="rounded-full object-cover border-8 border-slate-50 shadow-inner"
                src={ceo.image}
                alt={ceo.name}
                fill
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-blue-600 text-[10px] font-black text-white uppercase tracking-widest rounded-full mb-4">
                Managing Director / CEO
              </span>
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                {ceo.name}
              </h3>
              <p className="text-blue-600 font-bold mb-4">{ceo.role}</p>
              <p className="text-blue-950 font-light mb-4">{ceo.specialty}</p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4">
                A seasoned professional with extensive experience in engineering
                and project management. He oversees the strategic direction of
                the company and ensures project delivery aligns with core
                values.
              </p>

              <p className="font-extrabold text-md mb-4 text-blue-600">
                MSc. (Applied Geography) UNILAG, Akoka. BSc. (Geology) UNILORIN,
                Ilorin.
              </p>
            </div>
          </div>
        </div>

        {/* --- SURROUNDING TEAM PROFILES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {specialists.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow group"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto sm:mx-0">
                <Image
                  className="rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={member.image}
                  alt={member.name}
                  fill
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-blue-950 text-md font-light mb-4">
                  {member.specialty}
                </p>
                <p className="font-extrabold text-md mb-4 text-blue-600">
                  {member.profile}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skeleton Loader Sub-component
function TeamSkeleton() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container px-4 mx-auto animate-pulse">
        <div className="h-4 w-32 bg-slate-200 rounded mb-4 mx-auto lg:mx-0"></div>
        <div className="h-12 w-64 bg-slate-200 rounded mb-24 mx-auto lg:mx-0"></div>

        {/* CEO Skeleton */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 flex flex-col md:flex-row gap-10 mb-24 shadow-sm">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-200 rounded-full mx-auto md:mx-0"></div>
          <div className="flex-1 space-y-4">
            <div className="h-4 w-24 bg-slate-200 rounded"></div>
            <div className="h-8 w-48 bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
            <div className="h-4 w-full bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
