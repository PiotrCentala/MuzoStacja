import React from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { color } from 'react-native-reanimated'
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
            <View style={{ flex: 1, justifyContent: 'center' }}>


                <View style={{ height: 400, justifyContent: 'space-around', alignItems: 'center', marginVertical: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>PRZYCHÓD</Text>
                        <Text style={styles.sub_title}>(W tym miesiącu)</Text>
                        <View style={{ flexDirection: "row", alignItems: 'flex-end', marginTop: 10 }}>
                            <Text style={styles.value}>{StatsData?.ThisMonth.Income}</Text>
                            <Text style={styles.appendix}>zł</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>ŚREDNIA</Text>
                        <Text style={styles.sub_title}>(od początku)</Text>
                        <View style={{ flexDirection: "row", alignItems: 'flex-end', marginTop: 10 }}>
                            <Text style={styles.value}>{StatsData?.Average.Income}</Text>
                            <Text style={styles.appendix}>zł</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>REKORD</Text>
                        <Text style={styles.sub_title}>(od początku)</Text>
                        <View style={{ flexDirection: "row", alignItems: 'flex-end', marginTop: 10 }}>
                            <Text style={[styles.value, { marginBottom: 0 }]}>{StatsData?.Record.Income}</Text>
                            <Text style={styles.appendix}>zł</Text>
                        </View>
                        <Text style={styles.month}>({StatsData?.Record.Month} {StatsData?.Record.Year})</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>PRZYCHÓD</Text>
                        <Text style={styles.sub_title}>(od początku)</Text>
                        <View style={{ flexDirection: "row", alignItems: 'flex-end', marginTop: 10 }}>
                            <Text style={styles.value}>{StatsData?.Totalt.Income}</Text>
                            <Text style={styles.appendix}>zł</Text>
                        </View>
                    </View>
                </View>
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
        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        fontSize: 25,
    },
    appendix: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        fontSize: 20,
        color: '#e65100',
        paddingBottom: 1,
        paddingLeft: 3,
    },
    month: {
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontStyle: 'italic',
        fontSize: 18,
    }
})