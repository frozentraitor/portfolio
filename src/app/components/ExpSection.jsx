import React from "react";

const experiences = [
  {
    company: "Oklahoma State University",
    role: "Application Developer",
    duration: "Aug 2023 - Present",
    description: "Built web and mobile applications using MERN stack and Next.js from scratch. Apps we're deployed campus wide with 50000 estimated users.",
  },
  {
    company: "Inncircles Arena",
    role: "Full Stack Developer",
    duration: "Jan 2021 - June 2022",
    description: "Collaborated on UI/UX design and implemented user interfaces with React and Next.js. Developed RESTful APIs with Node.js, Express, and MongoDB, focusing on modularity and high-performance server logic. Contributed to project management and data handling.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="my-12 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#181818] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
            <h4 className="text-lg text-white mb-1">{exp.company}</h4>
            <p className="text-sm text-[#ADB7BE] mb-2">{exp.duration}</p>
            <p className="text-[#9CA2A9]">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
