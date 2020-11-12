import React from 'react';
import 'react-native-gesture-handler';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-native';

import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';

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
    Forgot: {
      screen : Forgot
    },
  },
  {
    initialRouteName: 'Login'
  }
);


export default createAppContainer(AppSwitchNavigator)
