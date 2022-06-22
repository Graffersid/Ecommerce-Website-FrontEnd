import React from 'react'
import { Button, Card, Carousel, Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import '../HomePage.css'
import ModalFile from '../subcomponents/ModalFile';
import ImagePicker from '../subcomponents/ImagePicker';
import SearchBar from '../subcomponents/SearchBar';
import Login from './Login';
import BulkUpload from '../subcomponents/BulkUpload';
import CloundinaryUpload from './CloundinaryUpload';
import MainLogo from '../Images/Ecommerce-logo.jpg'


import MenCollectionIMage from '../Images/Mens Collection img -1.webp'
import sportscollectionImage from '../Images/sports-collestion img-2.webp'
import WomencollectionImage from '../Images/Women-collection-img3.webp'
import Sunglasscollectionimg4 from '../Images/Sunglass-collection-img4.webp'
import NewBackimg6webp from '../Images/NewBack-img6.webp'
import CoupensImagewebp from '../Images/CoupensImage-5.webp'
import { flashproducts } from '../DataFiles/ProductsDetials';
import sliderimage1 from '../Images/Slider-image-1.webp'
import sliderimage2 from '../Images/slider-image-2.webp'
import sliderimage3 from '../Images/slider-image-3.webp'
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import Footer from './Footer';
import ImageWithText from '../Images/image-wtih-text-img1.webp'
import AppstoreIMage from '../Images/App-store-image-1.png'
import GooglestoreImage from '../Images/Google-Play-image-1.png'
import Newsletter from './Newsletter';
import AddtoCart from '../subcomponents/AddtoCart';
import DropDown from '../subcomponents/DropDown';
import ProductPage from './ProductPage';
import { render } from '@testing-library/react';
import {useNavigate, Link} from 'react-router-dom'

function Home() {
  const options = {
 
    // responsive: { 
    //   768: {
    //         items: 1,
    //         center:true
    //     }
    // },
};
const navigate = useNavigate()
 const handleProductpage=(item)=>{
  navigate(`products/${item.productId}`)

 }
 
  return (
    <div>

  <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
        <Navbar expand="lg" className='navbar-wrapper' style={{position: "sticky"}}  fixed={'top'} >   

      <Navbar.Brand href="#home" className="navbar-link"> <img style={{width:'95px', height:"30px"}} src={MainLogo}/></Navbar.Brand>
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

<div style={{display:'flex',flexWrap:'wrap'}}> 
   
  <Card className="text-white-large">
  <Card.Img src={MenCollectionIMage} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Card.Text></Card.Text>
 
  </Card.ImgOverlay>
</Card>
<Card className="text-white-small">
  <Card.Img src={sportscollectionImage} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
  
    </Card.Text>
    <Card.Text></Card.Text>

  </Card.ImgOverlay>
</Card>
<Card className="text-white-small">
  <Card.Img src={WomencollectionImage} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
 
    </Card.Text>
    <Card.Text></Card.Text>

  </Card.ImgOverlay>
</Card>
 </div>
 <div style={{display:'flex',flexWrap:'wrap',marginBottom:'4rem'}}> 
      
  <Card className="text-white-small">
  <Card.Img src={Sunglasscollectionimg4} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Card.Text></Card.Text>
 
  </Card.ImgOverlay>
</Card>
<Card className="text-white-small">
  <Card.Img src={CoupensImagewebp} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
  
    </Card.Text>
    <Card.Text></Card.Text>

  </Card.ImgOverlay>
</Card>
<Card className="text-white-large">
  <Card.Img src={NewBackimg6webp} alt="Card image" style={{height:'100%',objectFit:'cover',width:'100%'}}/>
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>
 
    </Card.Text>
    <Card.Text></Card.Text>

  </Card.ImgOverlay>
</Card>
 </div>
<Container style={{maxWidth:'95%', margin:'auto'}}>
<div className='Second-section-homepage'> 
 <h3 className='second-section-h3'> Flash Sale</h3>
<div className='product-wrapper'>
{flashproducts.map(item=>{
  return(
   <Link to={`/products/${item.productId}`} state={{name:item}}>
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


</div></Container>

<div className='slider-wrapper loop'> 
<OwlCarousel items={1.5}  
          className="owl-theme"  
          loop  
          margin={30}  
          dots={true}
          center={true}
          {...options}>
 <img src={sliderimage1}/>
 <img src={sliderimage2}/>
 <img src={sliderimage3}/>
 </OwlCarousel>
</div>
<div className="image-with-text-homepage"> 
  <div className='image-with-text-one'> <h3> The ChawkBazar App</h3>
     <h1> Share Your <span>Ideas</span> & Shop Endless <span>Inspiration</span></h1>
     <div > 
      <button className="image-with-text-btn"><img style={{width:'200px', height:'75px'}} src={AppstoreIMage}/></button> 
      <button className="image-with-text-btn"><img style={{width:'200px', height:'60px'}} src={GooglestoreImage}/></button>
     </div>
    
  </div>
  <div style={{textAlign:'right'}} className="image-with-text-two"> 
  <img src={ImageWithText}/>

  </div>
</div>

  {/* <div style={{backgroundColor:'black', height:"100vh"}}> 

  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 

  </div> */}

 {/* <div> 
 <ModalFile/>
 <ImagePicker/>

 <SearchBar/>

 <Login/>
 <BulkUpload/>
 <CloundinaryUpload/>
 </div> */}
 <Newsletter/>
<Footer/>


  </ThemeProvider>

  </div>
  )
}

export default Home