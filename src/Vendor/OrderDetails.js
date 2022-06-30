import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import DashboardSidebar from './DashboardSideBar'
import DashboardImage from '../Images/DashboardImage.jpg'

import '../CSS/Dashboard.css'
import { Autocomplete, Box, TextField } from '@mui/material'
import '../CSS/Order.css'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Header from '../components/Header'
function OrderDetails() {
    const OrderData = useLocation()    
    const [OrderType, setOrderType] =useState('')
    const[stateValidation, setStateValidation] =useState(false)
    const order= [{name:'Recieved'},{name:'Failed'}, {name:'InProgreess'}]
    var Ordersubtotal =0 
    var Ordertotal = 0
    const [pricearr,setpricearr] =useState([])
    useEffect(()=>{

    },[])

 const totalprice=()=>{
     OrderData.state.name.orderDetails.products.map(data=>{
        pricearr.push(data.price)
      })
      var sum = pricearr.reduce((a, b)=>{
        return a + b;
       }); 
    
    // setOrdersubtotal(sum)
    // setOrdertotal(sum+17) 
    // console.log(sum)
    // console.log(pricearr)
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
    <Container style={{display:'flex',flexWrap:'wrap' , marginTop:"5rem" , maxWidth:"85%" , height:'100vh'}}>
      
        <DashboardSidebar order={true} style={{width:'25%'}}/>
            <div className="Dashboard-content-wrapper" style={{width:'75%'}}> 

            <h2> Order Details : #{OrderData.state.name.orderId}</h2>
                    {console.log(OrderData)}

               <p style={{marginBottom:'0px',fontStyle: "normal",fontWeight: 400,fontSize: "16px",lineHeight: "22px",color:" #8A8A8A"}}> <span style={{fontWeight: 600,fontSize: "16px",lineHeight: "22px",color: "#464646"}}> <LocationOnOutlinedIcon/>Address </span> :{OrderData.state.name.orderDetails.address}</p>     
               <div className='order-table-wrapper' style={{width:'100%'}}> 
                   <table style={{width:'100%'}}> 
                     <thead  style={{background:"#E0E0E0",borderRadius:'10px', textAlign:'center'}}>
                      <tr>
                      <th style={{padding:'13px'}}> Product </th>
                      <th style={{padding:'13px'}}> Total </th>
                      </tr>
                     </thead>
                    <tbody>
                   {OrderData.state.name.orderDetails.products.map((data)=>{
                          pricearr.push(data.price)
                
                          var sum = pricearr.reduce((a, b)=>{
                              return a + b;
                          }); 
                          
                          Ordersubtotal= sum
                          Ordertotal = Ordersubtotal +17
                          console.log(sum)
                          console.log(pricearr)
                  return (
                    
                    <tr style={{padding:'15px', textAlign:'center' ,borderBottom:'0.5px solid #B6B6B6'}}> 
                       <td style={{padding:'15px'}}>{data.name}</td>
                       <td style={{padding:'15px'}}>${data.price}.00</td>
                     </tr>
                   )
                 })}  
                     <tr style={{padding:'15px', textAlign:'center', backgroundColor:'#E0E0E0'}}> 
                      <td style={{padding:'15px' ,fontWeight: 600}}>SubTotal:</td>
                      <td style={{padding:'15px',fontWeight: 600}}>${Ordersubtotal}.00</td>
                  
                         
                   
                     </tr>
                     <tr style={{padding:'15px', textAlign:'center'}}> 
                      <td style={{padding:'15px'}}>Shipping:</td>
                      <td style={{padding:'15px'}}>{OrderData.state.name.orderDetails.shipping}
                      </td>
                     </tr>
                     <tr style={{padding:'15px', textAlign:'center',backgroundColor:'#E0E0E0'}}> 
                      <td style={{padding:'15px',fontWeight: 600}}>Payment Method:</td>
                      <td style={{padding:'15px',fontWeight: 600}}>{OrderData.state.name.orderDetails.paymentMethod}</td>
                     </tr>
                     <tr style={{padding:'15px', textAlign:'center'}}> 
                      <td style={{padding:'15px'}}>Total:</td>
                      <td style={{padding:'15px'}}>${Ordertotal}.00</td>
                     </tr> 
                     <tr style={{padding:'15px', textAlign:'center',backgroundColor:'#E0E0E0'}}> 
                      <td style={{padding:'15px',fontWeight: 600}}>Note:</td>
                      <td style={{padding:'15px',fontWeight: 600}}>{OrderData.state.name.orderDetails.note}</td>
                     </tr>  
                    </tbody>
                   </table>


               </div>
            <div style={{textAlign:'center', marginTop:'3rem'}}> 
                  <p> Updated Order Status</p>
                <button style={{backgroundColor:'black', color:"white", border:'none',fontSize: "16px",fontSize: "15px",padding: "6px 11px",borderRadius: "5px",margin: "10px"}}> Mark as Packed</button>
                <button style={{backgroundColor:'black', color:"white", border:'none',fontSize: "16px",fontSize: "15px",padding: "6px 11px",borderRadius: "5px",margin: "10px"}}> Packing in Process</button>
            </div>
          </div>

        
        </Container>

      <Newsletter background={true}/>  
      <Footer/>
    </div>
  )
}

export default OrderDetails