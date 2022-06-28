import React from 'react'
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import DashboardImage from '../Images/DashboardImage.jpg'
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import AddtoCart from '../subcomponents/AddtoCart'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import '../CSS/Dashboard.css'
import { DashboardData } from '../DataFiles/DashboardData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { OrderData } from '../DataFiles/OrderData'
import { Link } from 'react-router-dom'
import {flashproducts} from '../DataFiles/ProductsDetials'

function Dashboard() {
  return (
    <div className="Dashboard-wrapper"> 
         <Navbar expand="lg" className='navbar-wrapper' style={{position: "sticky"}}  fixed={'top'} >   

            <Navbar.Brand className="navbar-link" href="/"> <img style={{width:'95px', height:"30px"}} src={MainLogo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
                <Nav.Link href="/" className="navbar-link">Home</Nav.Link>
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
            Account
            </Nav.Link>
            <Nav.Link className="Navbar-link-two">
            
            <AddtoCart/>
            </Nav.Link>
            </Nav>

            </Navbar.Collapse>


</Navbar>
         
         
         <div className='Dashboard-banner-image'  >  
         
          <div className="Banner-image-overlay"> 

          </div>
           <div> 
            <h2> 
            My Account
            </h2>
           </div>
          </div>
    <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%"}}>
      
        <DashboardSidebar dashboard={true}/>
      <div className="Dashboard-content-wrapper"> 
     
       
          <h2> Dashboard </h2>
          
         <div style={{textAlign:'right'}}> 
            <button className='addproduct-btn'> Add Store</button>
            <button className='addproduct-btn'> Add Product</button>
        </div>
   
        <div className='dashboard-lowerpart-wrapper'> 
       
        <div style={{display:'flex', flexWrap:'wrap'}}> 
       {DashboardData.map(storeData =>{
        return (
          <div className='dashboard-storebox-wrapper'> 
             <img src={storeData.storeimg}/>
                <div>
                      <h3> {storeData.storename}</h3>
                      <p> Location: {storeData.locationcity}</p>
                </div>
               <div>
                <ArrowForwardIosIcon style={{color:'#959595'}}/>
                 </div> 
            </div>
        )

       })}
    </div>
       <div className='dashboard-page-table-header'>  
       <div style={{display:'flex' , width:'100%'}}> 
                            <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={DashboardData}
                                  autoHighlight
                                  style={{height:'35px', margin:'10px'}}
                                  getOptionLabel={(option) => option.storename}
                                  onChange={(option,value)=>{
                                    // setSelectedStore(value)
                                
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                      {option?.storename}
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                   
                                      {...params}
                                      label="Select Store"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} /> )}

                                />
                           <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options=''
                                  autoHighlight
                                  style={{height:'35px',margin:'10px'}}
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    // setSelectedStore(value)
                                
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                      {option?.name}
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                   
                                      {...params}
                                      label="Select Product Categories"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} 
                                      
                                      /> )}

                                />          

       </div>
         
         <div style={{width:'100%',margin:'10px',alignSelf: "center",alignItems: "center", padding: "10px",}}> 
         <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
           >
            <Tab eventKey="home" title="In Stocks">
            <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <table style={{width:'100%'}}> 
                     <thead  style={{background:"#E0E0E0",borderRadius:'10px', textAlign:'center'}}>
                      <tr>
                      <th style={{padding:'13px'}}> # </th>
                      <th style={{padding:'13px'}}> Product Name </th>
                      <th style={{padding:'13px'}}> Quantity </th>
                      <th style={{padding:'13px'}}> Price </th>
                
                      <th style={{padding:'13px'}}> Actions </th>
                      </tr>
                     </thead>
                    <tbody>
                   {flashproducts.map((data)=>{
                   return (
                    <tr style={{padding:'15px', textAlign:'center'}}> 
                      <td style={{padding:'15px'}}>{data.productId}</td>
                      <td style={{padding:'15px'}}>{data.producttitle}</td>
                      <td style={{padding:'15px'}}>{data.Quantity}</td>
                      <td style={{padding:'15px'}}>{data.productPrice} of 1 Items</td>
                      <td  style={{padding:'15px'}}> <Link to={`/VendorOrders/${data.orderId}`} state={{name:data}}  className="action-btn-table" style={{textDecoration:"none"}}>Add</Link> <button> Delete</button></td>
                     </tr>
                   )})}  
                     
                    </tbody>
                   </table>
               </div>
            </Tab>
            <Tab eventKey="profile" title="Out Of Stocks">
              fnddfndf
            </Tab>
          </Tabs>
          </div>
   
       </div>
     
            </div>  
      </div>

        
        </Container>
    </div>
  )
}

export default Dashboard