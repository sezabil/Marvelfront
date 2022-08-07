import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Character = () => {
  const { characterId } = useParams();
  const [dataCharacter, setDataCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `https://marvel-seza.herokuapp.com/comics/${characterId}`
        );
        setDataCharacter(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error.message");
      }
    };
    fetchCharacter();
  }, [characterId]);

  return isLoading ? (
    <p>loading</p>
  ) : (
    <div>
      {dataCharacter.mainData.map((comic, index) => {
        return <div>{comic.title}</div>;
      })}
    </div>
  );
};
export default Character;
