import React from 'react'
import './index.css'
import { Avatar } from '@material-ui/core'
import backgroundImage from '../../assets/banner.png'
// import HeaderOption from '../HeaderOption'
// import profileImage from '../../assets/photo.png'

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={backgroundImage} alt=''/>
            <Avatar className='sidebar__avatar' />
            <h2>Franki Callard</h2>
            <h4>AI Technologist</h4>
            
        </div>
        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,500</p>
            </div>
            <div className="sidebar__stat">
            <p>View on post</p>
            <p className="sidebar__statNumber">1,200</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default SideBar