import React from "react";
import "../styles/ProjectSelector.css";

function Option({ title, setOption, selected }) {
  const handleClick = (e) => {
    e.preventDefault();
    setOption(title);
  };
  return (
    <div
      className={`option ${selected ? "selected-option" : ""}`}
      onClick={handleClick}
    >
      <p className="optionText">{title}</p>
    </div>
  );
}

export default function ProjectSelector({ options, setOption, currentOption }) {
  return (
    <div className="options-container">
      {options.map((option, index) => {
        return (
          <Option
            setOption={setOption}
            title={option}
            key={index}
            selected={currentOption === option}
          />
        );
      })}
    </div>
  );
}
