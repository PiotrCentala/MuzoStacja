import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { View, Text } from 'react-native'
import MainStackParamList from './MainStackParamList'
import TabStackParamsList from './TabStackParamsList'
import { getStats, Stats } from '../Api/GetStats'

type StatsNavigationProp = StackNavigationProp<TabStackParamsList, "Stats">
type StatsRouteProp = RouteProp<TabStackParamsList, 'Stats'>
type Props = {
    navigation: StatsNavigationProp,
    route: StatsRouteProp,
}
type State = {
    StatsFromDatabse: Stats[],
    hasLoadedrecords: boolean,
}
class StatsScreen extends React.Component<Props, State> {
    state: State = { StatsFromDatabse: [], hasLoadedrecords: false }
    loadStats() {
        getStats().then((res) => {
            this.setState({
                hasLoadedrecords: true,
                StatsFromDatabse: res.data,
            });
            console.log('Database Hit from Stats')
        }).catch(this.handleUserLoadingError);
    }

    handleUserLoadingError = (res: any) => {
        console.log(res.error);
    }


    _unsubscribe = this.props.navigation.addListener(
        'focus', () => {
            if (!this.state.hasLoadedrecords) {
                this.loadStats();
            }

        }
    )


    componentDidMount() {
        () => this._unsubscribe;
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.state.StatsFromDatabse.filter((a) => a.year == '2020').map((month) => (
                    <Text key={month.month}>{month.total}</Text>
                ))}
            </View>
        );
    }
}
export default StatsScreen