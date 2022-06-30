import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import TextFields from '../subcomponents/TextFields'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ChangePassword() {
    const [passtype, setpasstype] = useState(true)
    const validate= Yup.object({
        password:Yup.string()
        .required('Password is Required'),
        confirmpassword:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('Confirm Password is Required') 
      
      })
      const showpassword=(e)=>{
        setpasstype(!passtype)   
        console.log(e)
      }   
    return (
    <div className="Dashboard-wrapper"> 
     <Header/>
     <div className='Dashboard-banner-image'  >  
         
         <div className="Banner-image-overlay"> 

         </div>
          <div> 
           <h2> 
       Change Password
           </h2>
          </div>
         </div>
         <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%" , marginBottom:'3rem'}}>
      
      <DashboardSidebar changepassword={true}/>
       <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
   
     
        <h2> Change Password </h2>    
        <Formik  initialValues={{
              password:"",
              confirmpassword:"",
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
                         
                                <div style={{width:'60%',paddingRight:'1rem'}}> 
                                <TextFields label="New Password" name="password" type={passtype ? 'password':'text'}/>
                                </div>
                                <div style={{width:'60%',paddingRight:'1rem'}}> 
                                <TextFields label="Confirm Password" name="confirmpassword" type={passtype ? 'password':'text'}/>
                                </div> 
                          </div> 
                          <div className='showpassword-wrapper'> 
                                <p className='showpassword-text' onClick={(e)=>showpassword(e)}>  <input type="checkbox"  style={{margin:'5px', fontSize:'20px'}}/>Show Password </p>
                            </div>
                         </div>   

                        <div style={{paddingRight: "1rem"}}>
                         <button classNmae="addproduct-btn" style={{background:"black", padding:"7px 13px",fontWeight:"500",border:'none', color:'white' , borderRadius:"6px"}} type="submit">Change Password </button>
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

export default ChangePassword