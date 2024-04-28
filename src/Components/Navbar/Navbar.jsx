import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("menu");
  const {getTotalCartAmount}=useContext(StoreContext)


  return (
    <div className="navbar">
    <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#mobile-app"
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt=""
          onClick={() => setmenu("search_icon")}
          className={menu === "search_icon" ? "active" : ""}
        />
        <div className="navbar-search-icon">
         <Link to='/cart'> <img
            src={assets.basket_icon}
            alt=""
            onClick={() => setmenu("basket_icon")}
            className={menu === "basket_icon" ? "active" : ""}
          /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>signin</button>
      </div>
    </div>
  );
};

export default Navbar;
