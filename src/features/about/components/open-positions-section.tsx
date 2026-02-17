"use client";

import React from "react";
import {
  Hammer,
  Wrench,
  Droplets,
  Building2,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function ServicesSection() {
  // Organized data structure for clean rendering
  const services = [
    {
      title: "Civil & Structural Engineering",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description:
        "End-to-end construction solutions for industrial and commercial needs.",
      features: [
        "Industrial & warehouse construction",
        "Factory buildings, offices, schools & mosques",
        "Renovation, expansion & upgrades",
        "Concrete works, piling & foundations",
        "Roofing, flooring, tiling & epoxy finishing",
      ],
    },
    {
      title: "Mechanical Fabrication",
      icon: <Hammer className="w-8 h-8 text-orange-500" />,
      description:
        "Precision fabrication and installation with a focus on food-grade standards.",
      features: [
        "Stainless steel fabrications (Food-grade)",
        "Platforms, ladders, handrails & walkways",
        "Welding (Arc, Argon, Combination)",
        "Duct works & thermal insulation",
        "Storage & space management solutions",
      ],
    },
    {
      title: "Geosciences & Water",
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      description:
        "Sustainable water solutions and scientific ground investigations.",
      features: [
        "Geophysical & Geotechnical investigations",
        "Foundation design analysis",
        "Borehole drilling & development",
        "Industrial & community water systems",
        "Solar-powered borehole installations",
      ],
    },
    {
      title: "Facilities Management",
      icon: <Wrench className="w-8 h-8 text-slate-600" />,
      description:
        "Comprehensive maintenance to keep your operations running smoothly.",
      features: [
        "Preventive & corrective maintenance",
        "Plumbing & sanitary fittings",
        "Factory & office facility upkeep",
        "Doors, windows & roof repairs",
        "Equipment servicing & restoration",
      ],
    },
    {
      title: "Skilled Manpower Supply",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      description:
        "Deploying top-tier technical talent for short and long-term projects.",
      features: [
        "Engineers, welders & fitters",
        "Masons, plumbers & technicians",
        "Skilled & semi-skilled personnel",
        "Project-based deployment",
        "Long-term staffing solutions",
      ],
    },
    {
      title: "Community & CSV Projects",
      icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
      description: "Bridging the gap between industry and host communities.",
      features: [
        "School renovation & construction",
        "Boreholes & water fountains",
        "Sanitation facilities",
        "Community infrastructure development",
        "Corporate CSR execution",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-200 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive <span className="text-blue-600">Engineering</span>{" "}
            Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From heavy civil construction to precision mechanical fabrication,
            we deliver excellence across every phase of your project.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-slate-600"
                  >
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-6">
            Need a custom solution for your specific project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Quote Today
          </a>
        </div>
      </div>
    </section>
  );
}
