import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import '../CSS/Admin/AdminDashboard.css'
import { DashboardData } from '../DataFiles/DashboardData'

import { Autocomplete, Switch, TextField } from '@mui/material'
import { Box } from '@mui/system'

import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { VendorList } from '../DataFiles/VendorList'
import { CustomerList } from '../DataFiles/CustomerList'
import { Country, State, City }  from 'country-state-city';
import { Navigate, useNavigate } from 'react-router-dom'
import CustomerlistTable from '../subcomponents/CustomerlistTable'

function AdminVendorList() {
    const States= State.getStatesOfCountry("IN")
    const [VendorData, setVendorData] = useState([])
    const [CustomerData, setCustomerData] = useState([])
   const navigate =useNavigate()
    const handleChecked = (checked) => {
    };
    useEffect(()=>{
      setVendorData(VendorList.slice(0,2))
      setCustomerData(CustomerList.slice(0,2))
    },[])
  
  
    return (
      <div className="Dashboard-wrapper"> 
         <Header/>
           
           
           <div className='Dashboard-banner-image'  >  
           
            <div className="Banner-image-overlay"> 
  
            </div>
             <div> 
              <h2> 
         Customer List
              </h2>
             </div>
            </div>
    <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%"}}>
        
          <DashboardSidebar admincustomerlist={true}/>
        <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
       
           <div style={{display:'flex',justifyContent:'space-between', width:'100%',alignItems: 'center'}}>
            <h2> Customer List </h2>
              </div>
          <div className='dashboard-lowerpart-wrapper' style={{marginTop:'3rem', marginBottom:"3rem"}}> 
                <div className='VendorList-wrapper'> 
                 <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}> 
                  <h2 style={{marginBottom:'0px'}}> Customers List</h2>
                    <div style={{display:'flex' , width:'60%' ,marginBottom: "1rem"}}> 
                              <Autocomplete
                                    id="country-select-demo"
                                    sx={{ width: '100%' }}
                                    options={DashboardData}
                                    autoHighlight
                                    style={{height:'35px', margin:'10px'}}
                                    getOptionLabel={(option) => option.storename}
                                    onChange={(option,value)=>{
                                      // setSelectedStore(value)
                                    }}
                                    renderOption={(props, option) => (
                                      
                                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        {option?.storename}
                                      </Box>
                                    )}
                                    renderInput={(params) => (
                                      <TextField
                                     
                                        {...params}
                                        label="Select Location"
                                        inputProps={{
                                          ...params.inputProps,
                                          autoComplete: 'new-password', // disable autocomplete and autofill
                                        }} /> )}
  
                                  />
         </div>
                
                 </div>
                 <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <CustomerlistTable/>
                   </div>
  
                </div>
              </div>  
        </div>        
          </Container>
          <Newsletter background={true}/>
          <Footer/> 
      </div>
    )
}

export default AdminVendorList