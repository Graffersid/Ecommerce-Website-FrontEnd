import React, { useState } from 'react'
import { Accordion, Container, Nav, Navbar } from 'react-bootstrap'
import AddtoCart from '../subcomponents/AddtoCart'
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import {useParams ,useLocation,Link} from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import '../CSS/ProductPage.css'
import { Rating, Typography } from '@mui/material'
import TextFields from '../subcomponents/TextFields'
import { Form, Formik ,Field} from 'formik';
import * as Yup from 'yup'
import '../CSS/Login.css'
import Footer from './Footer'
import Newsletter from './Newsletter'
import { flashproducts } from '../DataFiles/ProductsDetials'
import { relatedproducts } from '../DataFiles/RelatedProducts'
function ProductPage() {
 
     const [QuantityVal, setQuantityVal] =useState(1)
    let {productId} = useParams()
    const itemval = useLocation()      
    const options = {
             nav:true,
             autoplay:true,
             autoplayTimeout:1000
        // responsive: { 
        //   768: {
        //         items: 1,
        //         center:true
        //     }
        // },
    };
    const [value, setValue] = useState(0);
    const increment=()=> {
        setQuantityVal(QuantityVal+1)
      }
      const decrement=()=> {
        setQuantityVal(QuantityVal<=0? 0: QuantityVal-1)
      } 
      const validate= Yup.object({
        email:Yup.string().
         required('Email is required')
         .email('Email is Invalid'), 
        name:Yup.string().required('Name is Required'),
        message:Yup.string().required('Message is Required') 

      })
      
    //   const variantId = document.querySelectorAll('#vairiant-images');


    //         function imageSwap(e) {
    //         console.log(mainImage);
    //         console.log(this.src);
    //         console.log(this.getAttribute('data-large'))
           
    //         };

    //         for (var i = 0; i < variantId.length; i++) {
    //         variantId[i].addEventListener('click', imageSwap, false);
    //         }   
       const handleimageclick=(e)=>{
        const mainImage = document.getElementById('main-image')
         mainImage.src = e.target.src;
       }      
    return (
    <>
    <Navbar expand="lg" className='navbar-wrapper' style={{position: "sticky"}}  fixed={'top'} >   
           {console.log('itemval',itemval)}
            <Navbar.Brand href="/" className="navbar-link"> <img style={{width:'95px', height:"30px"}} src={MainLogo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
                <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                <Nav.Link href="/login" className="navbar-link">Login</Nav.Link>
                <Nav.Link href="#link" className="navbar-link">Sign Up</Nav.Link>
                <Nav.Link href="" className="navbar-link"> <DropDown/> </Nav.Link>
            
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
       <div className='product-page-Wholewrapper'>
         <div style={{display:'flex' , flexWrap:'wrap' , maxWidth:"95%", margin:"auto"}}>
        <div style={{width:'50%' , padding:'30px'}}> 
        <div className='Main-image-wrapper'> 
        <img id="main-image" className="big-image" src={itemval.state.name.productimg} alt="ProductMainImage"/>
        </div>
        <div className='Variant-image-wrapper'>        
        <img id="vairiant-images" className="small-images" onClick={(e)=>{handleimageclick(e)}} alt="ProductSmallImage" src={itemval.state.name.productimg} />
        <img id="vairiant-images" className="small-images" onClick={(e)=>{handleimageclick(e)}} alt="ProductSmallImage" src={itemval.state.name.productimg} />
        <img id="vairiant-images" className="small-images" onClick={(e)=>{handleimageclick(e)}} alt="ProductSmallImage"  src={itemval.state.name.productimg} />
        <img id="vairiant-images" className="small-images" onClick={(e)=>{handleimageclick(e)}}  alt="ProductSmallImage"src={itemval.state.name.productimg} />
        </div>

     </div>
            
      <div style={{width:'50%' , padding:'30px'}} className="productpage-content">
         <h2> {itemval.state.name.producttitle}</h2>
        <p > {itemval.state.name.productDescription}</p>  
        <div style={{display:"flex",marginTop: '1.25rem' , alignItems:'center'}}>
            <div className='product-page-price'>{itemval.state.name.productPrice}</div>
            <span className='product-page-compareprice'> {itemval.state.name.comparePrice}</span>
        </div>  
       <div className='SizeVariant-productpage'> 
        <p> Size</p>
        <button> XL</button>
        <button> L</button>
        <button> M</button>
        <button> S</button>
       </div>
       <div className='SizeVariant-productpage'> 
        <p> Color</p>
        <button style={{backgroundColor:"rgb(255, 165, 180)"}}> </button>
        <button style={{backgroundColor:"rgb(232, 108, 37)"}}> </button>
        <button style={{backgroundColor:"rgb(130, 36, 227)"}}> </button>
        <button style={{backgroundColor:"rgb(221, 51, 51)"}}> </button>
       </div>
       <div style={{display:'flex', alignItems:'center', marginTop:'3rem', justifyContent:'space-between' }}>
        <div className='Quantity-selector-wrappper'>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
                &mdash;
                </button>
                <input className="quantity-input__screen" type="text" value={QuantityVal} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
                &#xff0b;
        </button>  
      </div>  
      </div>

        <button className='AddtoCart-btn'> Add To Cart</button>
      </div> 
      <div className='productpage-addtional-details'> 
         <ul >
            <li> <span> SKU :</span> N/A </li>
            <li> <span>Category:</span> kids </li>
            <li> <span>Tags:</span> Casual,Cotton,Red </li>
         </ul> 
      </div>  
    <div className='ProductPage-accordian'> 
    <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header className="accordian-header">Product Details</Accordion.Header>
    <Accordion.Body className='accordian-body'>
    Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className="accordian-header">Additional Information</Accordion.Header>
    <Accordion.Body className='accordian-body'>
    Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className="accordian-header">Customer Reviews</Accordion.Header>
    <Accordion.Body className='accordian-body'>
    At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum.

 <p className='productpage-rating'> Your Rating*</p>
 <Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/> 
        <Formik initialValues={{
                    name:'',
                    email:'',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}>
                    {formik => (
                            <div className='login-form-wrapper-inner'> 
                                
                                <Form>
                                {/* {console.log(formik.values)} */}
                            <div style={{display:'flex',justifyContent:"space-between"}}> 
                                <TextFields style={{marginRight:'1rem'}} label="Name" name="name" type='text'/>
                                <TextFields style={{marginRight:'1rem'}} label="Email" name="email" type="email" />
                            </div>
                                <TextFields style={{marginRight:'1rem' }} label="Message" name="message" type="textarea"/>
                                <button className='submit-btn-productpage' type="submit"> Submit</button>
                                </Form>
                            </div>  )}
        </Formik>
   
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

    </div>
       </div>

     
<div className='Second-section-homepage' style={{border:'none'}}> 
 <h3 className='second-section-h3' style={{marginBottom:"3rem"}}> Related Products</h3>
<div className='product-wrapper'>
{relatedproducts.map(item=>{
  return(
   <Link to={`/products/${item.productId}`} state={{name:item}} style={{color:'black', textDecoration:"none"}}>
 <div class="product-card" style={{cursor:'pointer'}} >
		<div class="product-tumb">
			<img src={item.productimg} alt=""/>
		</div>
		<div class="product-details">
			{/* <span class="product-catagory">Women,bag</span> */}
			<h4><a href="">{item.producttitle}</a></h4>
			<p>{item.productDescription}</p>
			<div class="product-bottom-details">
				<div class="product-price">{item.productPrice}<small style={{marginLeft:'2px'}}>{item.comparePrice}</small></div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
  </Link>  
  )
})} 
 </div>


</div>

         </div>
         <Newsletter background={true}/>
  <Footer/>

      </div>
    </>
  )
}

export default ProductPage