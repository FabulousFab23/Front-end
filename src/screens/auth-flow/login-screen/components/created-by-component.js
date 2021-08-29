import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import {scale, verticalScale} from '../../../../utils/dimension';
import TechIcon from '../img/french_tech_icon.svg';

const CreatedBy = () => {
  return (
    <View style={styles.container}>
      <TechIcon width={scale(28)} height={scale(28)} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Created by</Text>
        <Text style={styles.text}>a French Tech Entrepreneur</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(40),
    marginLeft: 16,
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS.BOLD,
    fontSize: scale(13),
  },
  text: {
    color: COLORS.GREY,
    fontFamily: FONTS.POPPINS.REGULAR,
    fontSize: scale(12),
    lineHeight: scale(13),
  },
  textContainer: {
    marginLeft: 8,
  },
});

export default CreatedBy;
