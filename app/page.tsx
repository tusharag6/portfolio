"use client";
import Link from "next/link";
import Image from "next/image";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Blogs from "@/components/blogs";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="px-6 md:px-0">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pb-12 border-b border-slate-300 mb-16"
      >
        <div className="flex justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold text-4xl text-slate-950"
            >
              Hello, I’m Tushar.
              <span className="block mt-2 text-slate-500 font-normal text-2xl">
                A web developer from India.
              </span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/dp.jpg"
              width={80}
              height={80}
              alt="Tushar Agrawal Photo"
              className="rounded-2xl"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-slate-700 text-lg md:text-xl leading-normal mt-6"
        >
          I build web applications that are practical, easy to use, and solve
          real-world problems. I focus on creating full-stack websites that work
          well and make a difference.
        </motion.p>

        <motion.div
          className="flex mt-8 items-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.8,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1LABiokBqAsYCwjSuvyg5-W7ETozxSHQj/view?usp=sharing"
              className="bg-slate-950 hover:bg-slate-800 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
            >
              Resume ↓
            </Link>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href="https://linkedin.com/in/tusharag6"
              className="rounded-full"
            >
              <motion.svg
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Twitter (X) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href="https://x.com/tusharag6" className="rounded-full">
              <motion.svg
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </motion.svg>
            </Link>
          </motion.div>

          {/* GitHub */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href="https://github.com/tusharag6" className="rounded-full">
              <motion.svg
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2
                  c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2
                  s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3
                  a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6
                  c-.6 .6 -.6 1.2 -.5 2v3.5"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <Projects />
      <Education />
      <Blogs />
    </main>
  );
}
