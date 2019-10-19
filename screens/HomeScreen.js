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
import { App } from '../components/MultiTap'
export default function HomeScreen() {
  return (
    <View styles={styles.container}>
     <Player1></Player1>
      <Enemy styles={[styles.ennemies, styles.enemy1]}></Enemy>
     <Player2></Player2>
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
  enemy1: {
    left: 100,
  }
});
