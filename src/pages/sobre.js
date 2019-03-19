import React, { Component } from 'react';
import Layout from '../components/layout';
import Header from '../components/layouts/header'
import SEO from '../components/seo';
import Grid, { Column } from '../components/layouts/grid';

export default class About extends Component{
    render(){
        return(
            <Layout>
                <SEO title="Sobre" keywords={[`gatsby`, `application`, `react`]} />
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
                    <div className="u-container-big">
                        <Grid>
                            <Column column="one-of-three">
                                <div className="card card--mvv">
                                    <div className="card__mvv-title-container">
                                        <h3 className="card__mvv-title">Missão</h3>
                                    </div>
                                    <p className="card__mvv-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et</p>
                                </div>
                            </Column>
                            <Column column="one-of-three">
                                <div className="card card--mvv">
                                    <div className="card__mvv-title-container">
                                        <h3 className="card__mvv-title">Visão</h3>
                                    </div>
                                    <p className="card__mvv-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et</p>
                                </div>
                            </Column>
                            <Column column="one-of-three">
                                <div className="card card--mvv">
                                    <div className="card__mvv-title-container">
                                        <h3 className="card__mvv-title">Valores</h3>
                                    </div>
                                    <p className="card__mvv-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacinia ligula, in efficitur urna mattis quis. Donec rhoncus lorem tortor, et</p>
                                </div>
                            </Column>
                        </Grid>
                    </div>
                </section>
            </Layout>
        );
    }
}