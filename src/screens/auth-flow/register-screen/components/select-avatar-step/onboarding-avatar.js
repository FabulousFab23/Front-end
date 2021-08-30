import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button/Button';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {COLORS} from '../../../constants/colors';
import styles from '../../styles';

const OnboardingAvatar = () => {
  return (
    <>
      <HeaderBack />
      <View style={styles.container}>
        <Text style={styles.title}>You're all set</Text>

        <Button
          textColor={COLORS.WHITE}
          title={'NEXT'}
          buttonColor={COLORS.BLACK}
          isFull={true}
        />
      </View>
    </>
  );
};

export default OnboardingAvatar;
