import React from 'react'
import {Typography } from '@mui/material'
import spanalytics from '../images/spanalytics.png'
import Social from '../components/Social'
import Cards from '../components/Cards'
import Footer from './Footer'



export default function Experience() {

  const body2 = ['Conducted penetration testing on a variety of network devices, including routers and switches, using Linux-based tools such as Nmap', 'Validated the functionality of network devices by using Wireshark to analyze network traffic resulting in a 15% reduction in network downtime']
  const body3 = ['Developed version validation control checker using Express.js, enabling users to effortlessly retrieve their files securely', 'Implemented Vanilla JavaScript to fetch data from the backend endpoints, enhancing user experience and optimizing performance']
  
  return (
    <div>

      

      <div className='mt-10'>
      <Typography variant='h4' className='text-center text-white' style={{fontFamily: 'Consolas', fontWeight: 'bold'}}><u>Experience</u></Typography>
      <div className='absolute mt-10 left-0 right-0 flex justify-center items-center'>
        <img src={spanalytics} title='Spanalytics' />
      </div>
      </div>
      
           
      <div className='flex justify-center items-center flex-col space-y-6 mt-40'>
        <Cards title='Software Engineering Intern' body={body3} width={290} height={295}/>
        <Cards title='CyberSecurity Intern' body={body2} width={290} height={280}/>
      </div>

      <div className='absolute bottom-0 left-0 w-full'>
      <Social />
      <Footer />
      </div>
    </div>
  )
}

