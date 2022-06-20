import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import TextFields from '../subcomponents/TextFields';
import * as Yup from 'yup'
import '../CSS/Login.css'
import GoogleIcon from '@mui/icons-material/Google';

const clientId = "1034408768027-ph1mk6age6q01v8q6lnobqub5q6ar1gj.apps.googleusercontent.com";

function Login() {
   const [passtype, setpasstype] = useState(true)
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
  const validate= Yup.object({
    email:Yup.string().
     required('Email is required')
     .email('Email is Invalid'),
    password:Yup.string().
    required('Password is Required') 
  })
  const showpassword=(e)=>{
    setpasstype(!passtype)   
    console.log(e)
  }
    return (
        <div className='login-wrapper '>
             <div className='login-wrapper-sub-div'> 
            <Formik  initialValues={{
              email:"",
              password:''
            }}
            validationSchema={validate}
            onSubmit={values=>{
                console.log(values)
            }}>
              {formik => (
                    <div className='login-form-wrapper-inner'> 
                        <h1> Sign Up </h1>

                         <Form> 
                         <TextFields label="Email" name="email" type="email" />
                         <TextFields label="Password" name="password" type={passtype ? 'password':'text'}/>
                          <div className='showpassword-wrapper'> 
                            <p className='showpassword-text' onClick={(e)=>showpassword(e)}>  <input type="checkbox"  style={{margin:'5px', fontSize:'20px'}}/>Show Password </p>
                            <p style={{color:'black', textAlign:'right'}}>
                            <a href="/home" style={{color:'black', textAlign:'right'}}> Forgot Password?</a>
                            </p>
                            </div>   
                          <div className='login-btn-wrapper'> 
                        <button type="submit"> Login</button>
                         <p style={{textAlign:'center'}}> or</p>
                        <button type="submit" className='login-btn'> <span style={{marginRight:'10px'}}><GoogleIcon/> </span>Login with Google</button>
                        </div>
                         </Form>
                     <p style={{color:'rgba(90,90,90)', textAlign:"center" , marginTop:"22px"}}> Don't have any account? <a href="/register" style={{fontWeight:'700', color:'black'}}> Register </a></p>

                    </div>
                )
              }


            </Formik>
            </div>
           
           
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default Login;