import { Googlechrome } from '@icons-pack/react-simple-icons';
import React from 'react';

const APD = () => (
  <>
    <article className='cf ph3 ph5-ns pv3 helvetica'>
      <header className='fn fl-ns w-40-ns pr4-ns'>
        <h1 className='f3 lh-title fw4 mt0 pt3 bt bw2 helvetica'>
          Audio Precision Design
        </h1>
        <h2 className='f4 mid-gray lh-title fw4 helvetica'>
          Marketing & Business Development Consultant
        </h2>
        <time className='f6 ttu tracked gray fw4 helvetica'>
          New York, NY | January 2015 – Present
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0 fw3'>
          <li className='pv1'>
            Crafted deal strategies and led negotiations to ensure compliance
            with company licensing policies and procedures.
          </li>
          <li className='pv1'>
            Managed master sync database for all contracts, invoices, and royalty distributions.
          </li>
          <li className='pv1'>
            Oversaw music operations. including creative direction, production, asset database
            management, and playlist curation.
          </li>
        </ul>
        <p className='f5 lh-copy fw3'>
          <b>Notable Campaigns:</b>
          {' '}
          Bumblebee, Logan, Kingsman The Golden
          Circle, X-Men: Apocalypse
        </p>
      </div>

    </article>
  </>
);

export default APD;
