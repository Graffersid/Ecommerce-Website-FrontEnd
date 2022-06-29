import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { flashproducts } from '../DataFiles/ProductsDetials';
import { useState } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { OrderData } from '../DataFiles/OrderData';


 
   


export default function DataTable() {

   const navigate = useNavigate()
    const columns = [
        { field: 'productId', headerName: 'Id', width: 20 },
        { field: 'Quantity', headerName: 'Quantity', width: 80 },
        { field: 'producttitle', headerName: 'Product Name', width: 160 },
        {
          field: 'productPrice',
          headerName: 'Price',
          type: 'number',
          width: 80,},
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            width: 200,
            renderCell: (params) => {
              const onClick = () => {
        
                // e.stopPropagation(); // don't select this row after clicking

                const api = params.api;
                const thisRow= {};
        
                api
                  .getAllColumns()
                  .filter((c) => c.field !== "__check__" && !!c)
                  .forEach(
                    (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                  );
        
                // return alert(JSON.stringify(thisRow, null, 4));
               var newProductlist = {
                productimg:'',
                productId: ''   ,
                producttitle:'',
                productDescription:'',
                productPrice:'',
                comparePrice:'',
                Quantity:'',
               }
               
               flashproducts.filter(item => item.productId === thisRow.productId).map(data=>{
                return  newProductlist.productimg =data.productimg,
                        newProductlist.productId = data.productId,
                        newProductlist.producttitle= data.producttitle,
                        newProductlist.productDescription= data.productDescription,
                        newProductlist.productPrice= data.productPrice,
                        newProductlist.comparePrice= data.comparePrice,
                        newProductlist.Quantity= data.Quantity
               })

              
               console.log('newProductlist',newProductlist)
                navigate(`/products/${thisRow.productId}`,{state:{name:newProductlist}})
                    
                // console.log('flashproducts',flashproducts)
              };
             const deleteProduct=()=>{
              alert('Delete')
             } 
        
              return <>
                 {}
              <button onClick={()=>onClick()} className="action-btn-table" style={{textDecoration:"none"}}>View</button> <button className="delete-btn-dashboardtable"> <DeleteIcon/></button>
              </>
            }
          },
        ];
    
    
      
    
      const rows=[]
    //   rows.push(flashproducts.map(data=>
    //     { return {id:data.productId,Quantity: `${data.Quantity}`, Productname: `${data.producttitle}`, price: `${data.productPrice}`,action:'View' }  
    // }))
  


    return (
    <div style={{ height: 400, width: '100%' }}>

      <DataGrid
        rows={flashproducts}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.productId}
        rowsPerPageOptions={[5]}
        checkboxSelection={false}
        style={{width:"100%"}}
        sx={{
            '& .MuiDataGrid-cell:last-of-type': {
              display:'none',
              width:'0 !important'
            },
          }}
      />
    </div>
  );
}
