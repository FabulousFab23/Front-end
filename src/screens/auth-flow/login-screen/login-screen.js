import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import VoccoIcon from './img/vocco_icon.svg';
import {scale} from '../../../utils/dimension';
import Button from '../../../components/Button/Button';
import {COLORS} from '../../../constants/colors';
import CreatedBy from './components/created-by-component';
import {AppRoute, navigate} from '../../../navigation';

const LoginScreen = () => {
  const goToRegistration = () => {
    navigate(AppRoute.REGISTER, {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleContainer}>
          <VoccoIcon width={scale(85)} height={scale(23)} />
          <Text style={styles.title}>Tell your stories</Text>
        </View>
      </View>
      <CreatedBy />
      <View style={styles.buttons}>
        <Button
          title={'LOG IN'}
          textColor={COLORS.BLACK}
          buttonColor={COLORS.WHITE}
          onPress={goToRegistration}
        />
        <Button
          title={'REGISTER'}
          textColor={COLORS.WHITE}
          onPress={goToRegistration}
          buttonColor={COLORS.ORANGE}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
