import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import FarmerSignup from './components/signup/FarmerSignup';
import Login from './components/login/Login'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signup' element={ <FarmerSignup /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </>
  );
}

export default App;
