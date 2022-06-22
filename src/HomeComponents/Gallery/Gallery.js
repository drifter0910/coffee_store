import React from "react";
import "./Gallery.css";
import gallery1 from "../../img/gallery1.jpg";
import gallery2 from "../../img/gallery2.jpg";
import gallery3 from "../../img/gallery3.jpg";
import gallery4 from "../../img/gallery4.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 sm">
          <Link to={"coffee-croissant"}>
            <img src={gallery1} alt="" />
          </Link>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 sm ">
          <img src={gallery2} alt="" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 sm keke">
          <img className="pb-3" src={gallery3} alt="" />
          <img className="pt-2" src={gallery4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
