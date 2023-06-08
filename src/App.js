import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';

import './App.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  const handleAlbumBtnClick = id => {
    fetch(`${BASE_URL}/albums?userId=${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setPhotos([]);
      });
  };

  const handlePhotosBtnClick = id => {
    fetch(`${BASE_URL}/photos?albumId=${id}`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);

      });
  };

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={<Users list={users} handleClick={handleAlbumBtnClick} />}
        />
        <Route
          path='/albums/:userId'
          element={<Albums list={albums} handleClick={handlePhotosBtnClick} />}
        />
        <Route path='/photos/:albumId' element={<Photos list={photos} />} />
      </Routes>
    </div>
  );
}

export default App;
