import React from 'react'
import Navbar from './Navbar'
import Squash from 'hamburger-react'
import {useState} from 'react'

const Slider = () => {
  const [isToggle, setToggled] = useState(false)
  return (
    <>
    <div className='absolute top-0 right-20'>
        <Squash color="#FFFFFF" size={31} onToggle={(toggled) => {
            setToggled(toggled)
        }} />

        {isToggle ? <Navbar /> : null}
    </div>
    </>
  )
}

export default Slider
