import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';

export class Player2 extends Component{
    constructor(props){
        super(props);
    
        this.state = {  
            pan             : new Animated.ValueXY()
        };
    }
    componentWillMount(){
        this.panResponder = PanResponder.create({    
            //  onStartShouldSetPanResponder : () => true,
            onMoveShouldSetResponderCapture : () => true,
            onMoveShouldSetPanResponderCapture : () => true,

            onPanResponderGrant : (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },

            onPanResponderMove : Animated.event([null,{ 
                dx : this.state.pan.x,
            }]),
            onPanResponderRelease: (e, {vx, vy}) => {
            }
        });
    }


    render(){
        return (
                <View style={styles.mainContainer}>
                    {this.renderDraggable()}
                </View>
        );
    }

    renderDraggable(){
        return (
           
                <View style={styles.draggableContainer}>
                    <Animated.View                   
                    style={[this.state.pan.getLayout(), styles.triangle]}
                    {...this.panResponder.panHandlers}   > 
                    </Animated.View>
                </View>
          
        );
}
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    draggableContainer: {
        position    : 'absolute',
        left        : Window.width/2 - CIRCLE_RADIUS,
        top: 30,
    
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderRightWidth: 25,
        borderBottomWidth: 50,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        transform: [
            {rotate: '180deg'}
          ],
      },
   
});