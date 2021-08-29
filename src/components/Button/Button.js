import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {scale, verticalScale} from '../../utils/dimension';

const Button = ({
  title = '',
  onPress,
  textColor,
  buttonColor,
  isFull = false,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: buttonColor},
        isFull ? {width: '100%'} : null,
      ]}
      onPress={isLoading ? null : onPress}>
      {isLoading ? (
        <ActivityIndicator
          style={{width: scale(13), height: verticalScale(15.3)}}
          color={COLORS.WHITE}
        />
      ) : (
        <Text style={[styles.text, {color: textColor}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(6),
    paddingVertical: 18,
    alignItems: 'center',
    width: scale(167),
  },
  text: {
    fontSize: scale(13),
    lineHeight: scale(15.3),
    fontFamily: FONTS.POPPINS.BOLD,
  },
});

export default Button;
