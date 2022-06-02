import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "react-scroll/modules/components/Link";

const Home = () => {
  const [showmenu, setShowmenu] = useState(false);
  if (showmenu) {
    var menumask;
    var menu = (
      <div className="menu-nav">
        <ul>
          <Link spy={true} to="Navbar" activeClass="activeClass" smooth={true}>
            <li>Home</li>
          </Link>
          <Link spy={true} to="Menu" smooth={true}>
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
        <h1 className="text-light">HANABI</h1>
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
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
          <FontAwesomeIcon className="search" icon={faSearch} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
