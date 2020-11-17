import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TextInput, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Button } from 'react-native-elements'
import { setToken } from '../Api/token';

type EmailProps =
    {
        buttonText: string,
        onSubmit: (email: string, password: string, SouldSucceed?: boolean) => Promise<unknown>,
        onAuthentication: () => void,

    }

const EmailForm = (a: EmailProps) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const submit = () => {
        a.onSubmit(email, password)
            .then(async (res: any) => {
                await setToken(res.token);
                console.log(res.name);
                a.onAuthentication();
            })
            .catch((res: any) => {
                if (res && res.error) {
                    setErrorMessage(res.error)
                }
                setErrorMessage('Something wrong!')
            });
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={styles.card}>


                        <TextInput
                            style={styles.input}
                            placeholder='Wprowadź adres Email'
                            onChangeText={(text) => onChangeEmail(text)}
                            value={email}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => onChangePassword(text)}
                            placeholder="Hasło"
                            value={password}
                            secureTextEntry
                        />
                        <Button title={a.buttonText} onPress={submit} buttonStyle={{ backgroundColor: '#e65100', width: 110, marginTop: 10, alignSelf: 'center' }} />
                        {errorMessage ? <Text>{errorMessage}</Text> : null}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 10,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 3,
        padding: 10,
        shadowColor: 'black',
        shadowRadius: 33.0,
        shadowOpacity: 0.2,
    },

});

export default EmailForm;