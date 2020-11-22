import React from "react";
import "../styles/Thumbnail.css";

export default function Thumbnail({ title, description, image }) {
  return (
    <div className="thumbnail">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="thumb-image" src={image} alt="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="title">{title}</h4>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
