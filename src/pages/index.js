import React, { Component } from "react"

import Layout from "../components/layout"
import HomeLap from "../components/home/homeLap"
import SEO from "../components/seo"
import Slider from '../components/home/homeSlider';
import Social from '../components/social';
import CardGrid from '../components/home/cardGrid';
import { Link } from "gatsby";
import AdvIllu from "../components/home/advIllu";


export default class IndexPage extends Component {
  render() {
    return (
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

        <section className="adv-section">
          <div className="container-big" style={{height:'100vh'}}>
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
                    <Link className="btn">Entrar em contato</Link>
                </div>
              </div>
            </div>
          </div>
        </section>


      </Layout>
    );
  }
}
