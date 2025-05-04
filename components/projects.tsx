"use client";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const projects: {
  href: string;
  title: string;
  description: string;
  image: string;
  wip?: boolean;
  technologies: string[];
}[] = [
  {
    title: "Stylefusion",
    href: "https://github.com/tusharag6/stylefusion",
    description:
      "A modern e-commerce platform for men's fashion built with the MERN stack.",
    image: "/stylefusion.png",
    technologies: ["MERN Stack"],
  },
  {
    title: "CP-ABE",
    href: "https://github.com/Atenamus/cp-abe",
    description:
      "An implementation of Ciphertext-Policy Attribute-Based Encryption (CP-ABE) supporting encryption, decryption, and dynamic access policies.",
    image: "/cp-abe.png",
    technologies: ["React.js", "Spring Boot", "SQL", "Tailwind"],
  },
  {
    title: "Homestead",
    href: "https://github.com/tusharag6/homestead",
    description:
      "A cross-platform accommodation booking app similar to Airbnb, built with React Native and Express.",
    image: "/homestead.jpg",
    technologies: ["React Native", "Express", "Tailwind"],
  },
  {
    href: "https://github.com/tusharag6/dsa-battles",
    title: "CodeAscend",
    description:
      "A competitive programming platform for real-time DSA battles and coding challenges.",
    image: "/codeascend.png",
    wip: true,
    technologies: [
      "React.js",
      "Express",
      "Tailwind",
      "Web Sockets",
      "PostgreSQL",
    ],
  },
];

const Projects = () => {
  return (
    <section className="pb-4 border-slate-300 mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-2 font-semibold text-2xl tracking-tight"
      >
        Personal Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-10 mt-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link href={project.href} className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-grow flex flex-col">
                  <CardTitle className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.title}</span>
                      {project.wip && (
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20"
                        >
                          In Progress
                        </motion.span>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs p-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
