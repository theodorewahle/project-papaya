import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button, Icon } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

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

  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button
          buttonStyle={[s.br3]}
          backgroundColor={Colors.accent}
          onPress={() => this.props.navigation.navigate('AddJob')}
          title="Post another job"
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
