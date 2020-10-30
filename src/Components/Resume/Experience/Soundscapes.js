import React from 'react';

const Soundscapes = () => (
  <>
    <article className='cf ph3 ph5-ns pv3'>
      <header className='fn fl-ns w-40-ns pr4-ns'>
        <h1 className='f3 lh-title fw9 mb3 mt0 pt3 bt bw2'>
          Soundscapes Publishing
        </h1>
        <h2 className='f4 mid-gray lh-title'>
          Executive Producer, Creative Director
        </h2>
        <time className='f6 ttu tracked gray'>
          Los Angeles, CA | February 2010 – December 2014
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0'>
          <li className='pv1'>
            Managed all creative direction, production strategy,
            marketing, business development, and financial activities.
          </li>
          <li className='pv1'>
            Achieved an average annual revenue growth rate of 180%, increasing
            sales from $36,000 in 2009 to $1.3M in 2014.
          </li>
          <li className='pv1'>
            Negotiated sync and master recording licensing fees, drafted and executed master use
            long-form agreements.
          </li>
        </ul>
        <p className='f5 lh-copy'>
          <b>Notable Campaigns:</b>
          {' '}
          Captain America, Guardians of the Galaxy,
          The Hobbit, Iron Man 2 & 3, Thor: The Dark World
        </p>
      </div>
    </article>
  </>
);

export default Soundscapes;
