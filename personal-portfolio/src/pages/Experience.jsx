import React from 'react'
import {Typography } from '@mui/material'
import spanalytics from '../images/spanalytics.png'
import Social from '../components/Social'
import Cards from '../components/Cards'
import {useRef} from 'react'
import Xarrow from 'react-xarrows'


const Experience = () => {
  const cyberSecurity = useRef(null)
  const softwareEngin = useRef(null)

  const body = ['Conducted penetration testing on a variety of network devices, including routers and switches, using Linux-based tools such as Nmap and validated the functionality of network devices by using Wireshark to analyze network traffic resulting in a 15% reduction in network downtime']
  const body2 = ['Developed version validation control checker using Express.js, enabling users to effortlessly retrieve their files securely. Implemented Vanilla JavaScript to fetch data from the backend endpoints, enhancing user experience and optimizing performance']
  return (
    <>
    <div>

      <div className='mt-10'>
      <Typography variant='h4' className='text-center text-white' style={{fontFamily: 'Consolas'}}><u>Experience</u></Typography>
      <div className='absolute mt-20 left-0 right-0 flex justify-center items-center'>
        <img src={spanalytics} />
      </div>
      </div>
      
      <div ref={softwareEngin} className='absolute bottom-80 left-0 right-0 flex justify-center items-center'>
      <Cards title='Software Engineering Intern' body={body2} width={290} height={295}/>
      </div>
      
      <div ref={cyberSecurity} className='absolute bottom-0 left-0 right-0 flex justify-center items-center'>
      <Cards title='CyberSecurity Intern' body={body} width={290} height={280}/>
      </div>

      <Xarrow start={cyberSecurity} end={softwareEngin} color='white' />

      

      <div className='absolute bottom-0'>
        <Social />
      </div>
    </div>
    </>
  )
}

export default Experience
