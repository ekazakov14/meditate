import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CategoryItem, { Props as Item } from './CategoryItem';

type Props = {
  readonly items: Item[];
};

const ItemsRow: React.FunctionComponent<Props> = ({ items }: Props) => {
  const rowItems = items.map((item: Item) => (
    <TouchableOpacity activeOpacity={0.9} style={styles.item} key={item.id}>
      <CategoryItem {...item} />
    </TouchableOpacity>
  ));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {rowItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 20,
  },
});

export default ItemsRow;
