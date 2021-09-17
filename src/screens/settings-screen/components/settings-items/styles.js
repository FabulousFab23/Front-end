import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import {scale} from '../../../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: scale(16),
    fontFamily: FONTS.COMFORTAA.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 21,
  },
});

export default styles;
