import React from 'react';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../../Components/Authentication/Session';
import Messages from '../../Components/Messages';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

    <Messages />
  </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
