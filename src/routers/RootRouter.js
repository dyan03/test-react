import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';


// import HeadTabs from './HeaderTabs';
import Main from '../pages/Main';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function RootRouter() {
  return (
    <Fragment>
        <Router>
        <Route exact path='/' component={Main} />
        <Route
          exact
          path='/signIn'
          component={SignIn}
        />
        <Route
          exact
          path='/signUp'
          component={SignUp}
        />
        </Router>
    </Fragment>
  );
}

export default RootRouter; 