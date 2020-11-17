import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native'
import { weekData, giveRecordsForDay } from '../Logic/weekData'
import { Card } from './Card'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from '../screens/RootStackParamList';
import Moment from 'moment'
import { NavButton } from '../Visual/NavButton'


type DayRecordsParams = {
    records?: weekData[],
    date: string,
    navigation: HomeNavigationProp,
    currentDisplayedWeek: number,
}
type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">
export const DayRecords = (params: DayRecordsParams) => {
    const records = giveRecordsForDay(params.records as weekData[], params.date)

    const GoForwardBackward = (dif: number) => {
        const a = Moment(params.date, "YYYY.MM.DD").add(dif, 'd').week() - Moment(params.date, "YYYY.MM.DD").week();
        if (a) {
            params.navigation.replace("Home", {
                date: Moment(params.date, "YYYY.MM.DD").add(dif, 'd').format("YYYY.MM.DD"),
                loadRecords: true,
                records: undefined,
                displayedWeek: params.currentDisplayedWeek + a,
            })
        }
        else {
            params.navigation.replace("Home", {
                date: Moment(params.date, "YYYY.MM.DD").add(dif, 'd').format("YYYY.MM.DD"),
                loadRecords: false,
                records: params.records,
                displayedWeek: params.currentDisplayedWeek,
            })
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <ScrollView style={styles.container} >
                <View style={{ marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                    {records?.map((record) =>
                        (
                            <Card record={record} key={record.id} />
                        ))}
                </View>
            </ScrollView>


            <View style={styles.buttons}>
                <NavButton icon="arrow-right-bold" logic={GoForwardBackward} direction={1} />
                <Image style={{ width: '50%', resizeMode: 'contain' }} source={require('../icons/muzoStacja.png')} />
                <NavButton icon="arrow-left-bold" logic={GoForwardBackward} direction={-1} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    date: {
        alignContent: "center",
        //alignItems: "center",
        //justifyContent: "center"
    },
    textdate: {
        fontFamily: "Helvetica",
        fontSize: 25,
        fontStyle: "italic",
        justifyContent: "center",
    },
    buttons: {
        flexDirection: 'row-reverse',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 15,
    }
});