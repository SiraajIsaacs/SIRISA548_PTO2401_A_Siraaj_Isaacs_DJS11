import React from 'react';

const Player = ({ audioSrc }) => (
  <audio controls src={"https://podcast-api.netlify.app/placeholder-audio.mp3"}>
    Your browser does not support the audio element.
  </audio>
);

export default Player;
