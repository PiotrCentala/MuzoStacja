import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackParamList from './screens/RootStackParamList';
import Moment from 'moment'
import MainStackScreen from './screens/MainStack'
import DetailsModalScreen from './screens/DetailsModalScreen';
import { isIPhoneXSize } from './Logic/IphoneVersion'
import TabStackScreen from './screens/TabStack';
import MainStackParamList from './screens/MainStackParamList';
import LoginScreen from './screens/LoginScreen';
import ModalStackScreen from './screens/ModalStack';
const RootStack = createStackNavigator<MainStackParamList>();
const ReactNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Modal'>
        <RootStack.Screen name="Login" component={LoginScreen} options={{
          headerStyle: {
            backgroundColor: '#e65100'
          },
          headerTitleStyle: {
            color: '#ffffff'
          },
        }} />
        <RootStack.Screen name="Modal" component={ModalStackScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )

}

export default ReactNavigation;


