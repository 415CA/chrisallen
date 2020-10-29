import React from 'react';
import LandingImage from '../../Assets/Images/Landing.jpg';
import Social from '../Social';

const Header = () => (
  <>
    <article className='athelas'>
      <div className='vh-100 dt w-100 tc bg-dark-gray white cover' style={{ background: LandingImage, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className='dtc v-mid'>
          <header className='white'>
            <h1 className='f2 f-headline-l fw1 i white'>Chris Allen</h1>
          </header>
          <Social />
          <h3 className='f4 fw1 ttu tracked mb2 lh-title'>Full Stack Web Developer</h3>
          <h3 className='f4 fw1 ttu tracked mb2 lh-title'>Entertainment Marketing | Media Licensing | Business Development</h3>
        </div>
      </div>
    </article>
  </>
);

export default Header;
