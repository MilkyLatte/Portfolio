import React from "react";
import "../styles/SlideShow.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function SlideShow({ transitionType, data, index }) {
  //   const [index, setIndex] = React.useState(0);
  const backward = transitionType === "backward";

  //   const data = [
  //     <div
  //       style={{
  //         backgroundColor: "green",
  //         height: "100%",
  //         width: "100%",
  //         position: "absolute",
  //       }}
  //     />,
  //     <div
  //       style={{
  //         backgroundColor: "red",
  //         height: "100%",
  //         width: "100%",
  //         position: "absolute",
  //       }}
  //     />,
  //   ];

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       setIndex((index + 1) % data.length);
  //     }, 3000);
  //   }, [index]);

  return (
    <div className="slide-show-container">
      <TransitionGroup>
        <CSSTransition
          key={index}
          timeout={700}
          classNames={backward ? "slide-backward" : "slide-forward"}
        >
          {data}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
