import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
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

                <img
                  className="picturecharacter"
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="Picturecharacter"
                />

                <p className="characterdescription">{character.description}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
