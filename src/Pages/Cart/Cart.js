import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustQty,
  plusQty,
  minusQty,
} from "../../redux/Shopping/shopping-action";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const Cart = ({ cart, removeFromCart, adjustQty, plusQty, minusQty }) => {
  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   // let items = 0;
  //   console.log("tinh lai");
  //   let price = 0;
  //   cart?.forEach((item) => {
  //     price += item.qty * item.price;
  //   });
  //   setTotalPrice(price);`
  // }, [cart, totalPrice, setTotalPrice]);
  const total = useMemo(() => {
    console.log("tinh lai");
    let price = 0;
    cart?.forEach((item) => {
      price += item.qty * item.price;
    });
    return price;
  }, [cart]);

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
          {cart?.map((item) => (
            <tr key={item.id}>
              <td
                onClick={() => removeFromCart(item.id)}
                className="table-delete"
              >
                X
              </td>
              <td className="table-img-wrapper">
                <Link to={"shop-detail/" + item.id}>
                  <img src={item.image} alt="" />
                </Link>
                <div>{item.name}</div>
              </td>
              <td className="text-center"> ${item.price} </td>
              <td>
                <div className="cart-page-input">
                  <p
                    onClick={() => {
                      minusQty(item.id);
                    }}
                  >
                    -
                  </p>
                  <input
                    className="shop-detail-r-input"
                    type="text"
                    id="qty"
                    name="qty"
                    value={item.qty}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (e.target.value > 0) {
                        adjustQty(item.id, e.target.value);
                      }
                    }}
                  />
                  <p
                    onClick={() => {
                      plusQty(item.id);
                    }}
                  >
                    +
                  </p>
                </div>
              </td>
              <td className="text-center">${item.price * item.qty}</td>
            </tr>
          ))}
        </table>
        <div className="cart-coupon">
          <input className="couponcode" type="text" placeholder="Coupon code" />
          <button className="apply-coupon">APPLY COUPON</button>
          {/* <button className="update-cart">UPDATE CART</button> */}
        </div>
        <div className="cart-total">
          <label htmlFor="">CART TOTAL</label>
          <div className=" row cart-total-table">
            <div className="col-xl-4">SUBTOTAL: ${total}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "3rem",
              }}
              className="col-xl-4"
            >
              SHIPPING: Free shipping
            </div>
            <div className="col-xl-4">TOTAL: ${total}</div>
          </div>
        </div>
        <div className="cart-shipping-cal">
          <div className="cart-shipping-cal-label">CALCULATE SHIPPING</div>
          <div className="cart-coupon">
            <Link to={"/checkout"}>
              <button className="cart-tocheckout">PROCEED TO CHECKOUT</button>
            </Link>
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
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    plusQty: (id) => dispatch(plusQty(id)),
    minusQty: (id) => dispatch(minusQty(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
