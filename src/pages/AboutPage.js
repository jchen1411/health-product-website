import React from "react";
import "./AboutPage.css";

import olylifeHQ from "../assets/images/AboutPage/olylifehq.webp";
import whoWeAre from "../assets/images/AboutPage/OlyLife-Opportunity-Overview-Presentation_Page_02-copy.jpg";
import teraP90 from "../assets/images/AboutPage/Tera-P90-copy.jpg";

function AboutPage() {
  return (
    <div className="about-content">
      {/* About Us Title Section (with background image in CSS) */}
      <section className="about">
        <h1>About Us</h1>
      </section>

      {/* About Hero Description Section */}
      <section className="about-hero-section">
        <p className="about-hero-desc">
          Adam Ringham and Jennifer Conley are dedicated independent
          representatives for OlyLife International, committed to supporting
          both their team and customer orders. With a strong focus on
          personalized service, they ensure that their team members receive the
          guidance they need to succeed, while also providing prompt and
          efficient assistance with customer orders. Their passion for the
          products and the people they work with reflects their dedication to
          helping others achieve their wellness goals through OlyLife
          International.
        </p>
      </section>

      {/* Hero Image Section */}
      <section className="">
        <div className="about-section-img">
          <img src={whoWeAre} alt="Who We Are - Adam & Jennifer" />
        </div>
      </section>

      {/* SECTION 1: Company Vision (Text left, Image right) */}
      <section className="about-row about-row-vision">
        <div className="about-col about-text">
          <h2>OlyLife stands out as a unique wellness company</h2>
          <p className="about-text">
            For many years, we have empowered individuals from all around the
            globe to prioritize their personal well-being and achieve their
            aspirations. Our focus is on providing top-notch, secure, and trendy
            nutrition and equipment for health enthusiasts, along with the
            opportunity to join a thriving global community in the wellness
            industry. From the very beginning, our founders had a bold vision to
            establish a wellness company that offers innovative products and
            ideas, and that is exactly what we have accomplished. Our range of
            products and equipment are designed to help you live a healthy,
            beautiful, and fulfilling life, just like an Olympic athlete. We are
            dedicated to putting you first, utilizing science, incorporating
            natural elements, and guided by our strong beliefs as Olympians. Our
            ultimate goal is to enhance your well-being, a mission we strive to
            achieve every single day. Our commitment is to simplify the process
            of healthy living. Get ready to experience the next level of
            nutrition and wellness equipment.
          </p>
          <h2>A Legacy Built on Innovation and Empowerment</h2>
          <p className="about-text">
            At OlyLife, we are a top wellness company committed to providing
            innovative and efficient health and wellness solutions to our
            customers. Our goal is to enhance overall well-being and improve the
            overall quality of life through our carefully crafted products.
          </p>
        </div>
        <div className="about-col about-img">
          <img src={teraP90} alt="Tera P90 Product" />
        </div>
      </section>

      {/* SECTION 2: Scientific Advancements (YouTube left, Text right) */}
      <section className="about-row">
        <div className="about-col about-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/l0GN40EL1VU"
            title="OlyLife Scientific Advancements"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="about-col about-text">
          <h2>
            The Scientific Advancements that Transform Lives and Ways of Living
          </h2>
          <p className="about-text">
            There is a widespread desire among individuals to acquire knowledge
            on living a healthier lifestyle, resulting in a growing number of
            enthusiastic individuals. OlyLife offers the opportunity to
            transform this enthusiasm for promoting wellness into a lucrative
            source of income and a thriving business.
          </p>
          <p className="about-text">
            The products we offer are protected by our patents and prioritize
            the utilization of premium ingredients and components. These are
            carefully selected based on their well-known health advantages. Our
            advanced technology ensures that our products are both efficient and
            user-friendly, while also being safe.
          </p>
        </div>
      </section>

      {/* SECTION 3: OlyLife Belief (Text left, Image right) */}
      <section className="about-row about-row-belief">
        <div className="about-col about-text">
          <h2>
            Our belief is that together, hand in hand, we will introduce
            ‘OlyLife’ to the world
          </h2>
          <p className="about-text">
            At our company, we heavily prioritize research and development in
            our efforts to constantly improve. Our dedicated team works
            tirelessly to discover novel and innovative techniques to enhance
            our offerings and bring added advantages to our customers. We firmly
            believe that our dedication to creativity sets us apart from
            competitors and maintains our leading position in the wellness
            industry.
          </p>
          <p className="about-text">
            At OlyLife, our primary goal is to improve the lives of our
            customers by providing them with high-quality products and a strong
            focus on innovation. We are dedicated to constantly improving and
            delivering excellence in everything we do.
          </p>
          <p className="about-text">
            Come and be a part of our journey towards achieving better health
            and well-being.
          </p>
        </div>
        <div className="about-col about-img">
          <img src={olylifeHQ} alt="OlyLife Headquarters" />
        </div>
      </section>

      {/* SECTION 4: Manufacturer (Text only) */}
      <section className="about-row">
        <div className="about-col about-text">
          <h2>Our Principal & Manufacturer - Yong Chun Tang</h2>
          <p className="about-text">
            Founded in 1999, Yong Chun Tang is a renowned company in China that
            specializes in the field of ‘Large Health.’ As a publicly listed
            corporation, it has been recognized as a ‘National Key Leading
            Enterprise in Forestry.’
          </p>
          <p className="about-text">
            The Yong Chun Tang Group of Companies is engaged in all levels of
            the industry, from upstream to downstream, which includes
            partnerships with universities and research institutions, production
            of health products, and their distribution for commercial purposes.
          </p>
          <p className="about-text">
            To enhance their product and market advantages, OlyLife has joined
            forces with various local organizations, academic institutions, and
            business experts. These include an academician workstation, business
            technology center, Ginkgo research center, municipal engineering
            laboratory, and municipal postdoctoral innovation workstation.
            Through these establishments, the company aims to utilize their
            technological and talent strengths and establish a solid groundwork
            for their business operations.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
