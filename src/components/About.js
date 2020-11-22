import React from "react";
import "../styles/About.css";
import juan from "../assets/juan.png";
export default function About() {
  return (
    <div className="about" id="About">
      <div className="container">
        <h3>About Me</h3>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img src={juan} className="image-juan" alt="image of me" />
          </div>
          <div className="col-md-7 col-sm-12">
            <h4>
              I was born in Bogota, Colombia in 1995. As a child I discovered my
              passion for technology by breaking and putting back together my
              toys (sometimes). I also discovered my love for sports in an early
              age and is something that accompanies me in my most stressful
              days.
              <br />
              <br />
              After finishing highschool I decided to continue my studies in the
              UK. I did my BSc in Computer Science at the University of Bristol.
              Currently I am doing a Machine Learning MSc at the University of
              Bath.
              <br />
              <br />
              During my free time I enjoy reading about physics, playing
              volleyball and videogames.
              <br />
              <br />
              The one thing I love the most about what I do is how technology
              frees me to let my imagination fly and make my ideas real.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
