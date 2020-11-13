import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RootStackParamList from './screens/RootStackParamList';


const RootStack = createStackNavigator<RootStackParamList>();

const ReactNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )

}

export default ReactNavigation;


