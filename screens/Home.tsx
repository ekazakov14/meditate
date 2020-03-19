import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Props as Item } from '../components/CategoryItem';
import DayChallenge from '../components/DayChallenge';
import Category from '../components/Category';

const popularItems: Item[] = [
  {
    id: 1,
    size: 'md',
    img: require('../assets/images/popular1.png'),
    name: 'Anxiety',
    text: 'Turn down the stress volume',
    steps: 7,
    minDuration: 5,
    maxDuration: 11,
  },
  {
    id: 2,
    size: 'md',
    img: require('../assets/images/popular2.png'),
    name: 'Spiritual',
    text: 'Daily Calm',
    steps: 5,
    minDuration: 7,
    maxDuration: 9,
  },
];

const newItems: Item[] = [
  {
    id: 3,
    size: 'md',
    img: require('../assets/images/new1.png'),
    name: 'Daily Calm',
    text: 'Turn down the stress volume',
    steps: 4,
    minDuration: 3,
    maxDuration: 11,
  },
  {
    id: 4,
    size: 'md',
    img: require('../assets/images/new2.png'),
    name: 'Free Will',
    text: 'Happiness',
    steps: 6,
    minDuration: 6,
    maxDuration: 11,
  },
];

const Home: React.FunctionComponent = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.dayChallengeContainer}>
      <DayChallenge
        day={7}
        name="Love and Accept Yourself"
        img={require('../assets/images/card.png')}
      />
    </View>
    <View style={{ marginBottom: 30 }}>
      <Category name="Popular" items={popularItems} />
    </View>
    <View>
      <Category name="New" items={newItems} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  dayChallengeContainer: {
    marginBottom: 25,
  },
});

export default Home;
