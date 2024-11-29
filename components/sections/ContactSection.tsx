"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
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
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-400">contact@darkmoon.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-purple-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-purple-500" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-400">123 Music Avenue, LA 90001</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-white/5 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}