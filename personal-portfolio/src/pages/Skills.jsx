import React from 'react'
import Cards from '../components/Cards'
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import {Typography} from '@mui/material'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoIosGitNetwork } from "react-icons/io";
import Social from '../components/Social'
import Footer from './Footer';

const Skills = () => {


  return (
    <div className='mt-0'>
      <div className='mt-10'>
      <Typography className='text-white text-center mt-10' variant='h4' style={{fontFamily: 'Poppins', fontWeight: 'bold', color: '#1e293b'}}><u>Skills</u></Typography>
      </div>

    <div className="flex mx-20 mt-20">
      <div className="flex flex-col space-y-20 mr-80">
        <Cards img={<FaPython style={{ height: 100, width: 200, color: '#3366FF' }} />} title="Python" />
        <Cards img={<FaJava style={{ height: 100, width: 200, color: 'orange' }} />} title="Java" />
        <Cards img={<SiJavascript style={{ height: 100, width: 200, color: 'yellow' }} />} title="JavaScript" />
      </div>

    <div className='flex mx-20 mr-80'>
      <div className='flex flex-col space-y-20'>
      <Cards img={<SiFastapi style={{ height: 100, width: 200, color: '#5bb450' }} />} title="FastAPI"/>
      <Cards img={<DiMongodb style={{ height: 100, width: 200, color: '#5bb450' }} />} title="MongoDB" />
      <Cards img={<IoIosGitNetwork style={{ height: 100, width: 200, color: 'white' }} />} title="Git" />

      </div>
    </div>
    <div className='flex mx-20 mr-30'>
    <div className='flex flex-col space-y-20'>
    <Cards img={<FaReact style={{ height: 100, width: 200, color: '#00FFFF'}} />} title="React" />
    <Cards img={<FaNode style={{ height: 100, width: 200, color: '#83f28f' }} />} title="Node.js" />
    <Cards img={<SiTypescript style={{ height: 100, width: 200, color: '#0000ff'}} />} title="TypeScript" />
    </div>

    </div>
    </div>

  <div className='mt-80'>
  <Social />
  </div>
  <Footer />
  </div> 
  )
}

export default Skills
