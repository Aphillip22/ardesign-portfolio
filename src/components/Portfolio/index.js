import React from 'react';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';

function Portfolio({ currentCategory }) {
  const { name, description, repoLink, deployLink } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag" id={currentCategory.name}>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <a href={repoLink}></a>
      <a href={deployLink}></a>
      <Project category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;