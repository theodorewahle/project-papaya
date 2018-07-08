import React from 'react';
import { ScrollView, StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
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
    user: 'worker'
  };

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

  reviewMe() {
    console.log('blah');
  }

  setModalVisible = visible => {
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
        <View style={[s.bg_white, s.mb3]}>
          <JobInfo />
        </View>
        {currentJob.status === 'active' && (
          <View style={[s.jcsb, s.mh3, s.mb2, s.br3, s.pa2, s.flx_row]}>
            <View style={[s.bg_accent, s.br2, s.pa3]}>
              <Text style={[s.f3, s.white]}>01:21:34</Text>
              <View style={[s.aife]}>
                <Text style={[s.f5, s.white]}>TIME</Text>
              </View>
            </View>
            <View style={[s.bg_accent, s.br2, s.pa3]}>
              <Text style={[s.f3, s.white]}>0.000121</Text>
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
        {currentJob.status === 'active' &&
          this.state.user === 'worker' && (
            <Button
              buttonStyle={[s.br3]}
              backgroundColor={Colors.accent}
              title="End Job"
              onPress={() => this.setModalVisible(!this.state.modalVisible)}
            />
          )}
        {currentJob.status === 'pending' &&
          this.state.user === 'worker' && (
            <Button buttonStyle={[s.br3]} backgroundColor={Colors.accent} title="Start Job" />
          )}
        {currentJob.status === 'available' &&
          this.state.user === 'worker' && (
            <Button buttonStyle={[s.br3]} backgroundColor={Colors.accent} title="Join Job" />
          )}
        <Modal style={[s.jcsa]} transparent style={{ height: 80 }} isVisible={this.state.modalVisible}>
          <View style={[s.bg_white, s.aic]}>
            <Text style={[s.f2]}>Hello</Text>
          </View>
        </Modal>
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
