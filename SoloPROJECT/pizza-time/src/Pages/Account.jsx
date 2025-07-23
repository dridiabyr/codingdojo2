import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem('user');

    if (!savedUser) {
      navigate('/login');
    } else {
      navigate('/dashboard'); // Redirect immediately to dashboard
    }
  }, [navigate]);

  return null;
};

export default Account;
