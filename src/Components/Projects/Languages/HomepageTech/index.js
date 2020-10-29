import {
  Css3,
  Firebase,

  Html5,
  Javascript,
  NodeDotJs,
  Postgresql,
  ReactJs, Redux, Ruby, Rubyonrails,
  Sqlite,
} from '@icons-pack/react-simple-icons';
import React from 'react';

const HomepageTech = ({ color }) => {
  const textColor = color ? `ml0 ${color} w-100` : 'ml0 white w-100';

  return (
    <div className='mw9 center ph3-ns'>
      <div className='cf ph2-ns'>
        <div className='dib pa1 tc'>
          <Javascript title='Javascript' color='#F7DF1E' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>JavaScript</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Ruby title='Ruby' color='#CC342D' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>Ruby</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Html5 title='Html5' color='#E34F26' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>HTML5</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Css3 title='Css3' color='#1572B6' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>CSS3</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <ReactJs title='ReactJs' color='#61DAFB' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>React JS</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Redux title='Redux' color='#764ABC' size={24} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>Redux</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Rubyonrails title='Rubyonrails' color='#CC0000' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>Rails</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <NodeDotJs title='Nodejs' color='#339933' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>Node.js</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Firebase title='Firebase' color='#FFCA28' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>Firebase</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Postgresql title='Postgresql' color='#336791' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>PostgeSQL</dd>
          </dl>
        </div>
        <div className='dib pa2 tc'>
          <Sqlite title='Sqlite' color='#003B57' size={30} />
          <dl className='mt2 f6 lh-copy'>
            <dt className='clip'>Language</dt>
            <dd className={textColor}>SQLite</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomepageTech;
