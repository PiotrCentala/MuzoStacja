import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, TouchableOpacity } from 'react-native'
type NavButtonProp = {
    logic: (input: number) => void,
    icon: string,
    direction: number,
}

export const NavButton = (props: NavButtonProp) => {
    return (
        <TouchableOpacity onPress={() => props.logic(props.direction)} style={styles.roundButton} >
            <Icon
                name={props.icon}
                color="white"
                size={30}
            />
        </TouchableOpacity>
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