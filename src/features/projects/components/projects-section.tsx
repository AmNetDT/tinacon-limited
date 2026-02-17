"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import blogPosts from "../../../data/projects.json";

// --- Types ---
interface ProjectPost {
  id: number | string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
}

// --- Card Component ---
interface ProjectCardProps {
  post: ProjectPost;
  index: number;
}

const ProjectCard = ({ post, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <article className="group relative w-full mb-12 lg:mb-24 last:mb-0">
      <div
        className={`flex flex-col lg:flex-row ${
          isEven ? "" : "lg:flex-row-reverse"
        } items-stretch w-full bg-white border border-zinc-300 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-sm hover:shadow-xl`}
      >
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-3/5 relative aspect-video lg:aspect-auto lg:min-h-[450px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transform group-hover:scale-105 transition duration-700 ease-in-out"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute top-4 left-4 z-20 lg:hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full border border-zinc-200">
              <Tag size={12} /> {post.category}
            </span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white relative z-20">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-zinc-500">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-blue-600 font-bold uppercase tracking-wider text-xs">
              <Tag size={14} /> {post.category}
            </span>
            <span className="hidden lg:block w-1 h-1 bg-zinc-300 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h3 className="mb-6 text-3xl md:text-4xl font-bold text-zinc-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            <Link
              href={`/projects/${post.slug}`}
              className="focus:outline-none"
            >
              <span className="absolute inset-0 lg:hidden" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>

          <p className="mb-8 text-zinc-600 text-lg leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <Link
              href={`/projects/${post.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 font-bold border-b-2 border-blue-600 pb-1 group-hover:gap-4 transition-all duration-300"
            >
              View Case Study <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

// --- Main Section ---
// --- Main Section ---
export default function ProjectDisplaySection() {
  const posts: ProjectPost[] = blogPosts.blogPosts || [];
  const featured: ProjectPost | undefined = blogPosts.featuredPost;

  // Typing the array explicitly to prevent errors on lines 147/148
  const allProjects: ProjectPost[] = featured ? [featured, ...posts] : posts;

  return (
    <section className="py-24 bg-zinc-200 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none"></div>

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full border border-blue-200">
            Our Portfolio
          </span>
          {/* FIXED: Changed text-white to text-zinc-900 for Light Theme */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 tracking-tight mb-6">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Excellence.
            </span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Explore our track record of delivering complex engineering solutions
            across Nigeria.
          </p>
        </div>

        <div className="flex flex-col">
          {allProjects.length > 0 ? (
            allProjects.map((post, index) => (
              <ProjectCard
                key={post.id || `project-${index}`}
                post={post}
                index={index}
              />
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-zinc-400 rounded-3xl">
              <p className="text-zinc-500">Updating project list...</p>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-bold shadow-lg shadow-blue-200"
          >
            Request Full Project Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
