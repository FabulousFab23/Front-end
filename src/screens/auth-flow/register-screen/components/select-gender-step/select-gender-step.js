import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import {FONTS} from '../../../../../constants/fonts';
import {
  changePage,
  setOnboardingData,
} from '../../../../../store/onboarding/actions';
import {scale} from '../../../../../utils/dimension';
import styles from '../../styles';

const SelectGender = () => {
  const [selectedGender, selectGender] = useState(null);

  const GENDERS = ['Male', 'Female', 'Other'];

  const user = useSelector(state => state.onboarding.user);

  const goToNextStep = () => {
    if (selectedGender !== null) {
      changePage({nextPage: 4});
      setOnboardingData({
        user: {
          pseudo: user.pseudo,
          dob: user.dob,
          country: '',
          gender: GENDERS[selectedGender],
        },
      });
    } else {
      Alert.alert('Sorry', 'Please select gender');
    }
  };

  return (
    <>
      <Text style={styles.title}>Gender</Text>

      <View style={layoutStyles.selectGender}>
        {GENDERS.map((item, index) => {
          return (
            <View style={layoutStyles.gender}>
              <TouchableOpacity
                onPress={() => selectGender(index)}
                style={[
                  layoutStyles.checkbox,
                  selectedGender === index
                    ? {backgroundColor: COLORS.GREY}
                    : {},
                ]}></TouchableOpacity>
              <Text style={layoutStyles.item}>{item}</Text>
            </View>
          );
        })}
      </View>

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
  selectGender: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 94,
  },
  item: {
    fontSize: scale(15),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 6,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(24),
    borderWidth: 1,
    borderColor: COLORS.GREY,
  },
});

export default SelectGender;
