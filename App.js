/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './src/login'
import Register from './src/register'
import Menu from './src/menu'
import Setting from './src/setting'
import Home from './src/home'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const SocialVue = StackNavigator({
  
  Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        header : null,
    }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        header : null,
    }),
    },
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        header : null,
    }),
    },
    Menu: {
      screen: Menu,
      navigationOptions: ({navigation}) => ({
        header : null,
    }),
    },
    Setting: {
      screen: Setting,
      navigationOptions: ({navigation}) => ({
        header : null,
    }),
    },
 }
  );
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SocialVue/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
