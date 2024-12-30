import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">
          <img
            src="./geekfood-logo.svg"
            alt="logo"
            className="logo-image"
          />GeekFoods</div>
            <div className='menuBar'>
            <i className="fas fa-bars"></i>
         </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#quote">Quote</a></li>
          <li><a href="#restaurants">Restaurants</a></li>
          <li><a href="#foods">Foods</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    
      <button className="get-started-btn">Get started</button>
    </header>
  );
};

export default Navbar;
