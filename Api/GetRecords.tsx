import { get } from './fetch'
import { CreateWeekData } from '../Logic/weekData'
export const getRecords = async (week: string = 'GetSlotsInfoFromDate/0/-1') => {
    const temp = await get(week);
    return CreateWeekData(temp);



}