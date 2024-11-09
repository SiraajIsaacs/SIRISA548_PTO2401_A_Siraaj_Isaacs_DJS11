import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcasts } from '../api';

const PodcastDetail = () => {
  const { id } = useParams(); 
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPodcast = async () => {
      try {
        const data = await fetchPodcasts();
        if (data && data.podcasts) {
          const selectedPodcast = data.podcasts.find(podcast => podcast.id === id);
          if (selectedPodcast) {
            setPodcast(selectedPodcast);
          } else {
            setError('Podcast not found');
          }
        } else {
          setError('No podcasts available');
        }
      } catch (err) {
        setError('Failed to load podcast details');
      }
    };
    getPodcast();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!podcast) return <p>Loading podcast details...</p>;

  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <img src={podcast.image} alt={podcast.title} width="300" />
    </div>
  );
};

export default PodcastDetail;
