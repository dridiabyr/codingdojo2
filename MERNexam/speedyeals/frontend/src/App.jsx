
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateMeal from './components/CreateMeal'
import Home from './components/Home'
import MealDetails from './components/MealDetail.jsx'
import UpdateMeal from './components/UpdateMeal.jsx'


function App() {


  return (
    <div className="App">
    <h1>Speedy Meals</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals/new" element={<CreateMeal />} />
      <Route path="/meals/:id/edit" element={<UpdateMeal />} />
      <Route path="/meals/:id" element={<MealDetails />} />
    </Routes>
  </div> 
  )
}

export default App
