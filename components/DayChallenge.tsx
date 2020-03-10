import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  NativeModules,
  Platform,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

type Props = {
  readonly day: number;
  readonly name: string;
  readonly img: {uri: string};
};

const DayChallenge: React.FunctionComponent<Props> = ({ day, name, img }: Props) => (
  <SafeAreaView style={styles.container}>
    <AutoHeightImage source={img} width={Dimensions.get('window').width} />
    <View style={styles.content}>
      <View style={styles.dayContainer}>
        <Text style={styles.day}>
          day
          {day}
        </Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </SafeAreaView>
);

const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#000',
  },
  content: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 15 : StatusBarManager.HEIGHT + 15,
    left: 15,
  },
  dayContainer: {
    marginBottom: 10,
  },
  day: {
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, .5)',
    fontSize: 13,
  },
  nameContainer: {
    maxWidth: '80%',
  },
  name: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 38,
  },
});

export default DayChallenge;
