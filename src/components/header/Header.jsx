import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* <h1 className="logo">Hotel Booking System</h1> */}
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Booking Form</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;