import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import { getAllJobs } from '../redux/modules/jobs';

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
    this.props.getAllJobs();
  }

  render() {
    const list = [
      {
        name: 'Mowing Lawn',
        start_date: 'Thurs, July 9',
        start_time: '9:30pm',
        hourly_bitcoin_rate: '$11 / hour',
        employer_rating: 4.4
      },
      {
        name: 'Picking Peaches',
        start_date: 'Friday, July 12',
        start_time: '7:15pm',
        hourly_bitcoin_rate: '$8 / hour',
        employer_rating: 3.2
      },
      {
        name: 'Clean Windows',
        start_date: 'Friday, July 17',
        start_time: '12:35pm',
        hourly_bitcoin_rate: '$13 / hour',
        employer_rating: 4.6
      }
    ];
    return (
      <ScrollView style={styles.container}>
        {list.map((l, i) => (
          <JobItem
            key={i}
            name={l.name}
            startTime={l.start_time}
            startDate={l.start_date}
            hourlyRate={l.hourly_bitcoin_rate}
            employerRating={l.employer_rating}
          />
        ))}
        <Button backgroundColor={Colors.primary} title="Find another job" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  jobs: state.jobs
});

const mapDispatchToProps = {
  getAllJobs
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerScreen);
