import React, { Component } from 'react';
import { Link } from 'gatsby';
import NavItems from '../../helpers/navigationItems';


export default class NavbarNav extends Component {
    render(){
        return (
            <ul className="navbar__list">
                {
                    NavItems.map(item => (
                        <li className="navbar__li" key={`navbarKey-${item.title}`}>
                            <Link to={item.path} className="navbar__link">{item.title}</Link>
                        </li>
                    ))
                }
            </ul>

        )}
}