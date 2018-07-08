import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import WorkerScreen from '../screens/WorkerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Wallet from '../screens/Wallet';
import JobBoard from '../screens/JobBoard';
import JobDetail from '../screens/JobDetail';

const WorkerStack = createStackNavigator({
  Worker: WorkerScreen,
  Wallet: Wallet,
  JobBoard: JobBoard,
  JobDetail: JobDetail
});

WorkerStack.navigationOptions = {
  tabBarLabel: 'Work',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-hammer${focused ? '' : '-outline'}` : 'md-hammer'}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Get Help',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-hand${focused ? '' : '-outline'}` : 'md-hand'}
    />
  )
};

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Colors.primary,
    labelStyle: {
      fontSize: 12
    }
  }
};
export default createBottomTabNavigator(
  {
    WorkerStack,
    SettingsStack
  },
  BottomTabNavigatorConfig
);
