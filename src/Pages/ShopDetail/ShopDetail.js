import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import user from "../../img/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import relateddata from "../../Data/TopProduct";
import "./ShopDetail.scss";
// import "../../Pages/DetailPage/DetailProduct/CoffeeCroissant.css";
import { Button, ButtonLabel } from "../../Components/Button.style";
import { addToCart } from "../../redux/Shopping/shopping-action";
import ShopDetailSwiper from "./ShopDetailSwiper";
const ShopDetail = ({ products, addToCart }) => {
  const [quan, setQuan] = useState(1);
  const { productId } = useParams();
  var item = products.find((item) => {
    return item.id === productId;
  });
  const navigate = useNavigate();
  const slideLength = item.imageslide.length;
  const handleAddCart = () => {
    if (quan > 0) {
      addToCart(productId, quan);
    } else {
      alert("Please input at least 1 quantity");
    }
  };
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
            <div className="wrap-col">
              <div className="col-xl-5 col-lg-6">
                <div className="shopdetail-l-img">
                  {slideLength !== 0 ? (
                    <div className="slider-wrapper-detail">
                      <ShopDetailSwiper images={item.imageslide} />
                    </div>
                  ) : (
                    <img src={item.image} alt="" />
                  )}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="shopdetail-r-wrapper">
                  <div className="shopdetail-r-name">{item.name}</div>
                  <div className="shopdetail-r-price">${item.price}</div>
                  <div className="shopdetail-r-desc">{item.desc}</div>
                  <div className="shop-detail-r-quan">
                    <div
                      className="shop-detail-r-dec"
                      onClick={() => {
                        if (quan > 1) {
                          setQuan(parseInt(quan) - 1);
                        }
                      }}
                    >
                      -
                    </div>
                    <input
                      className="shop-detail-r-input"
                      type="number"
                      value={quan}
                      onChange={(e) => setQuan(e.target.value)}
                    />

                    <div
                      className="shop-detail-r-in"
                      onClick={() => {
                        setQuan(parseInt(quan) + 1);
                      }}
                    >
                      +
                    </div>
                    <Button onClick={handleAddCart}>
                      <ButtonLabel>ADD TO CART</ButtonLabel>
                    </Button>
                  </div>
                </div>
                <div className="shop-detail-r-category">
                  <p>CATEGORY: </p>
                  {item.category}
                </div>
                <div className="shop-detail-r-social">
                  <p>SHARE: </p>
                  <div className="shop-detail-r-social-list">
                    <FontAwesomeIcon className="r-social" icon={faYoutube} />{" "}
                    <FontAwesomeIcon className="r-social" icon={faFacebook} />{" "}
                    <FontAwesomeIcon className="r-social" icon={faTwitter} />{" "}
                    <FontAwesomeIcon className="r-social" icon={faInstagram} />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shopdetail-reviews">
          <label>REVIEWS (1)</label>
          <div className="product1-author">
            <div className="author-l">
              <img src={user} alt="" />
            </div>
            <div className="author-r">
              <div className="author-name">JANE DOE</div>
              <div className="autour-cmt">
                <p>
                  Lorem ipsum dolor sit amet, te ridens gloriatur temporibus
                  qui, per enim veritus probatus ad. Quo eu etiam exerci dolore,
                  usu ne omnes referrentur. Ex eam diceret denique, ut legimus
                  similique vix detraxit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="shopdetail-related">
          <div className="row">
            {relateddata.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-3 col-sm-6 ">
                <div
                  className="wrap-related-item"
                  onClick={() => navigate("/shop/shop-detail/" + item.id)}
                >
                  <img src={item.imageUrl} alt="" />
                  <label htmlFor="">{item.name}</label>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, qty) => dispatch(addToCart(id, qty)),
  };
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopDetail);
