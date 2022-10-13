import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles";

function NavBar ( { farmer, setFarmer } ) {
    function handleLogoutClick () {
        fetch( "/logout", { method: "DELETE" } ).then( ( res ) => {
            if ( res.ok )
            {
                setFarmer( null );
            }
        } );
    }

    return (
        <Wrapper>
            <Logo>
                <Link to="/">View Items</Link>
            </Logo>
            <Nav>
                <Button as={ Link } to="/new">
                    New Item
                </Button>
                <Button variant="outline" onClick={ handleLogoutClick }>
                    Logout
                </Button>
            </Nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: green;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;