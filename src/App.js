import "./App.css";

//import axios
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import de mes pages:
import Comics from "./pages/Comics";
import Home from "./pages/Home";
import Header from "./components/header";
import Characters from "./pages/Characters";
import Character from "./pages/Character";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;
