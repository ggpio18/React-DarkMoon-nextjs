"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const shows = [
  {
    date: "28 MAR",
    artist: "Genesis",
    venue: "Royal Arena",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "03 APR",
    artist: "Swinging Christmas",
    venue: "Jazz Club",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "15 APR",
    artist: "Mesmerizing Striptease",
    venue: "The Grand Hall",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop"
  },
  {
    date: "20 APR",
    artist: "Time Gate Opera",
    venue: "Opera House",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop"
  }
];

export default function UpcomingShows() {
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
          Upcoming Shows
        </motion.h2>

        <div className="space-y-6">
          {shows.map((show, index) => (
            <motion.div
              key={show.artist}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg p-6 flex items-center justify-between group hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-purple-500 mb-2" />
                  <span className="text-sm font-semibold">{show.date}</span>
                </div>
                <img
                  src={show.image}
                  alt={show.artist}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{show.artist}</h3>
                  <p className="text-gray-400">{show.venue}</p>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                Get Tickets
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}