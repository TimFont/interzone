import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeLap from "../components/home/homeLap"
import SEO from "../components/seo"
import Slider from '../components/home/homeSlider';
import Social from '../components/social';
import CardSection from '../components/home/cardSection';


export default class IndexPage extends Component{
  render(){
    return(
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section className="home__intro">
          <div className="home__laptop">
            <HomeLap />
          </div>
          <div className="home__content">
            <Slider />
            <Social place="home" />
          </div>
        </section>
        <CardSection />
      </Layout>
    );
  }
}
