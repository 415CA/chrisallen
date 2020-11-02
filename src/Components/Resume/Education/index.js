import React from 'react';

const Education = () => (
  <>
    <article className='cf ph3 ph5-ns pv3 helvetica'>
      <header className='fn fl-ns w-40-ns pr4-ns'>
        <h1 className='f3 lh-title fw4 mt0 pt3 bt bw2 helvetica'>
          Education
        </h1>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0 fw3'>
          <li className='pv1'>
            <div className='f5 lh-copy mt0-ns'>
              <b>Flatiron School</b>
              {' '}
              Brooklyn, NY
              <br />
              Software Engineering Immersive Program
              <br />
              NYC Tech Talent Pipeline Web Development Fellowship
            </div>
          </li>
          <li className='pv1'>
            <div className='f5 lh-copy mt0-ns'>
              <b>Academy of Art University</b>
              {' '}
              San Francisco, CA
              <br />
              Motion Pictures and Television, Editing
            </div>
          </li>
          <li className='pv1'>
            <div className='f5 lh-copy mt0-ns'>
              <b>Syracuse University</b>
              {' '}
              Syracuse, NY
              <br />
              Political Science
            </div>
          </li>
        </ul>
      </div>
    </article>
  </>
);

export default Education;
