import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Header } from 'react-native-elements';

import Colors from '../constants/Colors';

export default class WorkerScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
    header: (
      <Header
        leftComponent={{ icon: 'face', color: Colors.white }}
        centerComponent={{ text: 'Upcoming Jobs', style: { color: Colors.white } }}
        rightComponent={{ icon: 'redeem', color: Colors.white }}
        backgroundColor={Colors.primary}
      />
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
