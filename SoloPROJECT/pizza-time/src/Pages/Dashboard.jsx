import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
      return;
    }
    const userObj = JSON.parse(savedUser);
    setUser(userObj);

  
    setLoadingOrders(true);
    fetch(`http://localhost:8000/api/orders/user/${userObj._id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch orders');
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setLoadingOrders(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoadingOrders(false);
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user info here as needed */}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
        {loadingOrders && <p>Loading orders...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loadingOrders && orders.length === 0 && <p>No orders found.</p>}
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="border p-2 mb-2 rounded">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.quantity} x {item.pizzaType || item.pizzaName || 'Pizza'}
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ${order.total?.toFixed(2) || '0.00'}</p>
            </li>
          ))}
        </ul>
      </section>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
