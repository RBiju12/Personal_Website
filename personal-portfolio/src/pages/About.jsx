import React from 'react';
import tennis from '../images/tennis.png';
import { Typography } from '@mui/material';
import img2 from '../images/aboutpic.png';
import Social from '../components/Social';
import Footer from './Footer';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <div className="mt-20">
      <Typography
        variant="h4"
        className="text-center mt-20"
        style={{ fontFamily: 'Poppins', fontWeight: 'bold', color: '#1e293b' }}
      >
        <u>About Me</u>
      </Typography>
      <br />
      <br />
      <div className="text-center mr-20">
        <Typography
          variant="p"
          className="text-white"
          style={{
            fontFamily: 'Poppins',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1e293b',
          }}
        >
          I am a rising Sophomore in the Computer Science program at Virginia Tech. I love to be creative and develop new solutions to help the world. <br />
          I plan on becoming a Undergraduate Teaching Assistant next fall and am passionate about helping others. <br />
          This is my personal website where I have my Experience, Projects, Skills, Resume, and Contact listed and I hope to connect with you.
        </Typography>
      </div>

      
      <div className="flex justify-center items-center space-x-8 md:space-x-14 lg:space-x-20 overflow-hidden px-4 sm:px-8">
        <LazyLoadImage
          src={tennis}
          style={{
            height: 'auto',
            maxWidth: '50%', 
            width: '100%', 
          }}
          className="rounded-md"
        />
        <LazyLoadImage
          src={img2}
          style={{
            height: 'auto',
            maxWidth: '51%', 
            width: '100%',
          }}
          className="rounded-lg"
        />
      </div>

      <Social />
      <Footer />
    </div>
  );
};

export default About;
