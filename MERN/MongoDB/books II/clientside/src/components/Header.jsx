import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">All Books</Link>
      <Link to="/add">Add Book</Link>
    </header>
  );
}

export default Header;
