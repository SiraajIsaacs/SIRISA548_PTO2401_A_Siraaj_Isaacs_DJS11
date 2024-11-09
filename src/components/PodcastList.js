import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPodcasts } from '../api';

const PodcastList = ({ onFavorite }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        console.log("Fetched data:", data);
        if (data && Array.isArray(data)) {
          setPodcasts(data);
          console.log("Setting podcasts:", data);
        } else {
          setError('No podcasts available');
        }
      } catch (err) {
        setError('Failed to load podcasts');
      } finally {
        setLoading(false);
      }
    };
    getPodcasts();
  }, []);

  if (loading) return <p>Loading podcasts...</p>;
  if (error) return <p>{error}</p>;

  console.log("Rendering podcasts:", podcasts);

  return (
    <div>
      <h2>Podcast List</h2>
      {podcasts.length > 0 ? (
        podcasts.map((podcast) => (
          <div key={podcast.id}>
            <Link to={`/podcast/${podcast.id}`}>
              <h3>{podcast.title}</h3>
              </Link>
              <img src={podcast.image} alt={podcast.title} width="200" />
              <p>{podcast.description}</p>
            <button onClick={() => onFavorite(podcast)}>Favorite</button>
          </div>
        ))
      ) : (
        <p>No podcasts found</p>
      )}
    </div>
  );
};

export default PodcastList;
