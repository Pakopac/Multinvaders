import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import ResultScreen from '../screens/ResultScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const GameStack = createStackNavigator(
  {
    Game: GameScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Game',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-game'
      }
    />
  ),
};

GameStack.path = '';

const ResultStack = createStackNavigator(
  {
    Result: ResultScreen,
  },
  config
);

ResultStack.navigationOptions = {
  tabBarLabel: 'Result',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-result'
      }
    />
  ),
};

ResultStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  GameStack,
  ResultStack
});

tabNavigator.path = '';

export default tabNavigator;
