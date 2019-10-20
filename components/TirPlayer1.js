import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';



  
let Window = Dimensions.get('window');
export class TirPlayer1 extends Component{
  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(Window.height - 125),
      left: 73
    }
  }
  loop(){
    Animated.loop(
      Animated.sequence([
    Animated.timing(this.state.topPosition, {
        toValue: 0,
        duration: 1500, // Le temps est en milliseconds ici (3000ms = 3sec)
      })
    ]))
    .start((e) => {
      console.log(e)
      this.loop()
  })
    
  }
  componentDidMount() {
    this.loop()
}

    render(){
        return (
            <View>
                <Animated.View style={[styles.tir, { top: this.state.topPosition, left: this.state.left }]}>
                </Animated.View>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    tir: {
        position: 'absolute',
 
        top: Window.height - 125,
        height: 20,
        width: 4,
        backgroundColor: 'blue'
    },

});