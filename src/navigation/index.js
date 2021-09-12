import {StackActions} from '@react-navigation/native';
import * as React from 'react';

export const AppRoute = {
  AUTH: 'Auth',
  LOGIN: 'Login',
  REGISTER: 'Register',
  FORGOT_PASSWORD: 'Forgot Password',
  INVITE_SCREEN: 'Invite Screen',
  HOME: 'Home',
  SETTINGS: 'Settings',
  PROFILE: 'Profile',
};

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const replace = name => {
  navigationRef.current?.dispatch({
    ...StackActions.replace(name),
  });
};

export const getCurrentRoute = () =>
  navigationRef.current?.getCurrentRoute() || null;
