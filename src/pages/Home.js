import React from 'react';
import PodcastList from '../components/PodcastList';

const Home = ({ onFavorite }) => {
  return (
    <div>
      <h1>Podcast App</h1>
      <PodcastList onFavorite={onFavorite} />
    </div>
  );
};

export default Home;
