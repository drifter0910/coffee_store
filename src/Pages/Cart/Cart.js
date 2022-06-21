import React, { useState } from "react";
import "./Cart.css";
import cart1 from "../../img/product1.jpg";
import { connect } from "react-redux";
import { useEffect } from "react";
import { removeFromCart } from "../../redux/Shopping/shopping-action";

const Cart = ({ cart, removeFromCart }) => {
  console.log(cart);
  const [input, setInput] = useState(cart.qty);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
    });
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
  };

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
          {cart.map((item) => (
            <tr>
              <td
                onClick={() => removeFromCart(item.id)}
                className="table-delete"
              >
                X
              </td>
              <td className="table-img-wrapper">
                <img src={item.image} alt="" />
                <div>{item.name}</div>
              </td>
              <td> ${item.price} </td>
              <td>
                <div className="cart-page-input">
                  <p>-</p>
                  <input
                    className="shop-detail-r-input"
                    type="text"
                    id="qty"
                    name="qty"
                    value={item.qty}
                    onChange={onChangeHandler}
                  />
                  <p>+</p>
                </div>
              </td>
              <td>${item.price * item.qty}</td>
            </tr>
          ))}
        </table>
        <div className="cart-coupon">
          <input className="couponcode" type="text" placeholder="Coupon code" />
          <button className="apply-coupon">APPLY COUPON</button>
          <button className="update-cart">UPDATE CART</button>
        </div>
        <div className="cart-total">
          <label htmlFor="">CART TOTAL</label>
          <div className=" row cart-total-table">
            <div className="col-xl-4">SUBTOTAL: ${totalPrice}</div>
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
            <div className="col-xl-4">TOTAL: ${totalPrice}</div>
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
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
