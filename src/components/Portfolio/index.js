import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag" id={currentCategory.name}>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <Project category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;