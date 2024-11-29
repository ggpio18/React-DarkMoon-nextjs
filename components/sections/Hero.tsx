"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4"
        >
          <Music className="w-16 h-16 mx-auto text-purple-500" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4"
        >
          Dark Moon
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          28 MAR 2024
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-x-4"
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
            Buy Tickets
          </button>
          <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}