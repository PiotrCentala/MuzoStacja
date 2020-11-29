import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
import MainStackParamList from './MainStackParamList'
import TabStackParamsList from './TabStackParamsList'
import { getStats, Stats } from '../Api/GetStats'
import { BarChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";
import { StatsNumbers } from '../Visual/StatsNumbers'



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




        // const dataset = {
        //     labels: StatsData.map((a) => a.Month).reverse(),
        //     datasets: [
        //         {
        //             data: StatsData.map((a) => a.Income).reverse(),
        //         }
        //     ]
        // };
        // const chartConfig = {
        //     backgroundGradientFrom: "lightgray",
        //     data: dataset.datasets,
        //     backgroundGradientFromOpacity: 0,
        //     backgroundGradientTo: "lightgray",
        //     backgroundGradientToOpacity: 0,
        //     color: () => `#e65100`,
        //     strokeWidth: 3, // optional, default 3
        //     barPercentage: 0.5,
        //     //barRadius: 2,
        //     useShadowColorFromDataset: false // optional
        // };
        // const graphStyle = {
        //     marginVertical: 8,
        // }
        // const screenWidth = Dimensions.get("window").width;

        return (
            <StatsNumbers dataInput={this.state.StatsFromDatabse} />
        );
    }
}


export default StatsScreen