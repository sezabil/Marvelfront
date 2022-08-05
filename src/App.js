import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Comics from "./Comics";
import Home from "./Home";
import Header from "./header";
import Comic from "./Comic";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyMarvelBackend = async () => {
      const response = await axios.get(
        "https://marvel-seza.herokuapp.com/characters"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchMyMarvelBackend();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic" element={<Comic />} />
      </Routes>
    </Router>
  );
}

export default App;
