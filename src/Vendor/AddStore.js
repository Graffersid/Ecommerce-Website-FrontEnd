import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import { styled } from '@mui/material/styles';
import DropDown from '../subcomponents/DropDown'
import SearchBar from '../subcomponents/SearchBar'
import AddtoCart from '../subcomponents/AddtoCart'
import MainLogo from '../Images/Ecommerce-logo.jpg'
import { Form, Formik } from 'formik';
import TextFields from '../subcomponents/TextFields';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import '../CSS/Dashboard.css'
import * as Yup from 'yup'
import { Button, Input } from '@mui/material'
import '../CSS/AddStore.css'
import '../CSS/Login.css'
import { Country, State, City }  from 'country-state-city';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function AddStore() {
    const [passtype, setpasstype] = useState(true)
    const [imageval, setimageval] =useState(false)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const States= State.getStatesOfCountry("IN")
    const [selectedState, setSelectedState] =useState('')
    const [selectedCity, setSelectedCity] =useState('')
   
    const validate= Yup.object({
        name:Yup.string()
        .required('Name is Required'),
        phone:Yup.string()
         .required('Phone Number is Required')
         .matches(phoneRegExp, 'Phone number is not valid')
         .min(10,'Must be 10-digit'),
   
        email:Yup.string()
         .required('Email is required')
         .email('Email is Invalid'),
         storeaddress:Yup.string()
          .required('Store Address is Required'),
          address1:Yup.string()
          .required('Address 1 is Required'),
          address2:Yup.string()
          .required('Address 2 is Required'),
          landmark:Yup.string()
          .required('Landmark is Required'),
          zipcode:Yup.string()
          .required('Zip Code is Required'),
      
      })
      const showpassword=(e)=>{
        setpasstype(!passtype)   
        console.log(e)
      } 
     const[stateValidation, setStateValidation] =useState(false)
     const[CityValidation, setCityValidation] =useState(false)
    //   const [ImageSrc,setImageSrc] = useState({
    //     file:"",
    //     imagePreviewUrl:''
    //   })
    //   const imagehhh=''
     const [imagetwo, setimagetwo] =useState('') 
      const config2 = {
          borderRadius: '100%',
          language: 'en',
          width: '120px',
          height: '120px',
          objectFit: 'contain',
          compressInitial: 100,
          hideEditBtn:'false',
          hideDownloadBtn:'false'
        };
        const handleImageupload=async(imagetwo)=>{
   
            const data = new FormData()
             console.log('ImageSrc.file',imagetwo)
             data.append('file', imagetwo)
             data.append('upload_preset','Profile-images')
         
            const res = await fetch('https://api.cloudinary.com/v1_1/graffersid-ecommerce/image/upload',{
               method:"POST",
               body:data
                }).then(r=> r.json())
            
        }
        const initialImage = '';
        const Input = styled('input')({
            display: 'none',
          }); 
       const handleLicenseUpload=(e)=>{
       console.log(e.target.value)
       } 
       const handleSave=()=>{
       <>
        {selectedState===''? setStateValidation(true) :null}
        {selectedCity===''? setCityValidation(true) :null}
        </>
       }
      const navigate=useNavigate()
   const handleAddProduct =()=>{
    navigate('/VendorAddProduct')
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
      
        <DashboardSidebar addstore={true}/>
    <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
               <h2 > Add Store</h2>

            <Formik  initialValues={{
              name:"",
              email:"",
              phone:'',
              address1:'',
              address2:'',
              landmark:'',
              zipcode:""
            }}
            validationSchema={validate}
            onSubmit={(values)=>{
         
                if(imagetwo ===''){
                    setimageval(true)
                }
                else{
                    setimageval(false) 
                }
                <div>
          
               </div>
              
              handleImageupload(imagetwo)
              console.log(values) 
            }}>

              {formik => (
                    <div className='login-form-wrapper-inner Register-wrapper' style={{width:"100%" , paddingLeft:'0rem'}}> 
                        <div style={{textAlign:'right'}}> 
                        <button onClick={handleAddProduct}> Add Product</button>
                         
                         </div>
                         <Form> 
                         <div className='register-form-wrapper' style={{display:'block'}}>    
                          <div className="image-picker-store" style={{display:'flex', alignItems:"center",justifyContent:"space-around", width:'50%', marginBottom:'3rem'}} >   
                                <ReactImagePickerEditor
                                config={config2}
                                imageSrcProp={initialImage}
                                imageChanged={(urldata) => {
                                    setimagetwo(urldata)
                                    setimageval(false) 
                                    // handleimagechangeMain()
                                    // console.log('name',name)
                                }} 
                
                            />
                           {imageval ? <p className="validationerrormsg" style={{textAlign:'center',color:'red', fontSize:'13px' }}> Image is required</p>:null }
                            {/* <input type="file" onChange={(e)=>handleimagechange(e)}/>
                            {console.log(ImageSrc.file ,ImageSrc.imagePreviewUrl)} */}
                            {/* {console.log('imagehhh',imagehhh)} */}
                            {/* <img src={imagetwo} style={{width:"20px", height:"20px"}}/> */}
                            {console.log('imagetwo',imagetwo)}
                            <p> Upload your logo image</p>
                         </div>
                         <div style={{display:'block', width: '100%'}}> 
                           <div style={{width:'100%',paddingRight:'1rem'}}> 
                           <TextFields label="Name" name="name" type="text" />
                           </div>
                          <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Store Email" name="email" type="email" />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Mobile Number" name="phone" type="text" />
                            </div>
                         </div>
                       
                         <div style={{width:'100%',paddingRight:'1rem'}}>
                              <TextFields label="Address Line 1" name="address1" type="text" />
                          </div>
                         
                          <div style={{width:'100%',paddingRight:'1rem'}}>
                             <TextFields label="Address Line 2" name="address2" type="text" />
                            </div>  
                       
                         <div  style={{width:"100%", display:'flex', justifyContent:'space-between'}}> 
                              <div style={{width:'80%',marginRight:'1rem'}}>
                                 <TextFields label="Landmark" name="landmark" type="text" />
                              </div>
                              <div style={{width:'80%',marginRight:'1rem'}}>
                                 <TextFields label="ZIP Code" name="zipcode" type="text" />
                              </div>
                         </div>
                         <div style={{width:"100%" , display:'flex'}}> 
                            <div style={{width:'80%',marginRight:'1rem'}} className='login-form-input-wrapper'>
                            <label className="inputfield-label">Select a State <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                            <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={States}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    setSelectedState(value)
                                    if(value===null){
                                      setStateValidation(true)
                                    }
                                    else{
                                      setStateValidation(false)
                                    }
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}  >
                                      <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                                        alt=""
                                        
                                      />
                                      {option?.name} ({option?.countryCode})
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                   
                                      {...params}
                                      label="Chooses a State"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }}
                                      onChange={(e,value)=>{}}
                                     
                                    /> )}

                                />
                                
                              {stateValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                                </div>
                                <div style={{width:'80%',marginRight:'1rem'}} className='login-form-input-wrapper'>
                                <label className="inputfield-label">Select a City <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                                 <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode)}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  name="selectcity"
                                  onChange={(option,value)=>{
                                    setSelectedCity(value)
                                    if(value===null){
                                      setCityValidation(true)
                                    }
                                    else{
                                      setCityValidation(false)
                                    }
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                      <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                                        alt=""
                                      />
                                      {option.name} ({option.countryCode})
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Choose a City"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }}
                                    
                                    />
                                 
                                    )} />
                                  {CityValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                                </div>
                   
                   
                          </div>
                          <div className='login-form-input-wrapper'>
                          <label className="inputfield-label">Upload Store License <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                          <label htmlFor="contained-button-file">
                                <Input accept="pdf/*" id="contained-button-file" multiple type="file" />
                                <Button component="span" className='upload-btn-store'>
                                Drag & Drop file here
                                </Button>
                            </label>
                            </div>
                         </div>   
                        
                         
                                
                      {/* {console.log(Country.getAllCountries())} */}
                     {/* {console.log(State.getStatesOfCountry("IN"))} */}
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

export default AddStore