import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './styles/card.css'
function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/notes").then((res) => setNotes(res.data));
  }, []);

  const deleteNote = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await axios.delete(`http://localhost:8000/api/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Note Wall </h1>
        <p> Leave a not</p>
        <Link to="/notes/new" className="create-note-button">
          + Write Note
        </Link>
      </header>

      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note._id} className="note-card">
            <div className="note-image">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Note preview"
              />
            </div>
            <div className="note-content">
              <h2 className="note-title">{note.title}</h2>
              <p className="note-body">
                {note.body.length > 100
                  ? `${note.body.substring(0, 100)}...`
                  : note.body}
              </p>
              <div className="note-actions">
                <Link to={`/notes/${note._id}/details`} className="action-button view">
                  View
                </Link>
                <Link to={`/notes/${note._id}/edit`} className="action-button edit">
                  Edit
                </Link>
                <button
                  onClick={() => deleteNote(note._id)}
                  className="action-button delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
