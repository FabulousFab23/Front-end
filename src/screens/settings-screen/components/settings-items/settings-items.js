import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {scale} from '../../../../utils/dimension';
import {SETTINGS_ITEMS} from '../../helpers/contants';
import ArrowNext from '../../img/arrow_next.svg';
import styles from './styles';

const SettingsItems = () => {
  return (
    <View>
      {SETTINGS_ITEMS.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.container}
            key={index}
            activeOpacity={0.9}
            onPress={item.action}>
            <View style={styles.infoContainer}>
              {item.icon}
              <Text style={styles.title}>{item.text}</Text>
            </View>
            <ArrowNext width={scale(7.13)} height={scale(11.67)} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SettingsItems;
