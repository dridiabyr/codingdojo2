import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (!savedUser) {
        navigate('/login');
      } else {
        setUser(savedUser);
      }
    } catch (err) {
      console.error('Invalid user data in localStorage',err);
      localStorage.removeItem('user');
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {user ? (
          <>
            <div className="mb-6">
              <p className="text-lg"><strong>Username:</strong> {user.username}</p>
              <p className="text-lg"><strong>Email:</strong> {user.email}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Recent Orders</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Order #12345 - Pizza Margherita - $12.99</li>
                <li>Order #12344 - Pepperoni Pizza - $14.50</li>
              </ul>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
            >
              Logout
            </button>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
