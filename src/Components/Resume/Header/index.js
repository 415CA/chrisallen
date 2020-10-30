import React from 'react';
import { HomepageTech } from '../../Projects';
import Social from '../../Social';

const Header = () => (
  <>
    <header className='bg-white black-80 tc pv4 avenir'>
      <h1 className='mt2 mb0 baskerville i fw1 f1'>Chris Allen</h1>
      {/* <h2 className='mt2 mb0 f6 fw4 ttu tracked'>Software Engineer | Marketing | Media Licensing</h2> */}
      <Social color='#000000' size={30} />
      {/* <HomepageTech color='black' /> */}
    </header>
  </>
);

export default Header;
