import React from 'react'
import './style/nav.css'
import UnOrderList from './UnOrderList'
const NavBar = () => {
  return (
    <nav>
     <div className='logo'>
        <a href='#home'>@namoel</a>
     </div>
      <UnOrderList/>
    </nav>
  )
}

export default NavBar