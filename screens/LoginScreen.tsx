import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import EmailForm from '../forms/EmailForm'

import { Login } from '../Api/authentication'
type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">
type Props = {
    navigation: LoginNavigationProp,
}

const LoginScreen = ({ navigation }: Props) => {
    const [errorMessage, seterrorMessage] = useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", }}>
            <EmailForm
                buttonText="Log in"
                onSubmit={Login}
                onAuthentication={() => navigation.navigate('Home')}
            />
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
        </View>
    )
}
export default LoginScreen;