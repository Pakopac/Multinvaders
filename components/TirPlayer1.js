import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Animated,
} from 'react-native';

let Window = Dimensions.get('window');
const AnimTop = (props) => {
    const [AnimTop] = useState(new Animated.Value(Window.height - 125))  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        AnimTop,
        {
          toValue: -20,
          duration: 1500,
        }
      ).start();
    }, [])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          top: AnimTop,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export class TirPlayer1 extends Component{
    
    render(){
        return (
            <View>
                <AnimTop style={styles.tir}></AnimTop>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    tir: {
        position: 'absolute',
        left: 73,
        top: Window.height - 125,
        height: 20,
        width: 4,
        backgroundColor: 'blue'
    },

});