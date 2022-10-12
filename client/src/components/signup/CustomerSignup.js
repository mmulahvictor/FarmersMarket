import { useState } from "react";
import styled from "styled-components";

function CustomerSignup () {
    const [ errors, setErrors ] = useState( [] );
    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        password: "",
    } );

    async function handleSubmit ( e ) {
        e.preventDefault();
        // fetch returns a Promise, we must await it
        const response = await fetch( "/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( formData ),
        } );
        // response.json() returns a Promise, we must await it
        const data = await response.json();
        if ( response.ok )
        {
            console.log( "Customer created:", data );
        } else
        {
            setErrors( data.errors );
        }
    }

    function handleChange ( e ) {
        setFormData( {
            ...formData,
            [ e.target.id ]: e.target.value,
        } );
    }

    return (
        <Wrapper>
            <h1>Customer Signup</h1>
            <form onSubmit={ handleSubmit }>
                <FormGroup>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                </FormGroup>
                
                <FormGroup>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <textarea
                        id="password"
                        value={ formData.password }
                        onChange={ handleChange }
                    />
                </FormGroup>

                { errors.length > 0 && (
                    <ul style={ { color: "red" } }>
                        { errors.map( ( error ) => (
                            <li key={ error }>{ error }</li>
                        ) ) }
                    </ul>
                ) }
                <SubmitButton type="submit">Sign Up</SubmitButton>
            </form>
        </Wrapper>
    );
}
const Wrapper = styled.section`
  max-width: 500px;
  margin: 32px auto;
  padding: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  background: blue;
  color: yellow;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export default CustomerSignup;
