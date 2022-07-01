import React, { useEffect, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ProductImage1 from '../Images/ProductImages/Product-image-1.webp'
import '../CSS/AddToCart.css'
function AddtoCart() {
 
    const [show, setShow] = useState(false);
    const initalprice =15
    const [productprice, setproductprice] =useState(15)
    const increment=()=> {
      setQuantityVal(QuantityVal+1)
      setproductprice(productprice=> productprice+initalprice)
    }
    const decrement=()=> {
      setQuantityVal(QuantityVal<=0? 0: QuantityVal-1)
      setproductprice(productprice=> productprice-initalprice)
    } 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [QuantityVal, setQuantityVal] =useState(1)
    
    useEffect(()=>{
        
    

    },[])
 
    return (
    <div>
      <LocalMallIcon style={{width:"1.8rem", height:'1.8rem'}} onClick={handleShow}/>

          <Offcanvas show={show} onHide={handleClose} placement="end" style={{width:"32%",padding:'15px'}}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{fontSize:"1.5rem",lineHeight:'2rem', fontWeight:'600'}}>Shopping Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{marginTop:'1rem'}}>
                   <div style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}> 
                     <img src={ProductImage1} style={{width:'125px',height:'125px'}}/>
                    <div style={{width:"65%"}} className="text-part-wrapper"> 
                      <h6>Wayfarer Sunglasses - Orange, S </h6>
                      <p > Unit Price: ${productprice<0 ? 0:productprice}</p>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'end'}} className="quantitySelector-Wrapper"> 
                    <div className='Quantity-selector-wrappper'>
                            <div className="quantity-input">
                                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                               -
                                </button>
                                <input className="quantity-input__screen" type="text" value={QuantityVal} readOnly/>
                                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                                &#xff0b;
                                 </button>  
                           </div>  
                   </div>
                    <p>  ${productprice<0 ? 0:productprice}</p>
                  </div>  
                     
                      </div> 
                   </div>
            </Offcanvas.Body>
            <Button style={{background:'black',color:'white',border:'none',margin:'30px' ,padding:'1rem', borderRadius:'5px' }}> 
             <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}} className="proceedtocheckout">
             <h4>  Proceed to checkout </h4>
             <h4> ${productprice<0 ? 0:productprice}.00</h4>
            </div>
            </Button> 
      </Offcanvas></div>
  )
}

export default AddtoCart