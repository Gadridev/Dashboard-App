import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './datatab.scss'
import { userColumns,userRows } from '../../datatable';
  
function DataTab() {
  const actionColumn =[
    {field:"action",headerName:"Action" ,width:200,renderCell:()=>{
      return (
        <div className='cellAction'>
          <div className="viewButton">view</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTab