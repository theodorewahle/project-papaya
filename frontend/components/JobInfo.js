import React from 'react';
import { View, Text } from 'react-native';
import { styles as s } from 'react-native-style-tachyons';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

import { transformDatetimeToTime } from '../utils/transforms';

const renderStars = employerRating => {
  let stars = [];
  var quotient = Math.floor(employerRating / 1);
  var remainder = employerRating % quotient;

  for (i = 0; i < quotient; i++) {
    stars.push(<Icon size={16} name="star" type="font-awesome" color={Colors.primary} />);
  }
  if (remainder > 0) {
    stars.push(<Icon size={16} name="star-half-o" type="font-awesome" color={Colors.primary} />);
  }
  for (i = 0; stars.length < 5; i++) {
    stars.push(<Icon size={16} name="star-o" type="font-awesome" color={Colors.primary} />);
  }
  return stars;
};

const JobInfo = ({ startTime, hourlyRate, employerRating }) => (
  <View style={[s.flx_row, s.jcsa, s.pb3, s.pt3]}>
    <View style={[s.aic]}>
      <View style={[s.pb1, s.min_h2]}>
        <Icon size={24} name="access-time" type="material-icons" color={Colors.primary} style={[s.pb5]} />
      </View>
      <Text style={([s.f8], { color: Colors.primary })}>{transformDatetimeToTime(startTime)}</Text>
    </View>
    <View style={[s.aic]}>
      <View style={[s.pb2, s.pt1, s.flx_row, s.min_h2]}>
        <View style={[s.flx_row]}>{renderStars(1.2)}</View>
      </View>
      <Text style={[s.f8, { color: Colors.primary }]}>Employer Rating</Text>
    </View>
    <View style={[s.aic]}>
      <View style={[s.pb1, s.min_h2]}>
        <Icon size={24} name="bitcoin" type="font-awesome" color={Colors.primary} />
      </View>
      <Text style={([s.f8], { color: Colors.primary })}>{`${hourlyRate}/hr`}</Text>
    </View>
  </View>
);

export default JobInfo;
