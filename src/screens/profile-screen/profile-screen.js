import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import HeaderBack from '../../components/HeaderBack/HeaderBack';
import DeleteButton from './components/delete-button/delete-button';
import styles from './styles';
import DefaultAvatar from './img/default_avatar.svg';
import {scale} from '../../utils/dimension';

const ProfileScreen = () => {
  return (
    <>
      <HeaderBack anotherIcon={true} />
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Account and Profile</Text>
        </View>
        <View>
          {true ? (
            <TouchableOpacity>
              <DefaultAvatar width={scale(103.4)} height={scale(103.4)} />
            </TouchableOpacity>
          ) : (
            <View style={styles.image}>
              <Image style={styles.image} />
            </View>
          )}
        </View>
        <DeleteButton />
      </View>
    </>
  );
};

export default ProfileScreen;
