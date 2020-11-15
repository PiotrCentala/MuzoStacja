import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import { getRecords } from '../Api/GetRecords'
import { setToken } from '../Api/token'
import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'
import { filterOutEmpty, giveRecordsForDay } from '../Logic/ParseWeekDatabaseResponse'
import { DayRecords } from '../Visual/DayRecords'
import { CreateWeekData, weekData } from '../Logic/weekData'


type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">
type Props = {
    navigation: HomeNavigationProp,
}
type State = {
    records?: weekDatabaseResponse,
    hasLoadedrecords?: boolean,
    RecordsErrorMessage?: '',
}

class HomeScreen extends React.Component<Props, State>{
    state: State = {};

    loadRecordss() {
        getRecords('GetSlotsInfoFromDate/-1/-1')
            .then((res: weekDatabaseResponse) =>
                this.setState({
                    hasLoadedrecords: true,
                    records: filterOutEmpty(res),
                }),
            )
            .catch(this.handleUserLoadingError);
    }
    handleUserLoadingError = (res: any) => {
        if (res.error === 401) {
            this.props.navigation.navigate("Login");
        }
        else {
            this.setState(
                {
                    hasLoadedrecords: false,
                }
            );


        }
    }
    _unsubscribe = this.props.navigation.addListener(
        'focus', () => {
            if (!this.state.hasLoadedrecords) {
                this.loadRecordss();
            }

        }
    )
    componentDidMount() {
        () => this._unsubscribe;

        this.props.navigation.setOptions({
            headerRight: () => (
                <Button onPress={this.logOut} title="Wyloguj" />
            ),
        });

    }
    componentWillUnmount() {
        this._unsubscribe();
        this.props.navigation.setOptions({});
    }
    logOut = async () => {
        this.setState({ hasLoadedrecords: false, records: undefined })
        await setToken('');
        this.props.navigation.navigate('Login');
    }

    render() {

        const data = CreateWeekData(this.state.records as weekDatabaseResponse);
        return (
            <DayRecords records={data} date={-5}></DayRecords>
        )
    }
}
export default HomeScreen;