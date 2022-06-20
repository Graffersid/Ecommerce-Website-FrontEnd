import React, { useState } from 'react'
import * as Yup from 'yup'
import '../CSS/Login.css'
import { Form, Formik } from 'formik';
import TextFields from '../subcomponents/TextFields';
import GoogleIcon from '@mui/icons-material/Google';
function Register() {
    const [passtype, setpasstype] = useState(true)
   
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
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
        password:Yup.string()
        .required('Password is Required'),
        confirmpassword:Yup.string().oneOf([Yup.ref('password'),null], 'Password must match').required('Confirm Password is Required') 
      })
      const showpassword=(e)=>{
        setpasstype(!passtype)   
        console.log(e)
      } 
    return (
    <div className='login-wrapper'>
    
    <div className='login-wrapper-sub-div'>  
      <Formik  initialValues={{
              name:"",
              email:"",
              password:'',
              confirmpassword:''
            }}
            validationSchema={validate}
            onSubmit={values=>{
                console.log(values)
            }}>
              {formik => (
                    <div className='login-form-wrapper-inner'> 
                        <h1> Register </h1>

                         <Form> 
                         <TextFields label="Name" name="name" type="text" />
                         <TextFields label="Email" name="email" type="email" />
                         <TextFields label="Mobile Number" name="phone" type="text" />
                         <TextFields label="Password" name="password" type={passtype ? 'password':'text'}/>
                         <TextFields label="Confirm Password" name="confirmpassword" type={passtype ? 'password':'text'}/>
                          <div className='showpassword-wrapper'> 
                            <p className='showpassword-text' onClick={(e)=>showpassword(e)}>  <input type="checkbox"  style={{margin:'5px', fontSize:'20px'}}/>Show Password </p>
                         </div>   
                          <div className='login-btn-wrapper'> 
                        <button type="submit"> Register</button>
                         <p style={{textAlign:'center'}}> or</p>
                        <button type="submit" className='login-btn'> <span style={{marginRight:'10px'}}><GoogleIcon/> </span>Login with Google</button>
                        </div>
                         </Form>
                        <p style={{color:'rgba(90,90,90)', textAlign:"center" , marginTop:"22px"}}> Already have an account?  <a href="/login" style={{fontWeight:'700', color:'black'}}> Login </a></p>

                    </div>
                )
              }


            </Formik>
            </div>
    </div>
  )
}

export default Register