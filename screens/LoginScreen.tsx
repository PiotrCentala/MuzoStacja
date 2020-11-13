import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import { setToken } from '../Api/token'
import EmailForm from '../forms/EmailForm'

import { Login } from '../Api/mock/Login'
type LoginNavigationProp = StackNavigationProp<RootStackParamList, "Login">
type Props = {
    navigation: LoginNavigationProp,
}

const LoginScreen = ({ navigation }: Props) => {
    const [errorMessage, seterrorMessage] = useState('');
    const loginUser = () => {
        Login("piotrcentala@gmail.com", 'abcd')
            .then(async (res: any) => {
                await setToken(res.auth_token);
                navigation.navigate('Home');
            })
            .catch((err) => seterrorMessage(err.message))
    };

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