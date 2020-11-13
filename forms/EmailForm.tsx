import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
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
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangePassword(text)}
                value={password}
                secureTextEntry
            />
            <Button title={a.buttonText} onPress={submit} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
    },
});

export default EmailForm;