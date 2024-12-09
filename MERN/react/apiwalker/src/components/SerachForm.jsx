import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [id, setId] = useState('');
  const [resource, setResource] = useState('people');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      navigate(`/${resource}/${id}`);
    }
  };

  return (
    <div>
      <h2>Search Form</h2>
      <form onSubmit={handleSubmit}>
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter ID"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
