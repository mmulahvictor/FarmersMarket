import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FarmerSignup from "./components/signup/FarmerSignup";
import FarmerLogin from "./components/login/FarmerLogin";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";

function App () {
  const [ farmer, setFarmer ] = useState( null );

  useEffect( () => {
    // auto-login
    fetch( "/farmers" ).then( ( r ) => {
      if ( r.ok )
      {
        r.json().then( ( farmer ) => setFarmer( farmer ) );
      }
    } );
  }, [] );

  return (
    <>
      <NavBar farmer={ farmer } setFarmer={ setFarmer } />
      <main>
        { farmer ? (
          <Routes>
            <Route path="/" element={ <Home farmer={ farmer } /> } />
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={ <FarmerSignup setFarmer={ setFarmer } /> } />
            <Route path="/login" element={ <FarmerLogin setFarmer={ setFarmer } /> } />
            <Route path="/" element={ <Home /> } />
          </Routes>
        ) }
      </main>
    </>
  );
}

export default App;
