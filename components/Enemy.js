import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
    ListItem
} from 'react-native';


export class Enemy extends Component{
    render(){
        return (
            <View style={styles.listEnemies}>
                <View style={[styles.diamond, styles.enemy1]} />
                <View style={[styles.diamond, styles.enemy2]} />
            </View>
        )
    }
}

let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
    },
    diamond:{
        position: 'absolute',
        top: Window.height/2 - 25,
        width: 50,
        height: 50,
        backgroundColor: 'black',
        transform: [
          {rotate: '45deg'}
        ]    
      },
    enemy1:{
        left: 100
    },
    enemy2:{
        left: 200
    }

});