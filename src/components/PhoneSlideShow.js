import React from "react";
import "../styles/PhoneSlideshow.css";
import NextIcon from "./icons.js/NextIcon";
import PreviousIcon from "./icons.js/PreviousIcon";
import SlideShow from "./SlideShow";

function SlideButton({ onClick, icon }) {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <div className="slide-button" onClick={handleOnClick}>
      {icon}
    </div>
  );
}

export default function PhoneSlideShow({ images }) {
  const [transitionMode, setTransitionMode] = React.useState("forward");
  const [index, setIndex] = React.useState(0);

  const data = images.map((val, idx) => {
    return (
      <img
        key={idx}
        src={val}
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
        }}
      />
    );
  });

  React.useEffect(() => {
    setIndex(0);
  }, [images]);

  return (
    <div className="main-container">
      <SlideButton
        icon={<PreviousIcon />}
        onClick={() => {
          setTransitionMode("backward");
          setTimeout(
            () => setIndex((index - 1 + data.length) % data.length),
            100
          );
        }}
      />
      <div className="main-phone-frame">
        <SlideShow
          transitionType={transitionMode}
          data={data[index]}
          index={index}
        />
      </div>
      <SlideButton
        icon={<NextIcon />}
        onClick={() => {
          setTransitionMode("forward");
          setTimeout(() => setIndex((index + 1) % data.length), 200);
        }}
      />
    </div>
  );
}
