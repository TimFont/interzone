import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "../components/layouts/navbar"
import MobileNav from "../components/layouts/mobileNav"
import Footer from "./layouts/footer"
import "../styles/main.scss"


export default class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMobile:false
    }

    this.resizeEvt = this.resizeEvt.bind(this);

  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({ isMobile: true })
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.resizeEvt);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeEvt);
  }

  resizeEvt(){
      if(window.innerWidth <= 600){
        this.setState({isMobile: true});
      }else{
        this.setState({isMobile: false});
      }

      console.log(this.state.isMobile);
  
  }

  render(){
    return(
        <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            
            <Navbar siteTitle={data.site.siteMetadata.title} />
            {this.state.isMobile ? <MobileNav /> : ''}
            <main>{this.props.children}</main>
            <Footer />
          </>
        )}
      />
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

