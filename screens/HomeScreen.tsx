import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import RootStackParamList from './RootStackParamList';
import { getUsers } from '../Api/mock/GetData'
import { setToken } from '../Api/token'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">
type Props = {
    navigation: HomeNavigationProp,
}


class HomeScreen extends React.Component<Props, {}>{
    state = { users: [], hasLoadedUsers: false, userLoadingErrorMessage: '' }

    loadUsers() {
        getUsers()
            .then((res: any) =>
                this.setState({
                    hasLoadedUsers: true,
                    users: res.users,
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
                    hasLoadedUsers: false,
                    userLoadingErrorMessage: res.message,
                }
            );


        }
    }
    _unsubscribe = this.props.navigation.addListener(
        'focus', () => {
            if (!this.state.hasLoadedUsers) {
                this.loadUsers();
            }
        }
    );
    componentDidMount() {
        () => this._unsubscribe;
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    logOut = async () => {
        this.setState({ hasLoadedUsers: false, users: [] })
        await setToken('');
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", }}>
                <Text>Home Screen</Text>
                <Button title='Log out' onPress={this.logOut} />
                {this.state.users.map((user: any) => (
                    <Text key={user.email}>{user.email}</Text>
                ))}
            </View>
        )
    }
}
export default HomeScreen;