import React from "react";
import Image from "next/image";
import { ShieldCheck, HardHat, TriangleAlert, FileCheck } from "lucide-react";

export default function HSECommitmentSection() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Safety Culture",
      desc: "We integrate a strong HSE culture into every project to protect client investments and ensure operational excellence.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-blue-400" />,
      title: "Strict Compliance",
      desc: "Adherence to safety and quality compliance standards in all activities, including industrial construction.",
    },
    {
      icon: <TriangleAlert className="w-6 h-6 text-orange-400" />,
      title: "Risk Mitigation",
      desc: "Implementation of critical infrastructure like CAT ladders and over 2,000m of handrails to prevent accidents.",
    },
    {
      icon: <HardHat className="w-6 h-6 text-yellow-400" />,
      title: "Personnel Protection",
      desc: " rigorous safety protocols for all skilled manpower, ensuring welders and fitters operate safely.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 overflow-hidden relative">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-wrap items-center -mx-4">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-800 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  Zero Harm Commitment
                </span>
              </div>

              <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Health, Safety & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Environment.
                </span>
              </h2>

              <p className="mb-10 text-lg text-slate-400 leading-relaxed">
                At Tinacon Limited, HSE is a central pillar of our operations.
                We maintain a
                <span className="text-white font-semibold">
                  &quot;Safety First&quot;
                </span>
                culture across all engineering, construction, and fabrication
                projects to protect our people, our clients, and the
                environment.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                {features.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1 p-2 bg-slate-800 rounded-lg border border-slate-700">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MASONRY IMAGE GRID */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="flex flex-wrap -mx-2 md:-mx-4">
              {/* Column 1 */}
              <div className="w-1/2 px-2 md:px-4">
                <div className="space-y-4 md:space-y-8">
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      src="/images/080.jpeg"
                      alt="Industrial Safety"
                      width={300}
                      height={400}
                    />
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      className="w-full h-40 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      src="/images/035.jpeg"
                      alt="Construction Site"
                      width={300}
                      height={400}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 (Offset) */}
              <div className="w-1/2 px-2 md:px-4 pt-8 md:pt-16">
                <div className="space-y-4 md:space-y-8">
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      className="w-full h-48 md:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      src="/images/034.jpeg"
                      alt="Worker Safety"
                      width={300}
                      height={400}
                    />
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image
                      className="w-full h-40 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      src="/images/089.jpeg"
                      alt="Equipment Safety"
                      width={300}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
