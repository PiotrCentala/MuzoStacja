import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RootStackParamList from './screens/RootStackParamList';
import Moment from 'moment'

const RootStack = createStackNavigator<RootStackParamList>();
const today = Moment().day();
const ReactNavigation = () => {
  Moment.updateLocale('en', {
    week: {
      dow: today,
    },
    weekdays: 'Niedzielra_Poniedziałek_Wtorek_Środa_Czwartek_Piątunio_Sobota'.split('_'),
  })
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} initialParams={{ date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 }} options={{
          headerStyle: {
            backgroundColor: '#e65100'
          },
          animationEnabled: false,
        }} />
        <RootStack.Screen name="Login" component={LoginScreen} options={{
          headerStyle: {
            backgroundColor: '#e65100'
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )

}

export default ReactNavigation;


