import {PATTERN_EMAIL} from '../../../../constants/regEx';

export const isValidEmail = text => {
  return PATTERN_EMAIL.test(text);
};
