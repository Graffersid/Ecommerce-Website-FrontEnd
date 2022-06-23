import React from 'react'
import '../CSS/Newsletter.css'
function Newsletter(props) {
  return (
    <div className='Newsletter-wrapper' style={{backgroundColor:`${props.background ? 'rgba(249,249,249)':null}`,padding:`${props.background ? '3rem':null}` }}>
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