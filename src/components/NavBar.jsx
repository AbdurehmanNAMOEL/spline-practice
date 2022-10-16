import React from 'react'
import './style/nav.css'
const NavBar = () => {
  return (
    <nav>
     <div className='logo'>
        <a href='#home'>Logo</a>
     </div>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#switch'>Design</a></li>
         <li><a href='#keyBoard'>More</a></li>
        <li><a href='#myHome'>About</a></li>
      </ul>
    </nav>
  )
}

export default NavBar