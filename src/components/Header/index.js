import React from 'react'
import './index.css'
import SearchIcon from '@material-ui/icons/Search'
import LinkedInImage from '../../assets/linkedIn.png'

function Header() {
  return (
    <>
    <div className='header'>Header Section</div>
    <h1>This is the header</h1>

    <div className='header__left'>
      <img src={LinkedInImage} />

      <div className="header__search">
        <SearchIcon />
      <input name="myInput" placeholder='Search...'></input>
      </div>
      

    </div>
    <div className='header__right'>
        
    </div>



    </>
  )
}

export default Header