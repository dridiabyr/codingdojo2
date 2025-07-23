import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pizzaMap = {
  "Classic Margherita": "64a1b0c3d8f4e324f4a1a111",
  "Spicy Pepperoni": "64a1b0c3d8f4e324f4a1a112",
  "Truffle Mushroom": "64a1b0c3d8f4e324f4a1a113",
};

const priceMap = {
  "Classic Margherita": 10.99,
  "Spicy Pepperoni": 12.99,
  "Truffle Mushroom": 14.99,
};

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pizzaType: "Classic Margherita",
    quantity: 1,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token"); 

    if (!token) {
      setLoading(false);
      setError("You must be logged in to place an order");
      return;
    }

    // Calculate total price based on pizza type and quantity
    const totalPrice = priceMap[formData.pizzaType] * Number(formData.quantity);

    // Construct order payload as expected by backend
    const orderPayload = {
      name: formData.name,
      address: formData.address,
      items: [
        {
          pizzaId: pizzaMap[formData.pizzaType],
          quantity: Number(formData.quantity),
        },
      ],
      total: totalPrice,
    };

    try {
      const response = await fetch("http://localhost:8000/api/orders", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify(orderPayload),
      });

      if (!response.ok) throw new Error("Failed to submit order");

      const result = await response.json();
      setLoading(false);
      navigate("/order-summary", { state: { order: result } });
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="order-page">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <input name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Pizza Type:
          <select name="pizzaType" value={formData.pizzaType} onChange={handleChange}>
            <option value="Classic Margherita">Classic Margherita</option>
            <option value="Spicy Pepperoni">Spicy Pepperoni</option>
            <option value="Truffle Mushroom">Truffle Mushroom</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Order;
