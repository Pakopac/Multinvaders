import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { Player1 } from '../components/Player1'
import { Player2 } from '../components/Player2'
import { Enemy } from '../components/Enemy'
import { TirPlayer1 } from '../components/TirPlayer1'
import { Players } from '../components/Players'

export default class GameScreen extends Component {

  render(){
  return (
    <View styles={styles.container}>
      <Players navigation={this.props.navigation} isPlayer1={true} boxStyle={styles.player1}></Players>
    </View>
  );
  }
}

GameScreen.navigationOptions = {
  header: null,
};
let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  player1: {
    top: 600,
    borderBottomColor: 'blue',
    left: 20,
  },
  player2: {
    top: 30,
    right: 20,
    borderBottomColor: 'red',
  },
  enemy1: {
    left: 100,
  }
});
