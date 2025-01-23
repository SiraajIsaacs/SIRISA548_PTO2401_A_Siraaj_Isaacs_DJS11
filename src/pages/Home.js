import React from 'react';
import PodcastList from '../components/PodcastList';

const Home = ({ onFavorite }) => {
  return (
    <div>
      <PodcastList onFavorite={onFavorite} />
    </div>
  );
};

export default Home;
