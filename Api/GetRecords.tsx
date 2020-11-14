import { get } from './fetch'

export const getRecords = async (week: string = 'GetSlotsInfoFromDate/0/-1') => {
    return get(week);

}