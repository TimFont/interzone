import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
            <div className={`footer ${this.props.currentPage === '/' ? 'footer--big' : ''}`}>
                <div className="footer__info">
                    © {new Date().getFullYear()}, Feito por <a href="https://italofontes.com" target="_blank" rel="noopener noreferrer">Italo Fontes</a>
                </div>
            </div>
        );
    }
}

export default Footer;