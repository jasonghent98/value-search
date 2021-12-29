import { useHistory } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import classes from '../CssComponents/Header.module.css'
import { useAuth } from '../Contexts/AuthContext';
import { auth } from '../API/Firebase';
import React, { useState } from 'react';

const Header = props => {
    const { logout } = useAuth();
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
            {/* <Navbar className={classes['nav-background']} collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home" className={classes['nav-text']}><h1>ValueSearch</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <Nav.Link href="/login" className={classes['nav-text']}>My Profile</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login" className={classes['nav-text']}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">ValueSearch</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/profile">My Profile</Nav.Link>
                    <Nav.Link eventKey={2} onClick={logoutHandler}>
                        Logout
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
