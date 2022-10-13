import React, { useState } from "react";

function FarmerSignup ( { setFarmer } ) {
    const [ name, setName ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ location, setLocation ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ phone, setPhone ] = useState( "" );
    const [ passwordConfirmation, setPasswordConfirmation ] = useState( "" );

    function handleSubmit ( e ) {
        e.preventDefault();
        fetch( "/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                name,
                phone,
                location,
                email,
                password,
                password_confirmation: passwordConfirmation,
            } ),
        } ).then( ( r ) => {
            if ( r.ok )
            {
                r.json().then( ( user ) => setFarmer( user ) );
            }
        } );
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>Sign Up</h1>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ ( e ) => setName( e.target.value ) }
                />
                <label htmlFor="phone">Phone</label>
                <input
                    type="number"
                    id="phone"
                    autoComplete="off"
                    value={ phone }
                    onChange={ ( e ) => setPhone( e.target.value ) }
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) }
                />
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    autoComplete="off"
                    value={ location }
                    onChange={ ( e ) => setLocation( e.target.value ) }
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={ password }
                    onChange={ ( e ) => setPassword( e.target.value ) }
                    autoComplete="current-password"
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={ passwordConfirmation }
                    onChange={ ( e ) => setPasswordConfirmation( e.target.value ) }
                    autoComplete="current-password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default FarmerSignup;
