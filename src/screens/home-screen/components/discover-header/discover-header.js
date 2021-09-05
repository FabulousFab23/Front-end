import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NotificationsIcon from '../../img/notifications_icon.svg';
import SearchIcon from '../../img/search_icon.svg';
import {scale, verticalScale} from '../../../../utils/dimension';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';

const DiscoverHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
          <SearchIcon width={scale(18)} height={scale(20.8)} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9}>
          <NotificationsIcon width={scale(20.3)} height={scale(20.3)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 24,
    marginBottom: verticalScale(40),
  },
  title: {
    fontSize: scale(34),
    color: COLORS.WHITE,
    fontFamily: FONTS.POPPINS.MEDIUM,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 20,
  },
});

export default DiscoverHeader;
