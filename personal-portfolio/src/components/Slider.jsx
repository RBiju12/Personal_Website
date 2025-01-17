import React from 'react'
import Navbar from './Navbar'
import Squash from 'hamburger-react'
import {useState} from 'react'

const Slider = () => {
  const [isToggle, setToggled] = useState(false)
  return (
    <>
    <div className='absolute top-4 right-4 z-50'>
        <Squash color="#1e293b" size={31} onToggle={(toggled) => {
            setToggled(toggled)
        }} />

        {isToggle ? <Navbar /> : null}
    </div>
    </>
  )
}

export default Slider
