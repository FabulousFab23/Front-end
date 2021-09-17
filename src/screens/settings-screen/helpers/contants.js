import React from 'react';
import AccountIcon from '../img/account_icon.svg';
import ReferIcon from '../img/refer_icon.svg';
import ReviewIcon from '../img/review_icon.svg';
import TermsIcon from '../img/terms_icon.svg';
import {scale, verticalScale} from '../../../utils/dimension';
import {alertComingSoon, navigateToProfile} from './helpers';

export const SETTINGS_ITEMS = [
  {
    icon: <AccountIcon width={scale(16.5)} height={verticalScale(18.3)} />,
    text: 'Account and Profile',
    action: navigateToProfile,
  },
  {
    icon: <ReferIcon width={scale(20.17)} height={verticalScale(17.42)} />,
    text: 'Refer to a friend',
    action: alertComingSoon,
  },
  {
    icon: <ReviewIcon width={scale(17.44)} height={verticalScale(16.58)} />,
    text: 'Write a Review',
    action: alertComingSoon,
  },
  {
    icon: <TermsIcon width={scale(16.5)} height={verticalScale(18.3)} />,
    text: 'Terms and Conditions',
    action: alertComingSoon,
  },
];
