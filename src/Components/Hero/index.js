import React from 'react';
import Landing from '../../Assets/Images/Landing.jpg';
import { HomepageTech } from '../Projects';
import Social from '../Social';

const Hero = () => (
  <div className='helvetica'>
    <div className='vh-100 dt w-100 tc bg-white cover' style={{ background: `url(${Landing})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <div className='dtc v-mid bg-black-70'>
        <h1 className='f1 f-headline-l fw1 white'>Chris Allen</h1>
        <h2 className='f2 fw1 white'>
          Software Engineer
        </h2>
        <HomepageTech />
        <Social color='#FFFFFF' size={50} />
      </div>
    </div>
  </div>
);

export default Hero;
