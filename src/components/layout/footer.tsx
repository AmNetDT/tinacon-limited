"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterSection: React.FC = () => {
  const coreValues = [
    { letter: "T", text: "Timely delivery of contracts" },
    { letter: "I", text: "Integrity in all engagements" },
    { letter: "M", text: "Mutual respect" },
    { letter: "E", text: "Effective economic solutions" },
    { letter: "D", text: "Development of careers" },
  ];

  return (
    <>
      {/* =========================================
    CLIENTS & PARTNERSHIPS SECTION
    ========================================= */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-50 px-3 py-1 rounded-full">
              Trusted By Industry Leaders
            </span>
            <h2 className="font-heading mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Clients & Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We collaborate with leading organizations to deliver high-quality
              engineering and fabrication solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { src: "/images/Nestle-Nigeria-Plc.jpeg", alt: "Nestle Nigeria" },
              { src: "/images/geotek.png", alt: "Geotek" },
              { src: "/images/sundry.png", alt: "Sundry Foods" },
              { src: "/images/nnpc.png", alt: "NNPC" },
            ].map((client, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-center h-32 px-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-16 transition-all duration-500 transform group-hover:scale-110">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          MAIN FOOTER
          ========================================= */}
      <footer className="bg-slate-950 pt-24 pb-12 overflow-hidden text-slate-400 font-sans">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Column 1: Brand & Core Values */}
            <div className="lg:col-span-5">
              <Link className="relative z-10 inline-block h-16 w-auto" href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain" // No color filters applied
                />
              </Link>

              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Core Values (T.I.M.E.D)
                </p>
                <ul className="space-y-3">
                  {coreValues.map((val, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded bg-blue-900/50 text-blue-400 font-bold text-xs mr-3 border border-blue-800">
                        {val.letter}
                      </span>
                      <span className="text-sm text-slate-300 leading-snug pt-0.5">
                        {val.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-3 lg:pl-8">
              <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-widest">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "About Us", link: "/about" },
                  { title: "Our Services", link: "/services" },
                  { title: "Projects", link: "/projects" },
                  { title: "Team Profile", link: "/team" },
                  { title: "Safety Policy", link: "/safety" },
                  { title: "Contact", link: "/contact" },
                ].map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className="text-base text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div className="lg:col-span-4">
              <h3 className="mb-6 text-sm font-bold text-white uppercase tracking-widest">
                Connect
              </h3>
              <p className="mb-6 text-slate-400 text-sm">
                Follow our latest engineering feats and updates on social media.
              </p>

              <div className="flex gap-4">
                {[
                  {
                    name: "X",
                    link: "https://x.com/tinacon",
                  },
                  {
                    name: "Instagram",
                    icon: "/images/footers/instagram.svg",
                    link: "https://instagram.com/tinacon",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://linkedin.com/company/tinacon",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 text-white transition-all duration-300 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.name === "X" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
                      </svg>
                    ) : social.name === "LinkedIn" ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ) : (
                      <Image
                        src={social.icon || ""}
                        alt={social.name}
                        width={20}
                        height={20}
                        className="opacity-70 group-hover:opacity-100 invert"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 my-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()}{" "}
              <span className="text-slate-300 font-semibold">
                Tinacon Limited
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
