import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { Record } from '../Api/weekDatabaseResponse'
import { weekData } from '../Logic/weekData'

type CardParams =
    {
        record: weekData,
    }
export const Card = (props: CardParams) => {
    return (


        <View style={styles.shadow}>


            <View style={styles.outside}>
                <View style={styles.hour}>
                    <Text style={[styles.text, { color: '#F5F5F6', fontFamily: 'Helvetica-Bold' }]}>{props.record.hour}:00</Text>
                </View>
                <View style={[styles.reservation, { flexGrow: props.record.noofPayed, backgroundColor: "#ffffff" }]}>
                    <Text style={styles.text}>{props.record.noofPayed}</Text>
                </View>
                <View style={[styles.reservation, { flexGrow: props.record.noofPass, backgroundColor: "#cfd8dc" }]}>
                    <Text style={styles.text}>{props.record.noofPass}</Text>
                </View>
            </View>
        </View>
    )
}
const Radius: number = 10;
const styles = StyleSheet.create(
    {
        hour: {
            width: 60,
            backgroundColor: "#9ea7aa",
            justifyContent: "center",
            alignItems: "center",

        },
        reservation: {
            alignItems: "center",
            justifyContent: 'center',
        },
        outside: {
            flexDirection: "row",
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,

            height: 40,
            overflow: "hidden",
        },
        shadow: {
            shadowColor: 'black',
            shadowRadius: 5.0,
            shadowOpacity: 0.4,
            width: '100%',
            marginBottom: 15,
        },
        text: {
            fontFamily: "Helvetica",
            fontSize: 20,
        }
    }
)