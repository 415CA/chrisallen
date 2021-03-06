import {
  Github,

  Gmail,

  Linkedin
} from '@icons-pack/react-simple-icons';
import React from 'react';

const Social = ({ color, size }) => (
  <>
    <div>
      <a className='no-underline black bg-animate grow hover-white inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA' target='_blank 'rel='noopener'>
        <Github title='Github' color={color} size={size} />
      </a>
      <a href='https://www.linkedin.com/in/chrisallen415/' className='no-underline black bg-animate grow hover-white inline-flex items-center ma2 tc br2 pa2' target='_blank 'rel='noopener'>
        <Linkedin title='Linkedin' color={color} size={size} />
      </a>
      <a href='mailto:chrisallen415@gmail.com' className='no-underline black bg-animate grow hover-white inline-flex items-center ma2 tc br2 pa2' target='_blank 'rel='noopener'>
        <Gmail title='Gmail' color={color} size={size} />
      </a>
    </div>
  </>
);

export default Social;
