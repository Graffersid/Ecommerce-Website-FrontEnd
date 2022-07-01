import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import { styled } from '@mui/material/styles';
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
import Header from '../components/Header';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import '../CSS/Admin/AdminPromoCode.css'

function AdminPromoCode() {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const States= State.getStatesOfCountry("IN")
    const [selectedState, setSelectedState] =useState('')
    const [selectedCity, setSelectedCity] =useState('')
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [valuetwo, setValuetwo] = React.useState(new Date('2019-10-20T21:11:54'));
        const handleChange = (newValue) => {
            setValue(newValue);
             };
    const validate= Yup.object({
        OfferName:Yup.string()
        .required('Name is Required'),
        OfferCode:Yup.string()
        .required('Offer Code is Required'),
        numofcustomers:Yup.string()
        .required('Customers is Required'),
        MinimumCartValue:Yup.string()
        .required('Minimum Cart Value is Required')
        .matches(phoneRegExp, 'Value is not valid'),
        MaximumCartValue:Yup.string()
        .required('Maximum Cart Value is Required')
        .matches(phoneRegExp, 'Value is not valid'),
        discount:Yup.string()
        .required('Discount Value is Required')
        .matches(phoneRegExp, 'Value is not valid'),
        description:Yup.string()
        .required('Description is Required')
      })

     const[stateValidation, setStateValidation] =useState(false)
     const[CityValidation, setCityValidation] =useState(false)


        

        const Input = styled('input')({
            display: 'none',
          }); 

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
        <Header/>
         
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
      
        <DashboardSidebar promocode={true}/>
    <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
               <h2 > Promo Code</h2>

            <Formik  initialValues={{
              OfferName:"",
              OfferCode:"",
              numofcustomers:'',
              MinimumCartValue:'',
              MaximumCartValue:'',
              discount:'',
              description:""
            }}
            validationSchema={validate}
            onSubmit={(values)=>{
        
                <div>
          
               </div>
              

              console.log(values) 
            }}>

              {formik => (
                    <div className='login-form-wrapper-inner Register-wrapper' style={{width:"100%" , paddingLeft:'0rem'}}> 
                        <div style={{textAlign:'right'}}> 
                        <a onClick={()=>{navigate('/AdminPromoCodeList')}}>  View Codes List</a>
                         
                         </div>
                         <Form> 
                         <div className='register-form-wrapper' style={{display:'block'}}>    
                    
                         <div style={{display:'block', width: '100%'}}> 
            
                          <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Offer Name" name="OfferName" type="text" />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Offer Code" name="OfferCode" type="text" />
                            </div>
                        
                         </div>
                         <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                            
                         <LocalizationProvider dateAdapter={AdapterDateFns} style={{justifyContent:'space-between'}}>
                            <Stack spacing={3} style={{width: "100%",display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>   
                           <div style={{width:'80%',marginRight:'1rem',marginBottom:"2rem"}}>
                          
                           <DateTimePicker
                            label="Date&Time picker"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} style={{borderRadius:'10px', width:"100%"}}/>}
                            />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem',marginTop:'0px',marginBottom:"2rem"}}>
                             <DateTimePicker
                                    label="Date&Time picker"
                                    value={valuetwo}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} style={{borderRadius:'10px', width:"100%"}}/>}
                                    />
                            </div>
                            </Stack>
                            </LocalizationProvider>
                         </div>
                         <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Number of Customers" name="numofcustomers" type="number" />
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Minimum Cart Value" name="MinimumCartValue" type="text" />
                            </div>
                        
                         </div>
                           <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                                                <label className="inputfield-label">Discount Type<sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
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
                                                        label="Discount Type"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                                        }}
                                                        onChange={(e,value)=>{}}
                                                        
                                                        /> )}

                                                    />
                                                    
                                                {stateValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Maximum Cart Value" name="MaximumCartValue" type="text" />
                            </div>
                        
                         </div>
                         <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'80%',marginRight:'1rem'}}>
                             <label className="inputfield-label">Category <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
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
                                      label="Category"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }}
                                    
                                    />
                                 
                                    )} />
                                  {CityValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                            </div>
                            <div style={{width:'80%',marginRight:'1rem'}}>
                            <TextFields label="Discount (indigits)" name="discount" type="text" />
                            </div>
                        
                         </div>
                         <div style={{width:"100%", display:'flex', justifyContent:'space-between'}}>  
                             <div style={{width:'100%',marginRight:'1rem'}}>
                            <TextFields label="Description" name="description" type="textarea" />
                            </div>
                         </div>              
                         </div>   
                        </div> 
                        <div style={{textAlign:"center",paddingRight: "1rem"}}>
                         <button style={{background:"black", fontWeight:"500",border:'none', color:'white' , borderRadius:"10px", padding:"13px 15px"}} type="submit" onClick={handleSave}> ADD PROMO CODE</button>
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

export default AdminPromoCode