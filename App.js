import React, {useEffect} from 'react';
import Router from './src/navigation/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {TOAST_CONFIG} from './src/core/toast/toast';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Router />
        <Toast
          config={TOAST_CONFIG}
          ref={ref => Toast.setRef(ref)}
          topOffset={0}
        />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
