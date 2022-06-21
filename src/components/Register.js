import React, { useState } from 'react'
import * as Yup from 'yup'
import '../CSS/Login.css'
import { Form, Formik } from 'formik';
import TextFields from '../subcomponents/TextFields';
import GoogleIcon from '@mui/icons-material/Google';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import axios from 'axios'

function Register() {
    
    
    const [passtype, setpasstype] = useState(true)
    const [imageval, setimageval] =useState(false)
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

    //   const [ImageSrc,setImageSrc] = useState({
    //     file:"",
    //     imagePreviewUrl:''
    //   })
    //   const imagehhh=''
     const [imagetwo, setimagetwo] =useState('') 
      const config2 = {
          borderRadius: '100%',
          language: 'en',
          width: '230px',
          height: '230px',
          objectFit: 'contain',
          compressInitial: 100,
          hideEditBtn:'false',
          hideDownloadBtn:'false'
        };
        // const initialImage: string = '/assets/images/8ptAya.webp';
        const initialImage = '';

        const newimage = ''
//    const handleimagechange=(e)=>{

//             const reader = new FileReader();
//             const file = e.target.files[0];
//             reader.onloadend = () => {
//                 setImageSrc({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//             }
//            reader.readAsDataURL(file);

//         }
        // var blobUrl=''
        
        // const b64toBlob = (imagetwo, contentType='', sliceSize=512) => {
        //     const byteCharacters = atob(imagetwo);
        //     const byteArrays = [];
          
        //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        //       const slice = byteCharacters.slice(offset, offset + sliceSize);
          
        //       const byteNumbers = new Array(slice.length);
        //       for (let i = 0; i < slice.length; i++) {
        //         byteNumbers[i] = slice.charCodeAt(i);
        //       }
          
        //       const byteArray = new Uint8Array(byteNumbers);
        //       byteArrays.push(byteArray);
        //     }
          
        //     const blob = new Blob(byteArrays, {type: contentType});
        //     return blob;
        //   }
          

      
        // const handleimagechangeMain=()=>{  
        //     const contentType = 'image/png';
        //   const blob = b64toBlob(imagetwo, contentType);
        //    blobUrl = URL.createObjectURL(blob);
        //   console.log('blobUrl', blobUrl)
        // }  
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

    return (
    <div className='login-wrapper'>
    
    <div className='login-wrapper-sub-div'>  
      <Formik  initialValues={{
              name:"",
              email:"",
              password:'',
              confirmpassword:'',
              phone:''
            }}
            validationSchema={validate}
            onSubmit={(values)=>{
               
                if(imagetwo ===''){
                    setimageval(true)
                }
                else{
                    setimageval(false) 
                }
                handleImageupload(imagetwo)
            }}>
              {formik => (
                    <div className='login-form-wrapper-inner Register-wrapper'> 
                        <h1> Register </h1>
                  
                         <Form> 
                         <div className='register-form-wrapper'>    
                          <div style={{paddingLeft:'3rem'}} >   
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
                           {imageval ? <p className="validationerrormsg" style={{textAlign:'center'}}> Image is required</p>:null }
                            {/* <input type="file" onChange={(e)=>handleimagechange(e)}/>
                            {console.log(ImageSrc.file ,ImageSrc.imagePreviewUrl)} */}
                            {/* {console.log('imagehhh',imagehhh)} */}
                            {/* <img src={imagetwo} style={{width:"20px", height:"20px"}}/> */}
                            {console.log('imagetwo',imagetwo)}
                         </div>
                         <div style={{display:'flex', justifyContent:"space-between", width: '60%'}}> 
                          <div style={{width:"46%"}}>  
                            <TextFields label="Name" name="name" type="text" />
                            <TextFields label="Email" name="email" type="email" />
                            <TextFields label="Mobile Number" name="phone" type="text" />
                         </div>
                         <div style={{width:"46%"}}> 
                            <TextFields label="Password" name="password" type={passtype ? 'password':'text'}/>
                            <TextFields label="Confirm Password" name="confirmpassword" type={passtype ? 'password':'text'}/>
                            
                            <div className='showpassword-wrapper'> 
                                <p className='showpassword-text' onClick={(e)=>showpassword(e)}>  <input type="checkbox"  style={{margin:'5px', fontSize:'20px'}}/>Show Password </p>
                            </div>
                         </div>
                         </div>   
                       
                      
                        </div> 
                        <div className='login-btn-wrapper' style={{width:'60%', justifyContent:"right !important", marginLeft:'40%'}}> 
                         <button type="submit" > Register</button>
                         {/* <p style={{textAlign:'center'}}> or</p>
                         <button type="submit" className='login-btn'> <span style={{marginRight:'10px'}}><GoogleIcon/> </span>Login with Google</button> */}
                         <p style={{color:'rgba(90,90,90)', textAlign:"center" , marginTop:"22px"}}> Already have an account?  <a href="/login" style={{fontWeight:'700', color:'black'}}> Login </a></p>
                         </div>
                      
                         </Form>
                        

                    </div>
                )
              }


            </Formik>
            </div>
    </div>
  )
}

export default Register