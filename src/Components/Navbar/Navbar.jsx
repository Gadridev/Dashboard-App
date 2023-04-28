import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import image1 from '../../assets/pexels-andrea-piacquadio-774909.jpeg'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper' >
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <NightlightRoundOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">
              1
            </div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">
              1
            </div>
          </div>
          <div className="item">
            <ListOutlinedIcon />
    
          </div>
          <div className="item">
            <img src={image1} alt="" className='avatr' />
    
          </div>
        </div>

      </div>
    
    </div>
  )
}

export default Navbar
