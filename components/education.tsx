import React from "react";

const educationData = [
  {
    id: 1,
    period: "Dec 2021 - Jun 2025",
    institution: "Silicon University, Odisha",
    degree: "BTech in Computer Engineering",
  },
  {
    id: 2,
    period: "Apr 2017 - May 2018",
    institution: "Guru Nanak Public School",
    degree: "Class 12th",
  },
];

const Education = () => {
  return (
    <section className="pb-12">
      <h2 className="mb-8 font-semibold text-2xl tracking-tight">Education</h2>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-10">
        {educationData.map((education) => {
          return (
            <li key={education.id} className="mb-10 ms-6">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {education.period}
              </time>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                {education.institution}
              </h3>
              <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                {education.degree}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Education;
