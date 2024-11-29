"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "World tour latest stage",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Join us on an incredible journey through music and light..."
  },
  {
    title: "Behind the scenes",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Get an exclusive look at what happens backstage..."
  },
  {
    title: "New album release date",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Mark your calendars for the most anticipated release..."
  }
];

export default function RecentPosts() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Recent Posts
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.excerpt}</p>
              <button className="text-purple-500 hover:text-purple-400 mt-4 transition-colors">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}