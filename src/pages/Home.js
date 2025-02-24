import React, { useState, useEffect } from 'react';
import PodcastList from '../components/PodcastList';
import PodcastFilter from '../components/PodcastFilter';
import { fetchPodcasts } from '../api';

const Home = ({ onFavorite }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    const getPodcasts = async () => {
      const data = await fetchPodcasts();
      setPodcasts(data);
      setFilteredPodcasts(data);
    };
    getPodcasts();
  }, []);

  // Filter handler
  const handleFilter = (filtered) => {
    setFilteredPodcasts(filtered);
  };

  return (
    <div>
      <PodcastFilter podcasts={podcasts} onFilter={handleFilter} />
      <PodcastList podcasts={filteredPodcasts} onFavorite={onFavorite} />
    </div>
  );
};

export default Home;
