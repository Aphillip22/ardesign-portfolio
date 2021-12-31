import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Dog Dossier',
      category: 'portfolio',
      description:
        'The dog dossier project aims to provide breed-specific information for individuals looking to adopt a new 4-legged family member. Technologies include HTML/CSS/JS, Bootstrap, SQL/Sequelize, Node.js, Express.js'
    },
    {
      name: 'LocalGrub',
      category: 'portfolio',
      description:
        'LocalGrub is a website that appears to be a food delivery service but integrates google API and a text API to allow victims of domestic violence to find local shelters and contact 9-1-1. Technologies include HTML/CSS/JS, Normalize.css, Google Search API, MyText API'
    },
    {
        name: 'AdoptABLE',
        category: 'portfolio',
        description:
          'AdoptABLE is a MERN stack platform that allows victims of domestic violence to create profiles for items/services they need and users to "adopt" families they feel they can assist. Technologies include HTML/CSS/JS, MongoDB/Mongoose, React.js, Node.js, Express.js, Bulma, Websockets, JWT, Stripe API'
    },
    {
        name: 'Front-End',
        category: 'resume',
        description:
          'HTML/CSS/JS, Bootstrap, Normalize, Bulma, client-side API integration, React, Websockets'
    },
    {
        name: 'Back-End',
        category: 'resume',
        description:
          'Node.js, Express.js, SQL, Sequelize, bcrypt, server-side API, database creation & management'
    },
    {
        name: 'MERN Stack',
        category: 'resume',
        description:
          'MongoDB/Mongoose, GraphQl, Postgres, React, Node.js, JSX, JWT'
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
            src={require(`../../assets/images/gallery/${category}/${i}.jpg`).default}
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

export default PhotoList;