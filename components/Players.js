import React, { Component } from 'react';
import { 
  Animated, 
  StyleSheet, 
  View,
  Dimensions,
 } from 'react-native';
 import ReactDOM from 'react-dom'

import {
  PanGestureHandler,
  ScrollView,
  State,
  FlatList,
} from 'react-native-gesture-handler';

let Window = Dimensions.get('window');
export class Players extends Component {
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { x: 0, y: 0 };
    this._pos = { x: 0, y: 0}
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._translateX,
          },
        },
      ],
      {
        listener: event => {
          this.state.playerX = event.nativeEvent.absoluteX
        },
      },
      
      //this.state.playerX = event.nativeEvent.absoluteX
    )
      this.state = {
        currentElements: [
          {id:0, visible:true},
          {id:1, visible:true}
        ],
        topPosition: new Animated.Value(Window.height - 125),
        left: 45, 
        playerX: 45,
      }
  


  }

  tir(){
    if(this.props.isPlayer1){
      this.state.topPosition.setValue(Window.height - 125) 
      var endAnim = 0
    }
    else{
      this.state.topPosition.setValue(50) 
      var endAnim = Window.height
    }
      Animated.sequence([
        Animated.timing(this.state.topPosition, {
            toValue: endAnim,
            duration: 1500,
          })
        ])
        .start((e) => {
          this.setState({
            left: this.state.playerX
          })
          if(this.state.playerX > 100 
            && this.state.playerX < 150){
           // && this.state.elements[0].visible){
            this.tirEnnemy()
            this.state.currentElements[0].visible = false
            setTimeout(() => {
              this.state.currentElements[0].visible = true
            }, 4000)
              this.setState({
                scoreJ1: global.scoreJ1 +=1
              })
     
          }
          else if(this.state.playerX > 200 
            && this.state.playerX < 250){
            //&& this.state.elements[1].visible){
            this.tirEnnemy()
            this.state.currentElements[1].visible = false
            setTimeout(() => {
              this.state.currentElements[1].visible = true
            }, 4000)
        
              this.setState({
                scoreJ1: global.scoreJ1 +=1
              })
         
         
     
          }
          else{
            this.tir()
          }
        }) 
      }

      tirEnnemy(){
          this.state.topPosition.setValue(Window.height - 125)
          Animated.sequence([
            Animated.timing(this.state.topPosition, {
                toValue: Window.height/2,
                duration: 750,
              })
            ])
            .start((e) => {
              this.setState({
                left: this.state.playerX,
              })
              if(e.finished){
                this.setState({
                  elements: this.state.currentElements
                })
                this.tir()
              }
            }) 
          }

  componentDidMount(){
      this.tir()
  }

  _onHandlerStateChange = event => {
    //console.log(event)
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.x += event.nativeEvent.translationX;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  };


  renderItem({ item, index }) { 
    if(item.visible){
      return (
        <View style={[styles.diamond, {backgroundColor: "black"}]} />
      )
    }
    else{
      return (
      <View style={[styles.diamond, {backgroundColor: "white"}]} />
      )
    }
  }
  render() {
    //console.log(this.props.elements)
    this.props.elements =  [
      {id:0, visible:true},
    ]
    /*if(this.props.isPlayer1){
    setTimeout(() => {
      this.props.navigation.navigate('Result')
    }, 10000)
  }*/
    return (
      
      <View>
           <View>
        <Animated.View
          style={[(this.props.isPlayer1) ? styles.tirPlayer1 : styles.tirPlayer2,
          { top: this.state.topPosition, left: this.state.left }]}>
        </Animated.View>
        </View>
      <PanGestureHandler  
        {...this.props}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View
          style={[
            styles.box,
            (this.props.isPlayer1) ?
            {
              transform: [
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            } :
            {
              transform: [
                
                { translateX: this._translateX },
                { translateY: this._translateY },
              ],
            } ,
            this.props.boxStyle,
          ]}
        />
      </PanGestureHandler>
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
  triangleRotate: {
    transform: [
      {rotate: '180deg'}
    ]
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
enemy1:{
  left: 100
},
enemy2:{
  left: 200
}
});
