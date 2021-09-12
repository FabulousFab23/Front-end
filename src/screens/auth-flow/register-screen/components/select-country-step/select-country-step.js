import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import Button from '../../../../../components/Button/Button';
import styles from '../../styles';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS} from '../../../../../constants/colors';
import {
  changePage,
  setOnboardingData,
} from '../../../../../store/onboarding/actions';
import {useSelector} from 'react-redux';
import {scale} from '../../../../../utils/dimension';
import {FONTS} from '../../../../../constants/fonts';
import {getCountries} from '../../../../../api/services/actions';

const SelectCountry = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const user = useSelector(state => state.onboarding.user);

  useEffect(() => {
    getCountries().then(res => {
      if (res.data && res.data.length) {
        setItems(res.data);
      }
    });
  }, [user]);

  const goToNextStep = () => {
    if (value) {
      changePage({nextPage: 5});
      setOnboardingData({
        user: {
          pseudo: user.pseudo,
          dob: user.dob,
          country: value,
          gender: user.gender,
        },
      });
    } else {
      Alert.alert('Sorry', 'Please select country');
    }
  };

  return (
    <>
      <Text style={styles.title}>Country</Text>

      <DropDownPicker
        schema={{
          label: 'country',
          value: 'country',
        }}
        containerStyle={[
          styles.input,
          {paddingLeft: 0, elevation: 10, zIndex: 10},
          open ? {paddingBottom: 300} : null,
        ]}
        style={{backgroundColor: COLORS.MAIN_BLACK}}
        dropDownContainerStyle={{backgroundColor: COLORS.MAIN_BLACK}}
        listItemLabelStyle={layoutStyles.text}
        ListEmptyComponent={() => (
          <Text style={layoutStyles.text}>Empty list</Text>
        )}
        textStyle={layoutStyles.text}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

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
  text: {
    fontSize: scale(15),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    color: COLORS.WHITE,
  },
});

export default SelectCountry;
