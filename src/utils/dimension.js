import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 800;
const MODERATE_SCALE_FACTOR_VALUE = 0.5;

const scale = (size) => (width / BASE_WIDTH) * size;
const verticalScale = (size) => (height / BASE_HEIGHT) * size;
const moderateScale = (
  size,
  factor = MODERATE_SCALE_FACTOR_VALUE,
) => size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
