import React from 'react';
import {Pressable, StyleSheet, SafeAreaView} from 'react-native';
import {COLORS} from '../../constants/colors';
import {goBack} from '../../navigation';
import {scale} from '../../utils/dimension';
import ArrowBack from './img/arrow_back_icon.svg';

const HeaderBack = ({onPress = null}) => {
  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <Pressable
        hitSlop={10}
        style={styles.button}
        onPress={onPress ? onPress : goBack}>
        <ArrowBack width={scale(24)} height={scale(22.8)} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.MAIN_BLACK,
  },
  button: {
    paddingLeft: 16,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.MAIN_BLACK,
    paddingBottom: 10,
    paddingTop: 15,
  },
});

export default HeaderBack;
