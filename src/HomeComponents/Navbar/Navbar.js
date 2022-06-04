import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import {
  Switch,
  Route,
  Link,
  useNavigate,
  Navigate,
  NavLink,
} from "react-router-dom";
import product1 from "../../img/product1.jpg";
const Home = () => {
  let navigate = useNavigate();

  const [showmenu, setShowmenu] = useState(false);
  if (showmenu) {
    var menumask;
    var menu = (
      <div className="menu-nav">
        <ul>
          <Link to="coffee_store" activeclass="activeclass">
            <li>Home</li>
          </Link>
          <Link to="">
            <li>Menu</li>
          </Link>
          <Link to="">
            <li>Reservation</li>
          </Link>
          <Link to="/coffee_store/coffee-croissant">
            <li>Blog</li>
          </Link>
          <Link to="/coffee_store/shop">
            <li>Shop</li>
          </Link>
          <Link to="">
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
        <Link to="/coffee_store/">
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
            <NavLink to="/coffee_store/">Home</NavLink>
          </li>
          <li>Menu</li>
          <li>Reservation</li>
          <li onClick={() => navigate("/coffee_store/coffee-croissant")}>
            Blog
          </li>
          {/* <li to={"/coffee_store/shop/"}> */}
          <li className="link" onClick={() => navigate("/coffee_store/shop")}>
            Shop
          </li>

          <div className="wrapper-navbar-cart">
            <FontAwesomeIcon className="cart" icon={faCartShopping} />
            <div className="navbar-cart">
              <div className="navbar-cart-list">
                <div className="cart-item-l">
                  <img src={product1} alt="" />
                </div>
                <div className="cart-item-r">
                  <p>Paper Pounch</p>
                  <p>Quantity: 1</p>
                  <p>$46</p>
                </div>
                <FontAwesomeIcon className="" icon={faClose} />
              </div>
              <div className="navbar-cart-total">
                <p>Total</p>
                <p>$46.00</p>
              </div>
              <div className="navbar-cart-btn">
                <div className="viewcart">View Cart</div>
                <div className="checkout">Checkout</div>
              </div>
            </div>
          </div>
          <FontAwesomeIcon className="search" icon={faSearch} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
