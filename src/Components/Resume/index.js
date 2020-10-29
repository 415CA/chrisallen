import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Header from './Header';
import Technical from './Technical';

const Resume = () => (
  <>
    <Header />
    <About />
    <div className='bg-white black-80 tc pv4 avenir'>
      <h1 className='mt2 mb0 baskerville i fw1 f1'>Technical Skills</h1>
    </div>
    <Technical />
    <div className='bg-white black-80 tc pv4 avenir'>
      <h1 className='mt2 mb0 baskerville i fw1 f1'>Professional Experience</h1>
    </div>
    <Experience />
    <Education />
  </>
);

export default Resume;
