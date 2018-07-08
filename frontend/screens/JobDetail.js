import React from 'react';
import { ScrollView, StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import moment from 'moment';
import JobItem from '../components/JobItem';
import { Header, Button, Icon, Overlay } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import { getAllJobs } from '../redux/modules/jobs';
import JobInfo from '../components/JobInfo';
import Colors from '../constants/Colors';

class JobDetail extends React.Component {
  state = {
    modalVisible: false,
    userType: 'worker',
    hoursWorked: moment.duration('00:00:00'),
    jobStatus: 'pending',
    bitcoinEarned: '0.00000',
    interval: null
  };

  tick() {
    const BITCOIN_PER_SECOND = 0.0002;
    b = moment.duration(1, 's');
    this.setState({
      hoursWorked: this.state.hoursWorked.add(b),
      bitcoinEarned: Number.parseFloat(this.state.bitcoinEarned) + BITCOIN_PER_SECOND
    });
  }

  startTimer() {
    this.setState({ jobStatus: 'active' });
    const interval = setInterval(() => this.tick(), 1000);
    this.setState({ interval });
  }

  endJob() {
    this.interval = clearInterval(this.state.interval);
  }

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        outerContainerStyles={{
          height: 80,
          borderBottomWidth: 0
        }}
        leftComponent={
          <Icon
            name="chevron-left"
            color={Colors.white}
            size={26}
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          />
        }
        centerComponent={{ text: 'Job Detail', style: [s.white, s.f5] }}
        backgroundColor={Colors.primary}
      />
    )
  });

  renderStopwatch() {
    const hours = this.state.hoursWorked.hours();
    const minutes = this.state.hoursWorked.minutes();
    const seconds = this.state.hoursWorked.seconds();

    const showTimes = time => {
      if (time < 10) {
        return `0${time}`;
      } else return time;
    };
    return (
      <View>
        <Text style={[s.f3, s.white]}>
          {showTimes(hours)}:{showTimes(minutes)}:{showTimes(seconds)}
        </Text>
      </View>
    );
  }

  setModalVisible = visible => {
    console.log('blah');
    this.setState({ modalVisible: visible });
  };

  render() {
    const currentJob = {
      name: 'Apple Picking',
      status: 'active',
      description:
        'Lorem ipsum dolor sit amet, nonummy ligula volutpat hac integer nonummy. Suspendisse ultricies, congue etiam tellus, erat libero, nulla eleifend, mauris pellentesque. Suspendisse integer praesent vel, integer gravida mauris, fringilla vehicula lacinia non'
    };
    return (
      <ScrollView style={styles.container}>
        <Modal style={[s.jcc, s.aic]} transparent style={{ height: 80 }} visible={this.state.modalVisible}>
          <View style={[{ backgroundColor: 'rgba(0, 0, 0, .5)' }, s.aic, s.mh4, s.br4, s.mt6]}>
            <Text style={[s.f2]}>Hello</Text>
            <Button
              buttonStyle={[s.br3]}
              backgroundColor={Colors.accent}
              title="Close Modal"
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          </View>
        </Modal>
        <View style={[s.bg_white, s.mb3]}>
          <JobInfo />
        </View>
        {this.state.jobStatus === 'active' && (
          <View style={[s.jcsb, s.mh3, s.mb2, s.br3, s.pa2, s.flx_row]}>
            <View style={[s.bg_accent, s.br2, s.pa3, s.jcsb, { minWidth: 155 }]}>
              {this.renderStopwatch()}
              <View style={[s.aife, s.jcsb]}>
                <Text style={[s.f5, s.white]}>TIME</Text>
              </View>
            </View>
            <View style={[s.bg_accent, s.br2, s.pa3, { minWidth: 155 }]}>
              <Text style={[s.f3, s.white]}>{this.state.bitcoinEarned.toString().substring(0, 7)}</Text>
              <View style={[s.aife]}>
                <Text style={[s.f5, s.white]}>BTC</Text>
              </View>
            </View>
          </View>
        )}
        <View style={[s.bg_white, s.mh3, s.br3, s.mb3]}>
          <View style={[s.bg_primary, s.br__top, s.br3]}>
            <Text style={[s.f5, s.white, s.pv2, s.ph3]}>{currentJob.name}</Text>
          </View>
          <Text style={[s.pa2]}>{currentJob.description}</Text>
        </View>
        {this.state.jobStatus === 'active' &&
          this.state.userType === 'worker' && (
            <Button
              buttonStyle={[s.br3]}
              backgroundColor={Colors.accent}
              title="End Job"
              onPress={() => this.endJob()}
            />
          )}
        {this.state.jobStatus === 'pending' &&
          this.state.userType === 'worker' && (
            <Button
              buttonStyle={[s.br3]}
              backgroundColor={Colors.accent}
              title="Start Job"
              onPress={() => this.startTimer()}
            />
          )}
        {this.state.jobStatus === 'available' &&
          this.state.userType === 'worker' && (
            <Button buttonStyle={[s.br3]} backgroundColor={Colors.accent} title="Join Job" />
          )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDetail);
