import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import LogoutButton from './components/logout-button/logout-button';
import SettingsItems from './components/settings-items/settings-items';
import styles from './styles';

const SettingsScreen = () => {
  return (
    <>
      <HeaderBack anotherIcon={true} />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Settings</Text>
          <SettingsItems />
        </View>
        <LogoutButton />
      </View>
    </>
  );
};

export default SettingsScreen;
