import React, { Component } from 'react';
import { 
  Text,
  View,
  Dimensions,
  StyleSheet
 } from 'react-native';


let Window = Dimensions.get('window');
export class Result extends Component {
    winner(){
        if(scoreJ1 > scoreJ2){
            return("Le joueur 1 gagne !!")
        }
        else if(scoreJ1 <scoreJ2){
            return("Le joueur 2 gagne !!")
        }
        else{
            return("Egalité !!")
        }
    }
    render(){
        return(
            <View>
                <Text style={styles.scoreJ1}>Score du joueur 1: {scoreJ1}</Text>
                <Text style={styles.scoreJ2}>Score du joueur 2: {scoreJ2}</Text>
                <Text style={styles.winner}>{this.winner}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scoreJ1: {
      marginTop: 100,
      marginLeft: Window.width/2 - 60
    },
    scoreJ2: {
      marginTop: 100,
      marginLeft: Window.width/2 - 60
    },
    winner: {
      marginTop: 100,
      marginLeft: Window.width/2 - 60
    }
})