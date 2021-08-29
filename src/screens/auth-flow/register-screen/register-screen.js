import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../../components/Button/Button';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {COLORS} from '../../../constants/colors';
import styles from './styles';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <HeaderBack />
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={'Your email'}
          placeholderTextColor={COLORS.WHITE}
          keyboardType="email-address"
          autoCapitalize={false}
        />
        <TextInput
          style={[styles.input, {marginBottom: 30}]}
          value={password}
          placeholder={'Your password'}
          placeholderTextColor={COLORS.WHITE}
          onChangeText={setPassword}
          autoCapitalize={false}
          secureTextEntry={true}
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

export default RegisterScreen;
