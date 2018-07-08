import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import { Button, Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

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

        <View style={[s.flx_row, s.jcsa, s.pa3]}>
          <View>
            <Icon name="access-time" type="material-icons" color={Colors.primary} />
            <Text style={[s.f8]}>{this.props.startTime}</Text>
          </View>
          <View>
            <Icon name="money" type="font-awesome" color={Colors.primary} />
            <Text style={[s.f8]}>{this.props.hourlyRate}</Text>
          </View>
          <View>
            <Icon name="star" type="font-awesome" color={Colors.primary} />
            <Text style={[s.f8, s[Colors.primary]]}>{this.props.employerRating}</Text>
          </View>
        </View>
      </View>
    );
  }
}
