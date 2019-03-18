import React, { Component } from 'react';
import Social from '../social';


class Footer extends Component{
    render(){
        return(
            <div className={`footer`}>
                <Social place="footer"/>
                <div className="footer__info">
                    © {new Date().getFullYear()}, Todos os direitos reservados | Desenvolvido por <a href="https://italofontes.com" target="_blank" rel="noopener noreferrer">Italo Fontes</a>
                </div>
            </div>
        );
    }
}

export default Footer;