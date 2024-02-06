import React from 'react'
import './index.css'

function Header() {
  return (
    <>
    <div className='header'>Header Section</div>
    <h1>This is the header</h1>

    <div className='header__left'>
      <img src="" alt="" />

      <div className="header__search">
        {/* searchIcon */}
      <input name="myInput" placeholder='Search...'></input>
      </div>
      

    </div>
    <div className='header__right'>
        
    </div>



    </>
  )
}

export default Header