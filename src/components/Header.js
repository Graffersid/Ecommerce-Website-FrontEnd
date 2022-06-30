import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import AddtoCart from '../subcomponents/AddtoCart'
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import { useNavigate } from 'react-router-dom'

function Header() {
   
    const navigate = useNavigate()
    const handlelogoimage=()=>{
        navigate('/')
       }
    return (
    <div>
<Navbar expand="lg" className='navbar-wrapper' style={{position: "sticky"}}  fixed={'top'} >   

<Navbar.Brand className="navbar-link" onClick={handlelogoimage}> <img style={{width:'95px', height:"30px"}} src={MainLogo} /></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto ">
    <Nav.Link href="/" className="navbar-link">Demos</Nav.Link>
    <Nav.Link href="/login" className="navbar-link">Men wear</Nav.Link>
    <Nav.Link href="#link" className="navbar-link">Women Wear</Nav.Link>
    <Nav.Link href="" className="navbar-link"> 
         Search
    </Nav.Link>
    <Nav.Link href="" className="navbar-link">
          <DropDown name='Shops'>
           <a>    Modern</a>
           <a>    Standard</a>
           <a>    Minimal</a>
           <a>    Vintage</a>
           <a>    Classic</a>
           <a>    Trendy</a>
           <a>    Elegant</a>
           <a>    Refined  </a>
         </DropDown> 
    </Nav.Link>
    <Nav.Link href="" className="navbar-link"> <DropDown name="Pages">
           <a>    Users</a>
           <a>    Contact Us</a>
           <a>    Category</a>
           <a>    Order  </a>  
      </DropDown></Nav.Link>
   
    {/* <NavDropdown title="Dropdown" className="navbar-link" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
  </Nav>
<Nav>
<Nav.Link className="Navbar-link-two">
<SearchBar/>
</Nav.Link>
<Nav.Link className="Navbar-link-two" href="/login">
    Sign Up
</Nav.Link>
<Nav.Link className="Navbar-link-two">
  <AddtoCart/>
</Nav.Link>
</Nav>

</Navbar.Collapse>


</Navbar>

    </div>
  )
}

export default Header