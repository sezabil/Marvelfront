//import:
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Characters() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://marvel-seza.herokuapp.com/characters?name=${search}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [search]);

  return (
    <div className="App">
      {isLoading === true ? (
        <h2>En cours de chargement</h2>
      ) : (
        <>
          <div>
            <h1>Characters</h1>
            <img src="" alt="" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(event) => {
                setsearch(event.target.value);
              }}
            />
          </div>
          {data.charactData.results.map((element, index) => {
            return (
              <Link to={`comics/${element._id}`}>
                <div className="fiche">
                  <p className="charactername" key={index}>
                    {element.name}
                  </p>

                  <img
                    className="picturecharacter"
                    src={
                      element.thumbnail.path + "." + element.thumbnail.extension
                    }
                    alt="Picturecharacter"
                  />

                  <p className="characterdescription">{element.description}</p>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Characters;
