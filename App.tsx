import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RootStackParamList from './screens/RootStackParamList';
import Moment from 'moment'

const RootStack = createStackNavigator<RootStackParamList>();

const ReactNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} initialParams={{ date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 }} />
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )

}

export default ReactNavigation;


