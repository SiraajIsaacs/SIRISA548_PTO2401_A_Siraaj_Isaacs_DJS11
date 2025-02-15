import React, { useState } from 'react';

const PodcastFilter = ({ podcasts, onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleFilterChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    if (genre === "all") {
      onFilter(podcasts);
    } else {
      onFilter(podcasts.filter((podcast) => podcast.genre === genre));
    }
  };

  const genres = [...new Set(podcasts.map((podcast) => podcast.genre))];

  return (
    <div>
      <label>Filter by Genre:</label>
      <select value={selectedGenre} onChange={handleFilterChange}>
        <option value="all">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PodcastFilter;
