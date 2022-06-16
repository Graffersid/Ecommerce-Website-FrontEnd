import React, { useEffect, useState } from 'react'
import SearchField from "react-search-field";
function SearchBar() {
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
  <SearchField
  placeholder="Search..."
  onChange={handlesearchchange}
  onSearchClick={(data)=>handlesearchsubmit(data)}
  classNames="test-class"
/>
<div>
{newdata?.map(item => {
    return(
    <h2> {item.value}</h2>
    )
})}
</div>
    </div>
  )
}

export default SearchBar