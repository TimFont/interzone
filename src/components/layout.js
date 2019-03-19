import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'


import Navbar from '../components/layouts/navbar';
import Header from '../components/layouts/header';
import MobileNav from '../components/layouts/mobileNav';
import Footer from './layouts/footer';
import '../styles/main.scss';



export default class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      isMobile:false
    }

    this.resizeEvt = this.resizeEvt.bind(this);

  }

  componentWillMount(){
    if(typeof window !== 'undefined'){
      if(window.innerWidth <= 600){
        this.setState({ isMobile: true })
      }
    }
  }

  componentDidMount(){
    if(typeof window !== 'undefined'){
      window.addEventListener('resize', this.resizeEvt);
    }
  }

  componentWillUnmount(){
   if(typeof window !== 'undefined'){
    window.removeEventListener('resize', this.resizeEvt);
   }
  }

  resizeEvt(){
      if(window.innerWidth <= 600){
        this.setState({isMobile: true});
      }else{
        this.setState({isMobile: false});
      }
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
           {
             this.state.isMobile ?

              <Link to="/" className="mobile-logo">Interzone</Link> : ''
          
           }


            <MobileNav />
            <Navbar />


            <main>{this.props.children}</main>
            <Footer currentPage={this.props.location} />
          </>
        )}
      />
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

