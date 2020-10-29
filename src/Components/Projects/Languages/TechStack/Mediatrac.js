import {
  Css3,
  Firebase,

  Html5,
  Javascript, Json,

  MaterialUi, NodeDotJs,

  Postgresql,
  ReactJs, Ruby, Rubyonrails,
} from '@icons-pack/react-simple-icons';
import React from 'react';

const Mediatrac = () => (
  <div className='mw9 center '>
    <table className='f6 w-100 mw8 center' cellSpacing='0'>
      <tbody className='lh-copy'>
        <tr className=''>
          <td className='f6 f5-l lh-copy tl v-mid pv1'>Technologies:</td>
          <td className='dib ml0 ph1'><Javascript title='Javascript' color='#F7DF1E' size={17} /></td>
          <td className='dib ml0 ph1'><ReactJs title='ReactJs' color='#61DAFB' size={20} /></td>
          <td className='dib ml0 ph1'><Ruby title='Ruby' color='#CC342D' size={17} /></td>
          <td className='dib ml0 ph1'><Rubyonrails title='Rubyonrails' color='#CC0000' size={20} /></td>
          <td className='dib ml0 ph1'><Html5 title='Html5' color='#E34F26' size={20} /></td>
          <td className='dib ml0 ph1'><Css3 title='Css3' color='#1572B6' size={20} /></td>
          <td className='dib ml0 ph1'><MaterialUi title='MaterialUi' color='#0081CB' size={20} /></td>
          <td className='dib ml0 ph1'><NodeDotJs title='Nodejs' color='#339933' size={20} /></td>
          <td className='dib ml0 ph1'><Firebase title='Firebase' color='#FFCA28' size={20} /></td>
          <td className='dib ml0 ph1'><Postgresql title='Postgresql' color='#336791' size={20} /></td>
          <td className='dib ml0 ph1'><Json title='Json' color='#000000' size={20} /></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Mediatrac;
