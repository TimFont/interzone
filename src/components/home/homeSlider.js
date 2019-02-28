import React, { Component } from 'react';
import { Link }  from 'gatsby';
import slides from '../../helpers/slides';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default class Slider extends Component{

    intervalId = 0;

    constructor(){
        super();
        this.state = {
            currentSlide: slides[0],
            slideCount: 0
        }
        this.changeSlide = this.changeSlide.bind(this);
        this.buttonChange = this.buttonChange.bind(this);
        this.intervalHandler = this.intervalHandler.bind(this);
    }

    componentDidMount(){
        this.intervalHandler("start");
    }

    componentWillUnmount(){
        this.intervalHandler('remove');
    }

    changeSlide(){

        if(this.state.slideCount === slides.length - 1) {

            this.setState({currentSlide: slides[0], slideCount: 0});

        }else{

            let newIndex = this.state.slideCount + 1;
            this.setState({currentSlide : slides[newIndex], slideCount: newIndex});

        }
    }

    buttonChange(e){
        this.intervalHandler('remove');
        const changeTo = parseInt(e.target.dataset.slide);
        this.setState({currentSlide: slides[changeTo], slideCount: changeTo});
        this.intervalHandler('start');

    }

    intervalHandler(action){
        if(action === "start"){

            this.intervalId = window.setInterval(this.changeSlide, 8000);

        }else if(action === "remove"){
          
            window.clearInterval(this.intervalId);

        }
    }

    render(){
        return(
            <div className="homeSlider">
                <TransitionGroup className="homeSlider__container">
                    <CSSTransition
                        timeout={4500}
                        classNames="slide"
                        key={this.state.currentSlide.id}
                    >
                        <div className="homeSlider__data">
                            <h1 className="homeSlider__title">{this.state.currentSlide.slideTitle}</h1>
                            <h3 className="homeSlider__desc">{this.state.currentSlide.slideSubtitle}</h3>
                            <Link to="/sobre" className="btn">Mais info</Link>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <div className="homeSlider__navigation">
                    {
                        slides.map( slide => (
                            <button key={`selector ${slide.id}`}
                                    className={`homeSlider__selector 
                                        ${this.state.currentSlide.id === slide.id ? 'homeSlider__selector--current' : ''}`} 
                                    onClick={this.buttonChange} 
                                    data-slide={slide.id}>
                                    &nbsp;
                            </button>
                        ))
                    }
                </div>
            </div>
        );
    }
}