import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../../../../components/Button/Button';
import HeaderBack from '../../../../../components/HeaderBack/HeaderBack';
import {COLORS} from '../../../../../constants/colors';
import styles from '../../styles';

const OnboardingPseudo = () => {
  const [pseudo, setPseudo] = useState('');

  return (
    <>
      <Text style={styles.title}>Pseudo</Text>
      <TextInput
        style={[styles.input, {marginBottom: 98}]}
        value={pseudo}
        onChangeText={setPseudo}
        placeholder={'Your pseudo'}
        placeholderTextColor={COLORS.WHITE}
        autoCapitalize={false}
      />
      <Button
        textColor={COLORS.WHITE}
        title={'NEXT'}
        buttonColor={COLORS.BLACK}
        isFull={true}
      />
    </>
  );
};

export default OnboardingPseudo;
