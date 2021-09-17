import React from 'react';
import {TouchableOpacity, Text, Alert} from 'react-native';
import {scale, verticalScale} from '../../../../utils/dimension';
import DeleteIcon from '../../img/delete_account_icon.svg';
import styles from './styles';

const DeleteButton = () => {
  const handleClickDelete = () => {
    Alert.alert('', 'Coming soon');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={handleClickDelete}>
      <DeleteIcon width={scale(18.3)} height={verticalScale(18.3)} />
      <Text style={styles.title}>Delete Account</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
