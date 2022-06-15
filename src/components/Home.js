import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import '../App'
function Home() {
  return (
    <div>
  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
        <Navbar bg="dark" expand="lg" className='navbar-wrapper'>
    <Container className='navbar-inner'>
      <Navbar.Brand href="#home" className="navbar-link">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="/login" className="navbar-link">Login</Nav.Link>
          <Nav.Link href="#link" className="navbar-link">Sign Up</Nav.Link>
          <NavDropdown title="Dropdown" className="navbar-link" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  <div>Home Page.</div>

  
  </ThemeProvider>
  </div>
  )
}

export default Home