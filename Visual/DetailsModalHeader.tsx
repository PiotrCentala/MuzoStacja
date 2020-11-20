import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Moment from 'moment'
type DetailsModalHeaderProp =
    {
        day: string,
        hour: string,
    }
export const DetailsModalHeader = (props: DetailsModalHeaderProp) => {
    const day = Moment(props.day, 'YYYY.MM.DD');

    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Text style={styles.weekday}>{day.format('dddd')}</Text>
            <Text style={styles.date}>{props.day}</Text>
            <Text style={styles.hour}>Godzina {props.hour}:00</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        weekday: {

            fontSize: 20,
            color: '#F5F5F6',
            fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        },
        date: {
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            fontStyle: 'italic',
            fontSize: 15,
            color: '#F5F5F6',
        },
        hour: {
            fontSize: 24,
            color: '#F5F5F6',
            fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
            marginTop: 5,
        }
    })