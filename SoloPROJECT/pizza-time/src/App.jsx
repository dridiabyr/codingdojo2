
import Header from "./Components/Header";
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Account from './Pages/Account';
import PizzaBuilder from './Pages/PizzaBuilder';
import OrderSummary from './Pages/OrderSummuary';
import Order from "./Pages/Order";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/build" element={<PizzaBuilder />} />
         <Route path="/order" element={<Order />} />
        <Route path="/order-summary" element={<OrderSummary />} />
         <Route path="/summary" element={<OrderSummary />} />
      </Routes>
    </div>
  )
}

export default App;
