"use client";

import { motion } from "framer-motion";

const releases = [
  {
    title: "Whispers",
    artist: "Luna Eclipse",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop"
  },
  {
    title: "Let You Down",
    artist: "The Midnight Runners",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Star Cloud",
    artist: "Cosmic Dreams",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Riders",
    artist: "Dark Pulse",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function LatestReleases() {
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
          Latest Releases
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={release.image}
                  alt={release.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">{release.title}</h3>
                <p className="text-gray-400">{release.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}