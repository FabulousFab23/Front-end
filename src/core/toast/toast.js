import React from 'react';
import Toast from 'react-native-toast-message';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../constants/colors';
import {scale, verticalScale} from '../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: '11%',
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: '600',
    fontSize: scale(14),
  },
  error: {
    backgroundColor: 'red',
  },
});

export const success = (message, title) => {
  Toast.show({
    type: 'success',
    text1: title || '',
    text2: message,
  });
};

export const error = messagetitle => {
  Toast.show({
    type: 'error',
    text1: title || '',
    text2: message,
  });
};

export const TOAST_CONFIG = {
  success: ({text2}) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text2}</Text>
    </View>
  ),
  error: ({text2}) => (
    <View style={{...styles.container, ...styles.error}}>
      <Text style={styles.text}>{text2}</Text>
    </View>
  ),
};
