import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'

import '../CSS/Dashboard.css'
import { Form, Formik } from 'formik';
import { RMIUploader } from "react-multiple-image-uploader"
import * as Yup from 'yup'
import TextFields from '../subcomponents/TextFields'
import { Autocomplete, Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material'
import '../CSS/AddProduct.css'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'

function AddProduct() {
 
   const [dataSources, setdataSources] = useState([])
     const [Rerender,setRerender] =useState(false)
    const [visible, setVisible] = useState(false);
    const handleSetVisible = () => {
      setVisible(true);
    };
    const hideModal = () => {
      setVisible(false);
    };
    const onUpload = (data) => {
        setdataSources([...dataSources,{
            id:Math.floor(Math.random() * 100),
            dataURL:data[data.length-1].dataURL
        }])
      console.log(data, dataSources)  
    };
    const onSelect =(data) => {
      console.log("Select files", data);
    };
    const onRemove = (id) => {
        setdataSources(dataSources.filter(idremove =>  idremove.id !== id))
        console.log(dataSources)
    };
 useEffect(()=>{
    console.log('vsbd')
 }
 ,[Rerender])
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const validate= Yup.object({
    productname:Yup.string()
    .required('Product Name is Required'),
    description:Yup.string()
    .required('Description is Required'),
    productprice:Yup.string()
     .required('Product Price is Required')
     .matches(/^[0-9]+$/, 'Product Price is not valid')


  }) 
  const[selectedCategory, setSelectedCategory] =useState('') 
  const[selectedCheckBox, setselectedCheckBox] =useState('') 
  const[CategoryValidation, setCategoryValidation] =useState(false)
  const[selectedProduct, setselectedProduct] =useState('')

  const[CheckBoxValidation, setCheckBoxValidation] =useState(false)
  const categories =[{name:"Men"}, {name:'Kids'}, {name:"Women"}]
  const handleSave=()=>{
    <>
     {selectedCategory===''? setCategoryValidation(true):null}
     {selectedProduct===''?setCheckBoxValidation(true):null }
     </>
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
      
        <DashboardSidebar dashboard={true}/>
          <div className="Dashboard-content-wrapper" style={{width:'78%'}}> 

     <h2 > Dashboard</h2>

     <div>    
       {/* <button onClick={handleSetVisible}> Show Me</button>  */}
       <label className="inputfield-label">Upload your product Image <sup style={{color:'red',fontSize:"19px",top:'0px'}}></sup></label>
    <RMIUploader
        isOpen={true}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
        className="multiple-product-image"
    /> 
       {/* {console.log(dataSources)} */}
       
       
   
     <Formik initialValues={{
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
                             <div style={{width:'80%',marginRight:'1rem'}}>
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
                            <div>
                            <FormControl>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                style={{flexDirection:'row'}}
                                onChange={(option,value)=>{
                                    setselectedCheckBox(value)
                                    if(value===null){
                               
                                        setCheckBoxValidation(true)
                                      }
                                      else{
                            
                                        setCheckBoxValidation(false)
                                      }
                                }}
                                >
                                <FormControlLabel value="men" control={<Radio style={{color:'black'}}/>} label="Men" style={{marginLeft:'33px',marginRight:'33px',color:'black',fontSize: "16px"}}/>
                                <FormControlLabel value="women" control={<Radio style={{color:'black'}}/>} label="Women" style={{marginLeft:'33px',marginRight:'33px',color:'black',fontSize: "16px"}}/>
                                <FormControlLabel value="kids" control={<Radio style={{color:'black'}}/>} label="Kids" style={{marginLeft:'33px',marginRight:'33px',color:'black',fontSize: "16px"}}/>
                            </RadioGroup>
                            </FormControl>
                            {CheckBoxValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Please Select One</p> :null}
                              </div> 
                              </div>
                         </div>
                      
                         <div style={{width:"100%" , display:'flex'}}> 
                            <div style={{width:'100%',marginRight:'1rem'}} className='login-form-input-wrapper'>
                            <label className="inputfield-label">Category <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
                             <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={categories}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    setSelectedCategory(value)
                                    if(value===null){
                                        setCategoryValidation(true)
                                    }
                                    else{
                                        setCategoryValidation(false)
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
                                      label="Select Product Category"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} /> )}

                                />
                                
                              {CategoryValidation ? <p className="validationerrormsg" style={{color:'red', fontSize:'13px'}}> Required</p> :null}
                                </div>
                   
                   
                          </div>
                          <div style={{width:'98%',marginRight:'1rem'}}>
                          <TextFields label="Description" name="description" type="textarea" />  
                          </div>
                         </div>   
                        
                         
                                
                      {/* {console.log(Country.getAllCountries())} */}
                     {/* {console.log(State.getStatesOfCountry("IN"))} */}
                        </div> 
                        <div style={{textAlign:"right",paddingRight: "1rem"}}>
                         <button style={{background:"transparent", fontWeight:"700",border:'none', color:'black' , borderRadius:"6px", fontSize:"17px"}} type="submit" onClick={handleSave}> Publish Product</button>
                         </div>
             
                         </Form>
                        

                    </div>
                )}
            </Formik>

  </div>

  </div>
 
        </Container>

      {/* <MultiImagePicker/>   */}

      {/* {dataSources?.map(data=> {
        return (
            <div><img src={data.dataURL}/> </div>
        )
       })}  */}
        <Newsletter background={true}/>
        <Footer/>
    </div>
  )
}

export default AddProduct