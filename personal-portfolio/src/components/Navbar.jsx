import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {


  return (
    <div className='flex flex-col space-y-4'>
        <div>
            <NavLink to='/' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>Home</NavLink>
            <br />
        </div>

        <div>
            <NavLink to='/about' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>About</NavLink>
            <br />
        </div>

       <div>
            <NavLink to='/skills' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>Skills</NavLink>
       </div>

        <div>
            <NavLink to='/experience' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>Experience</NavLink>
        </div>

       <div>
            <NavLink to='/projects' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>Projects</NavLink>
       </div>

        <div>
            <NavLink to='/contact' style={({isActive}) => {
                return isActive ? {color: '#00FF00'} : {color: 'black'}
            }}>Contact</NavLink>
        </div>
    </div> 
  )
}

export default Navbar
