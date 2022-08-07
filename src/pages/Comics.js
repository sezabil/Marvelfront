import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Comics() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyMarvelBackend = async () => {
      const response = await axios.get(
        "https://marvel-seza.herokuapp.com/comics"
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
          {data.mainData.results.map((character) => {
            return (
              <Link to="/Comic">
                <div className="fiche">
                  <p className="charactername" key={character._id}>
                    {character.title}
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

                  <p className="characterdescription">
                    {character.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Comics;
