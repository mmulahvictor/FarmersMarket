import React, { useState } from "react";

function FarmerLogin ( { setFarmer } ) {
    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    function handleSubmit ( e ) {
        e.preventDefault();
        fetch( "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { username, password } ),
        } ).then( ( r ) => {
            if ( r.ok )
            {
                r.json().then( ( farmer ) => setFarmer( farmer ) );
            }
        } );
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h1>FarmerLogin</h1>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={ username }
                    onChange={ ( e ) => setUsername( e.target.value ) }
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={ password }
                    onChange={ ( e ) => setPassword( e.target.value ) }
                />
                <button type="submit">FarmerLogin</button>
            </form>
        </div>
    );
}

export default FarmerLogin;
