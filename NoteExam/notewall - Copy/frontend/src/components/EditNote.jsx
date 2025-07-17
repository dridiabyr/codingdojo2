import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditNote() {
  const { id } = useParams(); 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/notes/${id}`);
        setTitle(res.data.title);
        setBody(res.data.body);
      } catch (err) {
        console.error("Error fetching note:", err);
      }
    };
    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/notes/${id}`, { title, body });
      navigate("/"); 
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">
        <i className="bi bi-pencil-square"></i> Edit Your Note
      </h2>
      <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded-3 bg-light">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            className="form-control shadow-sm"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-success btn-lg">
            Update Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNote;
