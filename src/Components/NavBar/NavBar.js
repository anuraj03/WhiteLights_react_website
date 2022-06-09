import React from 'react'
import "./NavBar.css"
import {MenuList} from "./MenuList"
import{NavLink ,Link} from "react-router-dom"
import { useState } from "react"

function NavBar() {
  const [clicked, setClicked]=useState(false);
  const menuList=MenuList.map(({url,title},index)=>{
    return(
      <li key={index}>
        <NavLink exact to={url} activeClassName='active'>
          {title}</NavLink>
      </li>
    );

  });
  const handleClick =()=>{
    setClicked(!clicked);
  }
  return (
    <nav className='navbar'>
      <div className=''>
        <Link to='/'><img  className='logo' src='Logo/logo.png' alt='logo'/></Link>
      </div>
      <div className='menubtn' onClick={handleClick}>
        <i className={clicked ? "fas fa-times":"fas fa-bars"}></i>
      </div>
         <ul className={clicked ?'nav-list':'nav-list close'}>{menuList}</ul>

     </nav>
    
    
  )
}

export default NavBar
