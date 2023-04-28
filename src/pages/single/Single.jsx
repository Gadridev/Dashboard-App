import React from 'react'
import Sidebare from '../../Components/sidebare/Sidebare'
import Navbar from '../../Components/Navbar/Navbar'
import Chart from '../../Components/chart/Chart'
import './Single.scss'
import List from '../../Components/table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebare />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
               <div className="details">
                <h1 className="itemname">Jane Doe  </h1>
                <div className="detailItam">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janeDoe@gmail.com</span>
                </div>
                <div className="detailItam">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2313 12 14</span>
                </div>
                <div className="detailItam">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NewYork</span>
                </div>
                <div className="detailItam">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
               </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={1/0.6} title="User Spending(Last Months)"/>
          </div>

        </div>
        <div className="bottom">
        <h1 className="title">Last transactions</h1>
          <List />
        </div>

      
      </div>
    </div>
  )
}

export default Single
