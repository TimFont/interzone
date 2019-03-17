import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class JobGrid extends Component {
    constructor(props){
        super(props);

        this.renderJobs = this.renderJobs.bind(this);
    }

    renderJobs(){
        const jobCards = [];

        for(let c = 0; c < 4; c++){
            jobCards.push(
                <div className="jobCard">
                    <div className="jobCard__img">
                    </div>
                    <div className="jobCard__info">
                        <Link to="/" className="jobCard__link">
                            <h3 className="jobCard__title">
                                Job title
                            </h3>
                        </Link>
                        <p className="jobCard__desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </div>
                </div>
            );
        }

        return jobCards;
    }

    render(){
        const jobCards = this.renderJobs();

        return (
            <div className="jobGrid">
                <div className="jobGrid__cards">
                    { jobCards }
                </div>
                <div className="jobGrid__more">
                    <div className="jobGrid__dots">&nbsp;</div>
                    <Link className="btn" to="/sobre">Mais</Link>
                </div>
            </div>
        );
    }


}