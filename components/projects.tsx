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

const projects: {
  href: string;
  title: string;
  description: string;
  image: string;
  wip?: boolean;
}[] = [
  {
    title: "Stylefusion",
    href: "https://github.com/tusharag6/stylefusion",
    description:
      "A modern e-commerce platform for men's fashion built with the MERN stack.",
    image: "/stylefusion.png",
  },
  {
    title: "CP-ABE",
    href: "https://github.com/Atenamus/cp-abe",
    description:
      "An implementation of Ciphertext-Policy Attribute-Based Encryption (CP-ABE) supporting encryption, decryption, and dynamic access policies.",
    image: "/cp-abe.png",
  },
  {
    title: "Homestead",
    href: "https://github.com/tusharag6/homestead",
    description:
      "A cross-platform accommodation booking app similar to Airbnb, built with React Native and Express.",
    image: "/homestead.jpg",
  },
  {
    href: "https://github.com/tusharag6/dsa-battles",
    title: "CodeAscend",
    description:
      "A competitive programming platform for real-time DSA battles and coding challenges.",
    image: "/codeascend.png",
    wip: true,
  },
];

const Projects = () => {
  return (
    <section className="pb-12 border-b border-slate-300 mb-16">
      <h2 className="mb-8 font-semibold text-2xl tracking-tight">
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
                  <CardTitle className="flex items-center">
                    {project.title}
                    {project.wip && (
                      <span className="ml-2 bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-2">
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
