import React from 'react';
import DualTechSection from '../HomePage/DualTechSection';
import BenefitSection from '../HomePage/BenefitSection';
import FeaturedProductSection from '../HomePage/FeaturedProductSection';
import WhatIsSection from '../HomePage/WhatIsSection';
import P90PlusSection from '../HomePage/P90PlusSection';
import TerahertzSection from '../HomePage/TerahertzSection';
import GalaxyGOneSection from '../HomePage/GalaxyGOneSection';
import TitleSection from '../HomePage/TitleSection';


function HomePage() {
  return (
    <div className="home-content">
      <TitleSection />
      <DualTechSection />
      <BenefitSection />
      <FeaturedProductSection />
      <WhatIsSection />
      <P90PlusSection />
      <TerahertzSection />
      <GalaxyGOneSection/>
 
    </div>
  );
}

export default HomePage;
