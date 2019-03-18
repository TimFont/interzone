import React, { Component } from 'react';

export default class Grid extends Component {
    render(){
        return(
            <div className="grid">
                {this.props.children}
            </div>
        );
    }
}

export class Column extends Component {
    render(){
        return(
            <div className={`col-${this.props.column} ${this.props.additional ? this.props.additional : ''}`}>
                {this.props.children}
            </div>
        );
    }
}