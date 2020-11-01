import React from 'react';
import APD from './APD';
import Edge from './Edge';
import JMTalent from './JMTalent';
import Soundscapes from './Soundscapes';
import Supergravity from './Supergravity';
import TWC from './TWC';
import Universal from './Universal';

const Experience = () => (
  <>
    <div className='bg-white black-80 tc pv4 avenir'>
      <h1 className='mt2 mb0 helvetica i fw1 f1'>Professional Experience</h1>
    </div>
    <APD />
    <Edge />
    <Universal />
    <Supergravity />
    <Soundscapes />
    <JMTalent />
    <TWC />
  </>
);

export default Experience;
