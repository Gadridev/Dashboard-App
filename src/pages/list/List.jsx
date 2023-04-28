import React from 'react'
import './List.scss'
import Sidebare from '../../Components/sidebare/Sidebare'
import Navbar from '../../Components/Navbar/Navbar'
import DataTab from '../../Components/datatable/DataTab'
function List() {
  return (
    <div className='list'>
      <Sidebare />
      <div className="listContainer">
        <Navbar />
        <DataTab />
      </div>
    </div>
  )
}
export default List
