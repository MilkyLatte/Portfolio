import React from "react";
import PhoneSlideShow from "./PhoneSlideShow";
import "../styles/ProfessionalProject.css";
function Description({ content }) {
  return (
    <div className="description">
      <h4 className="title">{content.title}</h4>
      {content?.description}
    </div>
  );
}

export default function ProfessionalProject({ data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <PhoneSlideShow images={data.images} />
      <Description content={data} />
    </div>
  );
}
