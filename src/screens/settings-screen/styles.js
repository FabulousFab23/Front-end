import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {scale, verticalScale} from '../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN_BLACK,
    paddingHorizontal: 21,
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.WHITE,
    marginTop: 10,
    fontSize: scale(36),
    fontFamily: FONTS.COMFORTAA.BOLD,
    textAlign: 'center',
    marginBottom: verticalScale(60),
  },
});

export default styles;
