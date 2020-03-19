import React from 'react';
import { SafeAreaView, View } from 'react-native';
import CustomText from '../components/CustomText';
import AngleIcon from '../components/icons/AngleIcon';
import { Props as Item } from '../components/CategoryItem';

type Props = {
  name: string;
  items: Item[];
};

const Section: React.FunctionComponent = ({name, items}: Props) => (
  <SafeAreaView>
    <View>
      <View>
        <AngleIcon direction="left" width={26} height={12} color="#000" />
      </View>
      <View>
        <CustomText style={styles.name}>{name}</CustomText>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {

  },
  header: {
    
  },
  name: {
    fontSize: 24,
  }
});


export default Section;
