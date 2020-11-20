import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Platform, TouchableWithoutFeedback } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import Moment from 'moment'
import RootStackParamList from './RootStackParamList'
import { RouteProp } from '@react-navigation/native'
import { detailsFromDatabase, getDetails } from '../Api/GetDetails'
import { DetailsModalHeader } from '../Visual/DetailsModalHeader'
import { HomeTitle } from '../Visual/HomeTitle'
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
        this.props.navigation.setOptions({
            headerTitle: props => <DetailsModalHeader {...props} day={this.props.route.params.date} hour={this.props.route.params.hour} />,
            headerLeft: () => null
        })
    }
    componentWillUnmount() {
        this._unsubscribe();
        this.props.navigation.setOptions({});
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
const styles = StyleSheet.create({
    hour: {
        fontSize: 24,
        color: '#F5F5F6',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica-Bold' : 'Roboto',
        marginRight: 10,
    }
})

export default DetailsModalScreen;