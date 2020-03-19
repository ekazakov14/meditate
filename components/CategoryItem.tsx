import React from 'react';
import {
  StyleSheet, View, ImageBackground, ImageSourcePropType,
} from 'react-native';
import CustomText from './CustomText';

export type Props = {
  readonly id: number;
  readonly size: 'md' | 'xl';
  readonly name: string;
  readonly text: string;
  readonly img: ImageSourcePropType;
  readonly steps: number;
  readonly minDuration: number;
  readonly maxDuration: number;
};

const sizes = {
  md: {
    width: 293,
    height: 165,
  },
  xl: {
    width: 310,
    height: 210,
  },
};

const CategoryItem: React.FunctionComponent<Props> = ({
  size, name, text, img, steps, minDuration, maxDuration,
}: Props) => {
  const styles = getStyles(size);

  return (
    <ImageBackground
      source={img}
      style={styles.container}
      imageStyle={styles.containerImage}
    >
      <View style={styles.nameContainer}>
        <CustomText style={styles.name}>{name}</CustomText>
      </View>
      <View style={styles.textContainer}>
        <CustomText style={styles.text}>{text}</CustomText>
      </View>
      <View style={styles.footer}>
        <CustomText style={styles.footerText}>
          {`${steps} steps | ${minDuration} - ${maxDuration} min`}
        </CustomText>
      </View>
    </ImageBackground>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getStyles = (size: 'md' | 'xl') => StyleSheet.create({
  container: {
    ...sizes[size],
    padding: 20,
    paddingRight: '45%',
    borderRadius: 24,
    overflow: 'hidden',
  },
  containerImage: {
    resizeMode: 'stretch',
  },
  nameContainer: {
    marginBottom: 12,
  },
  name: {
    color: '#fff',
    fontSize: 28,
  },
  textContainer: {

  },
  text: {
    color: 'rgba(255, 255, 255, .8)',
    fontFamily: 'sf-regular',
  },
  footer: {
    marginTop: 'auto',
  },
  footerText: {
    color: '#fff',
  },
});

export default CategoryItem;
