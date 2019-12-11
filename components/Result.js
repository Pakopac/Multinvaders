import React, { Component } from 'react';
import { 
  Text,
  View,
  Dimensions,
  StyleSheet
 } from 'react-native';


let Window = Dimensions.get('window');
export class Result extends Component {
    constructor(props){
        super(props)
        this.scoreJ1 = this.props.score.scoreJ1
        this.scoreJ2 = this.props.score.scoreJ2
        this.state = {
            winner : ""
        }
    }
    checkWinner(){
        console.log(this.scoreJ1)
        if(this.scoreJ1 > this.scoreJ2 && this.state.winner === ""){
            this.setState({
                winner: "Le joueur 1 a gagné !!"
            })
        }
        else if(this.scoreJ1 < this.scoreJ2 && this.state.winner === ""){
            this.setState({
                winner: "Le joueur 2 a gagné !!"
            })
        }
        else if(this.scoreJ1 === this.scoreJ2 && this.state.winner === ""){
            this.setState({
                winner: "Egalité !!"
            })
        }
    }
    render(){
        console.log(this.props.score)
        this.checkWinner()
        return(
            <View>
                <Text style={styles.winner}>{this.state.winner}</Text>
                <Text style={styles.scoreJ1}>Score du joueur 1: {this.scoreJ1}</Text>
                <Text style={styles.scoreJ2}>Score du joueur 2: {this.scoreJ2}</Text>

                <Text style={styles.scoreJ1ForJ2}>Score du joueur 2: {this.scoreJ2}</Text>
                <Text style={styles.scoreJ1ForJ2}>Score du joueur 1: {this.scoreJ1}</Text>
                <Text style={styles.winnerForJ2}>{this.state.winner}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    winner: {
        marginTop: 100,
        textAlign:'center',
        fontSize: 20
      },
    scoreJ1: {
      marginTop: 20,
      textAlign:'center',
    },
    scoreJ2: {
      marginTop: 20,
      marginBottom: 350,
      textAlign:'center',
    },

    scoreJ1ForJ2: {
      marginBottom: 20,
      textAlign:'center',
      transform: [{ rotate: "180deg" }]
    },
    scoreJ2ForJ2: {
        marginTop: 300,
        textAlign:'center',
      transform: [{ rotate: "180deg" }]
    },
    winnerForJ2: {
        marginBottom: 20,
        textAlign:'center',
        fontSize: 20,
        transform: [{ rotate: "180deg" }]
      },
})