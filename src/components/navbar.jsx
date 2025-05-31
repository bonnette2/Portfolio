import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../asset/letter-b.png'; // Make sure this path is correct

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="custom-navbar">
      <Container className="d-lg-flex align-items-center justify-content-between">
        <Navbar.Brand href="#home" className="d-flex align-items-center navbar-brand py-2">
          <img src={logo} alt="Bonnie Logo" className="logo img-fluid" style={{width: '40px'}} />
          <span className="brand-text ms-2">Bonnie</span> 
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='white-toggle' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
