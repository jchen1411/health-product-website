import React from 'react';
import titleImg from '../assets/images/HomePage/title.png';
import './TitleSection.css';

function TitleSection() {
  return (
    <section className="title-section-outer">
      <div className="title-section-inner">
        <div className="title-image">
          <img src={titleImg} alt="Title" />
        </div>
        {/* You can add a right side here if needed */}
      </div>
    </section>
  );
}

export default TitleSection;
