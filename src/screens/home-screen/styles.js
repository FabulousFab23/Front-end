import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {scale, verticalScale} from '../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.MAIN_BLACK,
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: verticalScale(16),
  },
  tab: {
    height: verticalScale(48),
    backgroundColor: COLORS.BLUE,
    borderRadius: scale(12),
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 17,
  },
  tabText: {
    fontSize: scale(18),
    color: COLORS.WHITE,
    fontFamily: FONTS.OPEN_SANS.BOLD,
  },
});

export default styles;
