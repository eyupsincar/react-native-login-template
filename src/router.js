import React from 'react';

import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';

const AppSwitchNavigator = createSwitchNavigator(
  {
    Start: {
      screen : Start
    },
    Login: {
      screen : Login
    },
    Register: {
      screen : Register
    },
  },
  {
    initialRouteName: 'Login'
  }
);


export default createAppContainer(AppSwitchNavigator)
