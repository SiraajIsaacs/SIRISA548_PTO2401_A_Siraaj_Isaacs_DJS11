import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { fetchPreviews } from "./services/api";
import ShowPreviewList from "./components/ShowPreviewList";
import ShowDetail from "./components/ShowDetail"; // new component for podcast detail

const App = () => {
    const [previews, setPreviews] = useState([]);

    useEffect(() => {
        fetchPreviews().then(setPreviews);
    }, []);

    return (
        <Router>
            <div className="container">
                <h1>Podcast App</h1>
                <Routes>
                    <Route path="/" element={<ShowPreviewList previews={previews} />} />
                    <Route path="/show/:id" element={<ShowDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
