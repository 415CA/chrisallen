import React from 'react';

const Universal = () => (
  <>
    <article className='cf ph3 ph5-ns pv3'>
      <header className='fn fl-ns w-50-ns pr4-ns'>
        <h1 className='f3 lh-title fw9 mb3 mt0 pt3 bt bw2'>
          Universal Music Group
        </h1>
        <h2 className='f4 mid-gray lh-title'>
          Creative Licensing Account Executive, Film/TV
        </h2>
        <time className='f6 ttu tracked gray'>
          Santa Monica, CA | May 2016 – April 2017
        </time>
      </header>
      <div className='fn fl-ns w-50-ns'>
        <ul className='list pl0'>
          <li className='pv1'>
            Managed over 400 accounts in the Advertising Agency, Broadcast and
            Cable Network, Digital Media, Film and Television Production, Social
            Media, Sports, and Video Game categories.
          </li>
          <li className='pv1'>
            Exceeded annual sales goals by securing over $2M of license
            renewal opportunities.
          </li>
          <li className='pv1'>
            Developed re-branding and production strategy
            to increase market penetration and brand awareness among motion
            picture advertising agencies, broadcast and cable production company
            clients
          </li>
        </ul>
        <p className='f5 lh-copy'>
          <b>Notable Clients:</b>
          {' '}
          20th Century Fox, Warner Bros., Disney,
          Sony, Lionsgate, Paramount, Viacom, Scripps Networks
        </p>
      </div>
    </article>
  </>
);

export default Universal;
