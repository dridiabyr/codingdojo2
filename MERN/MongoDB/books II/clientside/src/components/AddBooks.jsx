import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, author, pages: Number(pages), isAvailable };

    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then((res) => {
        if (res.ok) {
          navigate('/');
        } else {
          console.error('Failed to add book');
        }
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
          required
        />
        <label>
          Available:
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
