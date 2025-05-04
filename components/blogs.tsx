"use client";
import React from "react";
import { motion } from "motion/react";

const Blogs = () => {
  return (
    <section className="pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-4 font-semibold text-2xl tracking-tight"
      >
        My Writings
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-slate-700 text-lg"
      >
        Coming Soon
      </motion.p>
    </section>
  );
};

export default Blogs;
