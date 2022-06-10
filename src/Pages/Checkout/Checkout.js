import React, { useState } from "react";
import cart1 from "../../img/product1.jpg";
import "./Checkout.css";
const Checkout = () => {
  const [quan, setQuan] = useState(1);

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
                  <p className="col-xl-6 child-title ">Product</p>
                  <p className="col-xl-6 child-title">Subtotal</p>
                </div>
              </div>
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-6 col-md-6">Paper Pouch × 1 </p>
                  <p className="col-xl-6 col-md-6">$46.00</p>
                </div>
              </div>
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-6 col-md-6">Subtotal</p>
                  <p className="col-xl-6 col-md-6">$46.00</p>
                </div>
              </div>
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-6 col-md-6">Shipping</p>
                  <p className="col-xl-6 col-md-6">Free Shipping</p>
                </div>
              </div>
              <div className="yourorder-child-title">
                <div className="row w-100">
                  <p className="col-xl-6 col-md-6">Total</p>
                  <p className="col-xl-6 col-md-6">$46.00</p>
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
          <div className="checkout-page-btn">PLACE ORDER</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
