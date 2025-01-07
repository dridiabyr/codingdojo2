import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AllBooks from "./components/AllBooks";
import AddBooks from "./components/AddBooks";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      
        <Header />
        <Routes>
          <Route path="/" element={AllBooks}/>
          <Route path="/add" element={AddBooks}/>
          <Route path="/book/:id" element={BookDetails}/>
        </Routes>
     
    </>
  );
}

export default App;
