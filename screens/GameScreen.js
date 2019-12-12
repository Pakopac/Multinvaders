import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  AsyncStorage,
  BackHandler
} from 'react-native';
console.disableYellowBox = true
import { Player1 } from '../components/Player1'
import { Player2 } from '../components/Player2'
import { Enemy } from '../components/Enemy'
import { TirPlayer1 } from '../components/TirPlayer1'
import { Game } from '../components/Game'
import { StackActions, NavigationActions } from 'react-navigation';

let Window = Dimensions.get('window');
export default class GameScreen extends Component {
    constructor(props) {
      super(props);
      this.state= {
        elements: [
            {id:0, visible:true},
            {id:1, visible:true}
          ],
          scoreJ1:0,
          scoreJ2:0,
          playerXJ1: 45,
          playerXJ2: Window.width - 45,
          isJ1Alive: true,
          isJ2Alive: true
    }
    }
  
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

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
        this.props.navigation.goback()
        return true;
      

    });
  }
  removeItem = (index, status) => {
    if(index == 0){
      this.setState({
        elements:[
          {id:0, visible:status},
          {id:1, visible:this.state.elements[1].visible}
        ]
      })
      setTimeout(() => {
        this.setState({
          elements:[
            {id:0, visible:true},
            {id:1, visible:this.state.elements[1].visible}
          ]
        })
      }, 4000)
  }
  else{
    this.setState({
      elements:[
        {id:0, visible:this.state.elements[0].visible},
        {id:1, visible:status}
      ]
    })
    setTimeout(() => {
      this.setState({
        elements:[
          {id:0, visible:this.state.elements[0].visible},
          {id:1, visible:true}
        ]
      })
    }, 4000)
  }
 }

  render(){
    
    var player1Component = this.state.isJ1Alive ? <Player1 boxStyle={styles.player1} isPlayer1={true} elements={this.state.elements} removeItem={this.removeItem} 
    scoreJ1={this.state.scoreJ1} onRef={ref => (this.parentReference = ref)} parentReference = {this.scoreJ1Method.bind(this)}
    setPlayerXJ1= {this.playerXJ1Method.bind(this)} playerX={this.state.playerXJ1} 
    playerXJ2={this.state.playerXJ2} J2Alive = {this.J2Alive.bind(this)}></Player1> : null

    var player2Component = this.state.isJ2Alive ? <Player2 boxStyle={[styles.player2, this.state.isJ2Alive ? styles.red : styles.white]} elements={this.state.elements} removeItem={this.removeItem} scoreJ2={this.state.scoreJ2}
    onRef={ref => (this.setPlayerXJ2 = ref)} parentReference = {this.scoreJ2Method.bind(this)}
    setPlayerXJ2= {this.playerXJ2Method.bind(this)} playerX={this.state.playerXJ2} isAlive={this.state.isJ2Alive}
    playerXJ1={this.state.playerXJ1} J1Alive = {this.J1Alive.bind(this)}> </Player2>: null;

    setTimeout(() => {
      //this.props.navigation.navigate('Result',{scoreJ1:this.state.scoreJ1,scoreJ2:this.state.scoreJ2})
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Result',  params: { scoreJ1: this.state.scoreJ1,scoreJ2:this.state.scoreJ2 } })],
      });
      this.props.navigation.dispatch(resetAction)
    }, 20000)


    if(this.state.isJ1Alive === false){
      setTimeout(() => {
        this.setState({
          playerXJ1: 45,
          isJ1Alive: true
        })
      }, 2000)
    }

    if(this.state.isJ2Alive === false){
      setTimeout(() => {
        this.setState({
          playerXJ2: Window.width - 45,
          isJ2Alive: true
        })
      }, 2000)
    }

  return (
    <View style={styles.container}>
    <Text style={styles.scoreJ1}>{this.state.scoreJ1}</Text>
    <Text style={styles.scoreJ2}>{this.state.scoreJ2}</Text>
          <FlatList
                horizontal={true}
                renderItem={this.renderItem}
                data={this.state.elements}
                style={styles.listEnnemies} />

        {player1Component}
        {player2Component}

    </View>
  );
  }
  scoreJ1Method(data) {
    this.setState({
      scoreJ1: data
    })
  }
  scoreJ2Method(data){
    this.setState({
      scoreJ2: data
    })
  }

  playerXJ1Method(data){
    this.setState({
      playerXJ1: data
    })
  }

  playerXJ2Method(data){
    this.setState({
      playerXJ2: data
    })
  }

  J1Alive(data){
    if(this.state.isJ1Alive === true){
      this.setState({
        isJ1Alive: data
      })
    }
  }

  J2Alive(data){
    if(this.state.isJ2Alive === true){
      this.setState({
        isJ2Alive: data
      })
    }
  }
}

GameScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  player1: {
    top: 650,
    borderBottomColor: 'blue',
    left: 20,
  },
  player2: {
    top: 30,
    right: 20,
  },
  enemy1: {
    left: 100,
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
scoreJ1:{
  position: 'absolute',
  top: 50,
  left: 30,
  fontSize: 20
},
scoreJ2:{
  position: 'absolute',
  bottom: 50,
  right: 30,
  fontSize: 20,
  transform: [{ rotate: "180deg" }]
},
red:{
  borderTopColor: 'red'
},
white:{
  borderTopColor: 'white'
}

});
