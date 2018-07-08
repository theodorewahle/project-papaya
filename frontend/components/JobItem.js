import React from 'react';
import { View, Text } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import { Button } from 'react-native-elements';

import Colors from '../constants/Colors';
import JobInfo from './JobInfo';

export default class JobItem extends React.Component {
  render() {
    return (
      <View style={[s.bg_white, s.mh3, s.mv2, s.br3, s.min_h3]}>
        <View
          style={[
            s.bg_white,
            s.ba2,
            s.br3,
            s.bb,
            s.b__lightGrey,
            s.br__top,
            s.flx_row,
            s.jcsb,
            s.pb3,
            s.pt3
          ]}>
          <View style={[s.pl3]}>
            <Text style={[s.f4, s.b]}>{this.props.name}</Text>
            <Text style={[s.f5, s.grey]}>{this.props.startDate}</Text>
          </View>
          <Button title="Details >" buttonStyle={[s.br3]} backgroundColor={Colors.primary} />
        </View>
        <JobInfo
          startTime={this.props.startTime}
          hourlyRate={this.props.hourlyRate}
          employerRating={this.props.employerRating}
        />
      </View>
    );
  }
}
