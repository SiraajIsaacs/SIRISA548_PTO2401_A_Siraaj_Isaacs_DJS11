import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './components/Favorites';
import PodcastDetail from './components/PodcastDetail';
import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (podcast) => {
    if (!favorites.some(fav => fav.id === podcast.id)) {
      setFavorites([...favorites, podcast]);
    }
  };

  return (
    <Router>
      <nav className="nav-bar">
        <h1>Podcast App</h1>
          <div className="navi">
            <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home onFavorite={handleFavorite} />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        <Route path="/podcast/:id" element={<PodcastDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
