import React from 'react';
import Player from './Player';
const Favorites = ({ favorites = [] }) => {
  if (favorites.length === 0) {
    return <p>No favorites yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.map((fav) => (
        <div key={fav.id}>
          <h3>{fav.title}</h3>
          <img src={fav.image} alt={fav.title} width="200" />
            <p>{fav.description}</p>
            <Player src={"https://pixabay.com/sound-effects/search/random/"} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
