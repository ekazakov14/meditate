import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { containerPadding } from '../constants/sizes';
import { Props as Item } from './CategoryItem';
import ItemsRow from './ItemsRow';

type Props = {
  readonly name: string;
  readonly items: Item[];
};

const Category: React.FunctionComponent<Props> = ({ name, items }: Props) => (
  <View>
    <View style={styles.header}>
      <CustomText style={styles.name}>{name}</CustomText>
      <TouchableOpacity activeOpacity={0.5}>
        <CustomText style={styles.all}>See all</CustomText>
      </TouchableOpacity>
    </View>
    <View style={styles.rowContainer}>
      <ItemsRow items={items} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: containerPadding,
    marginBottom: 15,
  },
  rowContainer: {
    paddingLeft: containerPadding,
  },
  row: {
    marginLeft: containerPadding,
  },
  name: {
    color: '#000',
    fontSize: 24,
  },
  all: {
    color: '#4A80F0',
    fontSize: 16,
  },
});

export default Category;
