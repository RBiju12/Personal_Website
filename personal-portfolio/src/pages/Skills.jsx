import React from 'react';
import Cards from '../components/Cards';
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { Typography } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoIosGitNetwork } from "react-icons/io";
import Social from '../components/Social';
import Footer from './Footer';

const Skills = () => {
  return (
    <div className='mt-0'>
      <div className='mt-10'>
        <Typography className='text-white text-center mt-10' variant='h4' style={{fontFamily: 'Poppins', fontWeight: 'bold', color: '#1e293b'}}>
          <u>Skills</u>
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center space-x-15 mt-20 px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-20 mx-4 sm:mx-8 lg:mx-16">
          <Cards img={<FaPython style={{ height: 100, width: 100, color: '#3366FF' }} />} title="Python" />
          <Cards img={<FaJava style={{ height: 100, width: 100, color: 'orange' }} />} title="Java" />
          <Cards img={<SiJavascript style={{ height: 100, width: 100, color: 'yellow' }} />} title="JavaScript" />
          <br />
        </div>

        

        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-20 mx-4 sm:mx-8 lg:mx-16">
          <Cards img={<SiFastapi style={{ height: 100, width: 100, color: '#5bb450' }} />} title="FastAPI" />
          <Cards img={<DiMongodb style={{ height: 100, width: 100, color: '#5bb450' }} />} title="MongoDB" />
          <Cards img={<IoIosGitNetwork style={{ height: 100, width: 100, color: 'white' }} />} title="Git" />
          <br />
        </div>


        <div className="flex flex-col space-y-8 sm:space-y-15 md:space-y-20 mx-5 sm:mx-10 lg:mx-16">
          <Cards img={<FaReact style={{ height: 100, width: 100, color: '#00FFFF' }} />} title="React" />
          <Cards img={<FaNode style={{ height: 100, width: 100, color: '#83f28f' }} />} title="Node.js" />
          <Cards img={<SiTypescript style={{ height: 100, width: 100, color: '#0000ff' }} />} title="TypeScript" />
        </div>
      </div>

      <div className='mt-20'>
        <Social />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
