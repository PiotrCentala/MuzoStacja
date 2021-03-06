import React from 'react'
import { Button } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import { getRecords } from '../Api/GetRecords'
import { setToken } from '../Api/token'
import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'
import { DayRecords } from '../Visual/DayRecords'
import { CreateWeekData, weekData } from '../Logic/weekData'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RouteProp } from '@react-navigation/native'
import { HomeTitle } from '../Visual/HomeTitle'
import Moment from 'moment'
import MainStackParamList from './MainStackParamList';

type HomeNavigationProp = StackNavigationProp<MainStackParamList, "Home">
type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">
type Props = {
    navigation: HomeNavigationProp,
    route: HomeScreenRouteProp,
}
type State = {
    records?: weekData[],
    hasLoadedrecords?: boolean,
    RecordsErrorMessage?: '',
}

class HomeScreen extends React.Component<Props, State>{
    state: State = { hasLoadedrecords: !this.props.route.params.loadRecords };

    loadRecordss() {
        getRecords(`GetSlotsInfoFromDate/${this.props.route.params.displayedWeek}/-1`)
            .then((res: weekData[]) =>
                this.setState({
                    hasLoadedrecords: true,
                    records: res,
                }),
            )
            .catch(this.handleUserLoadingError);
    }
    handleUserLoadingError = (res: any) => {
        if (res.error === 401) {
            this.props.navigation.replace("Login");
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
                console.log("Udezamy w baze danych")
                this.loadRecordss();
            }

        }
    )
    componentDidMount() {
        () => this._unsubscribe;

        this.props.navigation.setOptions({
            headerRight: () => (
                <Button onPress={this.logOut} style={{ marginRight: 5 }} buttonStyle={{ backgroundColor: 'rba(0,0,0,0)' }} icon={
                    <Icon
                        name="login-variant"
                        color="white"
                        size={25}
                    />
                } />
            ),
            headerLeft: () => (
                <Button onPress={() => this.props.navigation.replace('Home', { date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 })} style={{ marginLeft: 5 }} buttonStyle={{ backgroundColor: 'rba(0,0,0,0)' }} icon={
                    <Icon
                        name="reload"
                        color="white"
                        size={25}
                    />
                } />
            ),
            headerTitle: props => <HomeTitle {...props} day={this.props.route.params.date} />,

        });

    }
    componentWillUnmount() {
        this._unsubscribe();
        this.props.navigation.setOptions({});
    }
    logOut = async () => {
        this.setState({ hasLoadedrecords: false, records: undefined })
        await setToken('');
        this.props.navigation.replace('Login');
    }


    render() {
        var data = this.props.route.params.records;
        if (this.props.route.params.records == undefined)
            data = this.state.records;
        return (
            <DayRecords records={data} date={this.props.route.params.date} navigation={this.props.navigation} currentDisplayedWeek={this.props.route.params.displayedWeek}></DayRecords>
        )
    }
}
export default HomeScreen;