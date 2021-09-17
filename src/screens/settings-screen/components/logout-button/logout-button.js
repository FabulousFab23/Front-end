import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import ArrowNext from '../../img/arrow_next.svg';
import {logoutFromAccount} from '../../../../store/home/actions';
import LogoutIcon from '../../img/logout_icon.svg';
import {scale, verticalScale} from '../../../../utils/dimension';

const LogoutButton = () => {
  const logOut = () => {
    logoutFromAccount();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={logOut}>
      <View style={styles.infoContainer}>
        <LogoutIcon width={scale(17.4)} height={verticalScale(18.3)} />
        <Text style={styles.title}>Logout</Text>
      </View>
      <ArrowNext width={scale(7.13)} height={scale(11.67)} />
    </TouchableOpacity>
  );
};

export default LogoutButton;
