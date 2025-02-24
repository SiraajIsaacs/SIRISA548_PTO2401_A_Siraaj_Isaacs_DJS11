import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Genre mappings
const genreNames = {
  1: "Comedy",
  2: "News",
  3: "Education",
  4: "Technology",
  5: "Health",
};

const PodcastList = ({ podcasts, onFavorite }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 12;

  // Helper function to truncate descriptions
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : description;
  };

  // Calculate indexes for current podcasts
  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = podcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);

  // Calculate total pages
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
              <p>
                <strong>Genres: </strong>
                {podcast.genres.map((genreId) => genreNames[genreId]).join(", ")}
              </p>
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
