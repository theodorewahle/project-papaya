import React from 'react';
import { View, Text } from 'react-native';
import {styles as s } from 'react-native-style-tachyons'

import Colors from '../constants/Colors';

export default class JobItem extends React.Component {
  render() {
    return (
      <View style={[s.bg_white, s.mh3, s.mv2, s.br2]}>
        <Text style={[s.f4, s.b]}>
          {this.props.name}
        </Text>
        <Text style={[s.f5, s.grey]}>
          {this.props.startTime}
        </Text>
      </View>
    );
  }
}
