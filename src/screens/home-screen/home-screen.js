import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import DiscoverHeader from './components/discover-header/discover-header';
import styles from './styles';
import {TabView, SceneMap} from 'react-native-tab-view';
import QuestionsList from './components/questions-list/questions-list';
import AnswersModal from './components/answers-modal/answers-modal';

const FirstRoute = () => <QuestionsList />;

const SecondRoute = () => <QuestionsList />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const tabBar = () => (
    <View style={styles.tabsContainer}>
      <Pressable
        style={[
          styles.tab,
          index === 1 ? {backgroundColor: COLORS.LIGHT_BLACK} : {},
        ]}
        onPress={() => setIndex(0)}>
        <Text style={styles.tabText}>World</Text>
      </Pressable>
      <Pressable
        style={[
          styles.tab,
          index === 0 ? {backgroundColor: COLORS.LIGHT_BLACK} : {},
        ]}
        onPress={() => setIndex(1)}>
        <Text style={styles.tabText}>Friends</Text>
      </Pressable>
    </View>
  );

  return (
    <>
      <AnswersModal />
      <SafeAreaView style={{flex: 0, backgroundColor: COLORS.MAIN_BLACK}} />
      <View style={styles.container}>
        <DiscoverHeader />
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={tabBar}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </>
  );
};

export default HomeScreen;
