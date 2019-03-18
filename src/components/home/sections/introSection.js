import React from 'react';
import HomeLap from '../homeLap';
import Slider from '../homeSlider';
import Social from '../../social';

const IntroSection = (props) => (
    <section className="intro-section">
    <div className="intro-section__laptop">
      <HomeLap />
    </div>
    <div className="intro-section__content">
      <Slider />
      <Social place="home" />
    </div>
  </section>
);

export default IntroSection;