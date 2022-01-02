import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, repoLink, deployLink, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer flex-row">
      <h3 className="modalTitle">{name} </h3>
      <a href={repoLink}>Github</a>
      <a href={deployLink}>Live Site</a>
      <p>{description}</p>
        <img
          src={require(`../../assets/images/gallery/${category}/small/${index}.png`)}
          alt="small image"
        />
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;