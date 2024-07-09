
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { globalColor } from './constants/ColorsConstants';

import TabNavigatorBar from './components/TabNavigatorBar';


export default function App() {
  return (
      <NavigationContainer>
        <TabNavigatorBar />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.colorDarkGray
  },
  itemStyle: {
    flex:1,
  },
  textTitleItem: {
    fontSize: 18,
    padding: 10
  },
  image: {
    minWidth:500,
    height:200
  }
})
