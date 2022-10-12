// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Signup () {

//     const url = '/farmers';
//     const [ data, setData ] = useState( {
//         name: "",
//         email: "",
//         location: "",
//         password: "",
//         confpassword: "",
//         phone: ""
//     } );

//     // functions to update states
//     const handleSubmit = ( e ) => {
//         e.preventDefault();
//         if ( data.password !== data.confpassword )
//         {
//             alert( "password Not Match" );
//         } else
//         {
//             axios.post( url, {
//                 name: data.name,
//                 phone: data.phone,
//                 email: data.email,
//                 password: data.password,
//                 location: data.location
//             } );

//             alert( 'Thanks for registaring with us! ' + data.name );
//         }
//         setData( '' );
//     };

//     const handleChange = ( e ) => {
//         e.preventDefault()
//         setData( { ...data, [ e.target.name ]: e.target.value } );
//     };

//     return (
//         <div className="signup">
//             <p>
//                 Already have an account?
//                 <Link to="/login" className='link'>Login</Link>
//             </p>
//             <header className="signup-header">
//                 <form onSubmit={ handleSubmit } autocomplete="off">
//                     <h3>Farmer's Sign-up Form </h3>
//                     <label > Name: </label><br />
//                     <input
//                         type="text"
//                         name='name'
//                         value={ data.name }
//                         required
//                         onChange={ handleChange }
//                         autoComplete='off'
//                     /><br />

//                     <label> Email: </label><br />
//                     <input
//                         type="email"
//                         name='email'
//                         value={ data.email }
//                         required
//                         onChange={ handleChange }
//                         autoComplete='off'
//                     /><br />

//                     <label> Password: </label><br />
//                     <input
//                         type="password"
//                         name='password'
//                         value={ data.password }
//                         required
//                         onChange={ handleChange }
//                     /><br />

//                     <label> Confirm Password: </label><br />
//                     <input
//                         type="password"
//                         name='confpassword'
//                         value={ data.confpassword }
//                         required
//                         onChange={ handleChange }
//                     /><br />

//                     <label > Location: </label><br />
//                     <input
//                         type="text"
//                         name='location'
//                         value={ data.location }
//                         required
//                         onChange={ handleChange }
//                         autoComplete='off'
//                     /><br />

//                     <label > Phone: </label><br />
//                     <input
//                         type="tel"
//                         name='phone'
//                         value={ data.phone }
//                         required
//                         onChange={ handleChange }
//                         autoComplete='off'
//                     /><br />

//                     <input
//                         type="submit" value="Submit" />
//                 </form>
//             </header>

//         </div>
//     );
// }

// export default Signup;