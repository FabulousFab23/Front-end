import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {scale, verticalScale} from '../../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    marginTop: verticalScale(200),
    alignItems: 'center',
  },
  title: {
    marginTop: verticalScale(80),
    fontSize: scale(20),
    lineHeight: verticalScale(27),
    color: COLORS.WHITE,
    fontFamily: FONTS.OPEN_SANS.REGULAR,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 25,
  },
});

export default styles;
