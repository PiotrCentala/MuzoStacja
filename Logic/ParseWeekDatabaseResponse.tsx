import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'

export function filterOutEmpty(input: weekDatabaseResponse): weekDatabaseResponse {
    input.data = input.data?.filter((a) => { return (a.noOf > 0) })
    console.log(input.data?.length);
    return input;
}

export const giveRecordsForDay = (inputrecord: weekDatabaseResponse) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    let today = `${year}.${month}.${date}`
    inputrecord.data = inputrecord.data?.filter((a) => { return (a.start_date === today) })
    return inputrecord;
}