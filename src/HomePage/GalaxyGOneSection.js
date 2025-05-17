import React, { useRef, useEffect, useState } from 'react';
import galaxyG1 from '../assets/images/HomePage/Galaxy-G1.jpg'; // update if needed
import './GalaxyGOneSection.css';

function GalaxyGOneSection() {
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
    <section ref={sectionRef} className="galaxy-section-outer">
      <div className={`galaxy-section-inner${animate ? ' centered' : ''}`}>
        <div className={`galaxy-content-left side-anim${animate ? ' animate-in' : ''}`}>
          <h1>
            <span className="galaxy-green">OlyLife</span><br />
            <span className="galaxy-black">
              OlyLife Galaxy G-One PEMF Eye Massager
            </span>
          </h1>
          <p>
            Experience the future of eye care with the OlyLife Galaxy G-One PEMF Eye Massager! This innovative device is designed to address the daily challenges our eyes face, providing comprehensive care and rejuvenation for tired, strained eyes.
          </p>
          <div className="galaxy-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
        <div className={`galaxy-image-right side-anim${animate ? ' animate-in' : ''}`}>
          <img src={galaxyG1} alt="Galaxy G-One Massager" />
        </div>
      </div>
    </section>
  );
}

export default GalaxyGOneSection;
