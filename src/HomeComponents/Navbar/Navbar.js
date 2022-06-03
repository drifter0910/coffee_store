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
  const [showmenu, setShowmenu] = useState(false);
  if (showmenu) {
    var menumask;
    var menu = (
      <div className="menu-nav">
        <ul>
          <Link spy={true} to="/" activeClass="activeClass" smooth={true}>
            <li>Home</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
            <li>Menu</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
            <li>Reservation</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
            <li>Pages</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
            <li>Blog</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
            <li>Shop</li>
          </Link>
          <Link spy={true} to="" smooth={true}>
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
        <NavLink to="/coffee_store/">
          <h1 className="text-light">HANABI</h1>
        </NavLink>

        <FontAwesomeIcon
          className="faBars"
          onClick={() => setShowmenu(!showmenu)}
          icon={faBars}
        />
      </div>
      <div className="n-right">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Pages</li>
          <li>Blog</li>
          <li className="seperate">Shop</li>
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
