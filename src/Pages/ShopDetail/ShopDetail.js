import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/ProductData";

import "./ShopDetail.css";

const ShopDetail = () => {
  const [quan, setQuan] = useState(1);
  const { productId } = useParams();
  var item = data.find((item) => {
    return item.id == productId;
  });
  console.log(item);

  return (
    <div className="wrapper-shopdetail">
      <div className="shop-top">
        <label className="shop-label">
          <p>SHOP</p>
        </label>
      </div>
      <div className="shopdetail">
        <div className="wrapper-shopdetail">
          <div className="row">
            <div className="col-xl-5">
              <div className="shopdetail-l-img">
                <img src={item.image} alt="" />
              </div>
            </div>
            <div className="col-xl-7">
              <div className="shopdetail-r-wrapper">
                <div className="shopdetail-r-name">{item.name}</div>
                <div className="shopdetail-r-price">${item.price}</div>
                <div className="shopdetail-r-desc">{item.desc}</div>
                <div className="shop-detail-r-quan">
                  <div
                    className="shop-detail-r-dec"
                    onClick={() => {
                      if (quan > 1) {
                        setQuan(quan - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <input
                    className="shop-detail-r-input"
                    type="text"
                    value={quan}
                    onChange={(e) => setQuan(e.target.value)}
                  />

                  <div
                    className="shop-detail-r-in "
                    onClick={() => setQuan(quan + 1)}
                  >
                    +
                  </div>
                  <div className="shop-detail-r-addcart">ADD TO CART</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
