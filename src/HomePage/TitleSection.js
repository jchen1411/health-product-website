import React, { useRef, useEffect, useState } from 'react';
import titleImg from '../assets/images/HomePage/title.png';
import './TitleSection.css';

function TitleSection() {
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
    <section ref={sectionRef} className="title-section-outer">
      <div className={`title-section-inner${animate ? ' centered' : ''}`}>
        <div className={`title-image side-anim${animate ? ' animate-in' : ''}`}>
          <img src={titleImg} alt="Title" />
        </div>
        {/* You can add a right side here if needed */}
      </div>
    </section>
  );
}

export default TitleSection;
