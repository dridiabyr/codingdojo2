import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BookDetails() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch book details');
        }
        return res.json();
      })
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book:', error));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to borrow this book?')) {
      fetch(`/api/books/${id}`, { method: 'DELETE' })
        .then(() => navigate('/'))
        .catch((error) => console.error('Error deleting book:', error));
    }
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Pages: {book.pages}</p>
      <p>Available: {book.isAvailable ? 'Yes' : 'No'}</p>
      <button onClick={handleDelete}>Borrow</button>
    </div>
  );
}

export default BookDetails;
