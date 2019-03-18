import React, { Component } from "react"

export default class Header extends Component {
    
  
  render() {

      return (
        <header className="header">
          <h1 className="header__title">{this.props.titlePage}</h1>
        
        </header>
      );

    }
}