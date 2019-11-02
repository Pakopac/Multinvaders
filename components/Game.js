import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Dimensions,
  FlatList,
 } from 'react-native';

import Players from '../components/Players'
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
            <Players boxStyle={styles.player1}></Players>
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