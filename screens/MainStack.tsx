import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import MainStackParamList from './MainStackParamList'
import Moment from 'moment'

const MainStack = createStackNavigator<MainStackParamList>();
const today = Moment().day();
const MainStackScreen = () => {
    Moment.updateLocale('en', {
        week: {
            dow: today,
        },
        weekdays: 'Niedzielra_Poniedziałek_Wtorek_Środa_Czwartek_Piątunio_Sobota'.split('_'),
    })
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={HomeScreen} initialParams={{ date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 }} options={{
                headerStyle: {
                    backgroundColor: '#e65100'
                },
                animationEnabled: false,
            }} />
            <MainStack.Screen name="Login" component={LoginScreen} options={{
                headerStyle: {
                    backgroundColor: '#e65100'
                },
                headerTitleStyle: {
                    color: '#ffffff'
                },
            }} />
        </MainStack.Navigator>
    )

}

export default MainStackScreen;


