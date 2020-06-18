import React from "react";
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { useHistory } from 'react-router'

const Header = () => {
    const history = useHistory();
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid={true}>
                <NavbarBrand onClick={() => {
                    history.push('/')
                }}>
                    Geo Party
                </NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Header;