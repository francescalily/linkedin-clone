import React from 'react'
import './index.css'

function HeaderOption( {Icon, title} ) {
  return (
    <div className="headerOption">
        {Icon && <Icon classname="headerOption__icon"/>}
        <h3 className='headerOption__title'>{title}</h3>
        
    </div>
  )
}

export default HeaderOption