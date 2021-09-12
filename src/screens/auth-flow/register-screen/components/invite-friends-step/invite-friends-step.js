import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import styles from '../../styles';
import MessageIcon from '../../img/message_icon.svg';
import FacebookIcon from '../../img/facebook_icon.svg';
import WhatsupIcon from '../../img/whatsup_icon.svg';
import {scale, verticalScale} from '../../../../../utils/dimension';
import {FONTS} from '../../../../../constants/fonts';
import {AppRoute, navigate} from '../../../../../navigation';
import {changeTutorialStatus} from '../../../../../store/home/actions';

const NETWORKS_TO_SHARE = [
  {
    image: <MessageIcon width={scale(72)} height={scale(72)} />,
    text: 'Message',
    press: () => null,
  },
  {
    image: <FacebookIcon width={scale(72)} height={scale(72)} />,
    text: 'Messenger',
    press: () => null,
  },
  {
    image: <WhatsupIcon width={scale(72)} height={scale(72)} />,
    text: 'WhatsApp',
    press: () => null,
  },
];

const InviteFriends = () => {
  const finishOnboarding = () => {
    changeTutorialStatus({status: true});
    navigate(AppRoute.HOME, {});
  };

  return (
    <View
      style={[
        styles.container,
        {justifyContent: 'space-between', paddingBottom: 42},
      ]}>
      <View>
        <Text style={layoutStyles.title}>Invite your friends</Text>
        <Text style={layoutStyles.text}>
          Share the <Text style={layoutStyles.voccoText}>VOCCO</Text> experience
          with your friends
        </Text>
        <View style={layoutStyles.icons}>
          {NETWORKS_TO_SHARE.map(item => {
            return (
              <TouchableOpacity
                style={layoutStyles.button}
                onPress={item.press}
                activeOpacity={0.9}>
                {item.image}
                <Text style={layoutStyles.buttonText}>{item.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Button
        title={'FINISH'}
        isFull={true}
        onPress={finishOnboarding}
        buttonColor={COLORS.BLACK}
        textColor={COLORS.WHITE}
      />
    </View>
  );
};

const layoutStyles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(10),
    fontFamily: FONTS.OPEN_SANS.BOLD,
    color: COLORS.WHITE,
    marginTop: 18,
  },
  title: {
    fontSize: scale(36),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: verticalScale(43),
  },
  text: {
    fontSize: scale(20),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: verticalScale(37),
    textAlign: 'center',
    alignSelf: 'center',
  },
  voccoText: {
    fontSize: scale(20),
    fontFamily: FONTS.OPEN_SANS.BOLD,
    color: COLORS.DARK_GREEN,
  },
});

export default InviteFriends;
