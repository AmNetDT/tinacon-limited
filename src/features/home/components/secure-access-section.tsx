import React from "react";
import Image from "next/image";
import featuresData from "../../../data/features.json";

interface FeaturesData {
  secureAccessFeatures: string[];
}

const SecureAccessSection: React.FC = () => {
  if (!featuresData) return null;

  const features = (featuresData as FeaturesData).secureAccessFeatures;

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
      {/* Background Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <Image
          src="/images/bg-blur.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Changed from flex to grid to prevent the "drop" */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
              Why Tinacon?
            </span>
            <h2 className="font-heading mb-8 text-4xl md:text-5xl font-bold text-white leading-tight">
              What Sets Us <span className="text-blue-500">Apart</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      <Image
                        src="/images/checked.svg"
                        alt="Check"
                        width={12}
                        height={12}
                        className="brightness-0 invert"
                      />
                    </div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with "Float" effect */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800">
                <Image
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  src="/images/checked.jpeg"
                  alt="Our Capabilities"
                  width={600}
                  height={500}
                  priority
                />
              </div>

              {/* Small floating "Trust" badge */}
              <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 p-4 bg-white rounded-lg shadow-2xl">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">
                    Certified
                  </p>
                  <p className="text-sm text-slate-900 font-extrabold">
                    Quality Assured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureAccessSection;
