import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Button, FormField, Input, Label } from "../styles";


function Form ( { id, lists } ) {

    const url = `/items/${ id }`;
    const [ formData, setFormData ] = useState( lists );
    const [ isLoading, setIsLoading ] = useState( false );

    function submit ( e ) {
        e.preventDefault();
        setIsLoading( true );
        axios.patch( url, {
            name: formData.name,
            amount: parseInt( formData.amount ),
            image_url: formData.image_url,
            farmer_id: parseInt( formData.farmer_id ),
            customer_id: parseInt( formData.customer_id ),
        } )
            .then( res => {
                setIsLoading( false );
                // console.log( res.formData );
            } );
    }
    function handleChange ( e ) {
        setFormData( { ...formData, [ e.target.name ]: e.target.value } );
    }
    console.log( formData );
    return (
        <>

            <Wrapper>
                <WrapperChild>
                    
                    <form onSubmit={ submit }>
                        <FormField>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                placeholder='item name'
                                name='name'
                                defaultValue={ lists.name }
                                id="name"
                                onChange={ handleChange } />
                        </FormField>
                        <FormField>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                onChange={ handleChange }
                                id="quantity"
                                name='quantity'
                                defaultValue={ lists.amount }
                                type="text"
                                placeholder="item quantity" />
                        </FormField>
                        <FormField>
                            <Label htmlFor="image">Image</Label>
                            <Input
                                onChange={ handleChange }
                                id="image_url"
                                name='image_url'
                                defaultValue={ lists.image_url }
                                type="text"
                                placeholder="item image" />
                        </FormField>
                        <FormField>
                            <Button color="primary" type="submit">
                                { isLoading ? "Loading..." : "Submit Item" }
                            </Button>
                        </FormField>
                    </form>
                </WrapperChild>
            </Wrapper>

        </>
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

export default Form;