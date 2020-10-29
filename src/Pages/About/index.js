import React from 'react';

const About = () => (
  <>
    {/* <article data-name='article-full-bleed-background'>
      <div className='fl pa2 pa3-ns bg-white black-70 measure-narrow f3 helvetica'>
        <header className='bb b--black-70 pv4'>
          <h3 className='f2 fw7 ttu tracked lh-title mt0 mb1 helvetica'>About Me</h3>
          <h4 className='f3 fw4 i lh-title mt0'>About Me</h4>
        </header>
        <section className='pt5 pb4'>
          <p className='helvetica lh-copy measure f5 mt0'>
            I am a Software Engineer based in New York, NY experienced
            in JavaScript, React, Ruby, Rails, and SQL.
            Transitioned to Software Engineering after an extensive career as an
            entertainment industry executive in the areas of Advertising, Media Licensing,
            Media Production, Artist Representation, Digital Marketing, and Business Development.
          </p>
        </section>
      </div>
    </article> */}
    <article data-name='article-full-bleed-background'>
      <div
        className='cf'
        style={{
          background: 'url(http://mrmrs.github.io/photos/12.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
        }}
      >
        <div className='fl pa3 pa4-ns bg-white black-70 measure-narrow f3 helvetica'>
          <header className='bb b--black-70 pv4'>
            <h3 className='f2 fw7 ttu tracked lh-title mt0 mb3 helvetica'>About Me</h3>
          </header>
          <section className='pt3 pb4'>
            <p className='helvetica lh-copy measure f5 mt0'>
              I am a New York, NY based Software Engineer experienced in JavaScript, React,
              Redux, Ruby, Rails, and SQL. I transitioned to Software Engineering after
              a 10+ year career as an executive in the entertainment industry within
              a wide range areas including: Advertising, Media Licensing and Production,
              Music Publishing, Artist Representation, Digital Marketing,
              and Business Development.
            </p>
          </section>
        </div>
      </div>
    </article>
    <article className='helvetica'>
      <div className='center measure-wide f5 pv5 lh-copy ph2 black'>
        <h1 className='f1 lh-title bb'>About Me</h1>
        <p>
          I am a Software Engineer based in New York, NY experienced in JavaScript, React,
          Redux, Ruby, Rails, and SQL. I transitioned to Software Engineering after
          a 10+ year career as an executive in the entertainment industry within
          a wide range areas including: Advertising, Media Licensing and Production, Music Licensing
          and Production, Artist Representation, Digital Marketing, and Business Development.
        </p>
      </div>
    </article>

  </>
);

export default About;
