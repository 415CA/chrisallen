import React from 'react';
import Social from '../../Social';
import About from '../About';

const Header = () => (
  <>
    <header className='bg-white black-80 tc pv3 helvetica ph3 ph5-ns'>
      <h1 className='mt2 mb2 helvetica fw3 f1'>Chris Allen</h1>
      <Social color='#000000' size={30} />
      <h1 className='mt2 mb2 helvetica fw3 f3 tracked'>Full Stack Web Development / Project Management / Media Licensing / Advertising </h1>
      <About />
    </header>
  </>
);

export default Header;
