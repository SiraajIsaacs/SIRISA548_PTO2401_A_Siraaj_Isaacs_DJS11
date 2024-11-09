import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcasts } from '../api';
import Player from '../components/Player';
import '../App.css';


const PodcastPage = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    const getPodcast = async () => {
      const data = await fetchPodcasts();
      const selectedPodcast = data.shows.find(show => show.id === parseInt(id));
      setPodcast(selectedPodcast);
    };
    getPodcast();
  }, [id]);

  return (
    podcast ? (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1>{podcast.title}</h1>
          </div>
          <div className="col-3">
            <img src={podcast.image} alt={podcast.title} style={{ width: '100%' }} />
          </div>
          <div className="col-6">
            <p>{podcast.description}</p>
            <Player audioSrc={podcast.audioUrl} />
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
}

export default PodcastPage;
