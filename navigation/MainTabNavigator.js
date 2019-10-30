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

const GameStack = createStackNavigator(
  {
      Home: HomeScreen,
      Game: GameScreen,
      Result: ResultScreen,
  },
  config
);
GameStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;
  if (navigation.state.index > 0) {
      return {
          tabBarVisible: false
      };
  }

  return {
      tabBarVisible,
  };
};
const tabNavigator = createBottomTabNavigator({
  GameStack,
});

tabNavigator.path = '';

export default tabNavigator;
