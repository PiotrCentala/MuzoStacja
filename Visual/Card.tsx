import React, { useEffect, useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native'
import { Record } from '../Api/weekDatabaseResponse'
import { giveRecordsForDay } from '../Logic/ParseWeekDatabaseResponse'

type CardParams =
    {
        record: Record,
    }
export const Card = (props: CardParams) => {



}