import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "../../../src/components/layout/page-layout";
import projectsData from "../../../src/data/projects.json";

interface Props {
  params: Promise<{ slug: string }>;
}

interface BlogContent {
  intro?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
  conclusion?: string;
  keyTakeaways?: string[];
  proTip?: string;
}

interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: BlogContent | string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogData {
  categories: string[];
  blogPosts: BlogPost[];
  featuredPost: BlogPost;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = projectsData as unknown as BlogData;
  // Line 45 Fix: Adding safety check for array existence
  const post = [...(data.blogPosts || []), data.featuredPost].find(
    (p) => p?.slug === slug
  );

  return {
    title: post
      ? `${post.title} - Tinacon Limited Projects`
      : "Projects Post Not Found - Tinacon Limited",
    description: post
      ? post.excerpt
      : "The requested projects post could not be found.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const data = projectsData as unknown as BlogData;
  // Line 45 Fix: Adding safety check for array existence
  const post = [...(data.blogPosts || []), data.featuredPost].find(
    (p) => p?.slug === slug
  );

  if (!post) {
    return (
      <PageLayout title="Projects Post Not Found - Global Bank">
        <section className="pt-20 lg:pt-24 pb-24">
          <div className="container px-4 mx-auto">
            <div className="text-center">
              <h1 className="font-heading text-7xl lg:text-8xl text-white tracking-tighter mb-8">
                Post Not Found
              </h1>
              <p className="text-white text-lg mb-8">
                The projects post you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400/40 hover:border-green-400 focus:ring-4 focus:ring-green-400/40 rounded-full transition duration-300"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${post.title} - Tinacon Limited`}>
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>→</span>
              <Link
                href="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <span>→</span>
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-green-400/20 text-blue-200 text-sm font-medium rounded-full mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl lg:text-6xl text-white tracking-tighter mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-white/60 mb-12">
              <div className="flex items-center gap-3">
                {post.authorAvatar && (
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span>{post.author}</span>
              </div>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="text-white/70 leading-relaxed space-y-6">
                {typeof post.content === "object" && post.content?.intro ? (
                  <div>
                    <p className="mb-6">{post.content.intro}</p>
                    {post.content.sections?.map((section, index: number) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-white font-semibold text-xl mb-3">
                          {section.title}
                        </h3>
                        <p>{section.content}</p>
                      </div>
                    ))}
                    {post.content.conclusion && (
                      <p className="mt-6 font-medium">
                        {post.content.conclusion}
                      </p>
                    )}
                  </div>
                ) : (
                  <p>
                    {typeof post.content === "string"
                      ? post.content
                      : post.excerpt}
                  </p>
                )}
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-white font-medium mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white/70 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Projects */}
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 text-white hover:text-black font-medium tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400/40 hover:border-green-400 focus:ring-4 focus:ring-green-400/40 rounded-full transition duration-300"
              >
                ← Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
