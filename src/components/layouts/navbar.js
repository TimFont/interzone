import React, { Component } from 'react';
import Headroom from 'react-headroom';
import NavbarNav from './navbarNav';
import { Link } from 'gatsby';



export default class Navbar extends Component{
    render(){
        return(
            <Headroom disableInlineStyles>
                <div className="navbar u-container-big">               
                    <Link to="/" className="navbar__logo" activeClassName="navbar__logo--home">
                        Interzone
                    </Link>
                    <NavbarNav />
                </div>
            </Headroom>
        );
    }
}