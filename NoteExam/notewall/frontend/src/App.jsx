import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import NoteDetails from "./components/NoteDetails";
import NotesContextProvider from "./context/NotesContext";

function App() {
  return (
    <NotesContextProvider>
      <Header /> 
      <div className="container mt-5"> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes/new" element={<CreateNote />} />
          <Route path="/notes/:id/edit" element={<EditNote />} />
          <Route path="/notes/:id/details" element={<NoteDetails />} />
        </Routes>
      </div>
    </NotesContextProvider>
  );
}

export default App;
