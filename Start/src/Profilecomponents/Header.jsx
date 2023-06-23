import React from 'react'
import '../Header.css'
import {IoMdNotificationsOutline} from "react-icons/io"
import {AiOutlineUser} from 'react-icons/ai'
const Header = () => {
  return (
    <div className="Header">
        <div className='Header-link' > <a href="#">Back</a> </div>
      <div className='divIcons' >
        
        <IoMdNotificationsOutline className="icons" id='noti' />

        <AiOutlineUser className="icons" />
      </div>
    </div>
  );
}

export default Header