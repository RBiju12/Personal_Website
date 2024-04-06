import React from 'react'
import Hamburger from 'hamburger-react'
import Navbar from './Navbar'
import { useState } from 'react'

const Slider = () => {
  const [isToggled, setToggled] = useState(false)

  return (
    <div className='absolute top-0 right-20'>
        <Hamburger color="#000000" size={28} onToggle={(toggled) => {
            setToggled(toggled)
        }} />

        {isToggled ? <Navbar /> : console.log('closed')}
      
    </div>
  )
}

export default Slider
