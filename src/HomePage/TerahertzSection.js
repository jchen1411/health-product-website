import React, { useRef, useEffect, useState } from 'react';
import smilingGuy from '../assets/images/HomePage/smiling-guy.webp'; // Adjust if needed
import './TerahertzSection.css';

function TerahertzSection() {
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
    <section ref={sectionRef} className="terahertz-section-outer">
      {/* Decorative dots at the top */}
      <div className="terahertz-dots">
        <span className="dot dot1"></span>
        <span className="dot dot2"></span>
        <span className="dot dot3"></span>
      </div>
      <div className={`terahertz-section-inner${animate ? ' centered' : ''}`}>
        <div className={`terahertz-image-left side-anim${animate ? ' animate-in' : ''}`}>
          <div className="image-circle-bg">
            <img src={smilingGuy} alt="Smiling Guy" />
          </div>
        </div>
        <div className={`terahertz-content-right side-anim${animate ? ' animate-in' : ''}`}>
          <h2>
            <span className="terahertz-bold">Terahertz Waves</span><br />
            <span className="terahertz-regular">For Better Health</span>
          </h2>
          <p>
            Terahertz waves offer a wide range of potential health benefits due to their unique ability to resonate with and penetrate biological tissues. From enhancing cellular function and improving blood circulation to providing pain relief and promoting detoxification, Terahertz therapy presents a promising approach to achieving better health and well-being. These waves resonate at frequencies that match the natural vibrations of biological tissues, enabling them to penetrate deeply and interact beneficially with cells and biological processes. Some of the key health benefits include enhanced cellular function, improved blood circulation, pain relief and anti-inflammatory effects, detoxification, enhanced immune function, improved skin health, strengthening of tendon and ligaments, joint health improvement, and increased muscle mass.
          </p>
          <div className="terahertz-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerahertzSection;
