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

    )

    if(this.props.isPlayer1){
      this.state = {
        topPosition: Window.height - 125,
        left: 45, 
        playerX: 45,
        scoreJ1: 0,
      }
    }
    else{
      this.state = {
        topPosition: 50,
        left: Window.width - 45, 
        playerX: Window.width - 45,
        scoreJ2: 0,
      }

    }

  }

  componentDidMount(){
    var ArrEnnemies = ["ennemy1","ennemy2"]
    if(this.props.isPlayer1){
      const interval = setInterval(() => {
        this.setState({topPosition : this.state.topPosition-10});
        if(350 < this.state.topPosition
          && this.state.topPosition < 351
          && this.state.playerX > 100
          && this.state.playerX < 150
          && ArrEnnemies.includes("ennemy1")){ //position d'un ennemi
          this.setState({
            scoreJ1: this.state.scoreJ1 + 1,
            });
          console.log('j1',this.state.scoreJ1)
          this.setState({topPosition : Window.height - 125});
          
           this.setState({
            left: this.state.playerX,
            });
            
            for( var i = 0; i < ArrEnnemies.length; i++){ 
              if ( ArrEnnemies[i] === "ennemy1") {
                ArrEnnemies.splice(i, 1); 
                i--;
              }
            }
            setTimeout(function(){ ArrEnnemies.push("ennemy1"); }, 3000);
          }
          if(350 < this.state.topPosition
            && this.state.topPosition < 351
            && this.state.playerX > 200
            && this.state.playerX < 250
            && ArrEnnemies.includes("ennemy2")){ //position d'un ennemi
            this.setState({
              scoreJ1: this.state.scoreJ1 + 1,
              });
            console.log('j1',this.state.scoreJ1)
            this.setState({topPosition : Window.height - 125});
            
             this.setState({
              left: this.state.playerX,
              });
              for( var i = 0; i < ArrEnnemies.length; i++){ 
                if ( ArrEnnemies[i] === "ennemy2") {
                  ArrEnnemies.splice(i, 1); 
                  i--;
                }
              }
              setTimeout(function(){ ArrEnnemies.push("ennemy2"); }, 3000);
            }
        if(0 > this.state.topPosition){ //haut de l'écran
          this.setState({topPosition : Window.height - 125});
          this.setState({
            left: this.state.playerX,
            });
        }

      }, 0.1);
    }
    else{
      const interval = setInterval(() => {
        this.setState({topPosition : this.state.topPosition+10});
        if(302 < this.state.topPosition
          && this.state.topPosition < 351
          && this.state.playerX > 100
          && this.state.playerX < 150
          && ArrEnnemies.includes("ennemy1")){ //position d'un ennemi
          console.log(this.state.scoreJ2)
          this.setState({
            scoreJ2: this.state.scoreJ2 + 1,
            });
          console.log(' j2', this.state.scoreJ2)
          this.setState({topPosition : 50});
          
           this.setState({
            left: this.state.playerX,
            });
            
            for( var i = 0; i < ArrEnnemies.length; i++){ 
              if ( ArrEnnemies[i] === "ennemy1") {
                ArrEnnemies.splice(i, 1); 
                i--;
              }
            }
            setTimeout(function(){ ArrEnnemies.push("ennemy1"); }, 3000);
          }
          if(302 < this.state.topPosition
            && this.state.topPosition < 351
            && this.state.playerX > 200
            && this.state.playerX < 250
            && ArrEnnemies.includes("ennemy2")){ //position d'un ennemi
            this.setState({
              scoreJ2: this.state.scoreJ2 + 1,
              });
            console.log('j2', this.state.scoreJ2)
            this.setState({topPosition : 50});
            
             this.setState({
              left: this.state.playerX,
              });
              for( var i = 0; i < ArrEnnemies.length; i++){ 
                if ( ArrEnnemies[i] === "ennemy2") {
                  ArrEnnemies.splice(i, 1); 
                  i--;
                }
              }
              setTimeout(function(){ ArrEnnemies.push("ennemy2"); }, 3000);
            }
        if(Window.height < this.state.topPosition){ //bas de l'écran
          this.setState({topPosition : 50});
          this.setState({
            left: this.state.playerX,
            });
        }

      }, 0.1);
    }
    //setInterval(function(){ console.log('yes') }, 3000);
    //this.loop()
  }

  _onGestureEvent = event => {
    console.log('move')
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
  render() {
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
});
