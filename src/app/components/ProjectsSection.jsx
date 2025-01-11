"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Journal Application",
    description: "MERN stack application where user can enter every day logs. It was built to handle multiple files including videos, location, mp4, pdf etc. AI tool were included to give custom suggestions to users.",
    image: "/images/projects/1_1.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chat bot",
    description: "Made a MERN stack and GraphQL application where user can message or call other users in real-time. ",
    image: "/images/projects/2_2.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Complete e-commerce website with Next.js where sellers can add their products, monitor sales etc and consumers can surf among different options. End to end secured payment process was implemented using Stripe. ",
    image: "/images/projects/3_3.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Job Posting Application",
    description: "Built a application using MERN stack using Next.js facilitating job posting and hiring.",
    image: "/images/projects/4_4.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Card Counting App",
    description: "Made this static mobile app using React Native that helps users learn how to count cards for blackjack and also teaches them how to play efficiently.",
    image: "/images/projects/5_5.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "SR GAN Model",
    description: "I built a Super Resolution Image generating model in Tensorflow which will learn to generate high resolution images from low resolution images.",
    image: "/images/projects/6_6.png",
    tag: ["AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Dynamic Graphs",
    description: "This DL Model studies a graph at different timestamps to identify the evolving nodes and predits it;s future shape.",
    image: "/images/projects/7_7.png",
    tag: ["AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Text Summarization",
    description: "I have built a NLP tool using BERT and spaCy which can summarize news articles or product reviews and indicate the sentiment in them.",
    image: "/images/projects/8_8.png",
    tag: ["AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Rides App",
    description: "This MERN stack application integrated with google maps API allows users to offer and book rides to near by places.",
    image: "/images/projects/9_9.png",
    tag: ["Dev"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Dev");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Dev"
          isSelected={tag === "Dev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
