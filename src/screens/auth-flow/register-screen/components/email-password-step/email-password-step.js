import React, {useState} from 'react';
import {View, TextInput, Text, Alert} from 'react-native';
import {register} from '../../../../../api/services/auth';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import {changePage, signUp} from '../../../../../store/onboarding/actions';
import {isValidEmail} from '../../helpers/validation';
import styles from '../../styles';

const EmailStep = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);

    if (!isValidEmail(email)) {
      Alert.alert('Sorry', 'Please enter correct email');
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      Alert.alert('Sorry', 'Password should at least 6 characters');
      setIsLoading(false);
      return;
    }

    await signUp({email, password});

    setIsLoading(false);
  };

  return (
    <>
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
        onPress={registerUser}
        buttonColor={COLORS.BLACK}
        isFull={true}
        isLoading={isLoading}
      />
    </>
  );
};

export default EmailStep;
