import React from "react";
import "./Shop.scss";
import data from "../../Data/ProductData";
import topdata from "../../Data/TopProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Shop = ({ products }) => {
  // console.log(products);

  const totalResult = data.length;
  return (
    <div className="shop">
      {/* <div className="testimg">
        <img className="pb-3" src={gallery1} alt="" />
      </div> */}
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
                {products.map((item) => (
                  <div className="shop-item" key={item.id}>
                    <Link
                      className="shop-list-link"
                      to={{ pathname: "shop-detail/" + item.id, params: item }}
                    >
                      <img src={item.image} alt="" />
                      <div className="shop-item-name">{item.name}</div>
                      <div className="wrap-shop-item">
                        <div className="shop-item-sale">{item.sale}</div>
                        <div className="shop-item-price">
                          <div className="shop-item-price">
                            ${item.price}.00
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-3 ">
            <div className="shop-r">
              <label className="shop-r-label">ABOUT</label>
              <label className="shop-r-label">TOP RATED PRODUCT</label>
              <div className="shop-r-wrap">
                <div className="shop-r-item">
                  {topdata.map((item) => (
                    <div key={item.id} className="wrap-r-item">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="shop-r-item-img"
                      />
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
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Shop);
