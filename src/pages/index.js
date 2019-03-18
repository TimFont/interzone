import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"




import { Link } from "gatsby";
import AdvIllu from "../components/home/advIllu";
import JobGrid from "../components/home/jobGrid";
import Contact from "../components/contact/contact";

import IntroSection from '../components/home/sections/introSection';
import CardsSection from '../components/home/sections/cardsSection';


export default class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location.pathname}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <IntroSection />
        <CardsSection />


        <section className="adv-section">
          <div className="container-big">
            <div className="adv-section__content">
              <div className="adv-section__left">
                <AdvIllu />
              </div>
              <div className="adv-section__right">
                <div className="adv-content">
                    <h1 className="section-title adv-content__title">Por que estar presente na internet?</h1>
                    <p className="desc-text adv-content__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue justo sed purus dapibus, ac porttitor felis faucibus. Cras orci lorem, fringilla eu mollis in, iaculis a risus. Etiam convallis massa vitae bibendum tempor.</p>
                    <ul className="adv-content__list">
                      <li className="adv-content__item">- Lorem ipsum</li>
                      <li className="adv-content__item">- Lorem ipsum</li>
                      <li className="adv-content__item">- Lorem ipsum</li>
                    </ul>
                    <Link to="/contato" className="btn">Entrar em contato</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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
