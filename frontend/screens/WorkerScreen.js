import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button, Icon } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import { getAllJobs } from '../redux/modules/jobs';

import Colors from '../constants/Colors';

class WorkerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        outerContainerStyles={{
          height: 80,
          borderBottomWidth: 0
        }}
        leftComponent={
          <Icon
            name="face"
            color={Colors.white}
            size={26}
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          />
        }
        centerComponent={{ text: 'Upcoming Jobs', style: [s.white, s.f5] }}
        rightComponent={
          <Icon
            name="redeem"
            color={Colors.white}
            size={26}
            onPress={() => navigation.navigate('Wallet')}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          />
        }
        backgroundColor={Colors.primary}
      />
    )
  });

  componentDidMount() {
    this.props.getAllJobs();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.jobs.allJobs.map((l, i) => (
          <JobItem
            key={i}
            name={l.name}
            startTime={l.start_time}
            startDate={l.start_date}
            hourlyRate={l.hourly_bitcoin_rate}
            employerRating={l.employer_rating}
          />
        ))}
        <Button
          backgroundColor={Colors.primary}
          onPress={() => this.props.navigation.navigate('JobBoard')}
          title="Find another job"
        />
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
