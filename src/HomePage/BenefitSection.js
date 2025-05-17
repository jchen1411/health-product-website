import React, { useRef, useEffect, useState } from 'react';
import threeDot from '../assets/images/HomePage/3-dot.webp';
import bonsai from '../assets/images/HomePage/bonsai.webp';
import './BenefitSection.css';

function BenefitSection() {
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

      // Only trigger animation ONCE
      if (centeredNow && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  // Use hasAnimated so animation only plays once, stays after first trigger
  const animate = hasAnimated;

  return (
    <section ref={sectionRef} className="benefit-section-outer">
      <div className={`benefit-section-inner${animate ? ' centered' : ''}`}>
        <div className={`benefit-content-left side-anim${animate ? ' animate-in' : ''}`}>
         
          <h2>Benefits of PEMF + Terahertz Therapy</h2>
          <h3>The Potential Benefits Are:</h3>
          <div className="benefit-bullet-columns">
            <ul>
              <li>Improved Sleep</li>
              <li>Pain Management</li>
              <li>Improved Mood</li>
              <li>Wound Healing</li>
              <li>Bone Health</li>
            </ul>
            <ul>
              <li>Immune Support</li>
              <li>Muscle Relaxation</li>
              <li>Improved Cognitive Function</li>
              <li>Reduced Inflammation</li>
            </ul>
          </div>
          <div className="benefit-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className={`benefit-image-right side-anim${animate ? ' animate-in' : ''}`}>
          <img src={bonsai} alt="Bonsai" />
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
