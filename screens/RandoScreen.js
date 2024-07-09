import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';

import Rando from '../components/RandoComponent';
import Walk from '../components/WalkDetailsComponent';
import { globalColor } from '../constants/ColorsConstants';

import Icon from 'react-native-vector-icons/Ionicons';

const RandoScreen = () => {

    const Stack = createNativeStackNavigator();
  
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="RandoComponent" 
            component={Rando}
            options={{
              title: 'Randos',
              header: (props) => {
                //console.log()
                return (
                  <View style={{alignItems:'center',backgroundColor:globalColor.colorPurple200, padding:10}}>
                    <Text style={{fontSize:20, color:globalColor.colorWhite}}>{props.options.title}</Text>
                  </View>
                )
              },
              headerStyle: {
                backgroundColor: globalColor.colorPurple200,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen 
            name="Details"
            component={Walk}
            options={{
              title: 'Rando détails',
              header: (props) => {
                //console.log()
                return (
                  <View style={{flexDirection:'row', backgroundColor:globalColor.colorPurple200}}>
                    <HeaderBackButton
                      label='Randos'
                      tintColor='white'
                      style={styles.custom}
                      onPress={() => {
                        props.navigation.goBack()
                      }}
                    />
                    <Text 
                      style={{fontSize:20 ,color:globalColor.colorWhite, padding:15, fontWeight:'bold'}}>
                      {props.options.title}
                    </Text>
                  </View>
                )
              },
              headerStyle: {
                backgroundColor: globalColor.colorPurple200,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }} />
        </Stack.Navigator>
    );
}

export default RandoScreen

const styles = StyleSheet.create({})