import React, { FC, ReactNode } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty, plusQty, minusQty } from '../../redux/Shopping/shopping-action';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
interface PropsAction {
  removeFromCart: Function;
  adjustQty: Function;
  plusQty: Function;
  minusQty: Function;
  cart: any;
}
interface CartProps {
  id: number;
  image: any;
  name: String;
  price: Number | any;
  qty: number;
}

const Cart: FC<PropsAction> = ({ cart, removeFromCart, adjustQty, plusQty, minusQty }) => {
  const total = useMemo(() => {
    let price = 0;
    cart.forEach((item: { qty: number; price: number }) => {
      price += item.qty * item.price;
    });
    return price;
  }, [cart]);

  function renderCart() {
    return cart.map((item: CartProps) => (
      <tr key={item.id}>
        <td onClick={() => removeFromCart(item.id)} className="table-delete">
          X
        </td>
        <td className="table-img-wrapper">
          <Link to={'shop-detail/' + item.id}>
            <img src={item.image} alt="" />
          </Link>
          <div>{item.name}</div>
        </td>
        <td className="text-center">${item.price} </td>
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
              onChange={(e: any) => {
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
    ));
  }

  return (
    <div className="cart-page">
      <div className="cart-page-top">
        <label htmlFor="" className="cart-page-toplabel">
          CART
        </label>
        <p className="cart-page-nav">Hanabi / Cart</p>
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
          {renderCart()}
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
                display: 'flex',
                alignItems: 'center',
                height: '3rem',
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
            <Link to={'/checkout'}>
              <button className="cart-tocheckout">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { shop: { cart: any } }) => {
  return {
    cart: state.shop.cart,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: {
    type: string;
    payload: { id: number } | { id: number; qty: number } | { id: number } | { id: number };
  }) => any
) => {
  return {
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    adjustQty: (id: number, value: number) => dispatch(adjustQty(id, value)),
    plusQty: (id: number) => dispatch(plusQty(id)),
    minusQty: (id: number) => dispatch(minusQty(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
