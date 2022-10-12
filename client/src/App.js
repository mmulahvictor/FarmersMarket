import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup/FarmerSignup';
import Login from './components/signup/Login';

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </>
  );
}

export default App;
