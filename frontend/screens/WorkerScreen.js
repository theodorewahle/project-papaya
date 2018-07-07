import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem  from '../components/JobItem';
import { Header, Button } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons'
import { connect } from 'react-redux';

import {getAllJobs} from '../redux/modules/jobs'

import Colors from '../constants/Colors';

class WorkerScreen extends React.Component {
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

  componentDidMount() {
    this.props.getAllJobs()
  }

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
            this.props.jobs.allJobs.map((l, i) => (
              <JobItem
                key={i}
                name={l.title}
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
  }
});

const mapStateToProps = state => ({
  jobs: state.jobs,
});

const mapDispatchToProps = {
  getAllJobs,
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkerScreen);
