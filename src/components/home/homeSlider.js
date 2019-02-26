import React, { Component } from 'react';
import { Link }  from 'gatsby';

const slides = [
    {
        slideTitle: 'Te ajudamos a ingressar no mundo digital!',
        slideSubtitle: 'Desenvolvemos produtos inovadorese modernos que trazem resultados',
    },
    {
        slideTitle: 'batata',
        slideSubtitle: 'Desenvolvemos produtos inovadorese modernos que trazem resultados',
    },
    {
        slideTitle: 'cenoura',
        slideSubtitle: 'Desenvolvemos produtos inovadorese modernos que trazem resultados',
    }
];

export default class Slider extends Component{
    constructor(){
        super();

        this.state = {
            currentSlide: slides[0],
            slideCount: 0
        }
        this.changeSlide = this.changeSlide.bind(this);
    }

    componentDidMount(){
        window.setInterval(this.changeSlide, 8000);
    }

    componentWillUnmount(){
        window.clearInterval(this.changeSlide, 8000);
    }

    changeSlide(){
        if(this.state.slideCount === slides.length - 1){
            this.setState({currentSlide: slides[0], slideCount: 0});
        }else{
            let newIndex = this.state.slideCount + 1;
            this.setState({currentSlide : slides[newIndex], slideCount: newIndex});
        }
    }

    render(){
        return(
            <div className="homeSlider">
                <div className="homeSlider__container">
                    <h1 className="homeSlider__title">{this.state.currentSlide.slideTitle}</h1>
                    <h3 className="homeSlider__desc">{this.state.currentSlide.slideSubtitle}</h3>
                    <Link to="/about" className="btn">Mais info</Link>
                </div>
            </div>
        );
    }
}