import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NotesContext"; 
import './styles/new.css'; 

const CreateNote = () => {
  const { addNote } = useNotes();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    value: 1,
  });
  const [errors, setErrors] = useState({
    title: "",
    body: "",
    value: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    setErrors({
      title: "",
      body: "",
      value: "",
    });

    let isValid = true;
    let newErrors = { ...errors };

    // Validate Title: should be at least 2 characters long
    if (!formData.title) {
      newErrors.title = "Title is required!";
      isValid = false;
    } else if (formData.title.length < 2) {
      newErrors.title = "Title should be at least 2 characters!";
      isValid = false;
    }

    // Validate Body: should not exceed 25 characters
    if (!formData.body) {
      newErrors.body = "Body is required!";
      isValid = false;
    } else if (formData.body.length > 25) {
      newErrors.body = "Body should be at most 25 characters!";
      isValid = false;
    }

    // Validate Value: should be between 1 and 10
    if (formData.value < 1 || formData.value > 10) {
      newErrors.value = "Value should be between 1 and 10!";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    try {
      await addNote(formData);
      navigate("/"); 
    } catch (err) {
      console.error("Error creating note:", err);
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "Failed to create the note. Please try again.",
      }));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0 p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center text-primary mb-4">
          <i className="bi bi-pencil-square"></i> Create a New Note
        </h2>
        <p className="text-center text-muted mb-4">Write a note!</p>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-control shadow-sm ${errors.title ? 'is-invalid' : ''}`}
              placeholder="Enter title"
              required
            />
            {errors.title && <div className="text-danger">{errors.title}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Body</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className={`form-control shadow-sm ${errors.body ? 'is-invalid' : ''}`}
              placeholder="Enter note content"
              rows="5"
              required
            />
            {errors.body && <div className="text-danger">{errors.body}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="value" className="form-label">Value (1 to 10)</label>
            <input
              type="number"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
              className={`form-control shadow-sm ${errors.value ? 'is-invalid' : ''}`}
              min="1"
              max="10"
              required
            />
            {errors.value && <div className="text-danger">{errors.value}</div>}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg">
              <i className="bi bi-check-circle me-2"></i> Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
