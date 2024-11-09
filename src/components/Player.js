import React from 'react';

const Player = ({ audioSrc }) => (
  <audio controls src={"https://pixabay.com/sound-effects/search/random/"}>
    Your browser does not support the audio element.
  </audio>
);

export default Player;
