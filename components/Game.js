import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Dimensions,
  FlatList,
 } from 'react-native';

import Player1 from './Player1'
import { Player2 } from './Player2';
import { Enemy } from '../components/Enemy'

let Window = Dimensions.get('window');
export class Game extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.state.elements)
        return(
        <View>
            <Enemy></Enemy>
            <Player1 boxStyle={styles.player1}></Player1>
            <Player2 boxStyle={styles.player2}></Player2>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    listEnnemies:{
        position: 'absolute',
        top: Window.height/2 - 25,
        left: 50,
    },
    diamond:{
        marginLeft:50,
        width: 50,
        height: 50,
        transform: [
        {rotate: '45deg'}
        ]    
    },
    player1: {
        top: 600,
        borderBottomColor: 'blue',
        left: 20,
      },
      player2: {
        top: 30,
        right: 20,
        borderTopColor: 'red',
      },
})