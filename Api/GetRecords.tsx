import { get } from './fetch'
import { CreateWeekData } from '../Logic/weekData'
import { filterOutEmpty } from '../Logic/ParseWeekDatabaseResponse'
export const getRecords = async (week: string = 'GetSlotsInfoFromDate/0/-1') => {
    const temp = await get(week);
    const temp_no_empty = filterOutEmpty(temp)
    return CreateWeekData(temp_no_empty);



}