// src/components/HeaderIcons/HeaderIcons.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import './style/HeaderIcons.css';

const HeaderIcons = () => {
  return (
    <ul className="header-icons-container">
      {/* Wishlist Button */}
      <li className="header-icon">
        <Nav.Link
          href="/en/wishlist"
          title="My Wishlist"
          aria-label="My Wishlist"
          className="header-icon-link"
        >
          <span className={`icon-span wishlist-icon`} />
        </Nav.Link>
      </li>

      {/* Cart Button */}
      <li className="header-icon" style={{ display: 'flex', alignItems: 'center' }}>
        <Nav.Link
          href="/en/cart"
          title="Cart"
          aria-label="Cart"
          className="header-icon-link"
        >
          <span style={{ display: 'none', fontSize: '12px', color: 'rgb(34, 34, 34)' }}>0</span>
        </Nav.Link>
        <Nav.Link
          href="/en/cart"
          title="Cart"
          aria-label="Cart"
          className="header-icon-link"
        >
          <span className="cart-badge"></span>
          <span className={`icon-span cart-icon`} />
        </Nav.Link>
      </li>
    </ul>
  );
};

export default HeaderIcons;