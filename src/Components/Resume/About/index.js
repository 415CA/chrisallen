import React from 'react';

const About = () => (
  <div>
    <article className='cf ph3 ph5-ns pv1'>
      <header className='fn fl-ns w-35-ns pr4-ns'>
        <h1 className='f3 lh-title fw9 mb3 mt0 pt3 '>
          About Me
        </h1>
        <time className='f6 ttu tracked gray'>
          Software Engineer / Marketing / Media Licensing
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <p className='f5 lh-copy mt0-ns pv3 tj'>
          New York City based Software Engineer experienced in JavaScript, React,
          Redux, Ruby on Rails, and SQL. Transitioned to Software Engineering after
          a 10+ year career as an entertainment industry executive within the areas
          of Advertising, Media Production and Licensing, Music Publishing,
          Artist Representation, Digital Marketing, and Business Development.
        </p>
      </div>
    </article>
  </div>
);

export default About;
