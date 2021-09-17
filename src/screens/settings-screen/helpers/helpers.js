import {Alert} from 'react-native';
import {AppRoute, navigate} from '../../../navigation';

export const navigateToProfile = () => {
  navigate(AppRoute.PROFILE, {});
};

export const alertComingSoon = () => {
  Alert.alert('', 'Coming soon');
};
