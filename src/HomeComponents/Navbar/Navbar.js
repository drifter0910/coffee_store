import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { removeFromCart } from "../../redux/Shopping/shopping-action";
const Home = ({ cart, removeFromCart }) => {
  let navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [showmenu, setShowmenu] = useState(false);
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

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  if (showmenu) {
    var menumask;
    var menu = (
      <div className="menu-nav">
        <ul>
          <NavLink to="/" activeclass="activeclass">
            <li>Home</li>
          </NavLink>
          <Link to="navmenu">
            <li>Menu</li>
          </Link>
          <Link to="reservation">
            <li>Reservation</li>
          </Link>
          <Link to="coffee-croissant">
            <li>Blog</li>
          </Link>
          <Link to="shop">
            <li>Shop</li>
          </Link>
          <Link to="cart">
            <li>My cart</li>
          </Link>
        </ul>
      </div>
    );
    menumask = (
      <div className="menu-mask" onClick={() => setShowmenu(false)}></div>
    );
  }
  return (
    <div className="navbar" id="Navbar">
      {menu}
      {menumask}
      <div className="n-left">
        <Link to="/">
          <h1 className="text-light">HANABI</h1>
        </Link>

        <FontAwesomeIcon
          className="faBars"
          onClick={() => setShowmenu(!showmenu)}
          icon={faBars}
        />
      </div>
      <div className="n-right">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => navigate("navmenu")}>Menu</li>
          <li onClick={() => navigate("reservation")}>Reservation</li>
          <li onClick={() => navigate("coffee-croissant")}>Blog</li>
          {/* <li to={"/coffee_store/shop/"}> */}
          <li className="link" onClick={() => navigate("shop")}>
            Shop
          </li>

          <div className="wrapper-navbar-cart">
            <FontAwesomeIcon
              onClick={() => navigate("cart")}
              className="cart"
              icon={faCartShopping}
            />
            <div className="cart-counter"> {cartCount} </div>
            <div className="navbar-cart">
              <div>
                {cart.map((item) => (
                  <div className="navbar-cart-list">
                    <div className="cart-item-l">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="cart-item-r">
                      <p>{item.name}</p>
                      <p>Quantity: {item.qty}</p>
                      <p>$ {item.price} </p>
                    </div>
                    <FontAwesomeIcon
                      onClick={() => removeFromCart(item.id)}
                      className="delete-cart"
                      icon={faClose}
                    />
                  </div>
                ))}
              </div>
              <div className="navbar-cart-total">
                <p>Total</p>
                <p>$ {totalPrice}</p>
              </div>
              <div className="navbar-cart-btn">
                <div onClick={() => navigate("cart")} className="viewcart">
                  View Cart
                </div>
                <div onClick={() => navigate("checkout")} className="checkout">
                  Checkout
                </div>
              </div>
            </div>
          </div>
          <FontAwesomeIcon className="search" icon={faSearch} />
        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
