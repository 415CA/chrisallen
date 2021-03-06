import React from 'react';

const Soundscapes = () => (
  <>
    <article className='cf ph3 ph5-ns pv3 helvetica'>
      <header className='fn fl-ns w-40-ns pr4-ns'>
        <h1 className='f3 lh-title fw4 mt0 pt3 bt bw2 helvetica'>
          The Weinstein Company
        </h1>
        <h2 className='f4 mid-gray lh-title fw4 helvetica'>
          Assistant to EVP, Creative Advertising
        </h2>
        <time className='f6 ttu tracked gray fw4 helvetica'>
          New York, NY | January 2007 – February 2010
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0 fw3'>
          <li className='pv1'>
            Assisted in the production of theatrical trailer, television, radio, and digital
            campaigns for over 50 films, which combined to gross over
            $938,000,000.
          </li>
          <li className='pv1'>
            Contributed to award campaigns that earned 3 Academy
            Awards wins, 13 Academy Awards nominations, 4 Golden Globe wins, and
            20 Golden Globe nominations.
          </li>
          <li className='pv1'>
            Assisted in the management of campaign P&A budgets, created
            internal budget analysis and cost reports. Identified vendor
            cost overruns and negotiated fee reductions, saving an average
            10-15% per project.
          </li>
        </ul>
        <p className='f5 lh-copy fw3'>
          <b>Notable Campaigns:</b>
          {' '}
          Inglourious Basterds, The Reader, Vicky
          Cristina Barcelona, A Single Man, Sicko, I’m Not There
        </p>
      </div>
    </article>
  </>
);

export default Soundscapes;
