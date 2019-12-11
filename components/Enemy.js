import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Dimensions,
  FlatList,
 } from 'react-native';

let Window = Dimensions.get('window');
export class Enemy extends Component {
    constructor(props){
        super(props)
        this.state= {
            elements: [
                {id:0, visible:true},
                {id:1, visible:true}
              ]
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

    render(){
        return(

            <FlatList
                horizontal={true}
                renderItem={this.renderItem}
                data={this.state.elements}
                style={styles.listEnnemies} />
     
        )
    }
}
const styles = StyleSheet.create({
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
    player1: {
        top: 600,
        borderBottomColor: 'blue',
        left: 20,
      },
})