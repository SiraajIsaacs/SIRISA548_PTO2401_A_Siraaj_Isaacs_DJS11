import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPodcasts } from '../api';

const PodcastList = ({ onFavorite }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Page state
  const podcastsPerPage = 12; // Number of podcasts per page

  useEffect(() => {
    const getPodcasts = async () => {
      try {
        const data = await fetchPodcasts();
        console.log("Fetched data:", data);
        if (data && Array.isArray(data)) {
          setPodcasts(data);
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

  // Helper function to truncate descriptions
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : description;
  };

  if (loading) return <p>Loading podcasts...</p>;
  if (error) return <p>{error}</p>;

  // Calculate indexes for current podcasts
  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = podcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);

  // Calculate total number of pages
  const totalPages = Math.ceil(podcasts.length / podcastsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Podcast List</h2>
      {currentPodcasts.length > 0 ? (
        <div className="podcast-grid">
          {currentPodcasts.map((podcast) => (
            <div key={podcast.id} className="podcast-card">
              <Link to={`/podcast/${podcast.id}`}>
                <h3>{podcast.title}</h3>
              </Link>
              <img src={podcast.image} alt={podcast.title} width="200" />
              <p>{truncateDescription(podcast.description, 20)}</p>
              <button onClick={() => onFavorite(podcast)}>Favorite</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No podcasts found</p>
      )}

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PodcastList;
