import React from 'react'
import '../CSS/Newsletter.css'
function Newsletter() {
  return (
    <div className='Newsletter-wrapper'>
    <div> 
       <h3>Get Expert Tips In Your Inbox</h3> 
       <p> Subscribe to our newsletter and stay updated.</p>
        </div> 
     <div className='Newslatter-second'> 
      <input type="text" placeholder='Write your email here'/>
      <button> Subscribe</button>
     </div>
    </div>
  )
}

export default Newsletter