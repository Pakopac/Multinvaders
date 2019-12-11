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
  Picker
} from 'react-native';
import { Audio } from 'expo-av';


console.disableYellowBox = true
export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.audioPlayer = new Audio.Sound();
    this.state= {
      music: "original",
  }
  }

  async sound(){
    try {
      console.log('ok')
      await this.audioPlayer.unloadAsync()
      if(this.state.music === "original"){
    
        await this.audioPlayer.loadAsync(require(".././assets/sound/space_invader.mp3"));
        await this.audioPlayer.setVolumeAsync(0.6)
      }
      else if(this.state.music === "remix"){
        await this.audioPlayer.loadAsync(require(".././assets/sound/Space_invaders_remix.mp3"));
        await this.audioPlayer.setVolumeAsync(0.15)
      }
      else if(this.state.music === "asteroid"){
        await this.audioPlayer.loadAsync(require(".././assets/sound/Space_Invaders_PS1.mp3"));
        await this.audioPlayer.setVolumeAsync(0.45)
      }
      else if(this.state.music === "teminite_mdk"){
        await this.audioPlayer.loadAsync(require(".././assets/sound/Teminite_MDK.mp3"));
        await this.audioPlayer.setVolumeAsync(0.2)
      }

      await this.audioPlayer.playAsync()
    } catch (error) {
    }
  }

  render(){
    console.log(this.state.music)
    this.sound()
    console.log(window)
  return (
    <View style={styles.container} scoreJ1={this.props.scoreJ1} scoreJ2={this.props.scoreJ2}>
        <Text style={styles.songTitle}>Choose a song</Text>
    <Picker
      selectedValue={this.state.music}
      style={{height: 50, width: 200, marginBottom: 50}}
      onValueChange={(itemValue, itemIndex) =>
        this.setState({music: itemValue})
      }>
    <Picker.Item label="Original theme" value="original" />
    <Picker.Item label="Remix" value="remix" />
    <Picker.Item label="Asteroid - PS1" value="asteroid" />
    <Picker.Item label="Teminite & MDK" value="teminite_mdk" />
    </Picker>
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
  },
  songTitle:{
    marginTop: -100,
    fontSize: 20,
    marginLeft: 25,
  }
})