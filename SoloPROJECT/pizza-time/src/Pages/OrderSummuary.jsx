import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [order, setOrder] = useState(location.state?.order || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!order && orderId) {
      setLoading(true);
      fetch(`http://localhost:8000/api/orders/${orderId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch order");
          return res.json();
        })
        .then((data) => {
          setOrder(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [order, orderId]);

  if (loading) return <p>Loading order...</p>;
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );

  if (!order)
    return (
      <div>
        <h2>No order found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Thank you for your order, {order.name || "Customer"}!</p>
      <p>Order ID: {order._id || order.id}</p>
      <p>Delivery Address: {order.address || "N/A"}</p>

      <h3>Items Ordered:</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.quantity} x {item.pizzaType || item.pizzaName || "Pizza"}
          </li>
        ))}
      </ul>

      <p><strong>Total: ${order.total?.toFixed(2) || "0.00"}</strong></p>
    </div>
  );
};

export default OrderSummary;
