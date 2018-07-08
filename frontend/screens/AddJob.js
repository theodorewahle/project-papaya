import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button, Icon, FormInput } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';

import Colors from '../constants/Colors';

class AddJob extends React.Component {
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
        centerComponent={{ text: 'Add a job', style: [s.white, s.f5] }}
        backgroundColor={Colors.accent}
      />
    )
  });

  state = {
    DateTimePickerVisible: false,
    start_time: new Date()
  };

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  _hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  _handleDatePicked = start_time => {
    this.setState({ start_time });
    this._hideDateTimePicker();
  };
  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={[s.bg_white, s.pa3]}>
          <Text style={[s.b, s.f5]}>When is your job?</Text>
          <FormInput
            placeholder="date"
            onFocus={this._showDateTimePicker}
            value={this.state.start_time.toString()}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="datetime"
          />
        </View>
        <Button
          buttonStyle={[s.br3]}
          backgroundColor={Colors.primary}
          onPress={() => this.props.navigation.navigate('AddJob')}
          title="Post Job"
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

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddJob);
