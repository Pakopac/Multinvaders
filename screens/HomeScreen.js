import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
export default function HomeScreen() {
  return (
    <View styles={styles.container}>
      <Players boxStyle={styles.player1}></Players>
      <Players boxStyle={styles.player2}></Players>

      <TirPlayer1></TirPlayer1>
      <Enemy styles={[styles.ennemies, styles.enemy1]}></Enemy>

    </View>
  );
}

HomeScreen.navigationOptions = {
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
