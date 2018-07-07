import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem  from '../components/JobItem';
import { Header, Button } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons'

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
    const list = [
      {
        name: 'Mowing Lawn',
        start_time: 'Thurs, July 9',
        hourly_bitcoin_rate: '8'
      },
      {
        name: 'Chris Jackson',
      },
    ]
    return (
      <ScrollView style={styles.container}>
          {
            list.map((l, i) => (
              <JobItem
                key={i}
                name={l.name}
                startTime= {l.start_time}
                hourlyRate= {l.hourly_bitcoin_rate}
              />
            ))
          }
        <Button
          backgroundColor={Colors.primary}
          title='Find another job' />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  }
});
