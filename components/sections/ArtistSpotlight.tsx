"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function ArtistSpotlight() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Scott Gordon</h2>
          <p className="text-gray-300 mb-8">
            Award-winning artist with multiple platinum records and sold-out world tours.
            Experience the magic of his latest album live in concert.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors inline-flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Play Latest Track</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}