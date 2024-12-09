import './App.css';
import { Route, Routes} from 'react-router-dom';
import SearchForm from './components/SerachForm.jsx';
import NotFound from './NotFound';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<SearchForm/>} />
          <Route path="/people/:id" element={<Character />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
   
    </div>
  );
}

export default App;
