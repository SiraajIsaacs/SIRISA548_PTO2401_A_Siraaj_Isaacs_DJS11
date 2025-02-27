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
        if (data && Array.isArray(data)) {
          const selectedPodcast = data.find(podcast => podcast.id === id);
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

  // Date formatting
  const lastUpdated = podcast.updated ? new Date(podcast.updated).toLocaleDateString() : "Unknown";

  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      <img src={podcast.image} alt={podcast.title} width="300" />
      <h4>Last Updated: {lastUpdated}</h4>
      <h3>Listen to this Episode</h3>
      <audio controls>
        <source src="https://podcast-api.netlify.app/placeholder-audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastDetail;
