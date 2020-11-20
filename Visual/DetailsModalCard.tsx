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
                <Text style={[styles.text, { color: '#F5F5F6', fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto' }]}>
                    {props.record.visittypeName.substring(props.record.visittypeName.indexOf('<b>') + 3, props.record.visittypeName.indexOf('[m2]')).toUpperCase()}
                </Text>
            </View>
            {props.record.isPayed != 0 ?
                <View style={[styles.reservation, { backgroundColor: "#37474f" }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 10, paddingHorizontal: 30 }}>
                        <Text style={styles.text}>{props.record.firstName}</Text>
                        <Text style={styles.text}>{props.record.lastname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', padding: 10 }}>
                        <Text style={styles.text}>Tel: {props.record.phone}</Text>
                        <View style={[styles.circle, { backgroundColor: '#4caf50' }]}>
                            <Text style={styles.signature}>J</Text>
                        </View>
                    </View>
                </View>
                :

                <View style={[styles.reservation, { backgroundColor: "#62727b" }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={styles.text}>{props.record.firstName}</Text>
                        <Text style={styles.text}>{props.record.lastname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.text}>Tel: {props.record.phone}</Text>
                        <View style={styles.circle}>
                            <Text style={styles.signature}>K</Text>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

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
            fontSize: 15,
        },
        circle: {
            backgroundColor: '#3f51b5',
            width: 25,
            height: 25,
            borderRadius: 25,
            position: 'absolute',
            right: 3,
            bottom: 3,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
)