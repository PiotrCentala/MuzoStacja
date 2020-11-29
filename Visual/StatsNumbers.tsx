import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Stats } from '../Api/GetStats'
import { isIPhoneXSize } from '../Logic/IphoneVersion'
import { GetDatasetIncomeNumbers } from '../Logic/StatsLogic'
type NumbersScreenParams =
    {
        dataInput: Stats[]
    }
export const StatsNumbers = (props: NumbersScreenParams) => {

    const StatsData = GetDatasetIncomeNumbers(props.dataInput)
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <View style={styles.header}>
                <Text style={styles.text_header}>STATYSTYKI</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.title}>PRZYCHÓD</Text>
                <Text style={styles.sub_title}>(W tym miesiącu)</Text>
                <View style={{ flexDirection: "row", alignItems: 'flex-end', }}>
                    <Text style={styles.value}>{StatsData?.ThisMonth.Income}</Text>
                </View>
                <Text style={styles.title}>ŚREDNIA</Text>
                <Text style={styles.sub_title}>(ost. 12 miesięcy)</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.value}>{StatsData?.Average.Income}</Text>
                </View>
                <Text style={styles.title}>REKORD</Text>
                <Text style={styles.sub_title}>(ost. 12 miesięcy)</Text>
                <Text style={[styles.value, { marginBottom: 0 }]}>{StatsData?.Record.Income}</Text>
                <Text style={styles.month}>({StatsData?.Record.Month} {StatsData?.Record.Year})</Text>

                <Text style={styles.title}>PRZYCHÓD</Text>
                <Text style={styles.sub_title}>(od początku istniena)</Text>
                <Text style={styles.value}>{StatsData?.Totalt.Income}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: '#e65100',
        height: isIPhoneXSize() ? 100 : 70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5
    },
    text_header:
    {
        fontSize: 20,
        color: '#F5F5F6',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
    },
    title: {

        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        fontSize: 20,
        color: '#e65100',

    },
    sub_title: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontStyle: 'italic',
        fontSize: 12,
    },
    value: {
        marginTop: 5,
        marginBottom: 15,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        fontSize: 23,
    },
    appendix: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 18,
        color: '#e65100',
    },
    month: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
        marginBottom: 15,
    }
})