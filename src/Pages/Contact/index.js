import React from 'react';
import ContactPhoto from '../../Assets/Images/Contact.jpg';
import Social from '../../Components/Social';

const Contact = () => (
  <>
    <article className='helvetica'>
      <div className='vh-100 dt w-100 tc bg-dark-gray white cover' style={{ background: `url(${ContactPhoto})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <div className='dtc pa6'>
          <header className='white'>
            <h1 className='f2 f-headline-l fw1 white'>Chris Allen</h1>
          </header>
          <Social color='#FFFFFF' size={100} />
        </div>
      </div>
    </article>
  </>
);

export default Contact;
