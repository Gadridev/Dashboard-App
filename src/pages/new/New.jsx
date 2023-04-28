import React from 'react'
import Sidebare from '../../Components/sidebare/Sidebare'
import Navbar from '../../Components/Navbar/Navbar'

import './New.scss'
import { DriveFileRenameOutlineRounded, DriveFolderUploadOutlined } from '@mui/icons-material'

function New() {
  return (
    <div className='new'>
      <Sidebare /> 
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src= "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form >
            <div className="forminput">
                <label htmlFor="file" >image:<DriveFileRenameOutlineRounded className='icon' /></label>
                <input type="file" id='file' style={{display:"none"}} />
              </div>
              <div className="forminput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='john_doe' />
              </div>
              
              <div className="forminput">
                <label htmlFor="">Name and username</label>
                <input type="text" placeholder='john_doe' />
              </div>
              
              <div className="forminput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john_doe8@gmail.com' />
              </div>
              <div className="forminput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='0615121400' />
              </div>
              <div className="forminput">
                <label htmlFor="">Password</label>
                <input type="Password" />
              </div>
              <div className="forminput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Menzah atlas 2 beni mellal' />
              </div>
              <div className="forminput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder='Morocco' />
              </div>
              <button type='submit'>Send</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default New
