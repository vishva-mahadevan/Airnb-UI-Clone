import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Trips from './screens/Trips';
import Saved from './screens/Saved.js';
import Profile from './screens/Profile';


class App extends Component {

}
export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24}></Icon>
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor} size={24}></Icon>
      )
    }

  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-briefcase" color={tintColor} size={24}></Icon>
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor} size={24}></Icon>
      )
    }
  },
  Profile: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24}></Icon>
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactivaTintColor: 'grey',
    style: {
      backgroundColor: 'White',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 1
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
