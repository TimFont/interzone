import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"




import JobGrid from "../components/home/jobGrid";
import Contact from "../components/contact/contact";

import IntroSection from '../components/home/sections/introSection';
import CardsSection from '../components/home/sections/cardsSection';
import AdvSection from '../components/home/sections/advSection';


export default class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <IntroSection />
        <CardsSection />
        <AdvSection />




        <section className="job-section">
          <div className="container-big">
            <h1 className="section-title">Ultimos trabalhos</h1>
            <JobGrid />
          </div>
        </section>


        <section className="contact-section">
          <Contact />
        </section>
        
      </Layout>
    );
  }
}
