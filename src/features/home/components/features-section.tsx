import React from "react";
import Image from "next/image";

const MechanicalServicesSection: React.FC = () => {
  // 1. We organize the raw text into structured data for clean rendering
  const coreServices = [
    {
      title: "Stainless Steel Fabrications",
      desc: "Production of high-grade food equipment and industrial fittings.",
    },
    {
      title: "Safety & Access Structures",
      desc: "Fabrication of platforms, ladders, handrails, and walkways.",
    },
    {
      title: "Welding Expertise",
      desc: "Specialized in arc, argon, and combination welding techniques.",
    },
    {
      title: "Ducting & Insulation",
      desc: "Complete execution of duct works and thermal insulation systems.",
    },
    {
      title: "Storage Solutions",
      desc: "Custom trolleys, shelving, and space management fabrication.",
    },
  ];

  const projectHighlights = [
    "**Food-Grade Equipment:** Stainless steel grinding machines, frying baskets, and handles for **Sundry Foods Limited** (Lagos & PH).",
    "**Factory Hygiene:** Custom stainless-steel wash hand basins for factory sanitation.",
    "**Logistics:** Heavy-duty product trolleys for material movement.",
    "**Safety Infrastructure:** Installed CAT ladders, mobile platforms, and over **2,000 meters** of handrails to prevent accidents.",
    "**Structural Support:** H-beam supports and mild steel stairs for office expansions.",
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:max-w-3xl">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">
            Engineering Excellence
          </span>
          <h2 className="font-heading mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Mechanical Fabrication <br className="hidden md:block" />
            <span className="text-slate-400">& Installation Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: The Content (Scrollable) */}
          <div className="lg:col-span-7 space-y-16">
            {/* Part 1: Core Services Grid */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Core Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreServices.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors duration-300"
                  >
                    <h4 className="font-bold text-lg text-blue-100 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 2: Project Experience List */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Key Project Experience
              </h3>
              <div className="space-y-6">
                {projectHighlights.map((highlight, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">
                        ➜
                      </div>
                    </div>
                    {/* Render HTML to allow bolding within the string */}
                    <p
                      className="text-slate-300 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{
                        __html: highlight.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong class="text-white font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Image */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
                <Image
                  className="w-full h-auto object-cover"
                  src="/images/084.jpeg"
                  alt="Mechanical Fabrication"
                  width={600}
                  height={800}
                />

                {/* Overlay Text on Image */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-8">
                  <p className="text-white font-bold text-xl">
                    Precision Engineering
                  </p>
                  <p className="text-slate-300 text-sm mt-1">
                    Delivering robust industrial solutions since 1987.
                  </p>
                </div>
              </div>

              {/* Decorative dotted pattern behind image */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-dashed border-slate-800 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanicalServicesSection;
