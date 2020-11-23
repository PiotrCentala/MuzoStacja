import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackParamList from './RootStackParamList';
import Moment from 'moment'
import DetailsModalScreen from './DetailsModalScreen';
import { isIPhoneXSize } from '../Logic/IphoneVersion'
import TabStackScreen from './TabStack';
import { Modal } from 'react-native';
const RootStack = createStackNavigator<RootStackParamList>();
const today = Moment().day();
const ModalStackScreen = () => {
    Moment.updateLocale('en', {
        week: {
            dow: today,
        },
        weekdays: 'Niedzielra_Poniedziałek_Wtorek_Środa_Czwartek_Piątunio_Sobota'.split('_'),
    })
    return (
        <RootStack.Navigator mode="modal">
            <RootStack.Screen name="Tabs" component={TabStackScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="DetailsModal" component={DetailsModalScreen} options={{
                headerStyle: {
                    backgroundColor: '#e65100',
                    height: isIPhoneXSize() ? 130 : 100,
                },
                safeAreaInsets: {
                    top: 0,
                    bottom: 0,
                }
            }} />
        </RootStack.Navigator>
    )

}

export default ModalStackScreen;


