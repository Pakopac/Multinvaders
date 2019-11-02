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
import { Game } from '../components/Game'

export default class GameScreen extends Component {
    constructor(props) {
      super(props);
      this.state= {
        elements: [
            {id:0, visible:true},
            {id:1, visible:true}
          ]
    }
    }
  render(){
  global.scoreJ1 = 0
  global.scoreJ2 = 0
  return (
    <View style={styles.container}>
        <Enemy elements={this.state.elements}></Enemy>
        <Players boxStyle={styles.player1} isPlayer1={true} elements={this.state.elements}></Players>
        <Player2 boxStyle={styles.player2} elements={this.state.elements}></Player2>
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
