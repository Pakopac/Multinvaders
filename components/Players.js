import React, { Component } from 'react';
import { 
  Animated, 
  StyleSheet, 
  View,
  Dimensions,
 } from 'react-native';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';


let Window = Dimensions.get('window');
export class Players extends Component {
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._translateX,
          },
        },
      ],

    );
    this.state = {
      topPosition: new Animated.Value(Window.height - 125),
      left: 73,
      playerX: 20
    }
  }

  loop(){
    if(this.props.isPlayer1){
      var startAnim = Window.height - 125;
      var endAnim = 0;
    }
    else{
      var startAnim = 50;
      var endAnim = Window.height;
    }
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
        //console.log(this.state.left)
        //console.log(this.state.playerX)
        this.setState({
          left: this.state.playerX,
          });
      }
    }) 
  }

  componentDidMount(){
    this.loop()
  }

  _onHandlerStateChange = event => {
    this.setState({
      playerX: event.nativeEvent.absoluteX,
      });
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.x += event.nativeEvent.translationX;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  };
  render() {
    return (
      <View>
           <View>
        <Animated.View
          style={[(this.props.isPlayer1) ? styles.tirPlayer1 : styles.tirPlayer2, { top: this.state.topPosition, left: this.state.left }]}>
        </Animated.View>
        </View>
      <PanGestureHandler
        ref={view => { this.myComponent = view; }} 
        {...this.props}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            },
            this.props.boxStyle,
          ]}
        />
      </PanGestureHandler>
      </View>
    );
  }
}
export default class Example extends Component {

  render() {
  
    return (
      <View>
        <Animated.View
          style={[styles.player1, { top: this.state.topPosition, left: this.state.left }]}>
        </Animated.View>
        <View style={styles.scrollView}>
          <DraggableBox  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  tir: {
    position: 'absolute',
    top: Window.height - 125,
    height: 20,
    width: 4,
    backgroundColor: 'blue'
},
tirPlayer1: {
  position: 'absolute',
  top: Window.height - 125,
  height: 20,
  width: 4,
  backgroundColor: 'blue'
},
tirPlayer2:{
  position: 'absolute',
  top: Window.height - 125,
  height: 20,
  width: 4,
  backgroundColor: 'red'
},
player1: {
  top: 600,
  borderBottomColor: 'blue',
  left: 20,
},
});
