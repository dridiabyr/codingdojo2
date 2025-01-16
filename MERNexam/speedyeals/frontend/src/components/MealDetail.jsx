

import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MealDetails.css'

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/meals/${id}`)
      .then((res) => setMeal(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div>
      <h2>{meal.name} recipe</h2>
      <p><strong>Cook Time:</strong> {meal.cookTime} minutes</p>
      <p><strong>Ingredients:</strong> {meal.ingredients.join(', ')}</p>
      <p><strong>Directions:</strong> {meal.directions}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MealDetails;