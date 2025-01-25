import React from 'react';
import Player from './Player';
const Favorites = ({ favorites = [] }) => {
  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="container">
        <div className="row">
          {favorites.map((fav) => (
            <div key={fav.id} className="col-4">
              <div className="podcast-card">
                <h3>{fav.title}</h3>
                <img 
                  src={fav.image} 
                  alt={fav.title} 
                  style={{ width: '100%' }} 
                />
                <p>{fav.description}</p>
                <Player audioSrc={"https://podcast-api.netlify.app/placeholder-audio.mp3"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
