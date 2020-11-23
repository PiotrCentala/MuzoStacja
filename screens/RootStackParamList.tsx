import { weekData } from '../Logic/weekData'
import { NavigatorScreenParams } from '@react-navigation/native';
import MainStackParamList from './MainStackParamList';
type RootStackParamList = {
    Tabs: any,
    DetailsModal: { hour: string, date: string }
    Login: undefined,
    Modal: any,
    Main: undefined,
}

export default RootStackParamList;