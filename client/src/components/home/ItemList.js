import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function ItemList () {
    const [ item, setItem ] = useState( [] );

    useEffect( () => {
        fetch( "/items" )
            .then( ( r ) => r.json() )
            .then( setItem );
    }, [] );

    return (
        <Wrapper>
            { item.length > 0 ? (
                item.map( ( item ) => (
                    <Item key={ item.id }>
                        <Box>
                            <h2>{ item.name }</h2>
                            <p>
                                <em>Stock: { item.quantity } </em>
                                <cite>By { item.farmer.username }</cite>
                            </p>
                        </Box>
                    </Item>
                ) )
            ) : (
                <>
                    <h2>No Items Found</h2>
                    <Button as={ Link } to="/new">
                        Make a New Item
                    </Button>
                </>
            ) }
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Item = styled.article`
  margin-bottom: 24px;
`;

export default ItemList;
