import React, { useRef, useEffect, useState } from 'react';
import meditatingLady from '../assets/images/HomePage/woman-med.webp'; 
import './WhatIsSection.css';

function WhatIsSection() {
  const sectionRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = window.innerHeight / 2;
      const centeredNow = Math.abs(sectionMid - viewportMid) < 100;
      setIsCentered(centeredNow);

      // Animate only once
      if (centeredNow && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animate = hasAnimated;

  return (
    <section ref={sectionRef} className="what-is-section-outer">
      <div className={`what-is-section-inner${animate ? ' centered' : ''}`}>
        <div className={`what-is-content side-anim${animate ? ' animate-in' : ''}`}>
          <h1>
            <span className="what-green">What is ...</span><br />
            <span className="what-black">PEMF Therapy?</span>
          </h1>
          <p>
            PEMF therapy involves the use of low-frequency electromagnetic fields that are pulsed into the body. These electromagnetic pulses mimic the natural magnetic fields found in the Earth and are designed to interact with the body’s own electromagnetic fields. The therapy aims to enhance the body’s natural recovery processes by stimulating cellular repair and improving overall function.
          </p>
          <div className="what-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className={`what-is-image side-anim${animate ? ' animate-in' : ''}`}>
          <img src={meditatingLady} alt="Meditating Lady" />
          {/* Decorative rings */}
          <svg className="ring-svg" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="130" stroke="#b2c9b8" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="80" stroke="#b2c9b8" strokeWidth="1.5" fill="none" />
            <circle cx="200" cy="200" r="45" stroke="#b2c9b8" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default WhatIsSection;
