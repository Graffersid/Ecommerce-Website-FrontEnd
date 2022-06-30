import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import '../CSS/Admin/AdminDashboard.css'
import { DashboardData } from '../DataFiles/DashboardData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Autocomplete, Switch, TextField } from '@mui/material'
import { Box } from '@mui/system'
import EnhancedTable from '../subcomponents/Table'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { OrderData } from '../DataFiles/OrderData'
import { VendorList } from '../DataFiles/VendorList'
import { CustomerList } from '../DataFiles/CustomerList'
import { Country, State, City }  from 'country-state-city';
import { Navigate, useNavigate } from 'react-router-dom'



function AdminDashBoard() {
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
            My Account
            </h2>
           </div>
          </div>
    <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%"}}>
      
        <DashboardSidebar AdminDashBoard={true}/>
      <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
     
         <div style={{display:'flex',justifyContent:'space-between', width:'100%',alignItems: 'center'}}>
          <h2> Dashboard </h2>
            <div style={{textAlign:'right',display:'flex',justifyContent:'space-between', width:'50%'}}> 
                <div className='AdminDashboard-display'>
                    <p> No of Customers</p>
                    <p> 12,232</p>
                </div>
                <div className='AdminDashboard-display'> 
                    <p> No of Vendors</p>
                    <p> 29,110</p>
                </div>
            </div>
            </div>
        <div className='dashboard-lowerpart-wrapper' style={{marginTop:'3rem', marginBottom:"3rem"}}> 
              <div className='VendorList-wrapper'> 
               <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}> 
                <h2 style={{marginBottom:'0px'}}> Vendors List</h2>
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
                                      label="Select Category"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} /> )}

                                />
                           <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: '100%' }}
                                  options={States}
                                  autoHighlight
                                  style={{height:'35px',margin:'10px'}}
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    // setSelectedStore(value)
                                
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                     {option?.name} ({option?.countryCode})
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                   
                                      {...params}
                                      label="Select Location"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} 
                                      
                                      /> )}

                                />          

       </div>
              
               </div>
               <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <table style={{width:'100%'}}> 
                     <thead  style={{background:"#E0E0E0",borderRadius:'10px', textAlign:'center'}}>
                      <tr>
                        <th style={{padding:'13px'}}> # </th>
                        <th style={{padding:'13px'}}> Vendor Name</th>
                        <th style={{padding:'13px'}}> Status </th>  
                        <th style={{padding:'13px'}}> Action </th>
                      </tr>
                     </thead>
                    <tbody>
                   {VendorData.map((data)=>{
                         
                  return (
                    
                    <tr style={{padding:'15px', textAlign:'center' ,borderBottom:'0.5px solid #B6B6B6'}}> 
                       <td style={{padding:'15px'}}>{data.VendorId}</td>
                       <td style={{padding:'15px'}}>{data.VendorName}</td>
                       <td style={{padding:'15px'}}><button className={data.checked ? `check-btn`:`unchecked-btn`}>{data.VendorStatus}</button></td>
                       <td style={{padding:'15px'}}>  
                       <Switch
                        checked={data.checked}
                        onChange={()=>handleChecked(data.VendorId, data.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                       />
                       </td>
                     </tr>
                   )
                 })}  
                    </tbody>
                   </table>
                   <div className='table-bottom-btn'>
                   <button onClick={()=>{
                    navigate('/AdminVendorList')
                   }}> See All</button>
                   </div>
                 </div>

              </div>
              <div className='VendorList-wrapper' style={{marginTop:'2rem'}}> 
              <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center'}}> 
                <h2 style={{marginBottom:'0px'}}> Customers List</h2>
                <div style={{display:'flex' , width:'60%',marginBottom: "1rem"}}> 
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
                                      label="Select Product Categories"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }} /> )}

                                />       

                </div>
               </div>
               <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <table style={{width:'100%'}}> 
                     <thead  style={{background:"#E0E0E0",borderRadius:'10px', textAlign:'center'}}>
                      <tr>
                        <th style={{padding:'13px'}}> # </th>
                        <th style={{padding:'13px'}}> Customer Name</th>
                        <th style={{padding:'13px'}}> Customer Email</th>
                        <th style={{padding:'13px'}}> Contact</th>
                        <th style={{padding:'13px'}}> Status </th>  
                        <th style={{padding:'13px'}}> Action </th>
                      </tr>
                     </thead>
                    <tbody>
                   {CustomerData.map((data)=>{
                         
                  return (
                    
                    <tr style={{padding:'15px', textAlign:'center' ,borderBottom:'0.5px solid #B6B6B6'}}> 
                       <td style={{padding:'15px'}}>{data.CustomerId}</td>
                       <td style={{padding:'15px'}}>{data.CustomerName}</td>
                       <td style={{padding:'15px'}}>{data.CustomerEmail}</td>
                       <td style={{padding:'15px'}}>+91 -{data.CustomerContact}</td>
                       <td style={{padding:'15px'}}><button className={data.checked ? `check-btn`:`unchecked-btn`}>{data.CustomerStatus}</button></td>
                       <td style={{padding:'15px'}}>  
                       <Switch
                        checked={data.checked}
                        onChange={()=>handleChecked(data.CustomerId, data.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                       />
                       </td>
                     </tr>
                   )
                 })}  
                    </tbody>
                   </table>
                   <div className='table-bottom-btn'>
                   <button> See All</button>
                   </div>
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

export default AdminDashBoard