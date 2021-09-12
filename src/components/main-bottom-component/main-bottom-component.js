import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import SettingsIcon from './img/settings_icon.svg';
import MicroIcon from './img/micro_icon.svg';
import ProfileIcon from './img/profile_icon.svg';
import {scale, verticalScale} from '../../utils/dimension';
import {COLORS} from '../../constants/colors';
import {AppRoute, navigate} from '../../navigation';
import {FONTS} from '../../constants/fonts';

const BottomComponent = ({isAnswerModal = false}) => {
  return (
    <View style={styles.container}>
      {!isAnswerModal ? (
        <View style={styles.dot} />
      ) : (
        <Text style={styles.recordText}>Record your answer</Text>
      )}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigate(AppRoute.SETTINGS, {})}>
          <SettingsIcon width={scale(30.7)} height={verticalScale(31.7)} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.microIcon}>
          <MicroIcon width={scale(58)} height={verticalScale(54.4)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(AppRoute.PROFILE, {})}>
          <ProfileIcon width={scale(22.7)} height={verticalScale(27)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    paddingTop: 12,
    alignItems: 'center',
    paddingBottom: 20,
  },
  dot: {
    width: scale(25),
    height: verticalScale(4),
    backgroundColor: COLORS.MEDIUM_GREY,
    borderRadius: scale(20),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: 20,
  },
  microIcon: {
    marginRight: 20,
  },
  recordText: {
    fontSize: scale(10),
    color: COLORS.WHITE,
    fontFamily: FONTS.OPEN_SANS.REGULAR,
  },
});

export default BottomComponent;
