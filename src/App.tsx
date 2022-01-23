import React from 'react';
// import ProjectListScreen from './screens/project-list/index'
import {LoginScreen} from './screens/login/index'
import {Page} from './learn/themeBtn'

import './App.css';

function App () {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <Page/>
      <LoginScreen/>
    </div>
  );
}

export default App;
