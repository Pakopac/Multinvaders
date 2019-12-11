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
import Matter from 'matter-js'
console.disableYellowBox = true

const Physics = (entities, { touches, time }) => {
    let engine = entities.physics.engine;
    let bird = entities.bird.body;

    Matter.Engine.update(engine, time.delta);

    return entities;
};


export default class TestScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
        running: true
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
}

setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    let bird = Matter.Bodies.rectangle( 100, 100 , 50, 50);

    Matter.World.add(world, [bird]);


    return {
        physics: { engine: engine, world: world },
        bird: { body: bird, size: [50, 50], color: 'red', renderer: Bird},
    }
}


render() {
    return (
        <View style={styles.container}>
            <GameEngine
                ref={(ref) => { this.gameEngine = ref; }}
                style={styles.gameContainer}
                running={this.state.running}
                entities={this.entities}>
                <StatusBar hidden={true} />
            </GameEngine>
        </View>
    );
}
}