import { useState } from "react";


function CustomerLogin ( { onLogin } ) {
    const [ username, setUsername ] = useState( "" );

    function handleSubmit ( e ) {
        e.preventDefault();
        fetch( "/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { username } ),
        } )
            .then( ( r ) => r.json() )
            .then( ( user ) => onLogin( user ) );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ username }
                onChange={ ( e ) => setUsername( e.target.value ) }
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default CustomerLogin