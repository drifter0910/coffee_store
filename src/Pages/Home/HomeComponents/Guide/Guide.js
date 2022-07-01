import React from "react";
import "./Guide.scss";
import guide1 from "../../../../img/guide1.jpg";
import guide2 from "../../../../img/guide2.jpg";
import guide3 from "../../../../img/guide3.jpg";
import guide4 from "../../../../img/guide4.jpg";
import guide5 from "../../../../img/guide5.jpg";

const Guide = () => {
  return (
    <div className="guide">
      <div className="guide-wapper">
        <div className="row no-gutters">
          <div className="col-lg-4 guide1">
            <img src={guide1} alt="" />
            <div className="guide-text">
              <div className="guide-label">Brewing guide</div>
              <div className="guide-des">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Meianpericula euripidis,partem.
              </div>{" "}
              <div className="read-more">
                <a href="">read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 guide-mid">
            <img src={guide5} alt="" />
          </div>
          <div className="col-lg-4 ">
            <img src={guide2} alt="" />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-4">
            <img src={guide5} alt="" />
          </div>
          <div className="col-lg-4 guide-mid">
            <img src={guide3} alt="" />
          </div>
          <div className="col-lg-4">
            <img src={guide4} alt="" />
            <div className="guide-text">
              <div className="guide-label">Brewing guide</div>
              <div className="guide-des">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetendis in mei. Meianpericula euripidis,partem.
              </div>{" "}
              <div className="read-more">
                <a href="">read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
