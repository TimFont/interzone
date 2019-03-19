import React from 'react';
import JobGrid from '../jobGrid';

const JobSection = (props) => (
    <section className="job-section">
    <div className="container-big">
      <h1 className="section-title">Ultimos trabalhos</h1>
      <JobGrid />
    </div>
  </section>
);

export default JobSection;