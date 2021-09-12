import React, {useState} from 'react';
import {View, Text, TextInput, useWindowDimensions} from 'react-native';
import HeaderBack from '../../../components/HeaderBack/HeaderBack';
import styles from './styles';
import {TabView, SceneMap} from 'react-native-tab-view';
import EmailStep from './components/email-password-step/email-password-step';
import OnboardingPseudo from './components/select-pseudo-step/onboarding-pseudo';
import OnboardingBirthday from './components/select-birthday-step/onboarding-birthday';
import SelectGender from './components/select-gender-step/select-gender-step';
import SelectCountry from './components/select-country-step/select-country-step';
import OnboardingAvatar from './components/select-avatar-step/onboarding-avatar';
import InviteFriends from './components/invite-friends-step/invite-friends-step';
import {changePage} from '../../../store/onboarding/actions';
import {useSelector} from 'react-redux';

const renderScene = SceneMap({
  first: () => <EmailStep />,
  second: () => <OnboardingPseudo />,
  third: () => <OnboardingBirthday />,
  four: () => <SelectGender />,
  five: () => <SelectCountry />,
  six: () => <OnboardingAvatar />,
  seven: () => <InviteFriends />,
});

const RegisterScreen = () => {
  const layout = useWindowDimensions();

  const index = useSelector(state => state.onboarding.activePage);

  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
    {key: 'four', title: 'Four'},
    {key: 'five', title: 'Five'},
    {key: 'six', title: 'Six'},
    {key: 'seven', title: 'Seven'},
  ]);

  return (
    <>
      <HeaderBack onPress={index === 0 ? null : () => changePage(index - 1)} />
      <View style={styles.container}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={() => null}
          onIndexChange={changePage}
          initialLayout={{width: layout.width}}
        />
      </View>
    </>
  );
};

export default RegisterScreen;
