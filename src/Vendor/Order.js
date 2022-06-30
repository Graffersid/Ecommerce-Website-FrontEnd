import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import '../CSS/Dashboard.css'
import { Autocomplete, Box, TextField } from '@mui/material'
import { OrderData } from '../DataFiles/OrderData'
import '../CSS/Order.css'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Order() {

  const [OrderType, setOrderType] =useState('')
  const[stateValidation, setStateValidation] =useState(false)
  const order= [{name:'Recieved'},{name:'Packed'}, {name:'Dispatch'}, {name:"Out for Delivery"},{name:"Delivered"}]
  
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
    <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%" , height:'100vh'}}>
      
        <DashboardSidebar order={true} style={{width:'25%'}}/>
            <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 

            <h2> Order</h2>
                        <div style={{width:"44%" , marginTop:'2rem'}}> 
                              <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={order}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    setOrderType(value)
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

                           </div>
               <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <table style={{width:'100%'}}> 
                     <thead  style={{background:"#E0E0E0",borderRadius:'10px', textAlign:'center'}}>
                      <tr>
                      <th style={{padding:'13px'}}> Order </th>
                      <th style={{padding:'13px'}}> Date </th>
                      <th style={{padding:'13px'}}> Status </th>
                      <th style={{padding:'13px'}}> Total </th>
                      <th style={{padding:'13px'}}> Actions </th>
                      </tr>
                     </thead>
                    <tbody>
                   {OrderData.map((data)=>{
                   return (
                    <tr style={{padding:'15px', textAlign:'center'}}> 
                      <td style={{padding:'15px'}}>#{data.orderId}</td>
                      <td style={{padding:'15px'}}>{data.date}</td>
                      <td style={{padding:'15px'}}>{data.status}</td>
                      <td style={{padding:'15px'}}>{data.total}</td>
                      <td  style={{padding:'15px'}}> <Link to={`/VendorOrders/${data.orderId}`} state={{name:data}}  className="action-btn-table" style={{textDecoration:"none"}}>{data.actions}</Link></td>
                     </tr>
                   )

                   })}  
                     
                    </tbody>
                   </table>


               </div>
          
          </div>

        
        </Container>

      <Newsletter background={true}/>  
      <Footer/>
    </div>
  )
}

export default Order