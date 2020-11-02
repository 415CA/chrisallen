import React from 'react';

const JMTalent = () => (
  <>
    <article className='cf ph3 ph5-ns pv3 helvetica'>
      <header className='fn fl-ns w-40-ns pr4-ns'>
        <h1 className='f3 lh-title fw4 mt0 pt3 bt bw2 helvetica'>
          Jason Marks Talent Management
        </h1>
        <h2 className='f4 mid-gray lh-title fw4 helvetica'>
          Director, West Coast Operations
        </h2>
        <time className='f6 ttu tracked gray fw4 helvetica'>
          Los Angeles, CA | February 2010 – December 2014
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0 fw3'>
          <li className='pv1'>
            Managed operations, client services, sales, and business development
            for West Coast accounts and talent.
          </li>
          <li className='pv1'>
            Designed strategic business plans which resulted in
            increasing bookings and artist exposure in New York, Los Angeles,
            and London markets.
          </li>
          <li className='pv1'>
            Led international and domestic brand marketing
            and public relations initiatives.
          </li>
        </ul>
        <p className='f5 lh-copy fw3'>
          <b>Notable Clients:</b>
          {' '}
          21st Century Fox, Disney, Marvel, Netflix,
          Paramount, Sony, Universal, Warner Bros, ABC, CBS, FOX, FX, NBC
          <br />
          <br />
          <b>Notable Campaigns:</b>
          {' '}
          Avatar, The Avengers, Captain America, The
          Dark Knight Rises, Django Unchained, Godzilla, Gravity, The Hobbit,
          Inception, Star Trek: Into Darkness, Thor, The Wolf of Wall Street
        </p>
      </div>
    </article>
  </>
);

export default JMTalent;
