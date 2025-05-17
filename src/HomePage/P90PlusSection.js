import React, { useRef, useEffect, useState } from 'react';
import p90Plus from '../assets/images/HomePage/P90-Plus.jpg'; // Adjust path if needed
import './P90PlusSection.css';

function P90PlusSection() {
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

      // Animate ONCE
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
    <section ref={sectionRef} className="p90plus-section-outer">
      <div className={`p90plus-section-inner${animate ? ' centered' : ''}`}>
        <div className={`p90plus-content-left side-anim${animate ? ' animate-in' : ''}`}>
          <h1>
            <span className="p90plus-green">OlyLife</span><br />
            <span className="p90plus-black">PEMF Therapy<br />Machine THz Tera-P90+</span>
          </h1>
          <p>
            In the realm of advanced wellness technology, the OlyLife THz Tera-P90+ stands as a beacon of innovation and excellence. This multifaceted device is meticulously crafted to cater to various aspects of your well-being, seamlessly blending cutting-edge Pulsed Electromagnetic Field (PEMF) Integrated Technology into its core. Comprising the main device, the Frost Age Beauty Device, and the Revitaluxe Massager, the P90+ is your all-in-one solution to wellness, relaxation, and beauty. It represents a holistic approach to health, addressing physical, mental, and aesthetic needs through state-of-the-art technology.
          </p>
          <div className="p90plus-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className={`p90plus-image-right side-anim${animate ? ' animate-in' : ''}`}>
          <img src={p90Plus} alt="P90 Plus Product" />
        </div>
      </div>
    </section>
  );
}

export default P90PlusSection;
