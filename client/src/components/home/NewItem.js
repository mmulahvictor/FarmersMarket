import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label} from "../styles";

function NewItem ( { farmer } ) {
    const [ name, setName ] = useState( "beans" );
    const [ quantity, setQuantity ] = useState( "3 bags" );
    const [ image, setImage ] = useState("https://rb.gy/dfu1ad");
    const [ errors, setErrors ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    const history = useHistory();

    function handleSubmit ( e ) {
        e.preventDefault();
        setIsLoading( true );
        fetch( "/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                name,
                image_url: image,
                quantity,
            } ),
        } ).then( ( r ) => {
            setIsLoading( false );
            if ( r.ok )
            {
                history.push( "/" );
            } else
            {
                r.json().then( ( err ) => setErrors( err.errors ) );
            }
        } );
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Create Item</h2>
                <form onSubmit={ handleSubmit }>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            value={ name }
                            onChange={ ( e ) => setName( e.target.value ) }
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                            type="text"
                            id="quantity"
                            value={ quantity }
                            onChange={ ( e ) => setQuantity( e.target.value ) }
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="image">Image</Label>
                        <Input
                            type="text"
                            id="image"
                            value={ image }
                            onChange={ ( e ) => setImage( e.target.value ) }
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            { isLoading ? "Loading..." : "Submit Item" }
                        </Button>
                    </FormField>
                    <FormField>
                        { errors.map( ( err ) => (
                            <Error key={ err }>{ err }</Error>
                        ) ) }
                    </FormField>
                </form>
            </WrapperChild>
            <WrapperChild>
                <h1>{ name }</h1>
                <p>
                    <em>Item : { quantity } </em>
                    <cite>By { farmer.username }</cite>
                </p>
                <div>{ image }</div>
            </WrapperChild>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewItem;