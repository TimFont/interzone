import React from 'react';
import AdvIllu from '../advIllu';
import { Link } from 'gatsby';
import Grid, { Column } from '../../layouts/grid';

const AdvSection = (props) => (
    <section className="home-section home-section--adv">
    <div className="u-container-big">
      <Grid>
        <Column column="one-of-two" additional="u-relative flex flex-j-end">
          <AdvIllu />
        </Column>
        <Column column="one-of-two" >
          <div className="adv-content">
              <h1 className="section-title adv-content__title">Por que estar presente na internet?</h1>
              <p className="desc-text adv-content__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue justo sed purus dapibus, ac porttitor felis faucibus. Cras orci lorem, fringilla eu mollis in, iaculis a risus. Etiam convallis massa vitae bibendum tempor.</p>
              <ul className="adv-content__list">
                <li className="adv-content__item">- Lorem ipsum</li>
                <li className="adv-content__item">- Lorem ipsum</li>
                <li className="adv-content__item">- Lorem ipsum</li>
              </ul>
              <Link to="/contato" className="btn">Entrar em contato</Link>
          </div>
        </Column>
      </Grid>
    </div>
  </section>
);

export default AdvSection;