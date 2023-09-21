import React from 'react'
import Sidebare from '../../Components/sidebare/Sidebare'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Widget from '../../Components/Widget/Widget'
import Featured from '../../Components/featured/Featured'
import Chart from '../../Components/chart/Chart'
import Table from '../../Components/table/Table'


function Home() {
  return (
    <div className='home'>
      <Sidebare />
      
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1.1} title="User Spending(Last Months"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
        </div>
    </div>
  )
}

export default Home
