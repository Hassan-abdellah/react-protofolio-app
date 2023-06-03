import React from "react";
import "./skills.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// skills importing
import { skills } from "../../data";
const Skills = () => {
  return (
    <div className="skills wrapper" id="skills">
      <div className="skills-wrapper">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <LazyLoadImage src={skill.image} alt={skill.name} effect="blur" />
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
