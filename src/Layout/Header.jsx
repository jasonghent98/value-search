import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import classes from '../CssComponents/Header.module.css'
import { useAuth } from '../Contexts/AuthContext';
import { auth } from '../API/Firebase';
import React, { useState } from 'react';

const Header = props => {
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [error, setError] = useState();

    const logoutHandler = async () => {
        setError('')
        try {
            await logout();
            history.push('/login');
        } catch (error) {
            setError('log out failed.')
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">ValueSearch</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav className={classes['header-links']}>
                        <Nav.Link href="/searches">Searches</Nav.Link>
                        <Nav.Link href="/profile">My Profile</Nav.Link>
                        <Nav.Link eventKey={2} onClick={logoutHandler}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
