import React, { useState } from 'react';

// Mapping genre numbers to names
const genreNames = {
  1: "Comedy",
  2: "News",
  3: "Education",
  4: "Technology",
  5: "Health",
};

const PodcastFilter = ({ podcasts, onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleFilterChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    if (genre === "all") {
      onFilter(podcasts);
    } else {
      onFilter(
        podcasts.filter((podcast) =>
          podcast.genres.includes(parseInt(genre))
        )
      );
    }
  };

  // Get unique genres from podcasts and map to names
  const genres = [
    ...new Set(
      podcasts.flatMap((podcast) => podcast.genres)
    ),
  ];

  return (
    <div>
      <label>Filter by Genre:</label>
      <select value={selectedGenre} onChange={handleFilterChange}>
        <option value="all">All</option>
        {genres.map((id) => (
          <option key={id} value={id}>
            {genreNames[id]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PodcastFilter;
