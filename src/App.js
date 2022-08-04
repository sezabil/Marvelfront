import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="App">
      <h1>Marvel</h1>

      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <>
          {data.charactData.results.map((character) => {
            return (
              <div className="fiche">
                <p className="charactername" key={character._id}>
                  {character.name}
                </p>

                <p className="characterdescription">{character.description}</p>
                <img
                  className="picturecharacter"
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="Picturecharacter"
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
