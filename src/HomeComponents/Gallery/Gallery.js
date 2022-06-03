import React from "react";
import "./Gallery.css";
import gallery1 from "../../img/gallery1.jpg";
import gallery2 from "../../img/gallery2.jpg";
import gallery3 from "../../img/gallery3.jpg";
import gallery4 from "../../img/gallery4.jpg";
import { Link, useNavigate } from "react-router-dom";

const Gallery = () => {
  let navigate = useNavigate();

  return (
    <div className="gallery">
      <div className="row">
        <div className="col-lg-6">
          <img
            onClick={() => navigate("coffee-croissant")}
            src={gallery1}
            alt=""
          />
        </div>
        <div className="col-lg-3">
          <img src={gallery2} alt="" />
        </div>
        <div className="col-lg-3 keke">
          <img className="pb-3" src={gallery3} alt="" />
          <img className="pt-2" src={gallery4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
