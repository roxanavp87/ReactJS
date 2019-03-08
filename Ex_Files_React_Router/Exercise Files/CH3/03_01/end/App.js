import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import MyCard from './MyCard';

// You can safely remove this line if React Native updated their React
// lifecycle methods github issue: https://github.com/facebook/react-native/issues/18175
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView>
          <MyCard cardId='Card 1'/>
          <MyCard cardId='Card 2'/>
          <MyCard cardId='Card 3'/>
        </ScrollView>
      </View>
    );
  }
}
