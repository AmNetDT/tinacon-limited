import React from "react";

const OurMissionSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-50 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column: Heading and Key Highlights */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
                Established 1987
              </span>
              <h2 className="font-heading mb-6 text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                EXECUTIVE <br /> SUMMARY
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Tinacon Limited is a Nigerian-owned engineering powerhouse,
                delivering high-quality, safe, and reliable solutions across the
                nation for over three decades.
              </p>

              {/* Trust Signal / Mini-Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-blue-900">35+</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-900">100%</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    Nigerian Owned
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                Headquartered in **Abaji, FCT** with a strategic branch in
                **Lagos**, Tinacon provides end-to-end project delivery. From
                investigation and design through to fabrication and long-term
                maintenance, we are the backbone of industrial infrastructure.
              </p>
              <p className="mb-8 text-gray-700 text-lg leading-relaxed">
                We are a trusted long-term partner to multinationals like
                <span className="text-blue-700 font-semibold">
                  {" "}
                  Nestlé Nigeria Plc
                </span>
                , maintaining critical industrial, civil, and water development
                projects nationwide.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Strong HSE Culture",
                  "Multidisciplinary",
                  "Customized Solutions",
                  "Sustainability",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
