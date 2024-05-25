import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
        <div className="hidden md:flex md:space-x-10">
          <NavLink to='/' aria-label='Home Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            Home
          </NavLink>
          <NavLink to='/about' aria-label='About Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            About
          </NavLink>
          <NavLink to='/skills' aria-label='Skills Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            Skills
          </NavLink>
          <NavLink to='/experience' aria-label='Experience Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            Experience
          </NavLink>
          <NavLink to='/projects' aria-label='Projects Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            Projects
          </NavLink>
          <NavLink to='/resume' aria-label='Resume Page' className={({ isActive }) => isActive ? 'text-green-500' : 'text-white'}>
            Resume
          </NavLink>
        </div>
  );
};

export default Navbar;
