import React from 'react'
import PersonalResume from '../assets/Biju_Resume.pdf'
import Social from '../components/Social'
import Footer from './Footer'

const Resume = () => {
  return (
    <>
    <div className='my-40 flex flex-col justify-center items-center text-center gap-20'>
      <h1 style={{fontFamily: 'Consolas', color: 'white', fontSize: 30, fontWeight: 'bold'}}><u>Resume</u></h1>
      <iframe src={PersonalResume} title='Rishan Biju Resume' height={300} width={300} loading='lazy'></iframe>
      <a href="https://drive.google.com/file/d/11yHD18fYULRhZA19bO8QR7fml4eqALfh/view?usp=sharing" style={{color:'white', fontFamily:'Consolas', fontSize:20, fontWeight: 'bold'}}>Click Me to Access Full Resume</a>
    </div>

    <Social />
    <Footer />  
    </>
  )
}

export default Resume
