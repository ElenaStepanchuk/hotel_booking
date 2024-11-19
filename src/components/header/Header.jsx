import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {

  const scrollToForm = () => {
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <header className="header">
      <div className="container">
         <nav className="nav">
          <ul>
            <li>
              <Link to="/" onClick={scrollToForm}>Booking Form</Link>
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