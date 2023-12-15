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

const iconComponents = {
  Javascript: ({ color, size }) => (
    <Javascript title='Javascript' color={color} size={size} />
  ),
  Ruby: ({ color, size }) => (
    <Ruby title='Ruby' color={color} size={size} />
  ),
  Html5: ({ color, size }) => (
    <Html5 title='Html5' color={color} size={size} />
  ),
  Css3: ({ color, size }) => (
    <Css3 title='Css3' color={color} size={size} />
  ),
  ReactJs: ({ color, size }) => (
    <ReactJs title='ReactJs' color={color} size={size} />
  ),
  Redux: ({ color, size }) => (
    <Redux title='Redux' color={color} size={size} />
  ),
  Rubyonrails: ({ color, size }) => (
    <Rubyonrails title='Rubyonrails' color={color} size={size} />
  ),
  NodeDotJs: ({ color, size }) => (
    <NodeDotJs title='Nodejs' color={color} size={size} />
  ),
  Firebase: ({ color, size }) => (
    <Firebase title='Firebase' color={color} size={size} />
  ),
  Postgresql: ({ color, size }) => (
    <Postgresql title='Postgresql' color={color} size={size} />
  ),
  Sqlite: ({ color, size }) => (
    <Sqlite title='Sqlite' color={color} size={size} />
  ),
};

const iconData = [
  { icon: 'Javascript', color: '#F7DF1E', text: 'JavaScript' },
  { icon: 'Ruby', color: '#CC342D', text: 'Ruby' },
  { icon: 'Html5', color: '#E34F26', text: 'HTML5' },
  { icon: 'Css3', color: '#1572B6', text: 'CSS3' },
  { icon: 'ReactJs', color: '#61DAFB', text: 'React JS' },
  { icon: 'Redux', color: '#764ABC', text: 'Redux' },
  { icon: 'Rubyonrails', color: '#CC0000', text: 'Rails' },
  { icon: 'NodeDotJs', color: '#339933', text: 'Node.js' },
  { icon: 'Firebase', color: '#FFCA28', text: 'Firebase' },
  { icon: 'Postgresql', color: '#336791', text: 'PostgreSQL' },
  { icon: 'Sqlite', color: '#003B57', text: 'SQLite' },
];

const HomepageTech = ({ color }) => {
  const textColor = color ? `ml0 ${color} w-100` : 'ml0 white w-100';

  return (
    <div className='mw9 center ph3-ns'>
      <div className='cf ph2-ns'>
        {iconData.map(({ icon, color, text }) => {
          const IconComponent = iconComponents[icon];

          return (
            <div key={text} className='dib pa2 tc'>
              <IconComponent color={color} size={30} />
              <dl className='mt2 f6 lh-copy'>
                <dt className='clip'>Language</dt>
                <dd className={textColor}>{text}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomepageTech;