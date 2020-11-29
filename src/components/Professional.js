import React from "react";
import projects from "../assets/project";
import ProjectSelector from "./ProjectSelector";
import ProfessionalProject from "./ProfessionalProject";
import "../styles/Professional.css";
export default function Professional() {
  const [currentKey, setCurrentKey] = React.useState("Roqqett");
  const data = projects;
  const selectedProject = data[currentKey];

  return (
    <div id="Work" className="container">
      <h3>Work</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="project-selector-wrapper">
          <ProjectSelector
            options={Object.keys(data)}
            setOption={setCurrentKey}
            currentOption={currentKey}
          />
        </div>
        <ProfessionalProject data={selectedProject} />
      </div>
    </div>
  );
}
