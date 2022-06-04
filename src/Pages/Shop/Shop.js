import React from "react";
import "./Shop.css";
import data from "../../Data/ProductData";
import topdata from "../../Data/TopProduct";

const Shop = () => {
  const totalResult = data.length;
  return (
    <div className="shop">
      <div className="shop-top">
        <label className="shop-label">
          <p>SHOP</p>
        </label>
      </div>
      <div className="shop-body">
        <div className="row">
          <div className="col-xl-9">
            <div className="shop-list-wrapper">
              <div className="wrap-shop-label">
                <label>Showing all {totalResult} results</label>
                <label className="shop-sort" htmlFor="">
                  Sort by latest
                </label>
              </div>
              <div className="shop-list">
                {data.map((item) => (
                  <div className="shop-item" key={item.id}>
                    <img src={item.imageUrl} alt="" />
                    <div className="shop-item-name">{item.name}</div>
                    <div className="wrap-shop-item">
                      <div className="shop-item-sale">{item.sale}</div>
                      <div className="shop-item-price">
                        <div className="shop-item-price">${item.price}.00</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="shop-r">
              <label className="shop-r-label">ABOUT</label>
              <label className="shop-r-label">TOP RATED PRODUCT</label>
              <div className="shop-r-wrap">
                <div className="shop-r-item">
                  {topdata.map((item) => (
                    <div className="wrap-r-item">
                      <img src={item.imageUrl} className="shop-r-item-img" />
                      <div className="shop-r-item-des">
                        <label htmlFor="" className="shop-r-item-name">
                          {item.name}
                        </label>
                        <label htmlFor="" className="shop-r-item-price">
                          ${item.price}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <label className="shop-r-label">TAGS</label>
              <div className="shop-r-tags">
                <p>Coffee cup</p>
                <p>Coffee pot</p>
                <p>Coffee treats</p>
                <p>Paper bag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
