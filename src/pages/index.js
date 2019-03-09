import React, { Component } from "react"

import Layout from "../components/layout"
import HomeLap from "../components/home/homeLap"
import SEO from "../components/seo"
import Slider from '../components/home/homeSlider';
import Social from '../components/social';
import CardGrid from '../components/home/cardGrid';


export default class IndexPage extends Component{
  render(){
    return(
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section className="intro-section">
          <div className="intro-section__laptop">
            <HomeLap />
          </div>
          <div className="intro-section__content">
            <Slider />
            <Social place="home" />
          </div>
        </section>

        <section className="card-section">
          <div className="container-big">
            <h1 className="section-title">Caracteristicas dos produtos:</h1>
            <CardGrid />
          </div>
        </section>


      </Layout>
    );
  }
}
