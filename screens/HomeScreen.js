import * as WebBrowser from 'expo-web-browser';
import React, { Component }  from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native';

console.disableYellowBox = true
export default class HomeScreen extends Component {
  render(){
    console.log(this.props)
  return (
    <View style={styles.container} scoreJ1={this.props.scoreJ1} scoreJ2={this.props.scoreJ2}>
    <Button 
      style={styles.button}
      title="Start the Game !"
      onPress={() =>  this.props.navigation.navigate('Game')}>
    </Button>
    </View>
  );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

let Window = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    marginTop: Window.height/2,
    marginLeft: Window.width/2 - 100,
    width: 200
  },
  button:{
    width: 100
  }
})