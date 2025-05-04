import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

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
    <section className="pb-12 border-b border-slate-300 mb-16">
      <h2 className="mb-2 font-semibold text-2xl tracking-tight">
        Personal Projects
      </h2>

      <p className="text-slate-700 text-lg">
        Below is a selection of recent projects that I&apos;ve worked on.
      </p>
      <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-10 mt-10">
        {projects.map((project) => {
          return (
            <Link href={project.href} key={project.title} className="h-full">
              <Card className="h-full flex flex-col">
                <CardContent className="relative rounded-xl mb-6 pt-6">
                  <div className="h-[240px] flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      width={450}
                      height={240}
                      quality={90}
                      src={project.image}
                      alt={`${project.title} project thumbnail`}
                      className="rounded-xl object-contain w-full max-h-[240px]"
                    />
                  </div>
                </CardContent>
                <CardHeader className="flex-grow flex flex-col">
                  <CardTitle className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project.title}</span>
                      {project.wip && (
                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20">
                          In Progress
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
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
                  </CardTitle>
                  <CardDescription className="mt-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
