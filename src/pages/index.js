import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


import Contact from "../components/contact/contact";

import IntroSection from '../components/home/sections/introSection';
import CardsSection from '../components/home/sections/cardsSection';
import AdvSection from '../components/home/sections/advSection';
import JobSection from '../components/home/sections/jobSection';
import ContactSection from '../components/home/sections/contactSection';


export default class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <IntroSection />
        <CardsSection />
        <AdvSection />
        <JobSection />
        <ContactSection />

      </Layout>
    );
  }
}
