import { weekData } from '../Logic/weekData'
import RootStackParamList from './RootStackParamList'

type MainStackParamList = RootStackParamList & {
    Home: { date: string, loadRecords: boolean, records?: weekData[], displayedWeek: number };
    Login: undefined;
}

export default MainStackParamList;