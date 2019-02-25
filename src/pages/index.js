import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HomeLap from "../components/home/homeLap"
import SEO from "../components/seo"


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
            teste
          </div>

        </section>
        <section style={{height:"100vh"}}>

        </section>
      </Layout>
    );
  }
}
