import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import EditItem from "./EditItem";

function ItemList () {
    const [ items, setItem ] = useState( [] );

    useEffect( () => {
        fetch( "/items" )
            .then( ( r ) => r.json() )
            .then( setItem );
    }, [] );

    function handleDeleteClick ( e ) {
        let url = `/items/${ e.target.id }`;
        fetch( url, {
            method: "DELETE"
        } )
            .then( ( r ) => r.json() )
            .then( ( deletedObj ) => handleDelete( deletedObj ) );
    }
    function handleDelete ( deletedObj ) {
        let newList = items.filter( ( item ) => item.id !== deletedObj.id );
        setItem( newList );
    }

    return (
        <Wrapper>
            { items.length > 0 ? (
                items.map( ( item ) => (
                    <div className="templete box" key={ item.id }>
                        <img src={ item.image_url } alt={ item.name } className="image" />
                        <p>{ item.name }</p>
                        <p>{ item.amount }bags</p>
                        <div id='btn'>
                            <button onClick={ handleDeleteClick } id={ item.id } className="delete-btn">Delete</button>
                            <EditItem id={ item.id } lists={ item } setLists={ setItem } />
                        </div>
                    </div>
                ) )
            ) : (
                <div>
                    <h2>No Items Found</h2>
                    <Button as={ Link } to="/new">
                        Make a New Item
                    </Button>
                </div>
            ) }
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 900px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

// const Item = styled.article`
//   margin-bottom: 24px;
// `;

export default ItemList;
