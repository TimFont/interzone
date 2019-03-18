import React from 'react';
import Grid from '../../layouts/grid';
import FeatureCard from '../featureCard';
import homeCards from '../../../helpers/homeCards';

const CardsSection = (props) => (
    <section className="home-section home-section--cards">
    <div className="u-container-big">
      <h1 className="section-title">Caracteristicas dos produtos:</h1>
      <div className="u-mt-medium u-mb-medium">
        <Grid>
            {
                homeCards.map(card => (
                    <FeatureCard cardInfo={card} />
                ))
            }
        </Grid>
      </div>
    </div>
  </section>
);

export default CardsSection;