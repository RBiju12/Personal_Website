import React from 'react'
import {Typography} from '@mui/material'
import {TypeAnimation} from 'react-type-animation'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {SiGmail} from 'react-icons/si'
const Home = () => {

  return (
    <div className='min-h-screen bg-violet-800'>
      <div className='flex flex-col space-y-20'>
      <br />
      <Typography variant='h5' className='text-white text-center'>Rishan Biju</Typography>
      <TypeAnimation className='text-center' style={{color: 'white'}} sequence={['I am Rishan Biju', 1000, 'I am a Designer', 1000, 'I am a Developer', 1000]} speed={30} repeat={Infinity} />
      </div>

      <div className='mt-40 flex flex-col space-y-20'>
        <a href="https://www.linkedin.com/in/rishan-biju/" className='ml-8'>
          <FaLinkedin size={45}/>
        </a>

        <a href="https://github.com/RBiju12" className='ml-8'>
          <FaGithub size={45}/>
        </a>

        <a href="mailto:rishanbiju@gmail.com" className='ml-8'>
          <SiGmail size={45} />
        </a>
      </div>
    </div>
  )
}

export default Home
