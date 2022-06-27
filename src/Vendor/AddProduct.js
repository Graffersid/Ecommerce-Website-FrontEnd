import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import DashboardImage from '../Images/DashboardImage.jpg'
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import AddtoCart from '../subcomponents/AddtoCart'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import '../CSS/Dashboard.css'
import { Form, Formik } from 'formik';
import { RMIUploader } from "react-multiple-image-uploader"
import * as Yup from 'yup'
import TextFields from '../subcomponents/TextFields'
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material'
function AddProduct() {
 
    var dataSources = [
        {
          id: 1,
          dataURL: "https://picsum.photos/seed/1/600",
        },
        {
          id: 2,
          dataURL: "https://picsum.photos/seed/2/600",
        },
        {
          id: 3,
          dataURL: "https://picsum.photos/seed/3/600",
        }
      ];
   
    const [visible, setVisible] = useState(false);
    const handleSetVisible = () => {
      setVisible(true);
    };
    const hideModal = () => {
      setVisible(false);
    };
    const onUpload = (data) => {
        dataSources.push({
            id:3,
            dataURL:data.map(item => item.dataURL)
        })
      console.log(data, dataSources)  
    };
    const onSelect = (data) => {
      console.log("Select files", data);
    };
    const onRemove = (id) => {
       dataSources= dataSources.filter(idremove =>  idremove.id !== id)
        console.log(dataSources)
    };
 useEffect(()=>{
    console.log('vsbd')
 }
 ,[dataSources])
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const validate= Yup.object({
    productname:Yup.string()
    .required('Product Name is Required'),
    description:Yup.string()
    .required('Description is Required'),
    productprice:Yup.string()
     .required('Product Price is Required')
     .matches(phoneRegExp, 'Product Price is not valid'),
    productquantity:  Yup.string()
    .required('Product Quantity is Required')
    .matches(phoneRegExp, 'Product Quantity is not valid')
 

  }) 
  const [selectedState, setSelectedState] =useState('') 
  const[stateValidation, setStateValidation] =useState(false)
  const categories =[{name:"Men"}, {name:'Kids'}, {name:"Women"}]
  const handleSave=()=>{
    <>
     {selectedState===''? setStateValidation(true) :null}

     </>
    }
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

     <h2 > Dashboard</h2>

     <div>    
       <button onClick={handleSetVisible}> Show Me</button> 
    <RMIUploader
        isOpen={visible}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
    /> 
     {console.log(dataSources)}

     <Formik  initialValues={{
              productname:"",
              productprice:"",
              productquantity:'',
              description:''
            }}
            validationSchema={validate}
            onSubmit={(values)=>{
       
            }}>

              {formik => (
                    <div className='login-form-wrapper-inner Register-wrapper' style={{width:"100%" , paddingLeft:'0rem'}}> 
                        <div style={{textAlign:'right'}}> 
        
                         
                         </div>
                         <Form> 
                         <div className='register-form-wrapper' style={{display:'block'}}>    

                         <div style={{display:'block', width: '100%'}}> 
                           
                         <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                            <div style={{width:'100%',paddingRight:'1rem'}}> 
                            <TextFields label="Product Name" name="productname" type="text" />
                           </div>
                           <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Product Price" name="productprice" type="text" />
                            </div>
                          </div>  
                          <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                          
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields placeholder="0" label="Product Quantity" name="productquantity" type="number" />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <label className="inputfield-label">Product for <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                style={{flexDirection:'row'}}>
                                <FormControlLabel value="men" control={<Radio />} label="Men" />
                                <FormControlLabel value="women" control={<Radio />} label="Women" />
                                <FormControlLabel value="kids" control={<Radio />} label="Kids" />
                            </RadioGroup>
                            </FormControl>
                              </div> 
                              
                         </div>
                         <TextFields label="Description" name="description" type="textarea" />  
                         
                         
                      
                         <div style={{width:"100%" , display:'flex'}}> 
                            <div style={{width:'80%',marginRight:'1rem'}} className='login-form-input-wrapper'>
                            <label className="inputfield-label">Category <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                            <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={categories}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                           
                                    if(value===null){
                                      setStateValidation(true)
                                    }
                                    else{
                                      setStateValidation(false)
                                    }
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                      {option?.name}
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                   
                                      {...params}
                                      label="Recieved"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} /> )}

                                />
                                
                              {stateValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                                </div>
                   
                   
                          </div>
                        
                         </div>   
                        
                         
                                
                      {/* {console.log(Country.getAllCountries())} */}
                     {/* {console.log(State.getStatesOfCountry("IN"))} */}
                        </div> 
                        <div style={{textAlign:"right",paddingRight: "1rem"}}>
                         <button style={{background:"transparent", fontWeight:"700",border:'none', color:'black' , borderRadius:"6px"}} type="submit" onClick={handleSave}> Publish Product</button>
                         </div>
             
                         </Form>
                        

                    </div>
                )}
            </Formik>

  </div>

  </div>

        
        </Container>
    </div>
  )
}

export default AddProduct