import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {


  return (
    <div className='flex flex-col space-y-4'>
        <div>
            <NavLink to='/' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>Home</NavLink>
            <br />
        </div>

        <div>
            <NavLink to='/about' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>About</NavLink>
            <br />
        </div>

       <div>
            <NavLink to='/skills' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>Skills</NavLink>
       </div>

        <div>
            <NavLink to='/experience' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>Experience</NavLink>
        </div>

       <div>
            <NavLink to='/projects' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>Projects</NavLink>
       </div>

        <div>
            <NavLink to='/contact' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'white'}
            }}>Contact</NavLink>
        </div>
    </div> 
  )
}

export default Navbar
