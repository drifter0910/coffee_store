import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { connect } from "react-redux";
const Checkout = ({ cart }) => {
  const [quan, setQuan] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    // let items = 0;
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);
  return (
    <div className="checkout-page">
      <div className="cart-page-top">
        <label htmlFor="" className="cart-page-toplabel">
          CHECKOUT
        </label>
        <p htmlFor="" className="cart-page-nav">
          Hanabi / Checkout
        </p>
      </div>
      <div className="checkout-page-body">
        <div className="checkout-page-infor">
          <div className="row">
            <div className="col-xl-7">
              <label className="checkout-page-label" htmlFor="">
                BILLING & SHIPPING
              </label>
              <div className="checkout-input-wrapper">
                <div className="input-two">
                  <input
                    style={{ width: "48%" }}
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    style={{ width: "48%", marginLeft: "auto" }}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="House number and street name" />
                <input type="text" placeholder="Postcode / ZIP" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="col-xl-5">
              <label htmlFor="" className="checkout-page-label">
                ADDITIONAL INFORMATION
              </label>
              <div className="checkout-input-wrapper">
                <textarea
                  className="checkout-input-note"
                  type="text"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                />
              </div>
            </div>
          </div>
          <div className="checkout-page-yourorder">
            <label className="checkout-page-label" htmlFor="">
              YOUR ORDER
            </label>

            <div className="yourorder-child">
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-4 child-title ">Product</p>
                  <p className="col-xl-4 child-title ">Quantity</p>
                  <p className="col-xl-4 child-title">Price</p>
                </div>
              </div>
              {cart.map((item) => (
                <>
                  <div className="yourorder-child-title">
                    <div className="row w-100">
                      <p className="col-xl-4 col-md-4"> {item.name} </p>
                      <p className="col-xl-4 col-md-4"> {item.qty} </p>

                      <p className="col-xl-4 col-md-4">${item.price}</p>
                    </div>
                  </div>
                </>
              ))}

              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-4 col-md-4">Shipping</p>
                  <p className="col-xl-4 col-md-4"></p>

                  <p className="col-xl-4 col-md-4">Free Shipping</p>
                </div>
              </div>
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-4 col-md-4 font-weight-bold">Total</p>
                  <p className="col-xl-4 col-md-4"></p>
                  <p className="col-xl-4 col-md-4 font-weight-bold">
                    ${totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page-payment">
          <label className="checkout-page-label" htmlFor="">
            CREDIT/DEBIT CARD SECURE PAYMENT
          </label>
          <div className="checkout-page-payment-method">
            <label htmlFor="">CART HOLDER</label>
            <input type="text" />
            <label htmlFor="">CART NUMBER</label>
            <input type="text" />
            <label htmlFor="">EXPIRATION DATE *</label>
            <div className="select-option">
              <select style={{ width: "120px" }}>
                <option value="0">Month</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select style={{ width: "120px" }}>
                <option value="0">Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <label htmlFor="">CARD VERIFICATION NUMBER *</label>

            <input type="text" />
          </div>
        </div>
        <div className="checkout-page-order">
          <a
            href="/"
            onClick={() => {
              alert("ORDER SUCCESS");
            }}
          >
            <div className="checkout-page-btn">PLACE ORDER</div>
          </a>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Checkout);
