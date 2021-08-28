import { StackActions} from '@react-navigation/native';
import * as React from 'react';

export const AppRoute = {
  LOGIN:'Login',
  SIGN_UP:'Sign Up',
  FORGOT_PASSWORD:'Forgot Password',
  HOME:'Home'
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

export const replace = (name)  => {
  navigationRef.current?.dispatch({
    ...StackActions.replace(name),
  });
};

export const getCurrentRoute = () =>
  navigationRef.current?.getCurrentRoute() || null;
