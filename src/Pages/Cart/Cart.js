import React, { useState } from "react";
import "./Cart.css";
import cart1 from "../../img/product1.jpg";
const Cart = () => {
  const [quan, setQuan] = useState(1);

  return (
    <div className="cart-page">
      <div className="cart-page-top">
        <label htmlFor="" className="cart-page-toplabel">
          CART
        </label>
        <p htmlFor="" className="cart-page-nav">
          Hanabi / Cart
        </p>
      </div>
      <div className="cart-wrapper">
        <table>
          <tr className="bor">
            <th>CART</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td className="table-delete">X</td>
            <td className="table-img-wrapper">
              <img src={cart1} alt="" />
              <div> Paper Pouch</div>
            </td>
            <td>$46.00</td>
            <td>
              <div className="cart-page-input">
                <p>-</p>
                <input
                  className="shop-detail-r-input"
                  type="text"
                  value={quan}
                  onChange={(e) => setQuan(e.target.value)}
                />
                <p>+</p>
              </div>
            </td>
            <td>$46.00</td>
          </tr>
        </table>
        <div className="cart-coupon">
          <input className="couponcode" type="text" placeholder="Coupon code" />
          <button className="apply-coupon">APPLY COUPON</button>
          <button className="update-cart">UPDATE CART</button>
        </div>
        <div className="cart-total">
          <label htmlFor="">CART TOTAL</label>
          <div className=" row cart-total-table">
            <div className="col-xl-4">SUBTOTAL: $46.00</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "3rem",
              }}
              className="col-xl-4"
            >
              SHIPPING:<p>Free shipping</p>
            </div>
            <div className="col-xl-4">TOTAL: $46.00</div>
          </div>
        </div>
        <div className="cart-shipping-cal">
          <div className="cart-shipping-cal-label">CALCULATE SHIPPING</div>
          <div className="cart-coupon">
            <button className="cart-tocheckout">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
