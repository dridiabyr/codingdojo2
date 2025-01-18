import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create context
export const NotesContext = createContext();

// Custom hook to use the context
export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesContextProvider");
  }
  return context;
};

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const addNote = async (newNote) => {
    try {
      await axios.post("http://localhost:8000/api/notes", newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]);  
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const updateNote = async (id, updatedNote) => {
    try {
      await axios.put(`http://localhost:8000/api/notes/${id}`, updatedNote);
      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, fetchNotes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
