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
                <View style={[styles.reservation, { flexGrow: props.record.noofPayed, backgroundColor: "#37474f" }]}>
                    <Text style={styles.text}>{props.record.noofPayed}</Text>
                    {props.record.noofPayed ? <Text style={styles.signature}>J</Text> : null}
                </View>
                <View style={[styles.reservation, { flexGrow: props.record.noofPass, backgroundColor: "#62727b" }]}>
                    <Text style={styles.text}>{props.record.noofPass}</Text>
                    {props.record.noofPass ? <Text style={styles.signature}>K</Text> : null}
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
            // shadowRadius: 2.0,
            // shadowOpacity: 0.2,
            width: '100%',
            marginBottom: 15,
        },
        text: {
            //fontFamily: "Helvetica",
            fontSize: 20,
            color: '#F5F5F6',
            fontFamily: 'Helvetica-Bold',
        },
        signature: {
            position: 'absolute',
            right: 5,
            bottom: 5,
            fontFamily: "Helvetica",
            fontStyle: 'italic',
            color: '#F5F5F6',
            fontSize: 8,
        }
    }
)