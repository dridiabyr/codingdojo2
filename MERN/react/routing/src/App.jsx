import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import StyledWord from './components/StyledWord';

function App() {
  return (
    <div className="App">
           <h3>for the routes you need to put the url please</h3>
      <Routes>
   
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:word" element={<StyledWord />} />
        <Route path="/:word/:backgroundColor/:textColor" element={<StyledWord />} />
      </Routes>
    </div>
  );
}

export default App;
