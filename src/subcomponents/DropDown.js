import React, { Component } from 'react'
import '../CSS/DropDown.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function DropDown (props){

    return (
<div class="dropdown">
  <button class="dropbtn">{props.name}  <KeyboardArrowDownIcon/> </button>
  <div class="dropdown-content">
 {props.children}
  </div>
</div>
    )
  
}
