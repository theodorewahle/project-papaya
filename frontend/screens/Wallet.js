import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button, Icon } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';

class Wallet extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Wallet',
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
        centerComponent={{ text: 'Wallet', style: [s.white, s.f5] }}
        backgroundColor={Colors.primary}
      />
    )
  });

  componentDidMount() {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Button backgroundColor={Colors.accent} title="Cash Out" />
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
)(Wallet);
