import React from 'react'
import {Link}from 'react-router-dom'
import insta from '../../image/insta.png'


function Home() {
  return (
    <div className='container2'>
     	<div className='content'>
					<h6>Welcome . . .</h6>
					<h2>WhiteLights</h2>
					<h5>Photography - Videography</h5>
					
					<ul className='dis' >
						<li  className='instagram' ><a href="https://www.instagram.com/whitelightsfilms/"><img  className='insta-icon' src={insta} alt='instagram'/></a></li>
						
			        </ul>
					<Link to='/gallery'className='btn1' >Gallery </Link>
					<Link to='/contact' className='btn2'>Contact </Link>
					
				</div>
      
      
      
         
    </div>
  
  )
}

export default Home