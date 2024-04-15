import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"
import {SiGmail} from 'react-icons/si'

const Social = () => {
  return (
    <div className='mt-1 flex flex-col space-y-10'>
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
  )
}

export default Social;
