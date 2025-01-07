import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch books');
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      fetch(`/api/books/${id}`, { method: 'DELETE' })
        .then(() => setBooks(books.filter((book) => book._id !== id)))
        .catch((error) => console.error('Error deleting book:', error));
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <Link to={`/book/${book._id}`}>View Details</Link>
                <button onClick={() => deleteBook(book._id)}>Borrow</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBooks;
