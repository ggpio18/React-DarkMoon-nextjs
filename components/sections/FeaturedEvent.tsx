"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function FeaturedEvent() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative group">
            <motion.img
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
              alt="The Mammoth"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl font-bold">The Mammoth</h3>
            <div className="flex items-center space-x-4">
              <div className="h-1 w-20 bg-purple-500" />
              <p className="text-gray-400">Featured Event</p>
            </div>
            <p className="text-gray-300">
              Experience the thunderous sound of The Mammoth, featuring their latest album release and an immersive visual experience that will transport you to another dimension.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
              Get Tickets
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}