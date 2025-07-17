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

  // Simple validation function for required fields
  const validateField = (name, value) => {
    if (!value) {
      return `${name} is required`;
    }
    if (name === 'name' && value.length < 3) {
      return `${name} must be at least 3 characters`;
    }
    return '';
  };

  // Handle regular input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // Handle ingredient input changes
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });

    setErrors((prevErrors) => ({
      ...prevErrors,
      ingredients: formData.ingredients.map((ingredient) =>
        validateField('Ingredient', ingredient)
      ),
    }));
  };

  // Add an ingredient field
  const addIngredientField = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] });
  };

  // Remove an ingredient field
  const removeIngredientField = (index) => {
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    newErrors.name = validateField('Name', formData.name);
    newErrors.cookTime = validateField('Cook Time', formData.cookTime);
    newErrors.directions = validateField('Directions', formData.directions);
    newErrors.ingredients = formData.ingredients.map((ingredient) =>
      validateField('Ingredient', ingredient)
    );

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      const mealData = {
        name: formData.name,
        cookTime: formData.cookTime,
        directions: formData.directions,
        ingredients: formData.ingredients.filter((ingredient) => ingredient.trim() !== ''),
      };

      console.log('Submitting form data:', mealData);

      // POST request to backend
      axios
        .post('http://localhost:8000/api/meals', mealData)
        .then((response) => {
          console.log('Meal created successfully:', response.data);
          navigate('/'); // Redirect after successful submission
        })
        .catch((err) => {
          console.error('Error creating meal:', err);
          setErrors(err.response?.data?.errors || {});
        });
    }
  };

  return (
    <div>
      <h2>Add a Meal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Dish Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </label>

        <label>
          Total Minutes:
          <input
            type="number"
            name="cookTime"
            value={formData.cookTime}
            onChange={handleChange}
            className={errors.cookTime ? 'input-error' : ''}
          />
          {errors.cookTime && <p className="error-message">{errors.cookTime}</p>}
        </label>

        <label>
          Directions:
          <textarea
            name="directions"
            value={formData.directions}
            onChange={handleChange}
            className={errors.directions ? 'input-error' : ''}
          />
          {errors.directions && <p className="error-message">{errors.directions}</p>}
        </label>

        <label>
          Ingredients (Optional):
          {formData.ingredients.map((ingredient, index) => (
            <div key={index}>
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className={errors.ingredients && errors.ingredients[index] ? 'input-error' : ''}
              />
              <button type="button" onClick={() => removeIngredientField(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addIngredientField}>
            Add Ingredient
          </button>
        </label>

        <button type="submit" disabled={Object.values(errors).some((err) => err)}>
          Create Meal
        </button>
      </form>
    </div>
  );
}

export default CreateMeal;
