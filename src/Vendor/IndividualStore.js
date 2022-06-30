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
import IndividualStoreTable from '../subcomponents/IndividualStoreTable.js';
function IndividualStore() {
    
   const StoreData= useLocation()
  
  return (
      <div className="Dashboard-wrapper"> 
         <Header/>
           
           
           <div className='Dashboard-banner-image'  >  
           
            <div className="Banner-image-overlay"> 
  
            </div>
             <div> 
              <h2> 
             DashBoard
              </h2>
             </div>
            </div>
      <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%"}}>
        
          <DashboardSidebar dashboard={true}/>
        <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 
           
             
            <h2> {StoreData.state.name.storename} </h2>
          
            <div style={{textAlign:'right'}}>
            <button className='addproduct-btn'> Add Product</button>
            </div>
   
          <div className='dashboard-lowerpart-wrapper'> 
        
         <div className='dashboard-page-table-header'>  
         <div style={{display:'flex' , width:'60%' , marginTop: "1rem",marginBottom: "1rem" }}> 
                    
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
           
           <div style={{width:'100%',margin:'10px',alignSelf: "center",alignItems: "center", padding: "10px",marginBottom:'3rem'}}> 
            <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                style={{paddingLeft:'0px'}}
              >
              <Tab eventKey="home" title="In Stocks" >
                <div className='order-table-wrapper' style={{width:'100%'}}>        
                    <IndividualStoreTable/>
                 </div>
                </Tab>
                 <Tab eventKey="profile" title="Out Of Stocks">
                 <div className='order-table-wrapper' style={{width:'100%'}}> 
                  <IndividualStoreTable/>
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
  

export default IndividualStore