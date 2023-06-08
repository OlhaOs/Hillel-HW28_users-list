import './Photos.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../Modal';

export default function Photos({ list }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Link to={'/albums/:userId'}>
        <button className='goBackBtn'>Go back</button>
      </Link>
      <ul className='list albumImages'>
        {list.map(({ id, thumbnailUrl, title}) => (
          <li className='listItem' key={id}>
            <img
              src={thumbnailUrl}
              alt={title}
              onClick={() => openModal(id)}
              className='albumImg'
            />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <Modal onClose={closeModal}>
          <img
            src={list.find(image => image.id === selectedImage).url}
            alt={list.find(image => image.id === selectedImage).title}
            className='albumImgLarge'
          />
        </Modal>
      )}
    </>
  );
}
