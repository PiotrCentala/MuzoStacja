import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { weekData, giveRecordsForDay } from '../Logic/weekData'


type DayRecordsParams = {
    records: weekData[],
    date: number,
}

export const DayRecords = (params: DayRecordsParams) => {
    const records = giveRecordsForDay(params.records, params.date)
    const [Color, setColor] = useState('#D6FFD2');
    return (
        <ScrollView style={styles.container} >
            <View style={{ marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>


                {records?.map((record) =>
                    (
                        <View key={record.id}>

                            <View style={[styles.card, { backgroundColor: SetColor(record.noofPass as number) }]}>
                                <Text >Godzina: {record.hour}:00, Karnet: {record.noofPass}, Opłacone: {record.noofPayed}</Text>
                            </View>
                        </View>
                    ))}
            </View>
        </ScrollView>
    );
}
function SetColor(input: number) {
    if (input > 0)
        return '#D6FFD2'
    else
        return '#D2E3FF'
}


const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
    input: {
        height: 80,
        width: 300,
        margin: 10,
    },
    card: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 300,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 3,
        padding: 10,
        shadowColor: 'black',
        shadowRadius: 33.0,
        shadowOpacity: 0.2,
    }
});