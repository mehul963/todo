import React, { useRef } from 'react'
import './css/Navbar.css'

export default function Navbar() {
  const navRef=useRef(null)
  return (
    <>
    <header className='flex space-between'>
        <h2>TODO LIST</h2>
        
        <div>
            <div tabIndex={1} className='three-line' onClick={(e)=>{
                if(navRef.current.classList.contains('hide')){
                  navRef.current.className="navbar show"
                  e.target.className="three-line cross"
                }else{
                  navRef.current.className="navbar hide"
                  e.target.className="three-line"
                }
            }}></div>
            <nav className='navbar hide' ref={navRef}>
                <ul className='flex'>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About Us</li>
                    <li>Account</li>
                </ul>
            </nav>
        </div>
    </header>
    
    </>
  )
}
