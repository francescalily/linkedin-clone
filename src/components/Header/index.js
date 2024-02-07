import React from 'react'
import './index.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import LinkedInImage from '../../assets/linkedIn.png'
import HeaderOption from '../HeaderOption'
import profileImage from '../../assets/photo.png'

function Header() {
  return (
    <>
    <div className='header'>
     <div className='header__left'>
       <img src={LinkedInImage} />
       <div className="header__search">
         <SearchIcon />
       <input name="myInput" placeholder='Search...'></input>
       </div>
      
     </div>
       <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={profileImage} title="Profile" />
     </div>
    </div>



    </>
  )
}

export default Header