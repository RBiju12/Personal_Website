import React from 'react'
import { Typography } from '@mui/material'
import Social from '../components/Social'
import Cards from '../components/Cards'

export default function Projects()
{

  const body = ['Developed a React-based COVID data web app, empowering users to access and visualize state-specific COVID data via widgets and used Firebase to implement two-factor authentication', 'Utilized WHO Covid Rest API, effectively visualizing data trends using APEX Charts', 'Integrated AWS SNS for real-time SMS notifications, delivering the latest COVID data insights directly to users', 'Received scholarship from school board for project impact and design out of 19 students']
  const body2 = ['Built a full-stack stock market analysis app enabling users to get automated news alerts using Selenium', 'Developed an interactive AI bot using ChatGPT through the OpenAPI platform, providing personalized stock market advice and dynamic user interactions']

  return (
    <>
    <div>
      <div className='mt-20'>
        <Typography variant='h4' className='text-center text-white' style={{fontFamily: 'Consolas'}}><u>Projects</u></Typography>
      </div>

      <div className='mt-40 ml-80 flex flex-row space-x-80'>
          <Cards title='Covid Data Analyzer' body={body} url='https://github.com/RBiju12/covid-data-analyzer' height={400} width={380}/>
          <Cards title='Novus' body={body2} url='https://github.com/RBiju12/Novus' height={390} width={380}/>
      </div> 
      <div className='absolute bottom-0'>
        <Social />
      </div>

    </div>
    </>
  )
}

