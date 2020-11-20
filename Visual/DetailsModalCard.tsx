import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { weekData } from '../Logic/weekData'
import DetailsModalScreen from '../screens/DetailsModalScreen'
import { Record } from '../Api/GetDetails'
type DetailsModalParams =
    {
        record: Record,
    }
export const DetailsModalCard = (props: DetailsModalParams) => {

    return (
        <View style={styles.outside}>
            <View style={styles.hour}>
                <Text style={[styles.text, { color: '#F5F5F6', fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto' }]}>{props.record.visittypeName.}:00</Text>
            </View>
            {props.record.noofPayed ?
                <View style={[styles.reservation, { flexGrow: props.record.noofPayed, backgroundColor: "#37474f" }]}>
                    <Text style={styles.text}>{props.record.noofPayed}</Text>
                    <View style={[styles.circle, { backgroundColor: '#4caf50' }]}>
                        <Text style={styles.signature}>J</Text>
                    </View>
                </View> : null}
            {props.record.noofPass ?
                <View style={[styles.reservation, { flexGrow: props.record.noofPass, backgroundColor: "#62727b" }]}>

                    <Text style={styles.text}>{props.record.noofPass}</Text>
                    <View style={styles.circle}>
                        <Text style={styles.signature}>K</Text>
                    </View>
                </View>
                : null}
        </View>
    )
}
const Radius: number = 10;
const styles = StyleSheet.create(
    {
        hour: {
            width: 60,
            backgroundColor: "#102027",
            justifyContent: "center",
            alignItems: "center",


        },
        reservation: {
            alignItems: "center",
            justifyContent: 'center',
            flexDirection: 'row',
        },
        outside: {
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,
            marginBottom: 15,
            height: 40,
            overflow: "hidden",
        },
        shadow: {
            shadowColor: 'black',
            // shadowRadius: 2.0,
            // shadowOpacity: 0.2,
            width: '100%',

        },
        text: {
            fontSize: 20,
            color: '#F5F5F6',
            fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        },
        signature: {

            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            fontStyle: 'italic',
            color: '#F5F5F6',
            fontSize: 8,
        },
        circle: {
            backgroundColor: '#3f51b5',
            width: 12,
            height: 12,
            borderRadius: 12,
            position: 'absolute',
            right: 3,
            bottom: 3,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
)