import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import HomeIcon from './icons/HomeIcon';
import BookIcon from './icons/BookIcon';
import FlowerIcon from './icons/FlowerIcon';
import ProfileIcon from './icons/ProfileIcon';

const Navigation: React.FunctionComponent = () => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
      <HomeIcon width={28} height={28} color="#89909A" />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
      <BookIcon width={28} height={28} color="#89909A" />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
      <FlowerIcon width={30} height={28} color="#89909A" />
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={styles.iconContainer}>
      <ProfileIcon width={19} height={21} color="#89909A" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
