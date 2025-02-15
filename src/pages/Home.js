import React, { useState, useEffect } from "react";
import PodcastList from "../components/PodcastList";
import PodcastFilter from "../components/PodcastFilter";
import { fetchPodcasts } from "../api"; // Fetch from API in Home.js

const Home = ({ onFavorite }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
        setFilteredPodcasts(data); // Default: show all
      } catch (err) {
        console.error("Error fetching podcasts:", err);
      }
    };
    getPodcasts();
  }, []);

  return (
    <div>
      <PodcastFilter podcasts={podcasts} onFilter={setFilteredPodcasts} />
      <PodcastList podcasts={filteredPodcasts} onFavorite={onFavorite} />
    </div>
  );
};

export default Home;
