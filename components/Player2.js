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
  FlatList,
} from 'react-native-gesture-handler';

let Window = Dimensions.get('window');
export class Player2 extends Component {
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
      {
        listener: event => {
          this.state.playerX = event.nativeEvent.absoluteX
        },
      },

    )
      this.state = {
        currentElements: [
          {id:0, visible:true},
          {id:1, visible:true}
        ],
        EnnemyChange: {
          id:0,
          visible:true
        },
        topPosition: new Animated.Value(50),
        left: Window.width - 45, 
        playerX: Window.width - 45,
        scoreJ2: 0,
      }

  }

  tir(){
    this.state.topPosition.setValue(50) 
      Animated.sequence([
        Animated.timing(this.state.topPosition, {
            toValue: Window.height,
            duration: 1500,
          })
        ])
        .start((e) => {
          this.setState({
            left: this.state.playerX
          })
          if(this.state.playerX > 100 
            && this.state.playerX < 150){
            //&& this.state.elements[0].visible){
            this.tirEnnemy()
            this.setState({
              EnnemyChange: {id:0,visible:false}
            })
     
          }
          else if(this.state.playerX > 200 
            && this.state.playerX < 250){
            //&& this.state.elements[1].visible){
            this.tirEnnemy()
            this.setState({
              EnnemyChange: {id:1,visible:false},
            })
     
          }
          else{
            this.tir()
          }
        }) 
      }

      tirEnnemy(){

        this.state.topPosition.setValue(50)
          
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
                  scoreJ2: this.props.scoreJ2 +1
                })
                this.props.parentReference(this.state.scoreJ2)  
                this.props.removeItem(this.state.EnnemyChange.id,this.state.EnnemyChange.visible)
                this.tir()
              }
            }) 
          }

  componentDidMount(){
      this.tir()
  }

  _onGestureEvent = event => {
  
    this.setState({
      playerX: event.nativeEvent.absoluteX,
      });
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
 /* renderItem({ item, index }) { 
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
  }*/
  render() {
    /*setTimeout(() => {
      this.props.navigation.navigate('Result', {
        scoreJ2: this.state.scoreJ2,
    })
    }, 20000)*/
    return (
      
      <View>
           <View>
        <Animated.View
          style={[styles.tirPlayer2,
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
    borderTopWidth: 50,
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
