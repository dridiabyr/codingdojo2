import { Link } from 'react-router-dom';

const Header = () => (
  <header className="w-full bg-red-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold tracking-wide">🍕 Pizza Time</h1>
    <nav className="space-x-6 text-lg">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/build" className="hover:underline">Build</Link>
      <Link to="/summary" className="hover:underline">Summary</Link>
      <Link to="/account" className="hover:underline">Account</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/register" className="hover:underline">Register</Link>
    </nav>
  </header>
);

export default Header;
