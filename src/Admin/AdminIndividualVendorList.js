import React from 'react'
import { Container, Nav, Navbar, Tab, Tabs } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import '../CSS/Dashboard.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { DashboardData } from '../DataFiles/DashboardData'
import EnhancedTable from '../subcomponents/Table'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom';
import AdminVendorIndividualTable from '../subcomponents/AdminVendorIndividualTable';
function AdminIndividualVendorList() {
    
   const vendorData= useLocation()
  
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
        <div className="Dashboard-content-wrapper"> 
            <h2> {vendorData.state.name.VendorName} </h2>
          <div className='dashboard-lowerpart-wrapper'> 
         
          <div style={{display:'flex', flexWrap:'wrap'}}> 
         {DashboardData.map(storeData =>{
          return (
            <div className='dashboard-storebox-wrapper'> 
               <img src={storeData.storeimg}/>
                  <div>
                        <h3> {storeData.storename}</h3>
                        <p> Location: {storeData.locationcity}</p>
                  </div>
                 <div>
                  <ArrowForwardIosIcon style={{color:'#959595'}}/>
                   </div> 
              </div>
          )
  
         })}
      </div>
         <div className='dashboard-page-table-header'>  
         <div style={{display:'flex' , width:'90%' , marginTop: "1rem",marginBottom: "1rem" , marginRight:"auto", marginLeft:'auto'}}> 
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
                                        label="Select Store"
                                        inputProps={{
                                          ...params.inputProps,
                                          autoComplete: 'new-password', // disable autocomplete and autofill
                                        }} /> )}
  
                                  />
                             <Autocomplete
                                    id="country-select-demo"
                                    sx={{ width: '100%' }}
                                    options=''
                                    autoHighlight
                                    style={{height:'35px',margin:'10px'}}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(option,value)=>{
                                      // setSelectedStore(value)
                                  
                                    }}
                                    renderOption={(props, option) => (
                                      
                                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                        {option?.name}
                                      </Box>
                                    )}
                                    renderInput={(params) => (
                                      <TextField
                                     
                                        {...params}
                                        label="Select Product Categories"
                                        inputProps={{
                                          ...params.inputProps,
                                          autoComplete: 'new-password', // disable autocomplete and autofill
                                        }} 
                                        
                                        /> )}
  
                                  />          
  
         </div>
           
           <div style={{width:'100%',margin:'10px',alignSelf: "center",alignItems: "center", padding: "10px",}}> 
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
              >
              <Tab eventKey="home" title="In Stocks">
                <div className='order-table-wrapper' style={{width:'100%'}}>        
                     <AdminVendorIndividualTable/>
                 </div>
                </Tab>
                 <Tab eventKey="profile" title="Out Of Stocks">
                 <div className='order-table-wrapper' style={{width:'100%'}}> 
                    <AdminVendorIndividualTable/>
                </div>
               </Tab>
            </Tabs>
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
  

export default AdminIndividualVendorList