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

  // Helper function to validate fields
  const validateField = (name, value) => {
    if (!value) {
      return `${name} is required`;
    }
    if (value.length < 3) {
      return `${name} must be at least 3 characters`;
    }
    return '';
  };

  // Handle changes for regular fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation for regular fields
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  // Handle changes for ingredients
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });

    // Real-time validation for ingredients
    setErrors((prevErrors) => ({
      ...prevErrors,
      ingredients: formData.ingredients.map((ingredient) =>
        validateField('Ingredient', ingredient)
      ),
    }));
  };

  // Add a new ingredient field
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

    // Validate all fields before submitting
    const newErrors = {};
    newErrors.name = validateField('Name', formData.name);
    newErrors.cookTime = validateField('Cook Time', formData.cookTime);
    newErrors.directions = validateField('Directions', formData.directions);
    newErrors.ingredients = formData.ingredients.map((ingredient) =>
      validateField('Ingredient', ingredient)
    );

    setErrors(newErrors);

    // If no errors, submit the form
    if (Object.values(newErrors).every((error) => !error)) {
      axios
        .post('http://localhost:8000/api/meals', formData)
        .then(() => {
          navigate('/');
        })
        .catch((err) => setErrors(err.response.data.errors || {}));
    }
  };

  // Check if form is valid for submission
  const isFormValid = Object.values(errors).every((error) => !error);

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

        <button type="submit" disabled={!isFormValid}>
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateMeal;
