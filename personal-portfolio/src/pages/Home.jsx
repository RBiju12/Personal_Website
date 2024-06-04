import React from 'react'
import {Typography} from '@mui/material'
import {TypeAnimation} from 'react-type-animation'
import Social from '../components/Social'
import image from '../images/profess.png'
import {useState, useEffect} from 'react'
import Footer from './Footer'

const Home = () => {


  const [shown, setShown] = useState(false)

   useEffect(() => {
     const timer = setTimeout(() => {
      setShown(true)
     }, 2200)

     return () => clearTimeout(timer)
   }, [])

  return (
    <div className='bg-slate-300'>
      <div className='flex flex-col space-y-20'>
      <br />
      <Typography variant='h5' className='text-center' style={{fontFamily: 'Poppins', fontWeight: 'bold', color: '#1e293b'}}>
      Hello, I am <br/> 
      &nbsp; &nbsp; Rishan Biju
      </Typography>
      
      <TypeAnimation className='text-center' style={{color: '#ffff00', fontFamily: 'Consolas', fontSize: 30, fontWeight: 'bold'}} sequence={['I am a Student', 1000, 'I am a Designer', 1000, 'I am a Developer', 1000, 'I am a Engineer', 1000]} speed={30} repeat={Infinity} />
      <img src={shown ? image : null} className='m-auto object-contain h-80 w-70 '/>
      </div>

      <Social />
      <Footer />
    </div>
  )
}

export default Home
