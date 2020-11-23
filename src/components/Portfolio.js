import React from "react";
import Thumbnail from "./Thumbnail";
import raytracer from "../assets/RayTracer.png";
import space_royale from "../assets/space_royale.png";
import thesis from "../assets/thesis.png";
import punch_learning from "../assets/punch-learning.png";

export default function Portfolio() {
  return (
    <div id="Portfolio">
      <div className="container">
        <h3>Portfolio</h3>
        <div className="container">
          <Thumbnail
            url={"https://github.com/Dongnamu/coms30115"}
            image={raytracer}
            title={"Raytracer and Rasteriser"}
            description={
              <h4>
                In this project, for my Computer Graphics Unit, I created a
                Raytracer which renders a Cornell Box using Photon Maps as well
                as BRDFs, Caustics and Depth of Field. <br />
                <br />
                Additionally, a real-time Rasteriser was created using Shadow
                Maps, Clipping and Interpolation. <br /> <br /> The language of
                choice for this project was C++ due to its performance.
              </h4>
            }
          />
          <Thumbnail
            url={"https://github.com/MilkyLatte/space_royale"}
            image={space_royale}
            title={"Space Royale"}
            description={
              <h4 className="thumb-text">
                In this project I created an online space battle royale.
                <br />
                <br />
                This project includes local and Google authentication and a
                SQLite database. The frontend part of this project was done
                using React. The game is rendered using the HTML Canvas API. The
                backend of the game was done using NodeJS as well as WebGL and
                communication using Socket.io.
              </h4>
            }
          />
          <Thumbnail
            image={thesis}
            title={"Deep Learning and the Travelling Salesman Problem"}
            description={
              <h4>
                This was my final year project during my undergraduate degree. I
                used Deep Reinforcement and Supervised Learning to solve the TSP
                in mazes.
                <br />
                <br />
                At the end I achieved times 72X faster than those resulting from
                the use of a brute force approach, sacrificing up to 21%
                accuracy.
              </h4>
            }
          />
          <Thumbnail
            url={"https://dl.acm.org/doi/10.1145/3335595.3335641"}
            image={punch_learning}
            title={"Punch Learning"}
            description={
              <h4>
                During the summer of 2018 I worked as an intern at the Bristol
                Interaction Group. My project was to use multisensory data to
                classify punches in martial arts.
                <br />
                <br />
                The data was acquired using gyroscopes, accelerometres and a
                microphone. The data analysis was done using Python and
                Tensorflow and the sensors were set up using C++.
                <br />
                <br />
                The results show 94.4% accuracy in the classification of the 5
                types of punches. This project was accepted as a short paper in
                Interaccion 2019 and will be available publicly later this year.
              </h4>
            }
          />
        </div>
      </div>
    </div>
  );
}
