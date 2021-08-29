import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute, navigationRef} from '.';
import HomeScreen from '../screens/home-screen/home-screen';
import RegisterScreen from '../screens/auth-flow/register-screen/register-screen';
import AuthScreen from '../screens/auth-flow/auth-screen/auth-screen';
import LoginScreen from '../screens/auth-flow/login-screen/login-screen';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
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
        {/* <Stack.Screen
          name={AppRoute.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name={AppRoute.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name={AppRoute.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name={AppRoute.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={AppRoute.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
