import React from "react";
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import { useHistory } from 'react-router'

const Header = () => {
    const history = useHistory();

    const onHomeClick = () => {
        history.push('/');
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid={true}>
                <NavbarBrand onClick={onHomeClick}>
                    GeoParty Buzzer
                </NavbarBrand>
            </Container>
        </Navbar>
    );
};

export default Header;