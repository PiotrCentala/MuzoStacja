import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native'
import { Record } from '../Api/GetDetails'
import { DetailsModalCard } from './DetailsModalCard'


type DetailsModalListParams =
    {
        records?: Record[],
    };
export const DetailsModalList = (params: DetailsModalListParams) => {

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={{ marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                    {params.records?.map((dataPoint) =>
                        (
                            <DetailsModalCard record={dataPoint} key={dataPoint.id} />
                        ))}
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },
})