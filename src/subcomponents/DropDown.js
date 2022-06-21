import React, { Component } from 'react'
import '../CSS/DropDown.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default class DropDown extends Component {
  render() {
    return (
<div class="dropdown">
  <button class="dropbtn">Dropdown  <KeyboardArrowDownIcon/> </button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
    )
  }
}
