import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function NoteDetails() {
  const { id } = useParams(); 
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/notes/${id}`);
        setNote(res.data); 
      } catch (err) {
        console.error("Error fetching note:", err);
      }
    };
    fetchNote();
  }, [id]);

  return (
    <div className="container mt-5">
      {note ? (
        <div className="card shadow-lg p-4 mb-4 rounded">
          <h1 className="display-4 mb-4">{note.title}</h1>
          <p className="lead">{note.body}</p>
          <small className="text-muted d-block mb-3">
            Last updated: {new Date(note.updatedAt).toLocaleString()}
          </small>
          <div className="d-flex justify-content-between">
            <button className="btn btn-secondary" onClick={() => navigate("/")}>
              Back to Home
            </button>
            <button className="btn btn-info" onClick={() => navigate(`/notes/${note._id}/edit`)}>
              Edit Note
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default NoteDetails;
