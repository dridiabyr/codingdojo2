// src/Pages/PizzaBuilder.jsx
import React, { useState } from "react";

function PizzaBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    size: "medium",
    vegetarian: false,
    glutenFree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const submitPizza = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/pizzas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to add pizza");

      const data = await response.json();
      alert("Pizza added successfully!");
      console.log("Pizza created:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="pizza-builder">
      <h2>Build Your Pizza</h2>
      <form onSubmit={submitPizza}>
        <div>
          <label>Pizza Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Ingredients (comma-separated):</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Size:</label>
          <select name="size" value={formData.size} onChange={handleChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={formData.vegetarian}
              onChange={handleChange}
            />
            Vegetarian
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="glutenFree"
              checked={formData.glutenFree}
              onChange={handleChange}
            />
            Gluten Free
          </label>
        </div>

        <button type="submit">Add Pizza</button>
      </form>
    </div>
  );
}

export default PizzaBuilder;
