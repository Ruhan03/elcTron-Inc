import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import CoreValuesScreen from '../screens/CoreValuesScreen';

export const AppTabNavigator = createBottomTabNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'More About Us',
    },
  },

  CoreValues: {
    screen: CoreValuesScreen,
    navigationOptions: {
      tabBarLabel: 'Our core values',
    },
  },
})