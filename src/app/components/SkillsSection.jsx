import React from "react";
import htmlIcon from "/public/icons/html-icon.png"; // Replace with the actual path
import cssIcon from "/public/icons/css-icon.png";
import jsIcon from "/public/icons/js-icon.png";
import reactIcon from "/public/icons/react-icon.png";
import nodeIcon from "/public/icons/node-icon.png";

const skills = [
  { name: "HTML", image: htmlIcon },
  { name: "CSS", image: cssIcon },
  { name: "JavaScript", image: jsIcon },
  { name: "React", image: reactIcon },
  { name: "Node.js", image: nodeIcon },
  // Add more skills as needed
];

const SkillsSection = () => {
  return (
    <section id="skills" className="my-12 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white hover:text-primary transition-all duration-300"
          >
            <img
              src={skill.image}
              alt={`${skill.name} icon`}
              className="h-12 w-12 mb-2 object-contain hover:text-primary transition-all duration-300"
            />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
