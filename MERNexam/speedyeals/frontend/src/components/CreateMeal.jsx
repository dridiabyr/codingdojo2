import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateMeal.css';

function CreateMeal() {
  const [formData, setFormData] = useState({
    name: '',
    cookTime: '',
    directions: '',
    ingredients: ['', '', ''],
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
  };

  const removeIngredientField = (index) => {
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/meals', formData)
      .then(() => {
        navigate('/');
      })
      .catch((err) => setErrors(err.response.data.errors || {}));
  };

  return (
    <div>
      <h2>Add the next culinary masterpiece!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dish Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Total Minutes:
          <input
            type="number"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange}
          />
          {errors.cookTime && <p>{errors.cookTime.message}</p>}
        </label>
        <label>
          Directions:
          <textarea
            name="directions"
            value={formData.directions}
            onChange={handleChange}
          />
          {errors.directions && <p>{errors.directions.message}</p>}
        </label>
        <label>
          Ingredients (Optional):
          {formData.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeIngredientField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={addIngredientField}>Add Ingredient</button>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateMeal;
