import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabStackParamsList from './TabStackParamsList'
import MainStackScreen from './MainStack'
import StatsScreen from './StatsScreen'
import HomeScreen from './HomeScreen';
import Moment from 'moment'

const Tab = createBottomTabNavigator<TabStackParamsList>();

const TabStackScreen = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='Main' component={MainStackScreen} />
            <Tab.Screen name='Stats' component={StatsScreen} />
        </Tab.Navigator>
    )

}

export default TabStackScreen;


