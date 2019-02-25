import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Location } from '@reach/router'

/*const Footer = ( { location } ) => (
    <div className={`footer`}>
        social
        <div className="footer__info">
            {location}
        </div>
    </div>
);*/

class Footer extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Location>
                {({ location }) => 
                    <div className={`footer ${location.pathname === '/' ? 'footer--big' : ''}`}>
                        <div className="footer__info">
                            © {new Date().getFullYear()}, Feito por <a href="https://italofontes.com" target="_blank" rel="noopener noreferrer">Italo Fontes</a>
                        </div>
                    </div>
                }
            </Location>
        );
    }
}

export default Footer;