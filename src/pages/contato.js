import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/layouts/header'
import SEO from '../components/seo';
import Contato from '../components/contact/contact';

export default class Contact extends Component{
    render(){
        return(
            <Layout>
                <SEO title="Contato" keywords={[`gatsby`, `application`, `react`]} />
                <Header titlePage="Contato" />
                <div className="contato__container">
                    <Contato />
                </div>
            </Layout>
        );
    }
}