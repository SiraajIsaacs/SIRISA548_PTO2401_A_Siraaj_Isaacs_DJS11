import React from 'react';

const Summary = ({ podcasts }) => (
  <div>
    <h2>All Podcasts Summary</h2>
    {podcasts.map(podcast => (
      <div key={podcast.id}>
        <h3>{podcast.title}</h3>
        <p>{podcast.description}</p>
      </div>
    ))}
  </div>
);

export default Summary;
