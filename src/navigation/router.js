import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute, APP_SCREENS, navigate, navigationRef} from '.';
import RNBootSplash from 'react-native-bootsplash';
import {getCachedItem} from '../services/cache-storage';
import {CACHE_KEYS} from '../constants/cache-keys';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const Router = () => {
  const autoLogin = async () => {
    const token = await getCachedItem(CACHE_KEYS.TOKEN);
    if (token) {
      navigate(AppRoute.HOME);
    }
  };

  useEffect(() => {
    autoLogin();
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={AppRoute.AUTH}>
        {APP_SCREENS.map((screen, index) => {
          return (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
