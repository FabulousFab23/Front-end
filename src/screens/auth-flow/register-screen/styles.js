import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {scale, verticalScale} from '../../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: scale(36),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    color: COLORS.WHITE,
    marginBottom: verticalScale(27),
  },
  input: {
    borderColor: COLORS.WHITE,
    borderWidth: 2,
    fontSize: scale(15),
    color: COLORS.WHITE,
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    height: verticalScale(52),
    paddingLeft: 17,
    marginBottom: verticalScale(16),
  },
});

export default styles;
