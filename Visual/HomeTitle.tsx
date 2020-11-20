import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Moment from 'moment'
type homeTitleProp =
    {
        day: string,
    }
export const HomeTitle = (props: homeTitleProp) => {
    const day = Moment(props.day, 'YYYY.MM.DD');

    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.weekday}>{day.format('dddd')}</Text>
            <Text style={styles.date}>{props.day}</Text>

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
        }
    })