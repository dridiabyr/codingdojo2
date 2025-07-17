import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meals from the backend
    axios.get('http://localhost:8000/api/meals')
      .then((res) => setMeals(res.data))
      .catch((err) => console.error("Error fetching meals:", err));
  }, []);

  const deleteMeal = (id) => {
    axios.delete(`http://localhost:8000/api/meals/${id}`)
      .then(() => {
        // Use functional form to update meals to ensure state is updated properly
        setMeals((prevMeals) => prevMeals.filter((meal) => meal._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting meal:", err);
        // Optionally, you can show an error message to the user
      });
  };

  return (
    <div>
      <h2>Find inspiration with these delicious meals!</h2>
      <Link to="/meals/new">Add a Meal</Link>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Prep Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {meals.length > 0 ? (
            meals.map((meal) => (
              <tr key={meal._id}>
                <td>{meal.name}</td>
                <td>{meal.cookTime}</td>
                <td>
                  <Link to={`/meals/${meal._id}`}>Details</Link> | 
                  <Link to={`/meals/${meal._id}/edit`}>Edit</Link> | 
                  <button onClick={() => deleteMeal(meal._id)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No meals found. Add a meal to start.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
