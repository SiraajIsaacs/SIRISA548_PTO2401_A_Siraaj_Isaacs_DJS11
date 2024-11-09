import React from 'react';
import Favorites from '../components/Favorites';

const FavoritesPage = ({ favorites }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <Favorites favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
