import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';
import { Players } from '../components/Players'



  
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
    
    this.state.topPosition.setValue(startAnim)
    Animated.sequence([
    Animated.timing(this.state.topPosition, {
        toValue: endAnim,
        duration: 1500,
      })
    ])
    .start((e) => {
      if (e.finished) {
        this.loop();
        //console.log(this.myComponent.props.boxStyle.left)
        /*this.myComponent.measure( (fx, fy, width, height, px, py) => {
          console.log(fx)
        })*/
        console.log('ok')
      }
    }) 
  }
  componentDidMount() {
    console.log(this.props.name)
    this.loop()
}

    render(){
        return (
            <View>
               
                <Animated.View
                 style={[styles.tir, { top: this.state.topPosition, left: this.state.left }]}>
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
    player1: {
      top: 600,
      borderBottomColor: 'blue',
      left: 20,
    },

});