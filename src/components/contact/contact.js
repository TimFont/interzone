import React, { Component } from 'react';
import Icon from '../elements/icon';

export default class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            name:'',
            subject:'',
            message:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(ev){
        ev.preventDefault();
        if(!this.state.name){
            alert("digite seu nome");
        }else {
            alert(`obrigado ${this.state.name} por sua mensagem`);
        }
    }

    handleChange(ev){
        this.setState({[ev.target.name] : ev.target.value});
    }

    render(){

        return (
            <div className="contact">
                <h1 className="section-title">Entrar em contato</h1>
                <div className="contact__content">
                    <div className="contact__left">
                        <form className="contact__form" onSubmit={this.handleSubmit}>
                            <div className="contact__form-group">
                                <input value={this.state.email} onChange={this.handleChange} type="email" id="form-email" name="email" placeholder="Email" />
                            </div>
                            <div className="contact__form-group">
                                <input value={this.state.name} onChange={this.handleChange} type="text" id="form-name" name="name" placeholder="Nome" />
                            </div>
                            <div className="contact__form-group">
                                <input value={this.state.subject} onChange={this.handleChange} type="text" id="form-subject" name="subject" placeholder="Assunto" />
                            </div>
                            <div className="contact__form-group">
                                <textarea value={this.state.message} onChange={this.handleChange} id="form-text" name="message" placeholder="Mensagem"></textarea>
                            </div>
                            <input type="submit" className="btn contact__submit" value="Enviar" />
                            
                        </form>
                    </div>
                    <div className="contact__right">
                        <p className="contact__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel viverra lorem. Nullam vitae lectus non lorem bibendum blandit nec id ex. </p>
                        <div className="contact__info">
                            <div className="contact__email">
                                <Icon iconName="mail" className="contact__icon contact__icon--email" />
                                <span className="contact__info-value contact__info-value--email">Email@email.com</span>
                            </div>
                            <div className="contact__phone">
                                <Icon iconName="contact" className="contact__icon contact__icon--phone" />
                                <span className="contact__info-value contact__info-value--phone">(11) 1234-1234</span>
                            </div>
                        

                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}
