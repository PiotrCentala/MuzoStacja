import { weekData } from '../Logic/weekData'

type RootStackParamList = {
    Home: { date: string, loadRecords: boolean, records?: weekData[], displayedWeek: number };
    Login: undefined;
}

export default RootStackParamList;