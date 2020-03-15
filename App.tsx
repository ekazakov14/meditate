import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View } from 'react-native';

import Home from './screens/Home';
import Footer from './components/Footer';

type State = {
  readonly isLoading: boolean;
};

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  async componentDidMount(): Promise<void> {
    await Font.loadAsync({
      'sf-regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
      'sf-medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
      'sf-semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
    });

    this.setState({
      isLoading: true,
    });
  }

  render(): JSX.Element {
    const { isLoading } = this.state;

    return isLoading && (
      <View style={styles.container}>
        <Home />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 120,
  },
});

export default App;
