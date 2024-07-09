import { View, Text, Image } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Header from './Header';

import RandoScreen from '../screens/RandoScreen';
import CascadeScreen from '../screens/CascadeScreen';
import BassinScreen from '../screens/BassinScreen';
import PlageScreen from '../screens/PlageScreen';

import Walk from './WalkDetailsComponent';

import { globalStyle } from '../styles/AppStyle'
import { globalColor } from '../constants/ColorsConstants';

const TabNavigatorBar = () => {
    
    function SettingsStackScreen() {
      return (
        <SettingsStack.Navigator>
          <SettingsStack.Screen name="Settings" component={SettingsScreen} />
          <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
      );
    }  

    const HomeStack = createNativeStackNavigator();

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: globalColor.colorPurple500,
            tabBarActiveBackgroundColor: globalColor.colorWhite,
            tabBarInactiveTintColor: globalColor.colorDarkGray,
            tabBarInactiveBackgroundColor: globalColor.colorWhite,

            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);
            
              return (
                <Header title={title} />
              );
            },

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Rando') {
                iconName = focused ? require('../assets/rando.png') : require('../assets/rando.png');
              } else if (route.name === 'Cascade') {
                iconName = focused ? require('../assets/cascade.png') : require('../assets/cascade.png');
              } else if (route.name === 'Bassin') {
                iconName = focused ? require('../assets/bassin.png') : require('../assets/bassin.png');
              } else if (route.name === 'Plage') {
                iconName = focused ? require('../assets/plage.png') : require('../assets/plage.png');
              }
    
              // You can return any component that you like here!
              return (
                <Image 
                  source={ iconName }
                  style={{ width: size, height: size, tintColor: color }}
                  />
              )
      ;
            },
          })}
        >
          <Tab.Screen name="Rando" component={RandoScreen} />
          <Tab.Screen name="Cascade" component={CascadeScreen} />
          <Tab.Screen name="Bassin" component={BassinScreen} />
          <Tab.Screen name="Plage" component={PlageScreen} />
          
        </Tab.Navigator>
      );
}

export default TabNavigatorBar