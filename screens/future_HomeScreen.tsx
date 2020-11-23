import React, { useState } from 'react'
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
//type HomeScreenRouteProp = RouteProp<MainStackParamList, "Home">
type Props = {
    navigation: HomeNavigationProp,
    // route: HomeScreenRouteProp,
}
export type State = {
    records?: weekData[],
    hasLoadedrecords?: boolean,
    RecordsErrorMessage?: '',
}

export type Date = {
    displayedDate: string,
    displayedWeek: number,
}

export const HomeScreen = (props: Props) => {


    const [state, setState] = useState({} as State)
    const [date, setDate] = useState({ displayedDate: Moment().format("YYYY.MM.DD"), displayedWeek: 0 } as Date)


    const loadRecordss = () => {
        getRecords(`GetSlotsInfoFromDate/${date.displayedWeek}/-1`)
            .then((res: weekData[]) =>
                setState({
                    hasLoadedrecords: true,
                    records: res,
                }),
            )
            .catch(handleUserLoadingError);
    }
    const handleUserLoadingError = (res: any) => {
        if (res.error === 401) {
            props.navigation.replace("Login");
        }
        else {
            setState(
                {
                    hasLoadedrecords: false,
                }
            );
        }
    }

    const _unsubscribe = props.navigation.addListener(
        'focus', () => {
            if (!state.hasLoadedrecords) {
                console.log("Udezamy w baze danych")
                loadRecordss();
            }

        }
    )


    props.navigation.setOptions({
        headerRight: () => (
            <Button onPress={logOut} style={{ marginRight: 5 }} buttonStyle={{ backgroundColor: 'rba(0,0,0,0)' }} icon={
                <Icon
                    name="login-variant"
                    color="white"
                    size={25}
                />
            } />
        ),
        headerLeft: () => (
            <Button onPress={() => props.navigation.replace('Home', { date: Moment().format("YYYY.MM.DD"), loadRecords: true, displayedWeek: 0 })} style={{ marginLeft: 5 }} buttonStyle={{ backgroundColor: 'rba(0,0,0,0)' }} icon={
                <Icon
                    name="reload"
                    color="white"
                    size={25}
                />
            } />
        ),
        headerTitle: a => <HomeTitle {...a} day={date.displayedDate} />,

    });



    const logOut = async () => {
        setState({ hasLoadedrecords: false, records: undefined })
        await setToken('');
        props.navigation.replace('Login');
    }

    return (
        <DayRecords setDate={setDate} setState={setState} loadRecords={loadRecordss} records={state.records} date={date.displayedDate} navigation={props.navigation} currentDisplayedWeek={date.displayedWeek}></DayRecords>
    )
}
export default HomeScreen;