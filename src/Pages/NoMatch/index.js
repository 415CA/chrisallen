import React from 'react';

const NoMatch = () => (
  <>
    <section className='vh-100 bg-white baskerville'>
      <header className='tc ph5 lh-copy'>
        <h1 className='f1 f-headline-l code mb3 fw9 dib tracked-tight black'>404</h1>
        <h2 className='tc f1-l fw1'>Sorry, the page you are looking for does not exist.</h2>
      </header>
      <p className='fw1 i tc mt4 mt5-l f4 f3-l'>Are you looking for one of these?</p>
      <ul className='list tc pl0 w-100 mt5'>
        <li className='dib'><a className='f5 f4-ns link black db pv2 ph3 hover-light-blue' href='/'>Home</a></li>
        <li className='dib'><a className='f5 f4-ns link black db pv2 ph3 hover-light-blue' href='/experience'>Experience</a></li>
        <li className='dib'><a className='f5 f4-ns link black db pv2 ph3 hover-light-blue' href='/campaigns'>Campaigns</a></li>
        <li className='dib'><a className='f5 f4-ns link black db pv2 ph3 hover-light-blue' href='/projects'>Projects</a></li>
        <li className='dib'><a className='f5 f4-ns link black db pv2 ph3 hover-light-blue' href='/contact'>Contact</a></li>
      </ul>
    </section>
  </>
);

export default NoMatch;
