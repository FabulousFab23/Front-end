import React from 'react';
import {StyleSheet, View, Text, FlatList, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import {scale, verticalScale} from '../../../../utils/dimension';
import EmojiIcon from '../../img/emoji_icon.svg';
import PlayAnswer from '../../img/play_answer_icon.svg';
import LikedIcon from '../../img/liked_pink_icon.svg';
import UnlikedIcon from '../../img/unliked_icon.svg';
import BottomComponent from '../../../../components/main-bottom-component/main-bottom-component';
import {closeModal} from '../../../../store/home/actions';

const AnswersModal = () => {
  const isVisible = useSelector(state => state.home.showModal);

  const renderItem = ({item}) => {
    return (
      <View style={styles.answerItem}>
        <Text style={styles.answerNumber}>01</Text>
        <View style={styles.answerInfo}>
          <View style={styles.answerPlayContainer}>
            <Pressable>
              <PlayAnswer width={scale(30)} height={scale(30)} />
            </Pressable>
            <Text style={styles.answerPseudo}>Fabulousfab23</Text>
          </View>
          <Pressable style={styles.likesContainer}>
            <LikedIcon width={scale(19.2)} height={scale(17.1)} />
            <Text style={styles.likes}>99</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => closeModal()}
      useNativeDriverForBackdrop={true}
      style={{justifyContent: 'flex-end'}}
      backdropOpacity={0.9}>
      <View style={styles.container}>
        <Text style={styles.title}>“BAD GRADES AGAIN”</Text>
        <EmojiIcon width={scale(46.8)} height={scale(46.8)} />
        <Text style={styles.pseudo}>Digouartout</Text>
        <View style={styles.answersContainer}>
          <Text style={styles.countAnswersText}>15 Answers</Text>
          <FlatList data={[{}, {}]} renderItem={renderItem} />
        </View>
      </View>
      <BottomComponent isAnswerModal={true} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: '30%',
  },
  answersContainer: {
    backgroundColor: COLORS.MAIN_BLACK,
    width: scale(296),
    height: verticalScale(233.5),
    borderRadius: scale(13.9),
    borderColor: '#21283F',
    borderWidth: 1,
  },
  title: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(25),
    color: COLORS.WHITE,
    marginBottom: 20,
  },
  pseudo: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(18),
    color: COLORS.WHITE,
    marginTop: 25,
    marginBottom: verticalScale(39),
  },
  countAnswersText: {
    paddingLeft: 13.9,
    paddingTop: 16,
    fontSize: scale(14.7),
    fontFamily: FONTS.COMFORTAA.REGULAR,
    color: COLORS.WHITE,
    marginBottom: 12,
  },
  answerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 9.6,
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: 0.2,
    justifyContent: 'space-between',
    width: scale(265),
  },
  answerNumber: {
    fontFamily: FONTS.COMFORTAA.REGULAR,
    fontSize: scale(11.3),
    color: COLORS.GREY,
    paddingLeft: 13.9,
    marginRight: 7.5,
  },
  answerPseudo: {
    fontFamily: FONTS.COMFORTAA.REGULAR,
    fontSize: scale(14.8),
    color: COLORS.WHITE,
    marginLeft: 11.2,
  },
  answerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  likes: {
    marginLeft: 5.34,
    color: COLORS.WHITE,
    fontFamily: FONTS.COMFORTAA.REGULAR,
    fontSize: scale(13.9),
    paddingRight: 23,
  },
  answerPlayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AnswersModal;
