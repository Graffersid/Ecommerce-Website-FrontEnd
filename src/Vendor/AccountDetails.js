import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AddtoCart from '../subcomponents/AddtoCart'
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import DashboardSidebar from './DashboardSideBar'
import TextFields from '../subcomponents/TextFields'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function AccountDetails() {
    const[CheckBoxValidation, setCheckBoxValidation] =useState(false)
    const[selectedgender, setselectedgender] =useState('')
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validate= Yup.object({
        firstname:Yup.string()
        .required('Name is Required'),
        phone:Yup.string()
         .required('Phone Number is Required')
         .matches(phoneRegExp, 'Phone number is not valid')
         .min(10,'Must be 10-digit'),
        email:Yup.string()
         .required('Email is required')
         .email('Email is Invalid'),
         lastname:Yup.string()
          .required('Last Name is Required'),
      
      })

    const handleSave=()=>{
        <>
        {selectedgender===''? setCheckBoxValidation(true):null}
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
         <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%" , marginBottom:'3rem'}}>
      
      <DashboardSidebar accountdetails={true}/>
       <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
   
     
        <h2> Account Details </h2>    
        <Formik  initialValues={{
              firstname:"",
              lastname:"",
              phone:'',
              email:'',
            }}
            validationSchema={validate}
            onSubmit={(values)=>{
              console.log(values) 
            }}>

              {formik => (
                    <div className='login-form-wrapper-inner Register-wrapper' style={{width:"100%" , paddingLeft:'0rem'}}> 
        
                         <Form> 
                         <div className='register-form-wrapper' style={{display:'block'}}>    
                        
                      <div style={{display:'block', width: '100%'}}> 
                           <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}> 
                                <div style={{width:'100%',paddingRight:'1rem'}}> 
                                <TextFields label="First Name" name="firstname" type="text" />
                                </div>
                                <div style={{width:'100%',paddingRight:'1rem'}}> 
                                <TextFields label="Last Name" name="lastname" type="text" />
                                </div> 
                          </div> 
                      <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Email" name="email" type="email" />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Mobile Number" name="phone" type="text" />
                            </div>
                      </div>
                       
                      <div style={{width:'80%',marginRight:'1rem'}}>
                           
                       <label className="inputfield-label">Gender <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                           <div>
                           <FormControl>
                           <RadioGroup
                               aria-labelledby="demo-radio-buttons-group-label"
                               defaultValue="female"
                               name="radio-buttons-group"
                               style={{flexDirection:'row'}}
                               onChange={(option,value)=>{
                                setselectedgender(value)
                                   if(value===null){
                              
                                       setCheckBoxValidation(true)
                                     }
                                     else{
                           
                                       setCheckBoxValidation(false)
                                     }
                               }}
                               >
                               <FormControlLabel value="men" control={<Radio style={{color:'black'}}/>} label="Male" style={{color:'black',fontSize: "16px"}}/>
                               <FormControlLabel value="women" control={<Radio style={{color:'black'}}/>} label="Female" style={{color:'black',fontSize: "16px"}}/>
                               <FormControlLabel value="kids" control={<Radio style={{color:'black'}}/>} label="Others" style={{color:'black',fontSize: "16px"}}/>
                           </RadioGroup>
                           </FormControl>
                           {CheckBoxValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Please Select One</p> :null}
                             </div> 
                             </div>     
                         
                          
                   
        
                         </div>   
                        
            
                        </div> 
                        <div style={{textAlign:"right",paddingRight: "1rem"}}>
                         <button style={{background:"transparent", fontWeight:"700",border:'none', color:'black' , borderRadius:"6px"}} type="submit" onClick={handleSave}> Save</button>
                         </div>
             
                         </Form>
                        

                    </div>
                )}
            </Formik>
     </div>   
     </Container>
    <Newsletter background={true}/>
    <Footer/> 
    </div>
  )
}

export default AccountDetails