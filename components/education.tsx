"use client";
import React from "react";
import { motion } from "motion/react";

const educationData = [
  {
    id: 1,
    period: "Dec 2021 - Jun 2025",
    institution: "Silicon University, Odisha",
    degree: "BTech in Computer Engineering",
  },
  {
    id: 2,
    period: "Apr 2019 - May 2020",
    institution: "Guru Nanak Public School, Sambalpur",
    degree: "Class 12th",
  },
];

const Education = () => {
  return (
    <section className="pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 font-semibold text-2xl tracking-tight"
      >
        Education
      </motion.h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-10">
        {educationData.map((education) => (
          <motion.li
            key={education.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: education.id * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ms-6"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
              className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            />
            <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {education.period}
            </time>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
              {education.institution}
            </h3>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {education.degree}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Education;
