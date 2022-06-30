import React, { useState, useEffect } from "react";
import Data from "../../Data/ProductData";
import "./Navbar.scss";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { removeFromCart } from "../../redux/Shopping/shopping-action";
const Home = ({ cart, removeFromCart }) => {
  let navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [showmenu, setShowmenu] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  let activeStyle = {
    color: "#84878c",
  };

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

  useEffect(() => {
    const result = Data.filter((value) => {
      if (search === "") {
        return null;
      } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    });
    setResult(result);
    console.log(result);
  }, [search]);

  const handleSearch = () => {
    setToggle(!toggle);
  };

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
  const changeBackGround = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackGround);
  return (
    <div className={navbar ? "navbar active" : "navbar"} id="Navbar">
      {menu}
      {menumask}
      <div className="n-left">
        <h1 className="text-light">
          <Link to="/">Hanabi </Link>
        </h1>

        <div className="n-left-wrapper">
          <div className="search-mobile">
            <FontAwesomeIcon
              onClick={handleSearch}
              className="icon"
              icon={faSearch}
            />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className={toggle ? "navbar-input" : "input-active"}
              type="text"
            />
            <div className={toggle ? "display-none" : "search-result"}>
              {result?.map((data) => (
                <div
                  onClick={() => {
                    navigate("shop/shop-detail/" + data.id);
                    setSearch("");
                  }}
                  className="search-item"
                  key={data.id}
                >
                  <img src={data.image} alt="" />
                  <p>{data.name}</p>
                </div>
              ))}{" "}
            </div>
          </div>
          <FontAwesomeIcon
            className="faBars"
            onClick={() => setShowmenu(!showmenu)}
            icon={faBars}
          />
        </div>
      </div>
      <div className="n-right">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"navmenu"}
            >
              Menu
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"reservation"}
            >
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"coffee-croissant"}
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"shop"}
            >
              Shop
            </NavLink>
          </li>

          <div className="wrapper-navbar-cart">
            <FontAwesomeIcon
              onClick={() => navigate("cart")}
              className="cart"
              icon={faCartShopping}
            />
            <div className="cart-counter">{cartCount}</div>
            <div className="navbar-cart">
              <div>
                {cart.map((item) => (
                  <div className="navbar-cart-list">
                    <div className="cart-item-l">
                      <Link to={"shop/shop-detail/" + item.id}>
                        <img src={item.image} alt="" />
                      </Link>
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
          <div className="search">
            <FontAwesomeIcon
              onClick={handleSearch}
              className="icon"
              icon={faSearch}
            />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className={toggle ? "navbar-input" : "input-active"}
              type="text"
            />
            <div className={toggle ? "display-none" : "search-result"}>
              {result?.map((data) => (
                <div
                  onClick={() => {
                    navigate("shop/shop-detail/" + data.id);
                    setSearch("");
                  }}
                  className="search-item"
                  key={data.id}
                >
                  <img src={data.image} alt="" />
                  <p>{data.name}</p>
                </div>
              ))}{" "}
            </div>
          </div>
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
