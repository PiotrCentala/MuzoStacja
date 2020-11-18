import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import EmailForm from '../forms/EmailForm'
import Moment from 'moment'
import RootStackParamList from './RootStackParamList'



type ModalNavigationProp = StackNavigationProp<RootStackParamList, "DetailsModal">
type Props = {
    navigation: ModalNavigationProp,
}

const DetailsModalScreen = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    )
}
export default DetailsModalScreen;