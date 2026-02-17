import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Users, Clock, Award } from "lucide-react";

const AboutUsSection: React.FC = () => {
  const stats = [
    { label: "Years of Excellence", value: "38+" },
    { label: "Boreholes Completed", value: "100+" },
    { label: "Handrails Installed", value: "2,000m" },
    { label: "Custom Solutions", value: "90%" },
  ];

  const values = [
    {
      l: "T",
      t: "Timely",
      d: "Delivery of contracts without compromise.",
    },
    {
      l: "I",
      t: "Integrity",
      d: "In all engagements and professional conduct.",
    },
    {
      l: "M",
      t: "Mutual Respect",
      d: "Building long-term client partnerships.",
    },
    {
      l: "E",
      t: "Effective",
      d: "Economic and technical industrial solutions.",
    },
    {
      l: "D",
      t: "Development",
      d: "Leading by example to grow future talent.",
    },
  ];

  return (
    <div className="bg-blue-200 font-sans overflow-hidden">
      {/* 1. HERO / EXECUTIVE SUMMARY SECTION */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
              <div className="max-w-xl">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                  Established 1987
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                  Engineering Solutions{" "}
                  <span className="text-blue-600 text-stroke">
                    You Can Trust.
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Tinacon Limited is a Nigerian-owned engineering powerhouse.
                    With over three decades of experience, we have built a
                    reputation for delivering high-quality, safe, and reliable
                    solutions across Nigeria.
                  </p>
                  <p className="border-l-4 border-blue-600 pl-6 italic">
                    &quot;From our headquarters in Abaji to our branch in Lagos,
                    we provide end-to-end project delivery—from investigation
                    and design to long-term maintenance.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Imagery */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/checked.jpeg"
                    alt="Tinacon Industrial Site"
                    width={700}
                    height={500}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-10 -right-0 md:-right-10 z-20 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden sm:block">
                  <p className="text-5xl font-bold mb-1">38+</p>
                  <p className="text-sm uppercase tracking-widest font-medium opacity-80">
                    Years in Industry
                  </p>
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full -z-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-blue-400 text-sm font-bold uppercase tracking-tighter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION CARDS */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="h-full p-10 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  To be a company dedicated to delivering honest, high-quality,
                  and reliable services worldwide.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="h-full p-10 bg-slate-700 rounded-3xl shadow-xl">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  To engage top professionals and deliver excellence while
                  protecting natural resources and bridging the gap between
                  industry and host communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE "T.I.M.E.D" VALUES SECTION */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Core Values (TIMED)
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {values.map((val, i) => (
              <div
                key={i}
                className="group p-8 text-center bg-white border border-slate-100 rounded-2xl hover:bg-blue-600 transition-all duration-300"
              >
                <span className="block text-6xl font-black text-slate-700 group-hover:text-blue-200 transition-colors mb-4">
                  {val.l}
                </span>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">
                  {val.t}
                </h4>
                <p className="text-md text-slate-900 group-hover:text-blue-100">
                  {val.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT SETS US APART (Icon List) */}
      <section className="py-24 bg-blue-600 text-white rounded-t-[50px] lg:rounded-t-[100px]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/10 rounded-full border border-white/20">
                  <Clock size={32} />
                </div>
                <h5 className="text-xl font-bold mb-2">38+ Years Proved</h5>
                <p className="text-blue-100 opacity-80">
                  Deep industry knowledge and consistent project success.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/10 rounded-full border border-white/20">
                  <Award size={32} />
                </div>
                <h5 className="text-xl font-bold mb-2">90% Customized</h5>
                <p className="text-blue-100 opacity-80">
                  Solutions tailored specifically to your operational needs.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-white/10 rounded-full border border-white/20">
                  <Users size={32} />
                </div>
                <h5 className="text-xl font-bold mb-2">
                  Multinational Trusted
                </h5>
                <p className="text-blue-100 opacity-80">
                  Chosen by leaders like Nestlé Nigeria and NNPC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
