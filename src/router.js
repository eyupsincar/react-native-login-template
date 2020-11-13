import "react-native-gesture-handler";
import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
} from "react-navigation";

import Start from './pages/Start';
import Login from './pages/Login'
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Home from './pages/Home';

const Router = createSwitchNavigator(
  {
    Login: {
      screen : Login
    },
    Start: {
      screen : Start
    },

    Register: {
      screen : Register
    },
    Forgot: {
      screen : Forgot
    },
    Home: {
      screen : Home
    },
  },
  {
    initialRouteName: 'Login'
  }
);

export default createAppContainer(Router);
