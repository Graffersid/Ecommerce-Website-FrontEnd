import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { flashproducts } from '../DataFiles/ProductsDetials';
import { Link, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';

function AdminVendorIndividualTable() {
    const navigate = useNavigate()
    const columns = [
        { field: 'productId', headerName: '#', width: 20 },
        { field: 'producttitle', headerName: 'Product Name', width: 180 },
        { field: 'Quantity', headerName: 'Quantity', width: 80 },
        { field: 'ProductStatus', headerName: 'Status', width: 130,
         renderCell:(params)=>{
          
            const handleproductStatus=()=>{
            const api = params.api;
            const thisRow= {};
    
            api
              .getAllColumns()
              .filter((c) => c.field !== "__check__" && !!c)
              .forEach(
                (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
              );
            return thisRow.ProductStatus
            }
            return <>
               <button className={handleproductStatus() ? `check-btn`:`unchecked-btn`}> {handleproductStatus() ? 'Active':'InActive'}</button>
               </>
         }     
    },
        {
          field: 'productPrice',
          headerName: 'Price',
          type: 'number',
          width: 80,},
         {
            field: "action",
            headerName: "Action",
            sortable: false,
            width: 100,
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
                  return <>
                  <Switch
                   checked={thisRow.ProductStatus}
                   onChange={()=>{}}
                   inputProps={{ 'aria-label': 'controlled' }}
                  />
               </>
              }
              return <>
                 {onClick()}
              </>
            }
          },
        ];
    
    
      
    
      const rows=[]
    //   rows.push(flashproducts.map(data=>
    //     { return {id:data.productId,Quantity: `${data.Quantity}`, Productname: `${data.producttitle}`, price: `${data.productPrice}`,action:'View' }  
    // }))
  


    return (
    <div style={{ height: 630, width: '100%' }}>

      <DataGrid
        rows={flashproducts}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.productId}
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

export default AdminVendorIndividualTable