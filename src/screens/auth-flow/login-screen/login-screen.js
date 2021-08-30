import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import Button from '../../../components/Button/Button';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import {COLORS} from '../../../constants/colors';
import {AppRoute, navigate} from '../../../navigation';
import styles from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPassword = () => {
    navigate(AppRoute.FORGOT_PASSWORD, {});
  };

  return (
    <>
      <HeaderBack />
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
        <Pressable
          style={styles.passwordLostContainer}
          hitSlop={5}
          onPress={handleForgotPassword}>
          <Text style={styles.passwordLostText}>Forgot password</Text>
        </Pressable>
      </View>
    </>
  );
};

export default LoginScreen;
