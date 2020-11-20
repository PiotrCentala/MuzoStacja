import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RootStackParamList from './screens/RootStackParamList';
import Moment from 'moment'
import MainStackScreen from './screens/MainStack'
import DetailsModalScreen from './screens/DetailsModalScreen';
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
      <RootStack.Navigator mode="modal">
        <RootStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="DetailsModal" component={DetailsModalScreen} options={{
          headerStyle: {
            backgroundColor: '#e65100',
            height: 100,
          },
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )

}

export default ReactNavigation;


