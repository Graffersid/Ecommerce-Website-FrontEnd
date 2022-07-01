import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Button, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { VendorList } from '../DataFiles/VendorList';
import { CustomerList } from '../DataFiles/CustomerList';

export default function VendorListTable() {

   const navigate = useNavigate()
   

   const columns = [
        { field: 'CustomerId', headerName: '#', width: 20 },
        { field: 'CustomerName', headerName: 'Name', width: 100 },
        { field: 'CustomerEmail', headerName: 'Email', width: 200 },
        { field: 'CustomerContact', headerName: 'Contact', width: 150 },
        { field: 'CustomerStatus', headerName: 'Status', width: 100,
        renderCell: (params) => {
            const handleStatus=()=>{
                const api = params.api;
                const thisRow= {};
        
                api
                  .getAllColumns()
                  .filter((c) => c.field !== "__check__" && !!c)
                  .forEach(
                    (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                  );
              return thisRow.CustomerStatus
            }
            const handlechecked=()=>{
                const api = params.api;
                const thisRow= {};
        
                api
                  .getAllColumns()
                  .filter((c) => c.field !== "__check__" && !!c)
                  .forEach(
                    (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                  );
                  return  thisRow.checked 
            }
          return <>
            <button className={handlechecked() ? `check-btn`:`unchecked-btn`} onClick={handleStatus}> {handleStatus()}</button>
        
          </>
        } },
      
           {
            field: "checked",
            headerName: "Action",
            sortable: false,
            width: 130,
            renderCell: (params) => {
               
                var check;
      
                const api = params.api;
                const thisRow= {};
                api
                  .getAllColumns()
                  .filter((c) => c.field !== "__check__" && !!c)
                  .forEach(
                    (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                  );
         
                   if(check===undefined){
                    check=thisRow.checked
                  } 
                const handleChecked=(check)=>{
        
                      const handlereverse =(check)=>{
                        console.log(thisRow.checked)
                        if(check){
                           check = false
                       }
                       else{
                           check =true
                       }

                   }  
                    
                  return  <> 
                  <Switch
                  checked={check}
                  onChange={()=>handlereverse(check)}
                  inputProps={{ 'aria-label': 'controlled' }}
                 /></>
                }
            
              return <>
               {handleChecked(check)}
              </>
            }
          }, 
        
        ];
    
    
      
    
      const rows=[]
    //   rows.push(flashproducts.map(data=>
    //     { return {id:data.productId,Quantity: `${data.Quantity}`, Productname: `${data.producttitle}`, price: `${data.productPrice}`,action:'View' }  
    // }))
  


    return (
    <div style={{ height: 660, width: '100%' }}>
      <DataGrid
        rows={CustomerList}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.CustomerId}
        rowsPerPageOptions={[10]}
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
