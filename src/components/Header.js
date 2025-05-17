import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderFooter.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Your logo SVG */}
        <span className="site-logo">
          <svg width="38" height="38" viewBox="0 0 64 64" fill="none">
            <ellipse cx="32" cy="32" rx="28" ry="28" fill="#35a3e2" />
            <path d="M32 48c-7.732 0-14-6.268-14-14V18l14-6 14 6v16c0 7.732-6.268 14-14 14z" fill="#fff"/>
          </svg>
        </span>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/benefits">Why OlyLife</Link>
          <Link to="/testimonials">Stories</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
