import React from 'react';
import { View, StyleSheet } from 'react-native';

import Navigation from './Navigation';
import { containerPadding } from '../constants/sizes';

type Props = {
  readonly theme?: 'light' | 'dark';
};

const themeHash = {
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#000',
  },
} as const;

const Footer: React.FunctionComponent<Props> = ({ theme = 'light' }: Props) => {
  const barStyle = {
    ...styles.bar,
    ...themeHash[theme],
  } as const;

  return (
    <View style={styles.container}>
      <Navigation />
      <View style={barStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 83,
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: containerPadding,
  },
  iconContainer: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: '100%',
    height: 5,
    borderRadius: 100,
    opacity: 0.1,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default Footer;
