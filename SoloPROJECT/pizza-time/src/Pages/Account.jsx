import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!savedUser) {
      navigate('/login');
    } else {  
      setUser(JSON.parse(savedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="p-4">
      {user ? (
        <>
          <h2 className="text-xl font-bold mb-2">Welcome, {user.username}</h2>
          <p>Email: {user.email || "Email not provided"}</p> {/* email may not exist */}
          <button onClick={handleLogout} className="mt-4 bg-red-600 text-white px-4 py-2">
            Logout
          </button>
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default Account;
