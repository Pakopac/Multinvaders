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
import { Result } from '../components/Result'

export default class ResultScreen extends Component {
  render(){
  return (
    <Result score={this.props.navigation.state.params}></Result>
  );
  }
}

ResultScreen.navigationOptions = {
  header: null,
};

let Window = Dimensions.get('window');
const styles = StyleSheet.create({

})