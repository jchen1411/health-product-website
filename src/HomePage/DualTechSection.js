import React, { useRef, useEffect, useState } from 'react';
import smilinLady from '../assets/images/HomePage/smilin-lady.webp';
import threeDot from '../assets/images/HomePage/3-dot.webp';
import './DualTechSection.css';

function DualTechSection() {
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

      // Only animate ONCE
      if (centeredNow && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  // Animation is ON if it's already happened
  const animate = hasAnimated;

  return (
    <section ref={sectionRef} className="dual-tech-section-outer">
      <div className={`dual-tech-section-inner${animate ? ' centered' : ''}`}>
        <div className={`dual-tech-image-left side-anim${animate ? ' animate-in' : ''}`}>
          <img src={smilinLady} alt="Smiling Lady" />
        </div>
        <div className={`dual-tech-content-right side-anim${animate ? ' animate-in' : ''}`}>
       
          <h2>Innovative Dual Technology</h2>
          <p>
            The OlyLife Tera-P90 stands out as a pioneering health technology that seamlessly integrates Terahertz Frequency and Pulsed Electro-Magnetic Field (PEMF) therapy, offering a multifaceted approach to wellness. Unlike conventional devices that specialize in one form of therapy, the Tera-P90 harmonizes the benefits of both Terahertz and PEMF waves, making it a uniquely versatile tool in the pursuit of health and vitality.
          </p>
          <p>
            Terahertz Frequency technology allows the Tera-P90 to resonate with the natural frequencies of the human body, promoting cellular health, improving blood circulation, and enhancing overall energy levels. Terahertz waves are known for their deep-penetrating ability, which can reach the subcutaneous tissues, offering therapeutic benefits that are both profound and long-lasting.
          </p>
          <p>
            Pulsed Electro-Magnetic Field (PEMF) therapy is renowned for its ability to stimulate cellular repair and regeneration. By emitting pulsating magnetic fields, the Tera-P90 aids in reducing inflammation, alleviating pain, and accelerating the healing process of bones and tissues. PEMF therapy has been extensively researched and validated for its effectiveness in improving various health conditions, from chronic pain to fractures and neurological disorders.
          </p>
          <p>
            The synergy of Terahertz Frequency and PEMF in the Tera-P90 means users can experience the combined advantages of both therapies.
          </p>
          <div className="dual-tech-buttons">
            <button className="shop-btn">Shop Now</button>
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DualTechSection;
