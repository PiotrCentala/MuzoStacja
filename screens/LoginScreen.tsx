import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import EmailForm from '../forms/EmailForm'
import Moment from 'moment'


import { Login } from '../Api/authentication'
type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">
type Props = {
    navigation: LoginNavigationProp,
}

const LoginScreen = ({ navigation }: Props) => {
    const [errorMessage, seterrorMessage] = useState('');

    return (

        <EmailForm
            buttonText="Zaloguj"
            onSubmit={Login}
            onAuthentication={() => navigation.navigate('Home', { date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 })}
        />
    )
}
export default LoginScreen;