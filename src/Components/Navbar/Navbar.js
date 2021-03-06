import React, { useState, useEffect, useMemo } from "react";
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
import barista from "../../img/barista.png";
import baristadark from "../../img/baristadark.png";

const Home = ({ products, cart, removeFromCart }) => {
  let navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [showmenu, setShowmenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  let activeStyle = {
    color: "#c7a17a",
  };
  const total = useMemo(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.qty;
    });
    return price;
  }, [cart]);
  useEffect(() => {
    let count = cart.length;
    setCartCount(count);
  }, [cart, cartCount]);

  useEffect(() => {
    const result = products.filter((value) => {
      if (search === "") {
        return null;
      } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    });
    setResult(result);
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
          <Link to="blog">
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
    menumask = <div className="menu-mask" onClick={() => setShowmenu(false)} />;
  }
  const changeBackGround = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackGround);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate({
        pathname: "search-result",
        search: `?name=${search}`,
      });
      setSearch("");
    }
  };
  return (
    <div className={navbar ? "navbar active" : "navbar "} id="Navbar">
      {menu}
      {menumask}
      <div className="n-left">
        <Link to="/">
          <img
            style={{ width: "120px", padding: "8px 0" }}
            src={navbar ? baristadark : barista}
            alt=""
          />{" "}
        </Link>
        <div className="n-left-wrapper">
          <div className="search-mobile">
            <FontAwesomeIcon
              onClick={handleSearch}
              className="icon"
              icon={faSearch}
            />
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyPress={handleKeyPress}
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
        <ul className="n-right-list">
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
              to={"blog"}
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
              <div className="navbar-cart-item">
                {cart.map((item) => (
                  <div key={item.id} className="navbar-cart-list">
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
                <p>$ {total}</p>
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
              onKeyPress={handleKeyPress}
              value={search}
              className={toggle ? "navbar-input" : "input-active"}
              type="text"
            />

            {/* search resuslt */}
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
    products: state.shop.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
