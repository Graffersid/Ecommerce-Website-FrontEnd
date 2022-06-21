import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import LocalMallIcon from '@mui/icons-material/LocalMall';
function AddtoCart() {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <div>
  <LocalMallIcon style={{width:"1.8rem", height:'1.8rem'}} onClick={handleShow}/>

  <Offcanvas show={show} onHide={handleClose} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
   
    </Offcanvas.Body>
   <Button> Proceed to checkout</Button> 
  </Offcanvas></div>
  )
}

export default AddtoCart