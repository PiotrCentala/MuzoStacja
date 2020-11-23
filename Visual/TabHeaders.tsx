import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform, StyleSheet, Text, View } from 'react-native'
type NavButtonProp = {
    title: string,
    icon: string,
    color: string,
}

export const TabHeader = (props: NavButtonProp) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon
                name={props.icon}
                color={props.color}
                size={22}
            />
            <Text style={{ color: props.color, fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto', }} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    roundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#e65100',
    },
})