import React from 'react'
import '../CSS/footer.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
   <div> 
   
<div className='footer-wrapper'>

   <ul> 
   <li className='li-header-footer'> Social</li> 
   <li><InstagramIcon/> Instagram</li>
   <li><TwitterIcon/> Twitter</li>
   <li><span> <FacebookSharpIcon/></span> Facebook</li>
   <li> <YouTubeIcon/>Youtube</li>
   </ul>
   <ul> 
   <li className='li-header-footer'>Contact </li> 
   <li> Contact Us</li>
   <li> youexample@email.com</li>
   <li> example@email.com</li>
   <li> Call us: +1 254 568-5479</li>
   </ul>
   <ul> 
    <li className='li-header-footer'>About </li>
   <li>Support Center</li>
   <li>Customer Support</li>
   <li>About Us</li>
   <li>Copyright</li>
   </ul>
    <ul> 
        <li className='li-header-footer'> Customer Care</li>
    <li>FAQ & Helps </li>
    <li>Shipping & Delivery </li>
    <li>Return & Exchanges</li>
    </ul>
    <ul> 
      <li className='li-header-footer'>Our Information </li>  
    <li>Privacy policy update</li>
    <li>Terms & conditions</li>
    <li>Return Policy </li>
    <li> Site Map</li>


    </ul>
    <ul> 
        <li className='li-header-footer'> Top Categories</li>
    <li>Men's Wear </li>
    <li>Men's Wear </li>
    <li>Kid's Wear</li>
    <li>Sports Wear</li>
    </ul>


    </div>
    <div className='footer-section-lower'> 
      <div className=''>
        
        Copyright © 2022 <span>RedQ</span>, Inc.  All rights reserved
        </div>
    <div className=''> 
        Payment Icons
        <img src=""/>
        <img src=""/>
        <img src=""/>
        <img src=""/>
        </div>  
    </div>
</div>
  )
}

export default Footer