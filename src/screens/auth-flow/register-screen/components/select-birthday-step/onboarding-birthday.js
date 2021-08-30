import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../../components/Button/Button';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {COLORS} from '../../../constants/colors';
import styles from '../../styles';

const OnboardingBirthday = () => {
  const [birthday, setBirthday] = useState('');

  return (
    <>
      <HeaderBack />
      <View style={styles.container}>
        <Text style={styles.title}>Birthday</Text>
        <TextInput
          style={[styles.input, {marginBottom: 98}]}
          value={birthday}
          onChangeText={setBirthday}
          placeholder={'Your birthday'}
          placeholderTextColor={COLORS.WHITE}
          autoCapitalize={false}
        />

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

export default OnboardingBirthday;
