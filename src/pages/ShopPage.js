import React from 'react';
import galaxyG1 from '../assets/images/HomePage/Galaxy-G1.jpg';  // Eye device
import teraP90 from '../assets/images/HomePage/Tera-P90.jpg';   // Tera P90 device
import './ShopPage.css';

function ShopPage() {
  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop OlyLife Wellness Products</h1>
      <div className="shop-products">
        {/* Product 1: Galaxy G-One Eye Device */}
        <div className="shop-card">
          <div className="shop-card-header">
            <img src={galaxyG1} alt="OlyLife Galaxy G-One" />
            <div className="brand-strip">
            </div>
          </div>
          <h2>OlyLife Galaxy G-One Eye Device</h2>
          <div className="shop-price">$645.00</div>
          <div className="shop-payment">or as low as <span>$55.81/mo.</span></div>
        </div>

        {/* Product 2: PEMF THz Tera-P90 */}
        <div className="shop-card">
          <div className="shop-card-header">
            <img src={teraP90} alt="OlyLife Tera-P90" />
          </div>
          <h2>OlyLife PEMF THz Tera-P90</h2>
          <div className="shop-price">$1,295.00</div>
          <div className="shop-payment">or as low as <span>$112.05/mo.</span></div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
