import React from 'react';
import './HeaderFooter.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-logo">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <ellipse cx="32" cy="32" rx="28" ry="28" fill="#35a3e2" />
            <path d="M32 48c-7.732 0-14-6.268-14-14V18l14-6 14 6v16c0 7.732-6.268 14-14 14z" fill="#fff"/>
          </svg>
        </span>

      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} OlyLife Global. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
