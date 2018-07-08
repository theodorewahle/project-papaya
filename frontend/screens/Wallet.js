import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import JobItem from '../components/JobItem';
import { Header, Button, Icon } from 'react-native-elements';
import { styles as s } from 'react-native-style-tachyons';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';

class Wallet extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Wallets',
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
        <View style={[s.flx_row, s.pa3, s.bg_white, s.mb3]}>
          <View>
            <Text style={[s.f5, { color: Colors.primary }]}>Papaya</Text>
            <Text style={[s.f5, { color: Colors.primary }]}>Balance</Text>
          </View>
          <View style={[s.flx_row, s.ml4, s.pa3]}>
            <Text style={[s.f2, s.mr3, { color: Colors.primary }]}>0.087378</Text>
            <Text style={[s.f3, s.mt2]}>BTC</Text>
          </View>
        </View>
        <View style={[s.pa3, s.bg_white, s.ma3, s.mt0, s.br3]}>
          <Text style={[s.f3]}>Bitcoin Wallet</Text>
          <Text>0xeD0f5cF0ca3BE355c70D09B4b75C47AA0...</Text>
        </View>
        <Button buttonStyle={[s.br3]} backgroundColor={Colors.accent} title="Cash Out" />
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
