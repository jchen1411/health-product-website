import React from 'react';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Recharge, Revitalize, Restore</h2>
        <p>
          Discover the <b>future of health & wellness</b> with OlyLife.<br />
          Advanced PEMF, Terahertz, and Vascular Technology for every body.
        </p>
        <button className="cta" onClick={() => window.location.href="/products"}>Shop Now</button>
        <div style={{marginTop: 38, fontWeight: 500}}>
          <span style={{opacity: 0.9}}>Trusted by wellness professionals worldwide.</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
