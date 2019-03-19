import React, { Component } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Header from '../components/layouts/header'
import Grid, { Column } from '../components/layouts/grid';
import { Link } from 'gatsby';



export default class Projs extends Component{
    render(){
        const fictionalJobs = [];

        for(let i = 0; i < 5; i++){
            fictionalJobs.push(
                <Column column="one-of-four">
                        <div className="job-box">
                            <Link to="/" className="job-box__link">
                                <h3 className="job-box__title">job title</h3>
                                <p className="job-box__desc">asldk lakskc lskjdla ksjd</p>
                            </Link>
                        </div>
                        
                    
                </Column>
            );
        }

        return(
            <Layout>
                <SEO title="Projetos" keywords={[`gatsby`, `application`, `react`]} />
                <Header titlePage="Projetos" />
                
                <div className="u-container-big u-mt-small u-mb-medium">
                    <Grid>
                        {fictionalJobs}
                    </Grid>
                </div>
            </Layout>
        );
    }
}