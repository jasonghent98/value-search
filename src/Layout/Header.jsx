import { Nav, Navbar, Container} from 'react-bootstrap';
import classes from '../CssComponents/Header.module.css'

const Header = props => {
    return (
         <form action>
            <Navbar className={classes['nav-background']} collapseOnSelect expand="lg" bg="light" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand href="#home" className={classes['nav-text']}><h1>ValueSearch</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <Nav.Link href="#deets" className={classes['nav-text']}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </form>
    )
}

export default Header;
