import React, { Component } from 'react';
import { Link } from 'gatsby';
import Icon from '../elements/icon';
import NavItems from '../../helpers/navigationItems';


export default class MobileNav extends Component{
    render(){
        return(
            <div className="mobileNav">
                <ul className="mobileNav__list">
                    {
                        NavItems.map(button => 
                            <li key={`mv-${button.iconName}`} className="mobileNav__li">
                                <Link to={button.path} className="mobileNav__link" activeClassName="mobileNav__link--active">
                                    <Icon iconName={button.iconName} className="mobileNav__icon"/>
                                    <span className="mobileNav__label">{button.title}</span>
                                </Link>
                            </li>    
                        )
                    }
                </ul>
            </div>
        );
    }
}