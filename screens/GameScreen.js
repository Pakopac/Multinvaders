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
export default class GameScreen extends Component {
    constructor(props) {
      super(props);
      this.state= {
        elements: [
            {id:0, visible:true},
            {id:1, visible:true}
          ],
          scoreJ1:0,
          scoreJ2:0
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
   

    setTimeout(() => {
      //this.props.navigation.navigate('Result',{scoreJ1:this.state.scoreJ1,scoreJ2:this.state.scoreJ2})
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Result',  params: { scoreJ1: this.state.scoreJ1,scoreJ2:this.state.scoreJ2 } })],
      });
      this.props.navigation.dispatch(resetAction)
    }, 10000)

  return (
    <View style={styles.container}>
    <Text style={styles.scoreJ1}>{this.state.scoreJ1}</Text>
    <Text style={styles.scoreJ2}>{this.state.scoreJ2}</Text>
          <FlatList
                horizontal={true}
                renderItem={this.renderItem}
                data={this.state.elements}
                style={styles.listEnnemies} />
        <Player1 boxStyle={styles.player1} isPlayer1={true} elements={this.state.elements} removeItem={this.removeItem} 
        scoreJ1={this.state.scoreJ1} onRef={ref => (this.parentReference = ref)} parentReference = {this.scoreJ1Method.bind(this)}></Player1>
        <Player2 boxStyle={styles.player2} elements={this.state.elements} removeItem={this.removeItem} scoreJ2={this.state.scoreJ2}
          onRef={ref => (this.parentReference = ref)}
          parentReference = {this.scoreJ2Method.bind(this)}></Player2>
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
}

GameScreen.navigationOptions = {
  header: null,
};
let Window = Dimensions.get('window');
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
    borderBottomColor: 'red',
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
}
});
