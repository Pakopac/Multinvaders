import React, { Component } from 'react';
import { 
  Text,
  View,
  Dimensions,
  StyleSheet,
  Button
 } from 'react-native';


let Window = Dimensions.get('window');
export class Result extends Component {
    constructor(props){
        super(props)
        this.scoreJ1 = this.props.score.scoreJ1
        this.scoreJ2 = this.props.score.scoreJ2
    }
    winner(){
        if(this.scoreJ1 > this.scoreJ2){
            return("Le joueur 1 gagne !!")
        }
        else if(this.scoreJ1 <this.scoreJ2){
            return("Le joueur 2 gagne !!")
        }
        else{
            return("Egalité !!")
        }
    }
    render(){
        console.log(this.props.score)
        return(
            <View>
                <Text style={styles.scoreJ1}>Score du joueur 1: {this.scoreJ1}</Text>
                <Text style={styles.scoreJ2}>Score du joueur 2: {this.scoreJ2}</Text>
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