import React, {useEffect} from 'react';
import Router from './src/navigation/router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';
import Toast from 'react-native-toast-message';
import {TOAST_CONFIG} from './src/core/toast/toast';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaProvider>
      <Router />
      <Toast
        config={TOAST_CONFIG}
        ref={ref => Toast.setRef(ref)}
        topOffset={0}
      />
    </SafeAreaProvider>
  );
};

export default App;
