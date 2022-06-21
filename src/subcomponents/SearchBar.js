import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import SearchField from "react-search-field";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import '../CSS/SearchBar.css'
function SearchBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const [ture,setTrue] = useState(true)
    var Maindata = [
        {
          key: "john",
          value: "John Doe",
        },
        {
          key: "jane",
          value: "Jane Doe",
        },
        {
          key: "mary",
          value: "Mary Phillips",
        },
        {
          key: "robert",
          value: "Robert",
        },
        {
          key: "karius",
          value: "Karius",
        },
      ];
     var newdata=[
        {
          key: "john",
          value: "John Doe",
        },
        {
          key: "jane",
          value: "Jane Doe",
        },
        {
          key: "mary",
          value: "Mary Phillips",
        },
        {
          key: "robert",
          value: "Robert",
        },
        {
          key: "karius",
          value: "Karius",
        },
      ];

     useEffect(()=>{},
     [ture]) 
  const handlesearchchange=(data)=>{
       
  }
 const handlesearchsubmit=(data)=>{
   newdata= Maindata.filter(item=> item.value !== data)
  console.log(Maindata.filter(item=> item.value !== data))
  setTrue(!ture)
 } 
    return (
    <div>

      <SearchIcon style={{width:"1.8rem", height:'1.8rem'}} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} >

       <div style={{textAlign:'right'}}>
            <CloseIcon onClick={handleClose} style={{cursor:'pointer' ,margin:'15px'}} />
            </div>

        <Modal.Body > 
        <SearchField
          placeholder="Search..."
          onChange={handlesearchchange}
          onSearchClick={(data)=>handlesearchsubmit(data)}
          classNames="test-class"
          style={{width:'100%'}}
        /></Modal.Body>
     
      </Modal>
<div>
{/* {newdata?.map(item => {
    return(
    <h2> {item.value}</h2>
    )
})} */}
</div>
    </div>
  )
}

export default SearchBar