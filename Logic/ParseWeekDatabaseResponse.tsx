import { weekDatabaseResponse } from '../Api/weekDatabaseResponse'

export function filterOutEmpty(input: weekDatabaseResponse): weekDatabaseResponse {
    input.data = input.data?.filter((a) => { return ((a.noOf > 0) && (a.isPayed > 0)) })
    console.log(input.data?.length);
    return input;
}

