import React from 'react';
import ProjectListScreen from './screens/project-list/index'
import {LoginScreen} from './screens/login/index'
import {Page} from './learn/themeBtn'

import './App.css';
import { useAuth } from "./context/auth-context";
import {UnauthenticatedApp} from "./unauthenticated-app";
import {AuthenticatedApp} from "./AuthenticatedApp";
import "antd/dist/antd.less";
import {AppProviders} from './context/index'
import View from './View'

function App () {
  return (
    <div className="App">
      <AppProviders>
        <View/>
      </AppProviders>
       {/*有登录态展示列表*/}
      {/*{user? user.token : '无'}*/}
      {/*<Page/>*/}
      {/*<LoginScreen/>*/}
    </div>
  );
}

export default App;
