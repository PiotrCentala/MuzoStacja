import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Moment from 'moment'
import RootStackParamList from './RootStackParamList'
import { RouteProp } from '@react-navigation/native'
import { detailsFromDatabase, getDetails } from '../Api/GetDetails'
type ModalNavigationProp = StackNavigationProp<RootStackParamList, "DetailsModal">
type ModalRouteProp = RouteProp<RootStackParamList, "DetailsModal">
type Props = {
    navigation: ModalNavigationProp,
    route: ModalRouteProp,
}
type State = {
    data?: detailsFromDatabase
}
class DetailsModalScreen extends React.Component<Props, State> {
    state: State = {};

    loadData() {
        getDetails(`bookingsForHour_2/${this.props.route.params.hour}/0/${this.props.route.params.date}`)
            .then((res) => {
                this.setState(
                    {
                        data: res,
                    }
                )
            })
            .catch(this.handleUserLoadingError)
    }
    handleUserLoadingError = (res: any) => {
        if (res.error === 401) {
            this.props.navigation.replace('Main');
        }
        else {
            console.log('ERROR:' + res.error);
        }
    }

    _unsubscribe = this.props.navigation.addListener(
        'focus', () => {
            console.log("MODAL: Udezamy w baze danych")
            this.loadData();
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.data?.data.map((dataPoint) =>
                    (
                        <View key={dataPoint.id} style={{ padding: 10 }}>
                            <Text>{dataPoint.firstName}</Text>
                            <Text>{dataPoint.lastname}</Text>
                            <Text>{dataPoint.phone}</Text>
                            <Text>{dataPoint.visittypeName}</Text>
                        </View>
                    )
                )}
            </View>
        )
    }
}
export default DetailsModalScreen;