import React, { useState } from 'react';
import Modal from '../Modal';

const Project = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Dog Dossier',
      category: 'portfolio',
      description:
        'The dog dossier project aims to provide breed-specific information for individuals looking to adopt a new 4-legged family member. Technologies include HTML/CSS/JS, Bootstrap, SQL/Sequelize, Node.js, Express.js',
      repoLink: 'https://github.com/JD-Rowley/dog-dossier.git',
      deployLink: 'https://the-dog-dossier.herokuapp.com/'
    },
    {
      name: 'LocalGrub',
      category: 'portfolio',
      description:
        'LocalGrub is a website that appears to be a food delivery service but integrates google API and a text API to allow victims of domestic violence to find local shelters and contact 9-1-1. Technologies include HTML/CSS/JS, Normalize.css, Google Search API, MyText API',
      repoLink: 'https://github.com/Gelenhaus/groupProject1.git',
      deployLink: 'https://gelenhaus.github.io/groupProject1/'
    },
    {
      name: 'AdoptABLE',
      category: 'portfolio',
      description:
          'AdoptABLE is a MERN stack platform that allows victims of domestic violence to create profiles for items/services they need and users to "adopt" families they feel they can assist. Technologies include HTML/CSS/JS, MongoDB/Mongoose, React.js, Node.js, Express.js, Bulma, Websockets, JWT, Stripe API',
      repoLink: 'https://github.com/austinxewell/adoptable.git',
      deployLink: 'https://adoptable-dv.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      category: 'portfolio',
      description:
          'Run Buddy is a front-end application that provides users access to personal trainers who can guide them in their health and fitness journey. Technologies include HTML/CSS, Javascript',
      repoLink: 'https://github.com/Aphillip22/run-buddy.git',
      deployLink: 'https://aphillip22.github.io/run-buddy/'
    },
    {
      name: 'Budget Tracker',
      category: 'portfolio',
      description:
          'A full service, secure, budget tracker to maintain and manage financial security. Technologies include HTML/CSS/JS, PWA, Service Workers, MongoDB, Atlas/Heroku',
      repoLink: 'https://github.com/Aphillip22/budget-tracker.git',
      deployLink: 'https://still-journey-51342.herokuapp.com/'
    },
    {
      name: 'Weather Dashboard',
      category: 'portfolio',
      description:
          'A full-stack, robust, weather dashboard providing single day details and a 5-day forecast using API integration. Technologies include Javascript, HTML/CSS, JQuery, Openweather API, Moment.js',
      repoLink: 'https://github.com/Aphillip22/weather-dashboard.git',
      deployLink: 'https://aphillip22.github.io/weather-dashboard/'
    },
    {
      name: 'I Am Woman',
      category: 'artwork',
      description:
          'Colored pencil sketchwork using Prismacolor Premier pencils'
    },
    {
      name: 'Daughters',
      category: 'artwork',
      description:
        'Graphite pencil portrait using mechanical pencil #2'
    },
    {
      name: 'Grandfather',
      category: 'artwork',
      description:
        'Graphite pencil portrait using mechanical pencil #2'
    },
    {
      name: 'Egret',
      category: 'artwork',
      description:
        'Acrylic painting on canvas using Liquitex Basics'
    },
    {
      name: 'Legend of Zelda',
      category: 'artwork',
      description:
        'Custom graphite pencil sketchwork for tattoo using Arteza Expert drawing set'
    },
    {
        name: 'The Emperor',
        category: 'artwork',
        description:
          'Graphite pencil sketchwork using Arteza Expert drawing set'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/gallery/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;