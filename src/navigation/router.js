import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute, navigate, navigationRef} from '.';
import HomeScreen from '../screens/home-screen/home-screen';
import RegisterScreen from '../screens/auth-flow/register-screen/register-screen';
import AuthScreen from '../screens/auth-flow/auth-screen/auth-screen';
import LoginScreen from '../screens/auth-flow/login-screen/login-screen';
import ForgotPasswordScreen from '../screens/auth-flow/forgot-password-screen/forgot-password-screen';
import SettingsScreen from '../screens/settings-screen/settings-sreen';
import RNBootSplash from 'react-native-bootsplash';
import ProfileScreen from '../screens/profile-screen/profile-screen';
import {getCachedItem} from '../services/cache-storage';
import {CACHE_KEYS} from '../constants/cache-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Router = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppRoute.AUTH}>
        <Stack.Screen
          name={AppRoute.AUTH}
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.REGISTER}
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.SETTINGS}
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AppRoute.PROFILE}
          component={ProfileScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
