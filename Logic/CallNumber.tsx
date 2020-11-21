import { Linking, Alert, Platform } from 'react-native';

export const callNumber = (phone: string) => {
    phone = `tel:${phone}`;
    Linking.canOpenURL(phone)
        .then(supported => {
            if (!supported) {
                Alert.alert('Numer jest niedostępny');
            } else {
                return Linking.openURL(phone);
            }
        })
        .catch(err => console.log(err));
};