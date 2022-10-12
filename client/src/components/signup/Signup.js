import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import './Home.css';

function Signup () {
    const [ farmer, setFarmer ] = useState( false );
    const [ customer, setCustomer ] = useState( false );

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

            { farmer && <Login /> }
            { customer && <Login /> }
        </>
    );
}

export default Signup;