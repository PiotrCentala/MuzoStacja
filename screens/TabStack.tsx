import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabStackParamsList from './TabStackParamsList'
import MainStackScreen from './MainStack'
import StatsScreen from './StatsScreen'
import { TabHeader } from '../Visual/TabHeaders'
import HomeScreen from './HomeScreen';
import Moment from 'moment'

const Tab = createBottomTabNavigator<TabStackParamsList>();

const TabStackScreen = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                var iconName: string = '';
                var headerText: string = '';
                if (route.name === 'Main') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                    headerText = 'Rezerwacje';
                } else if (route.name === 'Stats') {
                    iconName = focused ? 'information' : 'information-outline';
                    headerText = 'Statystyki';
                }

                // You can return any component that you like here!
                return <TabHeader color={color} icon={iconName} title={headerText} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#e65100',
                inactiveTintColor: 'gray',
                showLabel: false,
            }}
        >
            <Tab.Screen name='Main' component={MainStackScreen} />
            <Tab.Screen name='Stats' component={StatsScreen} />
        </Tab.Navigator>
    )

}

export default TabStackScreen;


