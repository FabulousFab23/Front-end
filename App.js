import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/navigation/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RNBootSplash from "react-native-bootsplash";
import { useEffect } from 'react/cjs/react.production.min';

const App = () => {

  useEffect(()=>{
    RNBootSplash.hide({ fade: true });
  },[])
 
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
};


export default App;
