import React from "react";
import "./Detail.css";
import detail1 from "../../img/detail1.png";
import detail2 from "../../img/detail2.png";
import detail3 from "../../img/detail3.png";
import detail4 from "../../img/detail4.png";
import detail5 from "../../img/detail5.png";
import detail6 from "../../img/detail6.png";
import coffee from "../../img/coffee.jpg";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-wrap-label">
        <label>What Happens Here</label>
        <h2>coffee build your base.</h2>
        <div className="seperate-detail"></div>
      </div>
      <div className="detail-body row">
        <div className="wrap-l">
          <div className="ok">
            <div className="detail-body-l ">
              <div className="detail-body-name-l">
                <p>croissant</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
            <div className="hoho">
              <img src={detail1} alt="" />
            </div>
          </div>
          <div className="ok">
            <div className="detail-body-l ">
              <div className="detail-body-name-l">
                <p>french toast</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
            <div className="hoho">
              <img src={detail2} alt="" />
            </div>
          </div>
          <div className="ok">
            <div className="detail-body-l ">
              <div className="detail-body-name-l">
                <p>pancakes</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
            <div className="hoho">
              <img src={detail3} alt="" />
            </div>
          </div>
        </div>
        <div className="wrap-c">
          <div className="detail-body-c">
            <img src={coffee} alt="" />
          </div>
        </div>
        <div className="wrap-r">
          <div className="ok">
            <div className="hoho">
              <img src={detail4} alt="" />
            </div>
            <div className="detail-body-r ">
              <div className="detail-body-name-r">
                <p>turkish coffee</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
          </div>
          <div className="ok">
            <div className="hoho">
              <img src={detail5} alt="" />
            </div>
            <div className="detail-body-r ">
              <div className="detail-body-name-r">
                <p>coffee to go</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
          </div>
          <div className="ok">
            <div className="hoho">
              <img src={detail6} alt="" />
            </div>
            <div className="detail-body-r ">
              <div className="detail-body-name-r">
                <p>mornign coffee</p>
              </div>
              <div className="hihi">
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex,
                nihil expetelis in mei. Meianpe icula euripidis,partem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
