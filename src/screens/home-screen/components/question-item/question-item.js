import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import {openModal} from '../../../../store/home/actions';
import {scale, verticalScale} from '../../../../utils/dimension';
import EmojiIcon from '../../img/emoji_icon.svg';
import LikedIcon from '../../img/liked_icon.svg';
import UnlikedIcon from '../../img/unliked_icon.svg';

const QuestionItem = ({item}) => {
  const [liked, setLiked] = useState(false);

  const changeLikeStatus = () => {
    setLiked(!liked);
  };

  const openAnswers = () => {
    openModal();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={openAnswers}>
      <EmojiIcon width={scale(46.8)} height={scale(46.8)} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>BAD GRADES AGAIN</Text>
        <Text style={styles.pseudo}>Digouartout</Text>
        <View style={styles.likesContainer}>
          <Pressable onPress={changeLikeStatus}>
            {liked ? (
              <LikedIcon width={scale(18.7)} height={scale(18.7)} />
            ) : (
              <UnlikedIcon width={scale(18.7)} height={scale(18.7)} />
            )}
          </Pressable>
          <Text style={styles.likes}>9 234</Text>
        </View>
      </View>
      <View style={styles.answersCountContainer}>
        <Text style={styles.answersCount}>2834</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    paddingLeft: 17.5,
    paddingRight: 20,
    height: verticalScale(78.6),
    marginBottom: 18.7,
    borderRadius: scale(18.7),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  answersCountContainer: {
    backgroundColor: COLORS.MAIN_BLACK,
    borderRadius: scale(9.4),
    height: verticalScale(37),
    alignItems: 'center',
    justifyContent: 'center',
  },
  answersCount: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(16),
    color: COLORS.WHITE,
    paddingHorizontal: 4,
  },
  title: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(14),
    color: COLORS.WHITE,
  },
  pseudo: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(9.3),
    color: COLORS.WHITE,
    marginTop: 5,
  },
  likes: {
    fontFamily: FONTS.COMFORTAA.BOLD,
    fontSize: scale(14),
    color: COLORS.WHITE,
    marginLeft: 11,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
});

export default QuestionItem;
