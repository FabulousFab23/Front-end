import React, {useCallback} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import QuestionItem from '../question-item/question-item';

const QuestionsList = () => {
  const renderItem = useCallback(({item}) => {
    return <QuestionItem item={item} />;
  }, []);

  return (
    <FlatList
      data={[{}, {}]}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default QuestionsList;
