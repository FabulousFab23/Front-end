import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../../constants/colors';
import styles from './styles';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: COLORS.MAIN_BLACK}} />
      <View style={styles.container}></View>
    </>
  );
};

export default HomeScreen;
