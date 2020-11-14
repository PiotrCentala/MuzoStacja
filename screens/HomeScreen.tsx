import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import { getRecords } from '../Api/GetRecords'
import { setToken } from '../Api/token'
import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'
import { filterOutEmpty, giveRecordsForDay } from '../Logic/ParseWeekDatabaseResponse'

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">
type Props = {
    navigation: HomeNavigationProp,
}
type State = {
    records: weekDatabaseResponse,
    hasLoadedrecords?: boolean,
    RecordsErrorMessage?: '',
}

class HomeScreen extends React.Component<Props, State>{
    state: State = { records: {} };

    loadRecordss() {
        getRecords()
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
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    logOut = async () => {
        this.setState({ hasLoadedrecords: false, records: {} })
        await setToken('');
        this.props.navigation.navigate('Login');
    }

    render() {
        const records: weekDatabaseResponse = giveRecordsForDay(this.state.records);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", }}>
                <Text>Home Screen</Text>
                <Button title='Log out' onPress={this.logOut} />
                <Text>{records.message}</Text>
                {records.data?.map((record) => (
                    <Text key={record.startTime.toString()}>{record.start_hour}:00 {record.noOf}</Text>
                ))}
            </View>
        )
    }
}
export default HomeScreen;