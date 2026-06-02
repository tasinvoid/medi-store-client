import React from "react";
import {
  Calendar,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// লুসিড রিঅ্যাক্ট আইকন ব্যবহার করা হয়েছে, যা আপনি ইনস্টল না করতে চাইলে নরমাল SVG-ও ব্যবহার করতে পারবেন।

interface BlogPost {
  id: number;
  image: string;
  date: string;
  commentsCount: number;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop", // Doctor/Pharmacy placeholder
    date: "December 20, 2021",
    commentsCount: 3,
    title: "The best Pharmacy WordPress theme",
    description:
      "Choose from Six Options: AED 249 for facial injections for gummy smile area AED 349 for facial injections around eyes...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=600&auto=format&fit=crop", // Green leaves placeholder
    date: "December 20, 2021",
    commentsCount: 0,
    title: "10 Steps to Writing the Perfect Prospectus",
    description:
      "Choose from Six Options: AED 249 for facial injections for gummy smile area AED 349 for facial injections around eyes...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop", // Patient/Doctor interaction placeholder
    date: "December 20, 2021",
    commentsCount: 0,
    title: "Mirum est notare quam littera gothica",
    description:
      "Choose from Six Options: AED 249 for facial injections for gummy smile area AED 349 for facial injections around eyes...",
  },
];

export default function BlogSection() {
  return (
    <section className=" py-12 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold tracking-wide text-[#222222] uppercase">
            From Our Blog
          </h2>
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button className="p-1 border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors bg-white rounded-sm">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors bg-white rounded-sm">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="overflow-hidden bg-gray-200 aspect-[4/3] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Meta Info (Date & Comments) */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#6bb82d]" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-[#6bb82d]" />
                  {post.commentsCount} Comments
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-lg font-bold text-[#222222] leading-snug mb-3 hover:text-[#6bb82d] transition-colors">
                {post.title}
              </h3>

              {/* Blog Short Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                {post.description}
              </p>

              {/* Read More Link */}
              <div>
                <a
                  href={`/blog/${post.id}`}
                  className="text-xs font-bold text-[#6bb82d] tracking-wider uppercase border-b border-transparent hover:border-[#6bb82d] transition-all"
                >
                  + Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
