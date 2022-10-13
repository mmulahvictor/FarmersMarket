import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FarmerLogin from './FarmerLogin';
import CustomerLogin from './CustomerLogin';

function Login () {
    const [ farmer, setFarmer ] = useState( false );
    const [ customer, setCustomer ] = useState( false );
    // const [ user, setUser ] = useState( null );

    useEffect( () => {
        fetch( "/farmers" ).then( ( response ) => {
            if ( response.ok )
            {
                response.json().then( ( farmer ) => setFarmer( farmer ) );
            }
        } );
    }, [] );

    function handleLogin ( farmer ) {
        setFarmer( farmer );
    }

    // function handleLogout () {
    //     setFarmer( null );
    // }

    const showFarmer = ( e ) => {
        setFarmer( true );
        setCustomer( false );
    };

    const showCustomer = ( e ) => {
        setCustomer( true );
        setFarmer( false );
    };

    return (
        <>
            <Link to="/" className='link'>Home</Link>

            <form>
                <input type="radio" name='user' value='farmer' onClick={ showFarmer } />
                <label htmlFor="Farmer">Farmer</label>
                <input type="radio" name='user' value='customer' onClick={ showCustomer } />
                <label htmlFor="Customer">Customer</label>
            </form>

            { farmer && <FarmerLogin onLogin={ handleLogin } /> }
            { customer && <CustomerLogin /> }
        </>
    );
}

export default Login;