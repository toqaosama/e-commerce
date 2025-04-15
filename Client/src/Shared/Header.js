import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Style/Header.css'
import { Link } from 'react-router-dom';
import HeaderIcons from '../Component/Addtions/HeaderIcons'


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       <Navbar.Brand className='BrandName' as={Link} to="/">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/" className='Item'>Home</Nav.Link>
            <Nav.Link as={Link} to="/ProductShow" className='Item'>Product</Nav.Link>
            <Nav.Link as={Link} to="/Dashboardside" className='Item'>Dashboard</Nav.Link>
            <NavDropdown title="Categore" id="collapsible-nav-dropdown" className='Item' >
              <NavDropdown.Item as={Link} to="/ProductShow" className='Item'>Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Dashboardside" className='Item'>Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ProductShow" className='Item'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ProductShow" className='Item'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ProductShow" className='Item'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/ProductShow" className='Item'>Register</Nav.Link>
          
            <Nav.Link eventKey={2} as={Link} to="/ProductShow" className='Item'>
              login
            </Nav.Link>
            
            <HeaderIcons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default CollapsibleExample;



