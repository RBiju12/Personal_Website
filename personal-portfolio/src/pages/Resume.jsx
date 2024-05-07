import React from 'react'
import PersonalResume from '../assets/Biju_Resume.pdf'
import Social from '../components/Social'

const Resume = () => {
  return (
    <>
    <div className='my-40 flex flex-col justify-center items-center text-center gap-20'>
      <h1 style={{fontFamily: 'Consolas', color: 'white', fontSize: 30}}><u>Resume</u></h1>
      <iframe src={PersonalResume} title='Rishan Biju Resume' height={300} width={300} loading='lazy'></iframe>
    </div>

    <Social />
    </>
  )
}

export default Resume
