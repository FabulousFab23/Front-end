import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import styles from '../../styles';
import CheckedIcon from '../../img/checked_icon.svg';
import {scale, verticalScale} from '../../../../../utils/dimension';
import {FONTS} from '../../../../../constants/fonts';
import {searchByPseudo} from '../../../../../api/services/search';
import {
  changePage,
  setOnboardingData,
} from '../../../../../store/onboarding/actions';

const OnboardingPseudo = () => {
  const [pseudo, setPseudo] = useState('');
  const [available, setAvailable] = useState(null);
  const [loading, setLoading] = useState(false);

  let timeout = null;

  const searchUser = text => {
    setLoading(true);
    if (text.length === 0) {
      setAvailable(null);
      setPseudo(text);
      setLoading(false);
      clearTimeout(timeout);
    } else {
      setPseudo(text);
      clearTimeout(timeout);
      setTimeout(async () => {
        const {data} = await searchByPseudo(pseudo);
        console.log('DATA', data);
        if (data && data.length > 0) {
          setAvailable(false);
        } else {
          setAvailable(true);
        }
        setLoading(false);
      }, 1500);
    }
  };

  const goToNextStep = () => {
    if (available) {
      changePage({nextPage: 2});
      setOnboardingData({
        user: {
          pseudo: pseudo,
          dob: '',
          country: '',
          gender: '',
        },
      });
    } else {
      Alert.alert('Sorry', 'Please enter correct pseudo');
    }
  };

  return (
    <>
      <Text style={styles.title}>Pseudo</Text>
      <View style={layoutStyles.inputContainer}>
        <TextInput
          style={[styles.input, {marginBottom: 98}]}
          value={pseudo}
          onChangeText={searchUser}
          placeholder={'Your pseudo'}
          placeholderTextColor={COLORS.WHITE}
          autoCapitalize={false}
        />
        {pseudo.length > 0 ? (
          <View style={layoutStyles.checkedContainer}>
            {available && !loading ? (
              <CheckedIcon width={scale(22)} height={scale(22)} />
            ) : null}
            {loading ? (
              <ActivityIndicator size={'small'} color={COLORS.WHITE} />
            ) : (
              <Text style={layoutStyles.chekedText}>
                {available ? 'Pseudo is available' : 'Pseudo is not available'}
              </Text>
            )}
          </View>
        ) : null}
      </View>
      <Button
        textColor={COLORS.WHITE}
        title={'NEXT'}
        buttonColor={COLORS.BLACK}
        isFull={true}
        onPress={goToNextStep}
      />
    </>
  );
};

const layoutStyles = StyleSheet.create({
  checkedContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 17,
    top: verticalScale(15),
  },
  chekedText: {
    color: COLORS.WHITE,
    fontSize: scale(15),
    fontFamily: FONTS.OPEN_SANS.REGULAR,
    marginLeft: 5,
  },
  inputContainer: {
    width: '100%',
  },
});

export default OnboardingPseudo;
