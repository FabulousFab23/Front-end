import React, {useState} from 'react';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import styles from '../../styles';
import CalendarPicker from 'react-native-calendar-picker';
import {useSelector} from 'react-redux';
import {
  changePage,
  setOnboardingData,
} from '../../../../../store/onboarding/actions';
import moment from 'moment';
import {scale} from '../../../../../utils/dimension';

const OnboardingBirthday = () => {
  const [birthday, setBirthday] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const user = useSelector(state => state.onboarding.user);

  const changeBirthday = date => {
    setBirthday(date);
    setShowCalendar(false);
  };

  const goToNextStep = () => {
    if (birthday.toString().length) {
      setOnboardingData({
        user: {
          pseudo: user.pseudo,
          dob: new Date(birthday),
          gender: '',
          country: '',
        },
      });
      changePage({nextPage: 3});
    } else {
      Alert.alert('Sorry', 'Please enter correct birthday');
    }
  };

  return (
    <>
      <Text style={styles.title}>Birthday</Text>
      {!showCalendar ? (
        <TextInput
          style={[styles.input, {marginBottom: 98}]}
          value={
            birthday.toString().length
              ? moment(birthday).format('DD/MM/YYYY')
              : ''
          }
          placeholder={'Date of birth'}
          placeholderTextColor={COLORS.WHITE}
          onFocus={() => setShowCalendar(true)}
        />
      ) : null}
      {showCalendar ? (
        <View style={layoutStyles.calendar}>
          <CalendarPicker onDateChange={changeBirthday} maxDate={moment()} />
        </View>
      ) : null}

      <Button
        textColor={COLORS.WHITE}
        title={'NEXT'}
        onPress={goToNextStep}
        buttonColor={COLORS.BLACK}
        isFull={true}
      />
    </>
  );
};

const layoutStyles = StyleSheet.create({
  calendar: {
    backgroundColor: COLORS.WHITE,
    borderRadius: scale(12),
    marginBottom: 98,
  },
});

export default OnboardingBirthday;
