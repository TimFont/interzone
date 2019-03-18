import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/layouts/header'

export default class About extends Component{
    render(){
        return(
            <Layout>
                <Header titlePage="sobre" />
                <section className="desc-section">
                    <div className="desc-section__left">
                        <h2 className="desc-section__quote">"Alguma frase inspiradora"</h2>
                    </div>
                    <div className="desc-section__right">
                        <p className="desc-section__presentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et tempus velit imperdiet sed. Fusce orci nunc,</p>
                    </div>
                </section>

                <section className="mvv-section">
                    <div className="mvv">
                        <div className="mvv__card">
                            <div className="mvv__card-linear">
                                <h3 className="mvv__card-title">Missão</h3>
                            </div>
                            <p className="mvv__text"></p>
                        </div>
                        <div className="mvv__card">
                            <div className="mvv__card-linear">
                                <h3 className="mvv__card-title">Missão</h3>
                            </div>
                            <p className="mvv__text"></p>
                        </div>
                        <div className="mvv__card">
                            <div className="mvv__card-linear">
                                <h3 className="mvv__card-title">Missão</h3>
                            </div>
                            <p className="mvv__text"></p>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}