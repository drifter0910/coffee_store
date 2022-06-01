import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="navbar">
      <div className="n-left">
        <h1 className="text-light">HANABI</h1>
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
