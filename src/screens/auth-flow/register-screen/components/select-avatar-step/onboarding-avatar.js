import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../../../../components/Button/Button';
import {COLORS} from '../../../../../constants/colors';
import styles from '../../styles';
import DefaultAvatar from '../../img/default_avatar.svg';
import {scale} from '../../../../../utils/dimension';
import ImagePicker from 'react-native-image-crop-picker';
import {changePage} from '../../../../../store/onboarding/actions';

const OnboardingAvatar = () => {
  const [image, setImage] = useState(null);

  // const selectImage = () => {
  //   ImagePicker.openPicker({
  //     cropping: true,
  //   }).then(image => {});
  // };

  // const goToNextStep = () => {
  //   changePage({nextPage: 6});
  // };

  return (
    <>
      <View style={layoutStyles.container}>
        <Text style={styles.title}>You're all set</Text>

        <View>
          {!image ? (
            <TouchableOpacity>
              <DefaultAvatar width={scale(103.4)} height={scale(103.4)} />
            </TouchableOpacity>
          ) : (
            <View style={layoutStyles.image}>
              <Image style={layoutStyles.image} />
            </View>
          )}
        </View>

        <View>
          <Button
            textColor={COLORS.WHITE}
            title={'UPLOAD PROFILE PICTURE'}
            buttonColor={COLORS.BLACK}
            onPress={selectImage}
            isFull={true}
          />
          <View style={{marginTop: 16}}>
            <Button
              textColor={COLORS.WHITE}
              title={image ? 'NEXT' : 'SKIP'}
              buttonColor={COLORS.GREY}
              isFull={true}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const layoutStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  image: {
    width: scale(103.4),
    height: scale(103.4),
    borderRadius: scale(24),
  },
});

export default OnboardingAvatar;
