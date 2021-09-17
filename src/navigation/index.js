import {StackActions} from '@react-navigation/native';
import * as React from 'react';
import AuthScreen from '../screens/auth-flow/auth-screen/auth-screen';
import ForgotPasswordScreen from '../screens/auth-flow/forgot-password-screen/forgot-password-screen';
import LoginScreen from '../screens/auth-flow/login-screen/login-screen';
import RegisterScreen from '../screens/auth-flow/register-screen/register-screen';
import HomeScreen from '../screens/home-screen/home-screen';
import ProfileScreen from '../screens/profile-screen/profile-screen';
import SettingsScreen from '../screens/settings-screen/settings-sreen';

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

const headerHideOption = {headerShown: false};

export const APP_SCREENS = [
  {
    name: AppRoute.AUTH,
    component: AuthScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.REGISTER,
    component: RegisterScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.LOGIN,
    component: LoginScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.HOME,
    component: HomeScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.SETTINGS,
    component: SettingsScreen,
    options: headerHideOption,
  },
  {
    name: AppRoute.PROFILE,
    component: ProfileScreen,
    options: headerHideOption,
  },
];

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
