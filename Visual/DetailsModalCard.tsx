import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Record } from '../Api/GetDetails'
type DetailsModalParams =
    {
        record: Record,
    };


export const DetailsModalCard = (props: DetailsModalParams) => {

    return (
        <View style={styles.outside} >
            <View style={styles.hour}>
                <Text style={[styles.text, { color: '#F5F5F6', fontSize: 23, fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto' }]}>
                    {props.record.visittypeName.substring(props.record.visittypeName.indexOf('<b>') + 3, props.record.visittypeName.indexOf('[m2]')).toUpperCase()}
                </Text>
            </View>

            <View style={[styles.reservation, { backgroundColor: props.record.isPayed != 0 ? "#37474f" : "#62727b" }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 5, paddingHorizontal: 20 }}>
                    <View style={{ width: '75%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={styles.text}>{props.record.firstName}</Text>
                            <Text style={styles.text}>{props.record.lastname}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.text}>Telefon:</Text>
                            <Text style={styles.text}>{props.record.phone}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View style={[styles.circle, { backgroundColor: props.record.isPayed != 0 ? '#4caf50' : '#3f51b5', }]}>
                            <Text style={styles.signature}>{props.record.isPayed != 0 ? 'J' : 'K'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
const CircleSize = 35;
const styles = StyleSheet.create(
    {
        hour: {
            backgroundColor: "#102027",
            justifyContent: "center",
            alignItems: "center",

        },
        reservation: {
            alignItems: "center",
            justifyContent: 'center',
        },
        outside: {
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 5,
            marginBottom: 15,
            overflow: "hidden",
            flex: 1,
            width: '100%'
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
            fontSize: 22,
        },
        circle: {
            backgroundColor: '#3f51b5',
            width: CircleSize,
            height: CircleSize,
            borderRadius: CircleSize,
            // position: 'absolute',
            // right: 10,
            // bottom: 10,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
)