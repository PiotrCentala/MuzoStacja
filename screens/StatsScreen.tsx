import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import MainStackParamList from './MainStackParamList'


type StatsNavigationProp = StackNavigationProp<MainStackParamList, "Stats">
type Props = {
    navigation: StatsNavigationProp,
}

const StatsScreen = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
        </View>
    );
}
export default StatsScreen