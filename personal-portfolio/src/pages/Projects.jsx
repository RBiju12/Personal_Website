import React from 'react'
import { Typography } from '@mui/material'
import Social from '../components/Social'
import Cards from '../components/Cards'
import Footer from './Footer'

export default function Projects()
{

  const body = ['Developed a React-based COVID data web app, empowering users to access and visualize state-specific COVID data via widgets and used Firebase to implement two-factor authentication', 'Utilized WHO Covid Rest API, effectively visualizing data trends using APEX Charts', 'Integrated AWS SNS for real-time SMS notifications, delivering the latest COVID data insights directly to users', 'Received scholarship from school board for project impact and design out of 19 students']
  const body2 = ['Developing a Chrome Extension using Next.js to enable users to enter any website URL to recieve a 5-sentence summary, citation of their preferred style, and related articles', 'Implemented personalized summaries using Hugging Face LLM and utilized Playwright to scrape text for over 100+ websites and generate accurate summaries/citations tailored to users', 'Built a robust authentication system utilizing JWT, Google OAuth 2.0, and MongoDB to generate new JWT tokens for authorization and storing user credentials', 'Containerized application using Docker to seamlessly deploy code to production']

  return (
    <>
    <div>
      <div className='mt-20'>
        <Typography variant='h4' className='text-center text-white' style={{fontFamily: 'Poppins', fontWeight: 'bold', color: '#1e293b'}}><u>Projects</u></Typography>
      </div>

      <div className='mt-40 ml-80 flex flex-row space-x-80'>
          <Cards title='Covid Data Analyzer' body={body} url='https://github.com/RBiju12/covid-data-analyzer' height={450} width={380}/>
          <Cards title='SmartCite' body={body2} url='https://github.com/RBiju12/SmartCite' height={500} width={380}/>
      </div> 
    
      <Social />
      
      <Footer />
      
    


      
    </div>
    </>
  )
}

