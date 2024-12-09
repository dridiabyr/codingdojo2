import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null); 
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        return response.json();
      })
      .then((data) => setCharacter(data)) 
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>Failed to load character details.</p>;


  if (!character) return <p>Loading...</p>;


  return (
    <div>
      <h1>Character Details</h1>
      <h2>{character.name}</h2>
      <p>
        <strong>Height:</strong> {character.height}
      </p>
      <p>
        <strong>Mass:</strong> {character.mass}
      </p>
      <p>
        <strong>Hair Color:</strong> {character.hair_color}
      </p>
      <p>
        <strong>Skin Color:</strong> {character.skin_color}
      </p>
    </div>
  );
};

export default Character;
