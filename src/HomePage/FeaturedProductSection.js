import React, { useRef, useEffect, useState } from 'react';
import teraP90 from '../assets/images/HomePage/Tera-P90.jpg'; // Update this path if needed
import './FeaturedProductSection.css';

function FeaturedProductSection() {
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
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const animate = hasAnimated;

  return (
    <section ref={sectionRef} className="featured-section-outer">
      <div className={`featured-section-inner${animate ? ' centered' : ''}`}>
        <div className={`featured-content-left side-anim${animate ? ' animate-in' : ''}`}>
          <h2>Featured Product</h2>
          <h3>OlyLife PEMF THz Tera-P90</h3>
          <p>
            The OlyLife PEMF Therapy Machine THz Tera-P90 combines Bio-imitation magnetic energy of PEMF and Terahertz wave energy, delivering a comprehensive therapeutic experience for various health benefits. The Potential Benefits Are:
          </p>
          <div className="featured-bullet-columns">
            <ul>
              <li>Healthy Circulation</li>
              <li>Inflammation Response</li>
              <li>Stress Regulation</li>
              <li>Brain Health</li>
              <li>Heart Health</li>
            </ul>
            <ul>
              <li>Immune System Boost</li>
              <li>Cellular Function</li>
              <li>Cognitive Enhancement</li>
              <li>Pain Reduction</li>
            </ul>
          </div>
          <div className="featured-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className={`featured-image-right side-anim${animate ? ' animate-in' : ''}`}>
          <img src={teraP90} alt="Tera-P90" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductSection;
