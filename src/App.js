import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  
  const [photos, setPhotos] = useState([]);
 
  useEffect(() => {
  
    fetch(photoUrl)
    .then(res => res.json())
    .then(photos => {
      setPhotos(photos.slice(0, 20))
    });
    return () => {
      
    };
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALBUMS</h1>
        <ul>
        {
          photos.map( photo => 
          <li key={photo.id}>
            <img scr={photo.thumbnailUrl} title = {photo.title} alt={photo.title}/>
          </li>)
        }
        </ul>
      </header>
    </div>
  );
}

export default App;
