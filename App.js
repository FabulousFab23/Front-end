import React, {useEffect} from 'react';
import Router from './src/navigation/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import RNBootSplash from "react-native-bootsplash";

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
