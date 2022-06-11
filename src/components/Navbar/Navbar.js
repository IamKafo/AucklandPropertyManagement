import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  return (
    <>
        <div className="navbar-container">
            <div className="navbar-selections">
                <ul className='navbar-selection-list'>
                    <li className='navbar-list' onClick={() => setShowDropDown(!showDropDown)}>Find a Property
                  { showDropDown && (
                    <div className="drop-down-container" >
                        <p className='drop-down-list1'>Residential</p>
                        <p className='drop-down-list'>Rentals</p>
                        <p className='drop-down-list'>Commercial</p>
                        <p className='drop-down-list'>Lifestyle</p>
                        <p className='drop-down-list'>Home+income</p>
                        <p className='drop-down-list'>Leasehold</p>
                    </div>
                    )} 
                    
                    </li>
                    <li className='navbar-list'>Our Services </li>
                    <li className='navbar-list'>Our Teams</li>
                    <li className='navbar-list'>FAQ’s</li>
                    <li className='navbar-list'>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar