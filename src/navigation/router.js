import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AppRoute, navigate, navigationRef } from ".";
import HomeScreen from "../screens/home-screen/home-screen";

const Stack = createStackNavigator();

const Router  = () => {

return (
  <NavigationContainer>
    <Stack.Navigator>
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