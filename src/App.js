import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';

function App() {
  return (
    <>
      <switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/dashboard1' component={Dashboard1} />
        <Route exact path='/dashboard2' component={Dashboard2} />
      </switch>

    </>
  );
}

export default App;




