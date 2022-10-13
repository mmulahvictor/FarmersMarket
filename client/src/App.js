import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from "./components/login/Login";
import ItemList from "./components/home/ItemList";
import NewItem from "./components/home/NewItem";

function App () {
  const [ farmer, setFarmer ] = useState( null );

  useEffect( () => {
    fetch( "/me" ).then( ( res ) => {
      if ( res.ok )
      {
        res.json().then( ( farmer ) => setFarmer( farmer ) );
      }
    } );
  }, [] );

  if ( !farmer ) return <Login onLogin={ setFarmer } />;

  return (
    <>
      <NavBar farmer={ farmer } setFarmer={ setFarmer } />
      <main>
        <Routes>
          <Route path="/new" element={ <NewItem farmer={ farmer } /> } />
          <Route path="/" element={ <ItemList /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;